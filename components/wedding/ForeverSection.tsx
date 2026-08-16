"use client";

import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

import HeartLayer from "./HeartLayer";
import { wedding } from "@/data/wedding";

export default function ForeverSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [
      "start end",
      "end start",
    ],
  });

  /* ======================================================
      BACKGROUND ANIMATION
  ====================================================== */

  // Zoom rất nhẹ
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.06, 1, 1.08],
  );

  // Parallax nhẹ
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-2%", "5%"],
  );

  /* ======================================================
      CONTENT ANIMATION
  ====================================================== */

  const contentY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [30, 0, -25],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.8, 1],
    [0, 1, 1, 0.7],
  );

  return (
    <section
      ref={sectionRef}
      id="forever"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#211D1A]
        md:min-h-dvh
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <motion.div
        style={{
          scale: imageScale,
          y: imageY,
        }}
        className="
          absolute
          inset-0
          z-0
        "
      >
        <Image
          src={wedding.forever.image}
          alt={`${wedding.groom} và ${wedding.bride}`}
          fill
          priority
          sizes="100vw"
          className="
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* =====================================================
          OVERLAY

          Không phủ quá tối để ảnh cưới vẫn sáng và đẹp.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]

          bg-gradient-to-b

          from-black/[0.08]
          via-black/[0.18]
          to-black/45
        "
      />

      {/* =====================================================
          SOFT LIGHT
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          left-1/2
          top-[45%]

          z-[1]

          h-[65vh]
          w-[85vw]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/[0.025]

          blur-[110px]
        "
      />

      {/* Champagne glow bên trái */}
      <div
        className="
          pointer-events-none

          absolute
          -left-[20%]
          bottom-[5%]

          z-[1]

          h-[35rem]
          w-[35rem]

          rounded-full

          bg-[#E7D2C3]/10

          blur-[130px]
        "
      />

      {/* Blush glow bên phải */}
      <div
        className="
          pointer-events-none

          absolute
          -right-[20%]
          top-[10%]

          z-[1]

          h-[35rem]
          w-[35rem]

          rounded-full

          bg-[#E8D6D2]/10

          blur-[130px]
        "
      />

      {/* =====================================================
          TRÁI TIM BAY

          Đây là cao trào nên dùng density high.
      ===================================================== */}

      <HeartLayer density="high" />

      {/* =====================================================
          FOREGROUND HEARTS

          Một vài trái tim lớn blur nhẹ để tạo chiều sâu.
      ===================================================== */}

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -35, 0],
          x: [0, 15, 0],
          rotate: [-5, 4, -5],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute
          -left-3
          bottom-[15%]

          z-[3]

          hidden

          text-[90px]
          text-white/20

          blur-[3px]

          md:block
        "
      >
        ♡
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{
          y: [0, -45, 0],
          x: [0, -18, 0],
          rotate: [5, -4, 5],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none

          absolute
          -right-4
          top-[20%]

          z-[3]

          hidden

          text-[120px]
          text-white/15

          blur-[4px]

          lg:block
        "
      >
        ♡
      </motion.div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="
          relative
          z-10

          flex

          min-h-[100svh]

          items-center
          justify-center

          px-5
          py-20

          sm:px-8
          sm:py-24

          md:min-h-dvh
          md:px-10

          lg:px-12
        "
      >
        <div
          className="
            mx-auto

            flex
            w-full
            max-w-5xl

            flex-col
            items-center

            text-center

            text-white
          "
        >
          {/* =================================================
              TOP HEART
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
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
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                block

                text-2xl

                text-[#F6DED2]

                drop-shadow-[0_3px_10px_rgba(0,0,0,0.3)]

                sm:text-3xl
              "
            >
              ♡
            </motion.span>
          </motion.div>

          {/* =================================================
              SMALL TITLE
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
              delay: 0.1,
              duration: 0.8,
            }}
            className="
              mt-5

              text-[10px]
              font-bold
              uppercase

              tracking-[0.3em]

              text-white

              drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]

              sm:text-xs
            "
          >
            Và từ hôm nay
          </motion.p>

          {/* =================================================
              MAIN TITLE
          ================================================= */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
              scale: 0.96,
              filter: "blur(7px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              delay: 0.2,
              duration: 1.15,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              font-editorial

              mt-5

              max-w-5xl

              text-[clamp(4.5rem,15vw,11rem)]

              font-medium

              leading-[0.82]

              tracking-[-0.05em]

              text-white

              drop-shadow-[0_5px_26px_rgba(0,0,0,0.4)]
            "
          >
            {wedding.forever.title}
          </motion.h2>

          {/* =================================================
              LINE
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
              delay: 0.45,
              duration: 1,
            }}
            className="
              mt-8

              h-px
              w-16

              origin-center

              bg-white/80

              sm:w-20
            "
          />

          {/* =================================================
              SUBTITLE
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.55,
              duration: 0.9,
            }}
            className="
              font-editorial

              mx-auto

              mt-7

              max-w-2xl

              text-[clamp(1.8rem,5vw,3.5rem)]

              font-medium

              leading-[1.15]

              tracking-[-0.02em]

              text-white

              drop-shadow-[0_3px_14px_rgba(0,0,0,0.45)]
            "
          >
            {wedding.forever.subtitle}
          </motion.p>

          {/* =================================================
              TEXT
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
              delay: 0.7,
              duration: 0.9,
            }}
            className="
              mx-auto

              mt-6

              max-w-xl

              text-[14px]
              font-medium

              leading-7

              text-white/95

              drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]

              sm:text-base

              md:text-lg
              md:leading-8
            "
          >
            Không còn là câu chuyện của riêng anh
            hay riêng em.
            Từ hôm nay, đó sẽ là câu chuyện của chúng mình.
          </motion.p>

          {/* =================================================
              NAMES
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
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
              duration: 0.95,
            }}
            className="
              font-editorial

              mt-10

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
            {/* CHÚ RỂ */}
            <span>
              {wedding.groom}
            </span>

            {/* HEART */}
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
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                my-2

                text-2xl

                text-[#F4D9CC]

                md:mx-6
                md:my-0
                md:text-3xl
              "
            >
              ♡
            </motion.span>

            {/* CÔ DÂU */}
            <span>
              {wedding.bride}
            </span>
          </motion.div>

          {/* =================================================
              ENDING QUOTE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 1,
              duration: 1,
            }}
            className="
              mx-auto

              mt-10

              max-w-2xl
            "
          >
            <p
              className="
                font-editorial

                text-xl
                font-medium

                leading-relaxed

                text-white/95

                drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]

                sm:text-2xl
              "
            >
              “Mãi về sau,
              mong rằng chúng mình vẫn sẽ
              nắm tay nhau như ngày hôm nay.”
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
              delay: 1.15,
              duration: 0.9,
            }}
            className="
              mt-9
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
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                block

                text-3xl

                text-[#F4D8CA]
              "
            >
              ♡
            </motion.span>
          </motion.div>
        </div>
      </motion.div>

      {/* =====================================================
          BOTTOM FADE

          Nối nhẹ sang EndingSection trắng.
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
          from-white/20
          to-transparent

          sm:h-28
        "
      />
    </section>
  );
}