"use client";

import {
  motion,
} from "motion/react";

import {
  wedding,
} from "@/data/wedding";

export default function EndingSection() {
  return (
    <section
      id="ending"
      className="
        bg-wedding-luxury
    wedding-section
    wedding-texture

        relative

        -mt-px

        overflow-hidden

        px-5
        py-16

        sm:px-8
        sm:py-20

        md:px-10
        md:py-24

        lg:px-12
        lg:py-28
      "
    >
      {/* =====================================================
          TOP TRANSITION

          Nối mềm từ ForeverSection xuống EndingSection.
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-x-0
          top-0

          h-28

          bg-gradient-to-b

          from-[rgba(207,229,239,0.14)]
          via-[rgba(237,245,244,0.08)]
          to-transparent

          sm:h-36
        "
      />

      {/* =====================================================
          BACKGROUND GLOWS
      ===================================================== */}

      <div
        className="
          wedding-glow-blue

          pointer-events-none

          absolute

          -left-[20%]
          top-[3%]

          h-[34rem]
          w-[34rem]

          rounded-full

          opacity-40

          blur-[140px]
        "
      />

      <div
        className="
          wedding-glow-pink

          pointer-events-none

          absolute

          -right-[20%]
          bottom-[2%]

          h-[32rem]
          w-[32rem]

          rounded-full

          opacity-32

          blur-[140px]
        "
      />

      <div
        className="
          wedding-glow-green

          pointer-events-none

          absolute

          left-1/2
          top-[46%]

          h-[26rem]
          w-[26rem]

          -translate-x-1/2

          rounded-full

          opacity-28

          blur-[125px]
        "
      />

      {/* =====================================================
          BACKGROUND WORD
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          font-editorial
          text-wedding-blue

          pointer-events-none

          absolute

          left-1/2
          top-[46%]

          hidden

          -translate-x-1/2
          -translate-y-1/2

          whitespace-nowrap

          text-[11rem]

          font-medium

          leading-none

          tracking-[-0.075em]

          opacity-[0.025]

          lg:block
        "
      >
        {
          wedding.ending
            .backgroundWord
        }
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 26,
          scale: 0.985,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1,

          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        className="
          relative
          z-10

          mx-auto

          w-full
          max-w-6xl

          text-center
        "
      >
        {/* =================================================
            TOP HEART
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <motion.span
            animate={{
              scale: [
                1,
                1.14,
                1,
              ],
            }}
            transition={{
              duration: 3,

              repeat:
                Infinity,

              ease:
                "easeInOut",
            }}
            className="
              text-wedding-rose

              inline-block

              text-2xl

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
            y: 10,
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
            duration: 0.75,
          }}
          className="
            text-wedding-blue

            mt-2

            text-[10px]

            font-semibold

            uppercase

            tracking-[0.3em]

            sm:text-xs
          "
        >
          {
            wedding.ending
              .eyebrow
          }
        </motion.p>

        {/* =================================================
            TITLE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            filter:
              "blur(5px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter:
              "blur(0px)",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.16,

            duration: 1,

            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            font-editorial
            text-wedding-primary

            mx-auto

            mt-3

            font-medium

            leading-[0.98]

            tracking-[-0.045em]
          "
        >
          {/* =========================================
              MOBILE / TABLET

              Tự xuống dòng theo màn hình.
          ========================================= */}

          <h2
            className="
              mx-auto

              max-w-3xl

              text-[clamp(2.7rem,9vw,4.8rem)]

              lg:hidden
            "
          >
            {
              wedding.ending
                .title
            }
          </h2>

          {/* =========================================
              DESKTOP

              Cố định thành 3 hàng đẹp.
          ========================================= */}

          <h2
            className="
              hidden

              lg:block

              lg:text-[clamp(3.8rem,5.2vw,5.8rem)]
            "
          >
            <span
              className="
                block
                whitespace-nowrap
              "
            >
              {
                wedding.ending
                  .titleLines[0]
              }
            </span>

            <span
              className="
                block
                whitespace-nowrap
              "
            >
              {
                wedding.ending
                  .titleLines[1]
              }
            </span>

            <span
              className="
                block
                whitespace-nowrap
              "
            >
              {
                wedding.ending
                  .titleLines[2]
              }
            </span>
          </h2>
        </motion.div>

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
            delay: 0.3,
            duration: 0.8,
          }}
          className="
            mx-auto

            mt-5

            flex

            items-center
            justify-center

            gap-3
          "
        >
          <span
            className="
              wedding-divider-left

              h-px
              w-10
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
              wedding-divider-right

              h-px
              w-10
            "
          />
        </motion.div>

        {/* =================================================
            SUBTITLE
        ================================================= */}

        <motion.div
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
            delay: 0.38,
            duration: 0.8,
          }}
          className="
            font-editorial
            text-wedding-primary

            mx-auto

            mt-5

            font-medium

            leading-[1.12]

            tracking-[-0.025em]
          "
        >
          {/* MOBILE / TABLET */}

          <p
            className="
              mx-auto

              max-w-2xl

              text-[clamp(1.8rem,6vw,2.8rem)]

              lg:hidden
            "
          >
            {
              wedding.ending
                .subtitle
            }
          </p>

          {/* DESKTOP */}

          <div
            className="
              hidden

              lg:block

              lg:text-[clamp(2.3rem,3vw,3rem)]
            "
          >
            <p
              className="
                whitespace-nowrap
              "
            >
              {
                wedding.ending
                  .subtitleLines[0]
              }
            </p>

            <p
              className="
                whitespace-nowrap
              "
            >
              {
                wedding.ending
                  .subtitleLines[1]
              }
            </p>
          </div>
        </motion.div>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 12,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.48,
            duration: 0.8,
          }}
          className="
            text-wedding-soft

            mx-auto

            mt-4

            max-w-xl

            text-sm

            font-medium

            leading-6

            sm:text-[15px]
            sm:leading-7
          "
        >
          {
            wedding.ending
              .description
          }
        </motion.p>

        {/* =================================================
            NAMES
        ================================================= */}

        <motion.div
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
            delay: 0.58,
            duration: 0.85,
          }}
          className="
            font-editorial
            text-wedding-primary

            mt-6

            flex

            flex-col

            items-center
            justify-center

            text-3xl

            font-medium

            leading-none

            tracking-[-0.025em]

            sm:text-4xl

            md:flex-row
            md:text-5xl
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
                1.17,
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

              my-1

              text-xl

              md:mx-5
              md:my-0
              md:text-2xl
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
            FINAL ORNAMENT
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
            delay: 0.72,
            duration: 0.9,
          }}
          className="
            mx-auto

            mt-6

            flex

            items-center
            justify-center

            gap-2
          "
        >
          <span
            className="
              wedding-divider-left

              h-px
              w-6
            "
          />

          <span
            className="
              text-wedding-rose

              text-[9px]
            "
          >
            ♡
          </span>

          <span
            className="
              wedding-divider-right

              h-px
              w-6
            "
          />
        </motion.div>
      </motion.div>
    </section>
  );
}