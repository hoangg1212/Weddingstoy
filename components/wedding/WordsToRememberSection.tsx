"use client";

import {
  motion,
} from "motion/react";

import {
  wedding,
} from "@/data/wedding";

import HeartLayer from "./HeartLayer";

/* =========================================================
   TYPES
========================================================= */

type WordCardProps = {
  word: {
    text: string;
  };

  index: number;

  className?: string;

  tone?: "blue" | "rose";
};

/* =========================================================
   WORD CARD
========================================================= */

function WordCard({
  word,
  index,
  className = "",
  tone = "blue",
}: WordCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 34,
        filter:
          "blur(7px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter:
          "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.95,

        delay:
          index * 0.1,

        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
      whileHover={{
        y: -5,
      }}
      className={`
        glass-wedding
        border-wedding-soft
        shadow-wedding-card

        group

        relative

        overflow-hidden

        rounded-[1.5rem]

        border

        p-6

        sm:rounded-[1.8rem]
        sm:p-8

        lg:rounded-[2rem]
        lg:p-9

        ${className}
      `}
    >
      {/* =================================================
          GLOW
      ================================================= */}

      <div
        className={`
          pointer-events-none

          absolute

          -right-24
          -top-24

          h-52
          w-52

          rounded-full

          opacity-40

          blur-[65px]

          transition-transform

          duration-1000

          group-hover:scale-125

          ${tone === "rose"
            ? "wedding-glow-pink"
            : "wedding-glow-blue"
          }
        `}
      />

      {/* =================================================
          INNER BORDER
      ================================================= */}

      <div
        className="
          border-wedding-white

          pointer-events-none

          absolute
          inset-3

          rounded-[1.15rem]

          border

          sm:rounded-[1.45rem]

          lg:rounded-[1.65rem]
        "
      />

      {/* =================================================
          TOP
      ================================================= */}

      <div
        className="
          relative
          z-10

          flex

          items-center
          justify-between
        "
      >
        {/* NUMBER */}

        <p
          className={`
            text-[10px]

            font-semibold

            tracking-[0.25em]

            sm:text-xs

            ${tone === "rose"
              ? "text-wedding-rose"
              : "text-wedding-blue"
            }
          `}
        >
          {String(
            index + 1,
          ).padStart(
            2,
            "0",
          )}
        </p>

        {/* HEART */}

        <motion.span
          animate={{
            scale: [
              1,
              1.13,
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

            text-xl
          "
        >
          ♡
        </motion.span>
      </div>

      {/* =================================================
          QUOTE MARK
      ================================================= */}

      <div
        className={`
          font-editorial

          relative
          z-10

          mt-4

          text-5xl

          leading-none

          sm:text-6xl

          ${tone === "rose"
            ? "text-wedding-rose"
            : "text-wedding-blue"
          }

          opacity-45
        `}
      >
        “
      </div>

      {/* =================================================
          QUOTE
      ================================================= */}

      <blockquote
        className="
          font-editorial
          text-wedding-primary

          relative
          z-10

          -mt-2

          text-[clamp(1.8rem,3vw,3rem)]

          font-medium

          leading-[1.15]

          tracking-[-0.028em]
        "
      >
        {
          word.text
        }
      </blockquote>

      {/* =================================================
          FOOTER
      ================================================= */}

      <div
        className="
          relative
          z-10

          mt-6

          flex

          items-center

          gap-3
        "
      >
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay:
              0.25 +
              index * 0.1,

            duration: 0.8,
          }}
          className={`
            h-px

            w-9

            origin-left

            ${tone === "rose"
              ? "wedding-divider-right"
              : "wedding-divider-left"
            }
          `}
        />

        <p
          className="
            text-wedding-muted

            text-[9px]

            font-semibold

            uppercase

            tracking-[0.15em]

            sm:text-[10px]
          "
        >
          {
            wedding
              .wordsSection
              .cardFooter
          }
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   SECTION
========================================================= */

export default function WordsToRememberSection() {
  return (
    <section
      id="words-to-remember"
      className="
        bg-wedding-sage
  wedding-section

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
          BACKGROUND
      ===================================================== */}

      <div
        className="
          wedding-glow-blue

          pointer-events-none

          absolute

          -left-[18%]
          top-[3%]

          h-[40rem]
          w-[40rem]

          rounded-full

          opacity-40

          blur-[145px]
        "
      />

      <div
        className="
          wedding-glow-pink

          pointer-events-none

          absolute

          -right-[18%]
          bottom-[4%]

          h-[38rem]
          w-[38rem]

          rounded-full

          opacity-35

          blur-[145px]
        "
      />

      <div
        className="
          wedding-glow-green

          pointer-events-none

          absolute

          left-1/2
          top-[45%]

          h-[30rem]
          w-[30rem]

          -translate-x-1/2

          rounded-full

          opacity-30

          blur-[130px]
        "
      />

      {/* =====================================================
          HEARTS
      ===================================================== */}

      <HeartLayer
        density="low"
      />

      {/* =====================================================
          DECORATIVE WORD
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          font-editorial
          text-wedding-blue

          pointer-events-none

          absolute

          left-1/2
          top-[31%]

          hidden

          -translate-x-1/2

          text-[14rem]

          font-medium

          leading-none

          tracking-[-0.08em]

          opacity-[0.025]

          lg:block
        "
      >
        {
          wedding
            .wordsSection
            .backgroundWord
        }
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10

          mx-auto

          max-w-7xl
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 26,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.9,

            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            mx-auto

            max-w-3xl

            text-center
          "
        >
          {/* HEART */}

          <motion.span
            animate={{
              scale: [
                1,
                1.13,
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
            "
          >
            ♡
          </motion.span>

          {/* EYEBROW */}

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
              delay: 0.05,
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
              wedding
                .wordsSection
                .eyebrow
            }
          </motion.p>

          {/* TITLE */}

          <motion.h2
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
              delay: 0.1,
              duration: 1,
            }}
            className="
              font-editorial
              text-wedding-primary

              mt-3

              text-[clamp(3.4rem,8vw,7rem)]

              font-medium

              leading-[0.88]

              tracking-[-0.045em]
            "
          >
            {
              wedding
                .wordsSection
                .title
            }
          </motion.h2>

          {/* DIVIDER */}

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
              delay: 0.2,
              duration: 0.8,
            }}
            className="
              mx-auto

              mt-4

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

          {/* DESCRIPTION */}

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
              delay: 0.28,
              duration: 0.8,
            }}
            className="
              text-wedding-soft

              mx-auto

              mt-4

              max-w-2xl

              text-[14px]

              font-medium

              leading-7

              sm:text-base

              md:text-lg
              md:leading-8
            "
          >
            {
              wedding
                .wordsSection
                .description
            }
          </motion.p>
        </motion.div>

        {/* =================================================
            LUXURY LETTER GRID
        ================================================= */}

        <div
          className="
            mt-10

            grid

            grid-cols-1

            gap-6

            sm:mt-12

            md:grid-cols-12
            md:gap-7

            lg:mt-16
            lg:gap-8
          "
        >
          {/* =================================================
              CARD 01
          ================================================= */}

          {wedding.words[0] && (
            <WordCard
              word={
                wedding.words[0]
              }
              index={0}
              tone="blue"
              className="
                min-h-[270px]

                md:col-span-7

                lg:min-h-[310px]
              "
            />
          )}

          {/* =================================================
              CARD 02
          ================================================= */}

          {wedding.words[1] && (
            <WordCard
              word={
                wedding.words[1]
              }
              index={1}
              tone="rose"
              className="
                min-h-[270px]

                md:col-span-5
                md:mt-10

                lg:min-h-[310px]
                lg:mt-12
              "
            />
          )}

          {/* =================================================
              CARD 03
          ================================================= */}

          {wedding.words[2] && (
            <WordCard
              word={
                wedding.words[2]
              }
              index={2}
              tone="blue"
              className="
                min-h-[250px]

                md:col-span-8
                md:col-start-3

                lg:min-h-[290px]
              "
            />
          )}
        </div>

        {/* =================================================
            EXTRA CARDS
        ================================================= */}

        {wedding.words.length >
          3 && (
            <div
              className="
              mt-6

              grid

              gap-6

              md:grid-cols-2
              md:gap-7

              lg:gap-8
            "
            >
              {wedding.words
                .slice(3)
                .map(
                  (
                    word,
                    index,
                  ) => (
                    <WordCard
                      key={
                        index
                      }
                      word={
                        word
                      }
                      index={
                        index + 3
                      }
                      tone={
                        index % 2 ===
                          0
                          ? "rose"
                          : "blue"
                      }
                      className="
                      min-h-[250px]

                      lg:min-h-[280px]
                    "
                    />
                  ),
                )}
            </div>
          )}

        {/* =================================================
            CLOSING
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.95,
          }}
          className="
            mx-auto

            mt-12

            max-w-3xl

            text-center

            sm:mt-14

            lg:mt-16
          "
        >
          {/* HEART */}

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

              text-xl
            "
          >
            ♡
          </motion.span>

          {/* CLOSING */}

          <p
            className="
    font-editorial
    text-wedding-primary

    mx-auto

    mt-4

    max-w-2xl

    text-[clamp(2rem,7vw,3rem)]

    font-medium

    leading-[1.16]

    tracking-[-0.025em]

    lg:hidden
  "
          >
            {
              wedding
                .wordsSection
                .closingLines
                .join(" ")
            }
          </p>

          {/* =============================================
    DESKTOP
    CỐ ĐỊNH ĐÚNG 2 HÀNG
============================================= */}

          <div
            className="
    font-editorial
    text-wedding-primary

    mx-auto

    mt-4

    hidden

    font-medium

    leading-[1.14]

    tracking-[-0.025em]

    lg:block

    lg:text-[clamp(2.4rem,3.4vw,3.4rem)]
  "
          >
            <p className="whitespace-nowrap">
              {
                wedding
                  .wordsSection
                  .closingLines[0]
              }
            </p>

            <p className="whitespace-nowrap">
              {
                wedding
                  .wordsSection
                  .closingLines[1]
              }
            </p>
          </div>

          {/* DIVIDER */}

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
              delay: 0.2,
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
                w-9
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
                w-9
              "
            />
          </motion.div>

          {/* NAMES */}

          <motion.p
            initial={{
              opacity: 0,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.25,
              duration: 0.8,
            }}
            className="
              font-editorial
              text-wedding-soft

              mt-4

              flex

              flex-col

              items-center
              justify-center

              text-2xl

              sm:text-3xl

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
                  1.15,
                  1,
                ],
              }}
              transition={{
                duration: 2.7,

                repeat:
                  Infinity,

                ease:
                  "easeInOut",
              }}
              className="
                text-wedding-rose

                my-1

                md:mx-4
                md:my-0
              "
            >
              ♡
            </motion.span>

            <span>
              {
                wedding.bride
              }
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}