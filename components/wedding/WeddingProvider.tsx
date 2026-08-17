"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

/* =========================================================
   TYPES
========================================================= */

type WeddingContextType = {
  invitationOpened: boolean;
  isPlaying: boolean;

  openInvitation: () => Promise<void>;
  toggleMusic: () => Promise<void>;
  playMusic: () => Promise<void>;
  pauseMusic: () => void;
};

/* =========================================================
   CONTEXT
========================================================= */

const WeddingContext =
  createContext<WeddingContextType | null>(
    null,
  );

/* =========================================================
   AUDIO SETTINGS
========================================================= */

const TARGET_VOLUME = 0.38;

/*
 * Fade vừa đủ mềm.
 * Không cần kéo quá lâu vì mobile sẽ phải
 * cập nhật audio.volume liên tục.
 */
const FADE_IN_DURATION = 750;
const FADE_OUT_DURATION = 450;

/* =========================================================
   PROVIDER
========================================================= */

export function WeddingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef =
    useRef<HTMLAudioElement | null>(
      null,
    );

  /*
   * Dùng requestAnimationFrame thay cho setInterval.
   *
   * Khi tab inactive browser tự throttle,
   * dễ cleanup hơn và tránh nhiều timer chạy cùng lúc.
   */
  const animationFrameRef =
    useRef<number | null>(
      null,
    );

  const [
    invitationOpened,
    setInvitationOpened,
  ] = useState(false);

  const [
    isPlaying,
    setIsPlaying,
  ] = useState(false);

  /* =====================================================
      CANCEL AUDIO FADE
  ===================================================== */

  const cancelFade =
    useCallback(() => {
      if (
        animationFrameRef.current !==
        null
      ) {
        cancelAnimationFrame(
          animationFrameRef.current,
        );

        animationFrameRef.current =
          null;
      }
    }, []);

  /* =====================================================
      FADE VOLUME

      Dùng chung cho fade-in / fade-out.
  ===================================================== */

  const fadeVolume =
    useCallback(
      (
        from: number,
        to: number,
        duration: number,
        onComplete?: () => void,
      ) => {
        const audio =
          audioRef.current;

        if (!audio) {
          return;
        }

        cancelFade();

        const startTime =
          performance.now();

        /*
         * Không cần update volume đúng 60fps.
         * Nhưng requestAnimationFrame giúp animation
         * chạy theo scheduler của browser.
         */
        const step = (
          currentTime: number,
        ) => {
          const currentAudio =
            audioRef.current;

          if (!currentAudio) {
            cancelFade();
            return;
          }

          const elapsed =
            currentTime -
            startTime;

          const progress =
            Math.min(
              elapsed /
                duration,
              1,
            );

          /*
           * easeOutCubic
           *
           * Fade đầu nhanh nhẹ,
           * cuối mềm.
           */
          const eased =
            1 -
            Math.pow(
              1 -
                progress,
              3,
            );

          const nextVolume =
            from +
            (to - from) *
              eased;

          currentAudio.volume =
            Math.max(
              0,
              Math.min(
                1,
                nextVolume,
              ),
            );

          if (
            progress <
            1
          ) {
            animationFrameRef.current =
              requestAnimationFrame(
                step,
              );

            return;
          }

          currentAudio.volume =
            to;

          animationFrameRef.current =
            null;

          onComplete?.();
        };

        animationFrameRef.current =
          requestAnimationFrame(
            step,
          );
      },
      [
        cancelFade,
      ],
    );

  /* =====================================================
      PLAY MUSIC
  ===================================================== */

  const playMusic =
    useCallback(async () => {
      const audio =
        audioRef.current;

      if (!audio) {
        return;
      }

      cancelFade();

      /*
       * Nếu đang phát thì không gọi play() lại.
       */
      if (!audio.paused) {
        setIsPlaying(true);

        if (
          audio.volume <
          TARGET_VOLUME
        ) {
          fadeVolume(
            audio.volume,
            TARGET_VOLUME,
            400,
          );
        }

        return;
      }

      try {
        /*
         * Bắt đầu ở volume 0.
         *
         * Quan trọng:
         * audio.play() được gọi ngay,
         * không chạy qua timeout.
         *
         * Điều này giúp iOS vẫn nhận đây là
         * hành động bắt nguồn từ user click.
         */
        audio.volume = 0;

        await audio.play();

        /*
         * onPlay cũng cập nhật state,
         * nhưng set ở đây giúp UI phản hồi ngay.
         */
        setIsPlaying(
          true,
        );

        fadeVolume(
          0,
          TARGET_VOLUME,
          FADE_IN_DURATION,
        );
      } catch (error) {
        /*
         * Không throw ngược ra OpenSection.
         *
         * Nếu browser chặn autoplay,
         * animation mở thiệp vẫn phải tiếp tục.
         */
        console.warn(
          "Không thể phát nhạc:",
          error,
        );

        setIsPlaying(
          false,
        );
      }
    }, [
      cancelFade,
      fadeVolume,
    ]);

  /* =====================================================
      PAUSE MUSIC
  ===================================================== */

  const pauseMusic =
    useCallback(() => {
      const audio =
        audioRef.current;

      if (!audio) {
        return;
      }

      cancelFade();

      if (audio.paused) {
        setIsPlaying(
          false,
        );

        return;
      }

      const currentVolume =
        audio.volume;

      fadeVolume(
        currentVolume,
        0,
        FADE_OUT_DURATION,
        () => {
          const currentAudio =
            audioRef.current;

          if (
            !currentAudio
          ) {
            return;
          }

          currentAudio.pause();

          /*
           * Chuẩn bị volume cho lần play sau.
           */
          currentAudio.volume =
            TARGET_VOLUME;

          setIsPlaying(
            false,
          );
        },
      );
    }, [
      cancelFade,
      fadeVolume,
    ]);

  /* =====================================================
      TOGGLE MUSIC
  ===================================================== */

  const toggleMusic =
    useCallback(async () => {
      const audio =
        audioRef.current;

      if (!audio) {
        return;
      }

      if (audio.paused) {
        await playMusic();

        return;
      }

      pauseMusic();
    }, [
      pauseMusic,
      playMusic,
    ]);

  /* =====================================================
      OPEN INVITATION
  ===================================================== */

  const openInvitation =
    useCallback(async () => {
      /*
       * State này chỉ đánh dấu:
       * thiệp đã được người dùng mở.
       */
      setInvitationOpened(
        true,
      );

      /*
       * playMusic bắt đầu ngay trong user gesture.
       *
       * OpenSection hiện tại gọi:
       *
       * void openInvitation();
       *
       * nên Promise này KHÔNG chặn animation.
       */
      await playMusic();
    }, [
      playMusic,
    ]);

  /* =====================================================
      CLEANUP

      Rất quan trọng khi Next.js remount component
      trong development hoặc route thay đổi.
  ===================================================== */

  useEffect(() => {
    return () => {
      cancelFade();

      const audio =
        audioRef.current;

      if (audio) {
        audio.pause();
      }
    };
  }, [
    cancelFade,
  ]);

  /* =====================================================
      PAGE VISIBILITY

      Không tự pause nhạc khi đổi tab.
      Chỉ đảm bảo animation fade cũ không treo.
  ===================================================== */

  useEffect(() => {
    function handleVisibilityChange() {
      if (
        document.visibilityState ===
        "hidden"
      ) {
        cancelFade();
      }
    }

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange,
    );

    return () => {
      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange,
      );
    };
  }, [
    cancelFade,
  ]);

  return (
    <WeddingContext.Provider
      value={{
        invitationOpened,
        isPlaying,

        openInvitation,
        toggleMusic,
        playMusic,
        pauseMusic,
      }}
    >
      {children}

      {/* =================================================
          BACKGROUND MUSIC

          QUAN TRỌNG CHO MOBILE:

          preload="none"

          Không tải cả file audio ngay khi mở website.

          Chỉ bắt đầu tải khi người dùng bấm
          "Mở câu chuyện".
      ================================================= */}

      <audio
        ref={audioRef}
        preload="none"
        loop
        playsInline
        onPlay={() => {
          setIsPlaying(
            true,
          );
        }}
        onPause={() => {
          setIsPlaying(
            false,
          );
        }}
        onEnded={() => {
          setIsPlaying(
            false,
          );
        }}
      >
        <source
          src="/music/wedding.mp4"
          type="audio/mp4"
        />
      </audio>
    </WeddingContext.Provider>
  );
}

/* =========================================================
   CUSTOM HOOK
========================================================= */

export function useWedding() {
  const context =
    useContext(
      WeddingContext,
    );

  if (!context) {
    throw new Error(
      "useWedding phải được sử dụng bên trong WeddingProvider",
    );
  }

  return context;
}