"use client";

import { Heart } from "lucide-react";
import { motion } from "motion/react";

type HeartCurtainProps = {
  start: boolean;
  onOpened?: () => void;
};

export default function HeartCurtain({
  start,
  onOpened,
}: HeartCurtainProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={
        start
          ? {
              opacity: 0,
              pointerEvents: "none",
            }
          : {
              opacity: 1,
            }
      }
      transition={{
        opacity: {
          delay: 1.75,
          duration: 0.35,
        },
      }}
      onAnimationComplete={() => {
        if (start) {
          onOpened?.();
        }
      }}
      className="
        pointer-events-none
        absolute
        inset-0
        z-[50]
        overflow-hidden
      "
    >
      {/* ========================================
          CÁNH TRÁI
      ======================================== */}

      <motion.div
        initial={{
          x: "0%",
        }}
        animate={
          start
            ? {
                x: "-105%",
              }
            : {
                x: "0%",
              }
        }
        transition={{
          delay: 0.72,
          duration: 1.15,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          absolute
          inset-y-0
          left-0
          w-1/2
          overflow-hidden

          border-r
          border-[#BDAA98]/30

          bg-gradient-to-br
          from-[#FAF7F1]
          via-[#F1E7DC]
          to-[#E7D6C7]

          shadow-[20px_0_70px_rgba(73,54,40,0.08)]
        "
      >
        {/* ánh sáng */}
        <div
          className="
            absolute
            -right-[30%]
            top-1/2

            h-[70vh]
            w-[70vh]

            -translate-y-1/2

            rounded-full

            bg-white/50

            blur-[100px]
          "
        />

        {/* hoa văn mờ */}
        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.65),transparent_45%)]
          "
        />

        {/* line trang trí */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            start
              ? {
                  opacity: [0, 0.5, 0],
                }
              : {
                  opacity: 0.35,
                }
          }
          transition={{
            duration: 1.3,
          }}
          className="
            absolute
            right-7
            top-[15%]

            h-[70%]
            w-px

            bg-gradient-to-b
            from-transparent
            via-[#BBA590]/50
            to-transparent
          "
        />
      </motion.div>

      {/* ========================================
          CÁNH PHẢI
      ======================================== */}

      <motion.div
        initial={{
          x: "0%",
        }}
        animate={
          start
            ? {
                x: "105%",
              }
            : {
                x: "0%",
              }
        }
        transition={{
          delay: 0.72,
          duration: 1.15,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          absolute
          inset-y-0
          right-0
          w-1/2
          overflow-hidden

          border-l
          border-[#BDAA98]/30

          bg-gradient-to-bl
          from-[#FAF7F1]
          via-[#F1E7DC]
          to-[#E7D6C7]

          shadow-[-20px_0_70px_rgba(73,54,40,0.08)]
        "
      >
        {/* ánh sáng */}
        <div
          className="
            absolute
            -left-[30%]
            top-1/2

            h-[70vh]
            w-[70vh]

            -translate-y-1/2

            rounded-full

            bg-white/50

            blur-[100px]
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.65),transparent_45%)]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            start
              ? {
                  opacity: [0, 0.5, 0],
                }
              : {
                  opacity: 0.35,
                }
          }
          transition={{
            duration: 1.3,
          }}
          className="
            absolute
            left-7
            top-[15%]

            h-[70%]
            w-px

            bg-gradient-to-b
            from-transparent
            via-[#BBA590]/50
            to-transparent
          "
        />
      </motion.div>

      {/* ========================================
          TRÁI TIM TRUNG TÂM
      ======================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.65,
          filter: "blur(4px)",
        }}
        animate={
          start
            ? {
                opacity: [0, 1, 1, 0],
                scale: [0.65, 1, 1.08, 1.5],
                filter: [
                  "blur(4px)",
                  "blur(0px)",
                  "blur(0px)",
                  "blur(8px)",
                ],
              }
            : {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }
        }
        transition={{
          duration: 1.45,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2

          z-[60]

          flex
          -translate-x-1/2
          -translate-y-1/2

          items-center
          justify-center
        "
      >
        {/* glow */}
        <motion.div
          animate={
            start
              ? {
                  scale: [0.7, 1.3, 1.8],
                  opacity: [0, 0.25, 0],
                }
              : {
                  scale: 1,
                  opacity: 0.15,
                }
          }
          transition={{
            duration: 1.4,
          }}
          className="
            absolute

            h-36
            w-36

            rounded-full

            bg-[#D9BDA8]/40

            blur-3xl

            sm:h-44
            sm:w-44
          "
        />

        <motion.div
          animate={
            start
              ? {
                  scale: [1, 1.12, 1],
                }
              : undefined
          }
          transition={{
            duration: 0.7,
            repeat: start ? 1 : 0,
            ease: "easeInOut",
          }}
          className="
            relative

            flex
            h-[82px]
            w-[82px]

            items-center
            justify-center

            rounded-full

            border
            border-[#B79E89]/40

            bg-white/45

            shadow-[0_15px_50px_rgba(96,68,49,0.12)]

            backdrop-blur-xl

            sm:h-[96px]
            sm:w-[96px]
          "
        >
          <Heart
            strokeWidth={1.25}
            className="
              h-10
              w-10

              text-[#A88870]

              sm:h-12
              sm:w-12
            "
          />
        </motion.div>
      </motion.div>

      {/* ========================================
          TEXT NHỎ
      ======================================== */}

      <motion.p
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={
          start
            ? {
                opacity: [0, 1, 1, 0],
                y: [10, 0, 0, -8],
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          duration: 1.3,
        }}
        className="
          absolute
          left-1/2
          top-[calc(50%+75px)]

          z-[60]

          -translate-x-1/2

          whitespace-nowrap

          text-[10px]
          font-semibold
          uppercase

          tracking-[0.3em]

          text-[#7A685B]

          sm:text-xs
        "
      >
        Câu chuyện bắt đầu
      </motion.p>
    </motion.div>
  );
}