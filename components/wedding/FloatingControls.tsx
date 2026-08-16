"use client";

import {
  ArrowUp,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  useEffect,
  useState,
} from "react";

import {
  useWedding,
} from "@/components/wedding/WeddingProvider";

export default function FloatingControls() {
  const {
    invitationOpened,
    isPlaying,
    toggleMusic,
  } = useWedding();

  const [
    showBackTop,
    setShowBackTop,
  ] = useState(false);

  /* ==========================================
      SHOW BACK TOP
  ========================================== */

  useEffect(() => {
    function handleScroll() {
      setShowBackTop(
        window.scrollY > 500,
      );
    }

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  /* ==========================================
      BACK TO TOP
  ========================================== */

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  /*
   * Chưa mở thiệp
   * => không hiện nút nào.
   */
  if (!invitationOpened) {
    return null;
  }

  return (
    <div
      className="
        fixed

        bottom-5
        right-4

        z-[300]

        flex
        flex-col

        items-center

        gap-3

        sm:bottom-7
        sm:right-6
      "
    >
      {/* ==========================================
          BACK TO TOP
      ========================================== */}

      <AnimatePresence>
        {showBackTop && (
          <motion.button
            type="button"
            initial={{
              opacity: 0,
              y: 12,
              scale: 0.88,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.88,
            }}
            transition={{
              duration: 0.35,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            whileHover={{
              y: -3,
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.94,
            }}
            onClick={backToTop}
            aria-label="Về đầu trang"
            title="Về đầu trang"
            className="
              group
              relative

              flex

              h-11
              w-11

              items-center
              justify-center

              overflow-visible

              rounded-full

              border
              border-[#b98b7b]/25

              bg-[#fffaf7]/90

              text-[#8f6257]

              shadow-[0_10px_35px_rgba(101,67,57,0.12)]

              backdrop-blur-xl

              transition-all
              duration-500

              hover:-translate-y-1

              sm:h-12
              sm:w-12
            "
          >
            {/* INNER RING */}

            <span
              className="
                pointer-events-none

                absolute
                inset-[4px]

                rounded-full

                border
                border-[#b88b7b]/10

                transition-all
                duration-300

                group-hover:border-[#b88b7b]/20
              "
            />

            {/* SOFT LIGHT */}

            <span
              className="
                pointer-events-none

                absolute

                h-8
                w-8

                rounded-full

                bg-[#ecc7ba]/20

                blur-lg

                transition-transform
                duration-500

                group-hover:scale-150
              "
            />

            {/* ICON */}

            <ArrowUp
              size={18}
              strokeWidth={1.5}
              className="
                relative
                z-10

                transition-transform
                duration-300

                group-hover:-translate-y-[2px]
              "
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ==========================================
          MUSIC BUTTON
      ========================================== */}

      <motion.button
        type="button"
        onClick={() =>
          void toggleMusic()
        }
        whileHover={{
          y: -3,
          scale: 1.04,
        }}
        whileTap={{
          scale: 0.94,
        }}
        aria-label={
          isPlaying
            ? "Tắt nhạc"
            : "Bật nhạc"
        }
        title={
          isPlaying
            ? "Tắt nhạc"
            : "Bật nhạc"
        }
        className={`
          group

          relative

          flex

          h-12
          w-12

          items-center
          justify-center

          overflow-visible

          rounded-full

          border

          shadow-[0_10px_35px_rgba(101,67,57,0.12)]

          backdrop-blur-xl

          transition-all
          duration-500

          sm:h-13
          sm:w-13

          ${
            isPlaying
              ? `
                  border-[#b77969]/35
                  bg-[#fff4ef]/90
                  text-[#a86f62]
                  shadow-[0_12px_38px_rgba(170,105,90,0.16)]
                `
              : `
                  border-[#b98b7b]/25
                  bg-[#fffaf7]/90
                  text-[#8f6257]
                `
          }
        `}
      >
        {/* ======================================
            ACTIVE GLOW
        ====================================== */}

        {isPlaying && (
          <>
            <motion.span
              animate={{
                scale: [
                  1,
                  1.45,
                ],
                opacity: [
                  0.28,
                  0,
                ],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="
                pointer-events-none

                absolute
                inset-0

                rounded-full

                border
                border-[#c99586]/30
              "
            />

            <motion.span
              animate={{
                scale: [
                  1,
                  1.65,
                ],
                opacity: [
                  0.16,
                  0,
                ],
              }}
              transition={{
                duration: 2.4,
                delay: 0.7,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="
                pointer-events-none

                absolute
                inset-0

                rounded-full

                border
                border-[#c99586]/20
              "
            />
          </>
        )}

        {/* ======================================
            INNER RING
        ====================================== */}

        <span
          className="
            pointer-events-none

            absolute
            inset-[4px]

            rounded-full

            border
            border-[#b88b7b]/10

            transition-all
            duration-300

            group-hover:border-[#b88b7b]/20
          "
        />

        {/* ======================================
            SOFT LIGHT
        ====================================== */}

        <span
          className="
            pointer-events-none

            absolute

            h-8
            w-8

            rounded-full

            bg-[#ecc7ba]/20

            blur-lg

            transition-transform
            duration-500

            group-hover:scale-150
          "
        />

        {/* ======================================
            ICON
        ====================================== */}

        <span
          className="
            relative
            z-10

            flex

            h-full
            w-full

            items-center
            justify-center
          "
        >
          {isPlaying ? (
            /* ==========================
                MUSIC EQUALIZER
            ========================== */

            <span
              className="
                flex

                h-5

                items-end
                justify-center

                gap-[3px]
              "
            >
              <motion.i
                animate={{
                  height: [
                    6,
                    14,
                    8,
                    16,
                    6,
                  ],
                }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  block
                  w-[2px]

                  rounded-full

                  bg-current
                "
              />

              <motion.i
                animate={{
                  height: [
                    15,
                    8,
                    17,
                    10,
                    15,
                  ],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.08,
                }}
                className="
                  block
                  w-[2px]

                  rounded-full

                  bg-current
                "
              />

              <motion.i
                animate={{
                  height: [
                    9,
                    17,
                    7,
                    13,
                    9,
                  ],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.15,
                }}
                className="
                  block
                  w-[2px]

                  rounded-full

                  bg-current
                "
              />

              <motion.i
                animate={{
                  height: [
                    17,
                    9,
                    14,
                    6,
                    17,
                  ],
                }}
                transition={{
                  duration: 0.85,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="
                  block
                  w-[2px]

                  rounded-full

                  bg-current
                "
              />
            </span>
          ) : (
            /* ==========================
                MUSIC NOTE
            ========================== */

            <span
              className="
                font-editorial

                -mt-[1px]

                text-[22px]
                font-light

                leading-none

                transition-transform
                duration-300

                group-hover:rotate-[-8deg]
                group-hover:scale-110
              "
            >
              ♪
            </span>
          )}
        </span>

        {/* ======================================
            ACTIVE DOT
        ====================================== */}

        {isPlaying && (
          <motion.span
            animate={{
              opacity: [
                0.65,
                1,
                0.65,
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute

              right-[2px]
              top-[2px]

              h-[7px]
              w-[7px]

              rounded-full

              border
              border-[#fffaf7]

              bg-[#ba796b]

              shadow-[0_0_8px_rgba(186,121,107,0.5)]
            "
          />
        )}
      </motion.button>
    </div>
  );
}