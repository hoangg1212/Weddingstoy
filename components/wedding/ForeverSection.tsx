"use client";

import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  useRef,
} from "react";

import {
  wedding,
} from "@/data/wedding";

import HeartLayer from "./HeartLayer";

export default function ForeverSection() {
  const sectionRef =
    useRef<HTMLElement>(null);

  /* =====================================================
      SCROLL
  ===================================================== */

  const {
    scrollYProgress,
  } = useScroll({
    target:
      sectionRef,

    offset: [
      "start end",
      "end start",
    ],
  });

  /* =====================================================
      IMAGE

      Chỉ di chuyển layer ảnh overscan,
      không di chuyển toàn bộ khung.
  ===================================================== */

  const imageScale =
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [1.05, 1, 1.06],
    );

  const imageY =
    useTransform(
      scrollYProgress,
      [0, 1],
      ["-2.5%", "2.5%"],
    );

  /* =====================================================
      CONTENT
  ===================================================== */

  const contentY =
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      [24, 0, -20],
    );

  const contentOpacity =
    useTransform(
      scrollYProgress,
      [0, 0.16, 0.82, 1],
      [0, 1, 1, 0.72],
    );

  return (
    <section
      ref={sectionRef}
      id="forever"
      className="
        relative

        -mt-px

        min-h-[100svh]

        overflow-hidden

        bg-wedding

        md:min-h-dvh
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          z-0

          overflow-hidden
        "
      >
        {/* =============================================
            OVERSCAN

            Ảnh lớn hơn viewport để parallax không
            tạo khoảng trống ở trên hoặc dưới.
        ============================================= */}

        <motion.div
          style={{
            scale:
              imageScale,

            y:
              imageY,
          }}
          className="
            absolute

            -inset-y-[8%]
            inset-x-0
          "
        >
          <Image
            src={
              wedding.forever.image
            }
            alt={
              wedding.forever
                .imageAlt
            }
            fill
            sizes="100vw"
            className="
              object-cover
              object-center
            "
          />
        </motion.div>
      </div>

      {/* =====================================================
          CINEMATIC OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-[1]

          bg-gradient-to-b

          from-black/[0.06]
          via-black/[0.16]
          to-black/48
        "
      />

      {/* =====================================================
          TOP TRANSITION
          Nối từ WordsToRememberSection
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          top-0

          z-[2]

          h-24

          bg-gradient-to-b

          from-white/[0.08]
          to-transparent

          sm:h-32
        "
      />

      {/* =====================================================
          CENTER LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-[43%]

          z-[2]

          h-[65vh]
          w-[80vw]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/[0.025]

          blur-[120px]
        "
      />

      {/* =====================================================
          BLUE GLOW
      ===================================================== */}

      <div
        className="
          wedding-glow-blue

          pointer-events-none

          absolute

          -left-[22%]
          bottom-[2%]

          z-[2]

          h-[38rem]
          w-[38rem]

          rounded-full

          opacity-20

          blur-[145px]
        "
      />

      {/* =====================================================
          PINK GLOW
      ===================================================== */}

      <div
        className="
          wedding-glow-pink

          pointer-events-none

          absolute

          -right-[22%]
          top-[5%]

          z-[2]

          h-[38rem]
          w-[38rem]

          rounded-full

          opacity-20

          blur-[145px]
        "
      />

      {/* =====================================================
          GREEN GLOW
      ===================================================== */}

      <div
        className="
          wedding-glow-green

          pointer-events-none

          absolute

          left-1/2
          bottom-[-20%]

          z-[2]

          h-[30rem]
          w-[30rem]

          -translate-x-1/2

          rounded-full

          opacity-15

          blur-[140px]
        "
      />

      {/* =====================================================
          HEART LAYER

          Đây là đoạn cao trào.
      ===================================================== */}

      <HeartLayer
        density="high"
      />

      {/* =====================================================
          FOREGROUND HEART 01
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        animate={{
          y: [
            0,
            -32,
            0,
          ],

          x: [
            0,
            13,
            0,
          ],

          rotate: [
            -5,
            4,
            -5,
          ],
        }}
        transition={{
          duration: 9,

          repeat:
            Infinity,

          ease:
            "easeInOut",
        }}
        className="
          pointer-events-none

          absolute

          -left-3
          bottom-[15%]

          z-[3]

          hidden

          text-[90px]

          text-white/15

          blur-[3px]

          md:block
        "
      >
        ♡
      </motion.div>

      {/* =====================================================
          FOREGROUND HEART 02
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        animate={{
          y: [
            0,
            -40,
            0,
          ],

          x: [
            0,
            -16,
            0,
          ],

          rotate: [
            5,
            -4,
            5,
          ],
        }}
        transition={{
          duration: 11,

          repeat:
            Infinity,

          ease:
            "easeInOut",
        }}
        className="
          pointer-events-none

          absolute

          -right-4
          top-[18%]

          z-[3]

          hidden

          text-[110px]

          text-white/12

          blur-[4px]

          lg:block
        "
      >
        ♡
      </motion.div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <motion.div
        style={{
          y:
            contentY,

          opacity:
            contentOpacity,
        }}
        className="
          relative
          z-10

          flex

          min-h-[100svh]

          items-center
          justify-center

          px-5
          py-16

          sm:px-8
          sm:py-20

          md:min-h-dvh
          md:px-10

          lg:px-12
          lg:py-20
        "
      >
        <div
          className="
            mx-auto

            flex

            w-full
            max-w-6xl

            flex-col

            items-center

            text-center

            text-white
          "
        >
          {/* =================================================
              HEART
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.6,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <motion.span
              animate={{
                scale: [
                  1,
                  1.18,
                  1,
                ],
              }}
              transition={{
                duration: 2.8,

                repeat:
                  Infinity,

                ease:
                  "easeInOut",
              }}
              className="
                text-wedding-rose

                block

                text-2xl

                drop-shadow-[0_3px_10px_rgba(0,0,0,0.30)]

                sm:text-3xl
              "
            >
              ♡
            </motion.span>
          </motion.div>

          {/* =================================================
              EYEBROW
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.08,
              duration: 0.8,
            }}
            className="
              mt-3

              text-[10px]

              font-semibold

              uppercase

              tracking-[0.3em]

              text-white/90

              drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]

              sm:text-xs
            "
          >
            {
              wedding.forever
                .eyebrow
            }
          </motion.p>

          {/* =================================================
              TITLE
          ================================================= */}

          <motion.h2
            initial={{
              opacity: 0,

              y: 28,

              scale: 0.97,

              filter:
                "blur(7px)",
            }}
            whileInView={{
              opacity: 1,

              y: 0,

              scale: 1,

              filter:
                "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.35,
            }}
            transition={{
              delay: 0.15,

              duration: 1.1,

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              font-editorial

              mt-3

              max-w-5xl

              text-[clamp(4.5rem,15vw,11rem)]

              font-medium

              leading-[0.82]

              tracking-[-0.05em]

              text-white

              drop-shadow-[0_6px_30px_rgba(0,0,0,0.38)]
            "
          >
            {
              wedding.forever
                .title
            }
          </motion.h2>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.34,
              duration: 0.85,
            }}
            className="
              mt-5

              flex

              items-center
              justify-center

              gap-3
            "
          >
            <span
              className="
                h-px
                w-10

                bg-gradient-to-r
                from-transparent
                to-white/80

                sm:w-12
              "
            />

            <span
              className="
                text-wedding-rose

                text-xs
              "
            >
              ♡
            </span>

            <span
              className="
                h-px
                w-10

                bg-gradient-to-l
                from-transparent
                to-white/80

                sm:w-12
              "
            />
          </motion.div>

          {/* =================================================
              SUBTITLE
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.42,
              duration: 0.85,
            }}
            className="
              font-editorial

              mx-auto

              mt-4

              max-w-2xl

              text-[clamp(1.8rem,5vw,3.5rem)]

              font-medium

              leading-[1.1]

              tracking-[-0.025em]

              text-white

              drop-shadow-[0_3px_14px_rgba(0,0,0,0.42)]
            "
          >
            {
              wedding.forever
                .subtitle
            }
          </motion.p>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 14,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.54,
              duration: 0.85,
            }}
            className="
              mx-auto

              mt-4

              max-w-xl

              text-[14px]

              font-medium

              leading-7

              text-white/90

              drop-shadow-[0_2px_10px_rgba(0,0,0,0.42)]

              sm:text-base

              md:text-lg
              md:leading-8
            "
          >
            {
              wedding.forever
                .description
            }
          </motion.p>

          {/* =================================================
              NAMES
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.66,
              duration: 0.9,
            }}
            className="
              font-editorial

              mt-6

              flex
              flex-col

              items-center
              justify-center

              text-[clamp(2.3rem,6vw,4.5rem)]

              font-medium

              leading-tight

              text-white

              drop-shadow-[0_3px_16px_rgba(0,0,0,0.45)]

              md:flex-row
            "
          >
            <span>
              {
                wedding.groom
              }
            </span>

            <motion.span
              animate={{
                scale: [
                  1,
                  1.18,
                  1,
                ],
              }}
              transition={{
                duration: 2.4,

                repeat:
                  Infinity,

                ease:
                  "easeInOut",
              }}
              className="
                text-wedding-rose

                my-1

                text-2xl

                md:mx-6
                md:my-0
                md:text-3xl
              "
            >
              ♡
            </motion.span>

            <span>
              {
                wedding.bride
              }
            </span>
          </motion.div>

          {/* =================================================
              ENDING QUOTE

              MOBILE:
              xuống dòng tự nhiên.

              DESKTOP:
              cố định 1 hàng.
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.78,
              duration: 0.9,
            }}
            className="
              mx-auto

              mt-6

              w-full
            "
          >
            {/* =============================================
                MOBILE / TABLET
            ============================================= */}

            <p
              className="
                font-editorial

                mx-auto

                max-w-2xl

                text-xl

                font-medium

                leading-relaxed

                text-white/95

                drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]

                sm:text-2xl

                lg:hidden
              "
            >
              “{
                wedding.forever
                  .endingQuote
              }”
            </p>

            {/* =============================================
                DESKTOP
                ĐÚNG 1 HÀNG
            ============================================= */}

            <p
              className="
                font-editorial

                mx-auto

                hidden

                whitespace-nowrap

                text-[clamp(1.35rem,2vw,2rem)]

                font-medium

                leading-relaxed

                tracking-[-0.015em]

                text-white/95

                drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]

                lg:block
              "
            >
              “{
                wedding.forever
                  .endingQuote
              }”
            </p>
          </motion.div>

          {/* =================================================
              FINAL HEART
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.9,
              duration: 0.8,
            }}
            className="
              mt-5
            "
          >
            <motion.span
              animate={{
                scale: [
                  1,
                  1.22,
                  1,
                ],
              }}
              transition={{
                duration: 2.5,

                repeat:
                  Infinity,

                ease:
                  "easeInOut",
              }}
              className="
                text-wedding-rose

                block

                text-3xl
              "
            >
              ♡
            </motion.span>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM FADE
          Nối sang EndingSection
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          bottom-0
          left-0

          z-[8]

          h-20
          w-full

          bg-gradient-to-t

          from-white/[0.12]
          to-transparent

          sm:h-28
        "
      />
    </section>
  );
}