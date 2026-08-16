"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";

type WeddingContextType = {
  invitationOpened: boolean;
  isPlaying: boolean;

  openInvitation: () => Promise<void>;
  toggleMusic: () => Promise<void>;
  playMusic: () => Promise<void>;
  pauseMusic: () => void;
};

const WeddingContext =
  createContext<WeddingContextType | null>(
    null,
  );

export function WeddingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const audioRef =
    useRef<HTMLAudioElement | null>(
      null,
    );

  const fadeTimerRef =
    useRef<ReturnType<
      typeof setInterval
    > | null>(null);

  const [
    invitationOpened,
    setInvitationOpened,
  ] = useState(false);

  const [
    isPlaying,
    setIsPlaying,
  ] = useState(false);

  /* =========================================
      CLEAR TIMER
  ========================================= */

  const clearFadeTimer =
    useCallback(() => {
      if (fadeTimerRef.current) {
        clearInterval(
          fadeTimerRef.current,
        );

        fadeTimerRef.current =
          null;
      }
    }, []);

  /* =========================================
      PLAY MUSIC
  ========================================= */

  const playMusic =
    useCallback(async () => {
      const audio =
        audioRef.current;

      if (!audio) return;

      clearFadeTimer();

      if (!audio.paused) {
        setIsPlaying(true);
        return;
      }

      try {
        audio.volume = 0;

        await audio.play();

        setIsPlaying(true);

        let volume = 0;

        fadeTimerRef.current =
          setInterval(() => {
            const currentAudio =
              audioRef.current;

            if (!currentAudio) {
              clearFadeTimer();
              return;
            }

            volume += 0.025;

            if (volume >= 0.4) {
              currentAudio.volume =
                0.4;

              clearFadeTimer();

              return;
            }

            currentAudio.volume =
              volume;
          }, 50);
      } catch (error) {
        console.warn(
          "Không thể phát nhạc:",
          error,
        );

        setIsPlaying(false);
      }
    }, [clearFadeTimer]);

  /* =========================================
      PAUSE MUSIC
  ========================================= */

  const pauseMusic =
    useCallback(() => {
      const audio =
        audioRef.current;

      if (!audio) return;

      clearFadeTimer();

      if (audio.paused) {
        setIsPlaying(false);
        return;
      }

      let volume =
        audio.volume;

      fadeTimerRef.current =
        setInterval(() => {
          const currentAudio =
            audioRef.current;

          if (!currentAudio) {
            clearFadeTimer();
            return;
          }

          volume -= 0.04;

          if (volume <= 0) {
            currentAudio.volume =
              0;

            currentAudio.pause();

            setIsPlaying(false);

            clearFadeTimer();

            return;
          }

          currentAudio.volume =
            volume;
        }, 40);
    }, [clearFadeTimer]);

  /* =========================================
      TOGGLE MUSIC
  ========================================= */

  const toggleMusic =
    useCallback(async () => {
      const audio =
        audioRef.current;

      if (!audio) return;

      if (audio.paused) {
        await playMusic();
      } else {
        pauseMusic();
      }
    }, [
      playMusic,
      pauseMusic,
    ]);

  /* =========================================
      OPEN INVITATION
  ========================================= */

  const openInvitation =
    useCallback(async () => {
      setInvitationOpened(true);

      await playMusic();
    }, [playMusic]);

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

      {/* =====================================
          NHẠC NỀN
      ===================================== */}

      <audio
        ref={audioRef}
        preload="auto"
        loop
        playsInline
        onPlay={() =>
          setIsPlaying(true)
        }
        onPause={() =>
          setIsPlaying(false)
        }
      >
        <source
          src="/music/wedding.mp4"
          type="audio/mp4"
        />
      </audio>
    </WeddingContext.Provider>
  );
}

/* =========================================
    CUSTOM HOOK
========================================= */

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