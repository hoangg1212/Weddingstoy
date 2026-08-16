"use client";

import { motion } from "motion/react";

import { wedding } from "@/data/wedding";

export default function EndingSection() {
  return (
    <section
      id="ending"
      className="
        relative
        overflow-hidden

        bg-gradient-to-b
        from-[#F8F3EC]
        via-[#FCFAF7]
        to-white

        px-5
        py-20

        sm:px-8
        sm:py-24

        md:px-10

        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[20%]
          top-[5%]

          h-[30rem]
          w-[30rem]

          rounded-full

          bg-[#EAD9CF]/20

          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[20%]
          bottom-[5%]

          h-[28rem]
          w-[28rem]

          rounded-full

          bg-[#E9DED2]/25

          blur-[130px]
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 28,
          scale: 0.98,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10

          mx-auto

          w-full
          max-w-5xl

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
              scale: [1, 1.14, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              inline-block

              text-2xl

              text-[#A78A73]

              sm:text-3xl
            "
          >
            ♡
          </motion.span>
        </motion.div>

        {/* =================================================
            SMALL LABEL
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
            delay: 0.1,
            duration: 0.75,
          }}
          className="
            mt-4

            text-[10px]
            font-bold
            uppercase

            tracking-[0.3em]

            text-[#8B7360]

            sm:text-xs
          "
        >
          Khép lại một câu chuyện
        </motion.p>

        {/* =================================================
            MAIN TITLE
        ================================================= */}

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
            delay: 0.2,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            font-editorial

            mx-auto

            mt-4

            max-w-[1050px]

            text-[clamp(3rem,6vw,6rem)]

            font-medium

            leading-[0.93]

            tracking-[-0.045em]

            text-[#302A26]
          "
        >
          Cảm ơn bạn đã trở thành
          <br className="hidden sm:block" />
          một phần trong câu chuyện
          <br className="hidden sm:block" />
          của chúng mình.
        </motion.h2>

        {/* =================================================
            DIVIDER
        ================================================= */}

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
            delay: 0.4,
            duration: 0.9,
          }}
          className="
            mx-auto

            mt-7

            h-px
            w-16

            origin-center

            bg-[#B79A82]
          "
        />

        {/* =================================================
            SUBTITLE
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
            delay: 0.5,
            duration: 0.8,
          }}
          className="
            font-editorial

            mx-auto

            mt-6

            max-w-2xl

            text-[clamp(1.8rem,3vw,3rem)]

            font-medium

            leading-[1.08]

            tracking-[-0.025em]

            text-[#514741]
          "
        >
          Và từ hôm nay, một hành trình mới
          <br className="hidden sm:block" />
          chính thức bắt đầu.
        </motion.p>

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
            delay: 0.6,
            duration: 0.8,
          }}
          className="
            mx-auto

            mt-4

            max-w-xl

            text-sm
            font-medium

            leading-6

            text-[#756B63]

            sm:text-[15px]
          "
        >
          Cảm ơn vì đã dành thời gian để cùng chúng mình
          đi qua những khoảnh khắc thật đẹp này.
        </motion.p>

        {/* =================================================
            COUPLE NAMES
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
            delay: 0.72,
            duration: 0.85,
          }}
          className="
            font-editorial

            mt-7

            flex
            flex-col

            items-center
            justify-center

            gap-1

            text-3xl
            font-medium

            leading-none

            text-[#372F2A]

            sm:text-4xl

            md:flex-row
            md:gap-0
            md:text-5xl
          "
        >
          <span>
            {wedding.groom}
          </span>

          <motion.span
            animate={{
              scale: [1, 1.16, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              my-1

              text-xl

              text-[#A98B73]

              md:mx-5
              md:my-0
              md:text-2xl
            "
          >
            ♡
          </motion.span>

          <span>
            {wedding.bride}
          </span>
        </motion.div>

        {/* =================================================
            FINAL MESSAGE
        ================================================= */}

        <motion.div
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
            delay: 0.85,
            duration: 0.85,
          }}
          className="
            mt-6
          "
        >
          <p
            className="
              text-xs
              font-medium

              leading-5

              tracking-[0.04em]

              text-[#91857B]

              sm:text-sm
            "
          >
            Hẹn gặp lại bạn trong ngày hạnh phúc của chúng mình.
          </p>

          <motion.span
            animate={{
              opacity: [0.65, 1, 0.65],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mt-5

              inline-block

              text-2xl

              text-[#B0937A]
            "
          >
            ♡
          </motion.span>
        </motion.div>

        {/* =================================================
            FINAL SMALL LINE
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
            delay: 0.95,
            duration: 1,
          }}
          className="
            mx-auto

            mt-6

            h-px
            w-8

            origin-center

            bg-[#C6B3A3]
          "
        />
      </motion.div>
    </section>
  );
}