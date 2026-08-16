"use client";

import {
  motion,
} from "motion/react";

import {
  wedding,
} from "@/data/wedding";

/* =========================================================
   WORD CARD
========================================================= */

type WordCardProps = {
  word: string;
  index: number;
  className?: string;
};

function WordCard({
  word,
  index,
  className = "",
}: WordCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 38,
        filter: "blur(7px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.95,
        delay: index * 0.12,
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
        group
        relative

        overflow-hidden

        rounded-[1.8rem]

        border
        border-[#CBB7A4]/45

        bg-white/55

        p-7

        shadow-[0_25px_70px_rgba(72,54,42,0.08)]

        backdrop-blur-xl

        sm:p-9

        lg:rounded-[2.2rem]
        lg:p-11

        ${className}
      `}
    >
      {/* ===============================================
          BACKGROUND GLOW
      =============================================== */}

      <div
        className="
          pointer-events-none

          absolute
          -right-24
          -top-24

          h-52
          w-52

          rounded-full

          bg-[#EBDDD2]/35

          blur-[60px]

          transition-transform
          duration-1000

          group-hover:scale-125
        "
      />

      {/* ===============================================
          INNER BORDER
      =============================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-3

          rounded-[1.4rem]

          border
          border-white/75

          lg:rounded-[1.75rem]
        "
      />

      {/* ===============================================
          NUMBER
      =============================================== */}

      <div
        className="
          relative
          z-10

          flex

          items-center
          justify-between
        "
      >
        <p
          className="
            text-[10px]
            font-semibold

            tracking-[0.25em]

            text-[#927A66]

            sm:text-xs
          "
        >
          {String(index + 1).padStart(
            2,
            "0",
          )}
        </p>

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
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            text-xl

            text-[#A98B72]
          "
        >
          ♡
        </motion.span>
      </div>

      {/* ===============================================
          QUOTE MARK
      =============================================== */}

      <div
        className="
          font-editorial

          relative
          z-10

          mt-5

          text-5xl
          leading-none

          text-[#BCA38D]/70

          sm:text-6xl
        "
      >
        “
      </div>

      {/* ===============================================
          QUOTE
      =============================================== */}

      <blockquote
        className="
          font-editorial

          relative
          z-10

          -mt-2

          text-[clamp(1.9rem,3vw,3.15rem)]

          font-medium

          leading-[1.15]

          tracking-[-0.025em]

          text-[#342E29]
        "
      >
        {word}
      </blockquote>

      {/* ===============================================
          FOOTER
      =============================================== */}

      <div
        className="
          relative
          z-10

          mt-8

          flex

          items-center
          gap-4
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
              0.3 +
              index * 0.12,
            duration: 0.8,
          }}
          className="
            h-px
            w-10

            origin-left

            bg-[#B89E87]
          "
        />

        <p
          className="
            text-[10px]
            font-medium

            uppercase

            tracking-[0.16em]

            text-[#85786E]

            sm:text-xs
          "
        >
          Một lời dành cho hành trình phía trước
        </p>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function WordsToRememberSection() {
  return (
    <section
      id="words-to-remember"
      className="
        relative
        overflow-hidden

        bg-[#FAF7F1]

        px-5
        py-24

        sm:px-8
        sm:py-28

        md:px-10

        lg:px-12
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          -left-[18%]
          top-[5%]

          h-[38rem]
          w-[38rem]

          rounded-full

          bg-[#E8D7CD]/28

          blur-[145px]
        "
      />

      <div
        className="
          pointer-events-none

          absolute
          -right-[18%]
          bottom-[5%]

          h-[36rem]
          w-[36rem]

          rounded-full

          bg-[#EADFD2]/35

          blur-[145px]
        "
      />

      {/* =====================================================
          DECORATIVE TEXT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[32%]

          hidden

          -translate-x-1/2

          font-editorial

          text-[15rem]

          font-medium

          leading-none

          tracking-[-0.08em]

          text-[#AF9278]/[0.025]

          lg:block
        "
      >
        LOVE
      </div>

      {/* =====================================================
          MAIN
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
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.95,
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

          <motion.div
            animate={{
              scale: [
                1,
                1.13,
                1,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              text-2xl

              text-[#A78B73]
            "
          >
            ♡
          </motion.div>

          {/* LABEL */}

          <p
            className="
              mt-5

              text-[10px]
              font-bold
              uppercase

              tracking-[0.3em]

              text-[#89715E]

              sm:text-xs
            "
          >
            Những điều muốn giữ lại
          </p>

          {/* TITLE */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 22,
              filter: "blur(5px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.12,
              duration: 1,
            }}
            className="
              font-editorial

              mt-4

              text-[clamp(3.5rem,8vw,7rem)]

              font-medium

              leading-[0.9]

              tracking-[-0.045em]

              text-[#302A26]
            "
          >
            Những lời để nhớ
          </motion.h2>

          {/* LINE */}

          <motion.div
            initial={{
              scaleX: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleX: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.3,
              duration: 0.9,
            }}
            className="
              mx-auto

              mt-6

              h-px
              w-16

              origin-center

              bg-[#B79E88]
            "
          />

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
              delay: 0.4,
              duration: 0.8,
            }}
            className="
              mx-auto

              mt-6

              max-w-2xl

              text-[15px]
              font-medium

              leading-7

              text-[#625950]

              sm:text-base

              md:text-lg
              md:leading-8
            "
          >
            Có những lời chỉ cần nghe một lần,
            nhưng lại đủ để ở lại thật lâu trong
            những năm tháng sau này.
          </motion.p>
        </motion.div>

        {/* =================================================
            EDITORIAL QUOTE GRID
        ================================================= */}

        <div
          className="
            mt-16

            grid
            grid-cols-1

            gap-6

            md:grid-cols-12
            md:gap-7

            lg:mt-24
            lg:gap-8
          "
        >
          {/* ===============================================
              WORD 01
          =============================================== */}

          {wedding.words[0] && (
            <WordCard
              word={
                wedding.words[0]
              }
              index={0}
              className="
                min-h-[330px]

                md:col-span-7

                lg:min-h-[390px]
              "
            />
          )}

          {/* ===============================================
              WORD 02
          =============================================== */}

          {wedding.words[1] && (
            <WordCard
              word={
                wedding.words[1]
              }
              index={1}
              className="
                min-h-[330px]

                md:col-span-5
                md:mt-16

                lg:min-h-[390px]
                lg:mt-20
              "
            />
          )}

          {/* ===============================================
              WORD 03
          =============================================== */}

          {wedding.words[2] && (
            <WordCard
              word={
                wedding.words[2]
              }
              index={2}
              className="
                min-h-[300px]

                md:col-span-8
                md:col-start-3

                lg:min-h-[360px]
              "
            />
          )}
        </div>

        {/* =================================================
            NẾU CÓ HƠN 3 LỜI CHÚC
        ================================================= */}

        {wedding.words.length >
          3 && (
          <div
            className="
              mt-7

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
                    key={`${word}-${index}`}
                    word={word}
                    index={
                      index + 3
                    }
                    className="
                      min-h-[300px]
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
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.95,
          }}
          className="
            mx-auto

            mt-20

            max-w-3xl

            text-center

            lg:mt-28
          "
        >
          <motion.div
            animate={{
              scale: [
                1,
                1.14,
                1,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              text-xl

              text-[#A78B74]
            "
          >
            ♡
          </motion.div>

          <p
            className="
              font-editorial

              mx-auto

              mt-5

              max-w-2xl

              text-[clamp(2rem,4vw,3.2rem)]

              font-medium

              leading-[1.16]

              tracking-[-0.025em]

              text-[#382F29]
            "
          >
            Và mong rằng,
            sau thật nhiều năm nữa,
            chúng mình vẫn sẽ luôn
            chọn nhau.
          </p>

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
              delay: 0.2,
              duration: 0.9,
            }}
            className="
              mx-auto

              mt-7

              h-px
              w-14

              origin-center

              bg-[#B69C87]
            "
          />

          <p
            className="
              font-editorial

              mt-6

              text-2xl
              font-medium

              text-[#433A34]

              sm:text-3xl
            "
          >
            {wedding.groom}

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
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                mx-3

                inline-block

                text-lg

                text-[#A78B74]
              "
            >
              ♡
            </motion.span>

            {wedding.bride}
          </p>
        </motion.div>
      </div>
    </section>
  );
}