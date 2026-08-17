"use client";

import {
  Heart,
} from "lucide-react";

import {
  motion,
} from "motion/react";

import {
  wedding,
} from "@/data/wedding";

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
      initial={{
        opacity: 1,
      }}
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
          delay: 1.9,
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
      {/* =====================================================
          CÁNH TRÁI
      ===================================================== */}

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
          delay: 0.62,
          duration: 1.22,
          ease: [
            0.76,
            0,
            0.24,
            1,
          ],
        }}
        className="
          wedding-curtain-left
          border-wedding-light

          absolute
          inset-y-0
          left-0

          w-1/2

          overflow-hidden

          border-r

          shadow-[20px_0_80px_rgba(62,93,105,0.09)]
        "
      >
        {/* ÁNH SÁNG */}

        <div
          className="
            absolute

            -right-[32%]
            top-1/2

            h-[75vh]
            w-[75vh]

            -translate-y-1/2

            rounded-full

            bg-white/65

            blur-[110px]
          "
        />

        {/* XANH NƯỚC BIỂN */}

        <motion.div
          animate={{
            scale: [
              1,
              1.08,
              1,
            ],

            opacity: [
              0.28,
              0.5,
              0.28,
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            wedding-glow-blue

            absolute

            -left-[35%]
            -top-[18%]

            h-[65vh]
            w-[65vh]

            rounded-full

            blur-[120px]
          "
        />

        {/* HỒNG HOA */}

        <motion.div
          animate={{
            scale: [
              1,
              1.12,
              1,
            ],

            x: [
              0,
              12,
              0,
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            wedding-glow-pink

            absolute

            -bottom-[22%]
            left-[5%]

            h-[48vh]
            w-[48vh]

            rounded-full

            blur-[105px]
          "
        />

        {/* ÁNH TRẮNG */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_82%_50%,rgba(255,255,255,0.82),transparent_43%)]
          "
        />

        {/* LINE */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            start
              ? {
                  opacity: [
                    0,
                    0.65,
                    0,
                  ],
                }
              : {
                  opacity: 0.4,
                }
          }
          transition={{
            duration: 1.35,
          }}
          className="
            wedding-divider-right

            absolute

            right-6
            top-[14%]

            h-[72%]
            w-px

            sm:right-8
          "
        />

        {/* HEART DECORATION */}

        <motion.span
          animate={{
            y: [
              0,
              -12,
              0,
            ],

            rotate: [
              -6,
              4,
              -6,
            ],

            opacity: [
              0.12,
              0.24,
              0.12,
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            text-wedding-blue

            absolute

            bottom-[18%]
            left-[16%]

            hidden

            font-editorial

            text-6xl

            md:block
          "
        >
          ♡
        </motion.span>
      </motion.div>

      {/* =====================================================
          CÁNH PHẢI
      ===================================================== */}

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
          delay: 0.62,
          duration: 1.22,
          ease: [
            0.76,
            0,
            0.24,
            1,
          ],
        }}
        className="
          wedding-curtain-right
          border-wedding-light

          absolute
          inset-y-0
          right-0

          w-1/2

          overflow-hidden

          border-l

          shadow-[-20px_0_80px_rgba(62,93,105,0.09)]
        "
      >
        {/* ÁNH SÁNG */}

        <div
          className="
            absolute

            -left-[32%]
            top-1/2

            h-[75vh]
            w-[75vh]

            -translate-y-1/2

            rounded-full

            bg-white/65

            blur-[110px]
          "
        />

        {/* XANH KEM */}

        <motion.div
          animate={{
            scale: [
              1,
              1.08,
              1,
            ],

            opacity: [
              0.3,
              0.5,
              0.3,
            ],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            wedding-glow-green

            absolute

            -right-[28%]
            -top-[18%]

            h-[60vh]
            w-[60vh]

            rounded-full

            blur-[115px]
          "
        />

        {/* HỒNG HOA */}

        <motion.div
          animate={{
            scale: [
              1,
              1.1,
              1,
            ],

            x: [
              0,
              -12,
              0,
            ],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            wedding-glow-pink

            absolute

            -bottom-[22%]
            right-[2%]

            h-[50vh]
            w-[50vh]

            rounded-full

            blur-[110px]
          "
        />

        {/* ÁNH TRẮNG */}

        <div
          className="
            absolute
            inset-0

            bg-[radial-gradient(circle_at_18%_50%,rgba(255,255,255,0.82),transparent_43%)]
          "
        />

        {/* LINE */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            start
              ? {
                  opacity: [
                    0,
                    0.65,
                    0,
                  ],
                }
              : {
                  opacity: 0.4,
                }
          }
          transition={{
            duration: 1.35,
          }}
          className="
            wedding-divider-left

            absolute

            left-6
            top-[14%]

            h-[72%]
            w-px

            sm:left-8
          "
        />

        {/* HEART DECORATION */}

        <motion.span
          animate={{
            y: [
              0,
              -14,
              0,
            ],

            rotate: [
              6,
              -4,
              6,
            ],

            opacity: [
              0.12,
              0.26,
              0.12,
            ],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            text-wedding-rose

            absolute

            right-[16%]
            top-[20%]

            hidden

            font-editorial

            text-7xl

            md:block
          "
        >
          ♡
        </motion.span>
      </motion.div>

      {/* =====================================================
          ĐƯỜNG SÁNG GIỮA
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0.35,
          scaleY: 0.6,
        }}
        animate={
          start
            ? {
                opacity: [
                  0.35,
                  0.95,
                  0,
                ],

                scaleY: [
                  0.6,
                  1,
                  1.2,
                ],
              }
            : {
                opacity: 0.35,
                scaleY: 0.7,
              }
        }
        transition={{
          duration: 1.3,
          ease: "easeInOut",
        }}
        className="
          absolute

          left-1/2
          top-[8%]

          z-[55]

          h-[84%]
          w-px

          -translate-x-1/2

          bg-gradient-to-b
          from-transparent
          via-white
          to-transparent

          shadow-[0_0_25px_rgba(255,255,255,0.9)]
        "
      />

      {/* =====================================================
          TRÁI TIM TRUNG TÂM
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.65,
          filter: "blur(4px)",
        }}
        animate={
          start
            ? {
                opacity: [
                  0,
                  1,
                  1,
                  0,
                ],

                scale: [
                  0.65,
                  1,
                  1.08,
                  1.5,
                ],

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
          duration: 1.55,

          times: [
            0,
            0.12,
            0.72,
            1,
          ],

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
        {/* =================================================
            GLOW XANH
        ================================================= */}

        <motion.div
          animate={
            start
              ? {
                  scale: [
                    0.7,
                    1.35,
                    1.9,
                  ],

                  opacity: [
                    0,
                    0.38,
                    0,
                  ],
                }
              : {
                  scale: 1,
                  opacity: 0.18,
                }
          }
          transition={{
            duration: 1.5,
          }}
          className="
            wedding-glow-blue

            absolute

            h-40
            w-40

            rounded-full

            blur-3xl

            sm:h-52
            sm:w-52
          "
        />

        {/* =================================================
            GLOW HỒNG
        ================================================= */}

        <motion.div
          animate={
            start
              ? {
                  scale: [
                    0.6,
                    1.2,
                    1.65,
                  ],

                  opacity: [
                    0,
                    0.28,
                    0,
                  ],
                }
              : {
                  scale: 1,
                  opacity: 0.12,
                }
          }
          transition={{
            duration: 1.55,
          }}
          className="
            wedding-glow-pink

            absolute

            h-32
            w-32

            translate-x-4
            translate-y-4

            rounded-full

            blur-3xl

            sm:h-40
            sm:w-40
          "
        />

        {/* =================================================
            VÒNG TIM
        ================================================= */}

        <motion.div
          animate={
            start
              ? {
                  scale: [
                    1,
                    1.12,
                    1,
                  ],
                }
              : undefined
          }
          transition={{
            duration: 0.75,
            repeat: start
              ? 1
              : 0,
            ease: "easeInOut",
          }}
          className="
            glass-wedding
            border-wedding-soft

            relative

            flex

            h-[84px]
            w-[84px]

            items-center
            justify-center

            rounded-full

            border

            sm:h-[102px]
            sm:w-[102px]
          "
        >
          {/* INNER RING */}

          <div
            className="
              border-wedding-white

              pointer-events-none

              absolute
              inset-[5px]

              rounded-full

              border
            "
          />

          {/* HEART */}

          <motion.div
            animate={{
              scale: [
                1,
                1.12,
                1,
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart
              strokeWidth={1.15}
              className="
                text-wedding-rose

                h-10
                w-10

                sm:h-12
                sm:w-12
              "
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* =====================================================
          NỘI DUNG
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={
          start
            ? {
                opacity: [
                  0,
                  1,
                  1,
                  0,
                ],

                y: [
                  8,
                  0,
                  0,
                  -6,
                ],
              }
            : {
                opacity: 0,
              }
        }
        transition={{
          duration: 1.55,

          times: [
            0,
            0.1,
            0.78,
            1,
          ],

          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        className="
          absolute

          left-1/2
          top-[calc(50%+70px)]

          z-[60]

          w-[90%]
          max-w-xl

          -translate-x-1/2

          text-center

          sm:top-[calc(50%+86px)]
        "
      >
        {/* =================================================
            EYEBROW
        ================================================= */}

        <p
          className="
            text-wedding-blue

            text-[8px]
            font-semibold

            uppercase

            tracking-[0.28em]

            sm:text-[10px]
          "
        >
          {wedding.curtain.eyebrow}
        </p>

        {/* =================================================
            TITLE
        ================================================= */}

        <p
          className="
            font-editorial
            text-wedding-primary

            mt-1

            text-[clamp(1.45rem,3vw,2.1rem)]

            font-medium

            leading-none

            tracking-[-0.02em]
          "
        >
          {wedding.curtain.title}
        </p>

        {/* =================================================
            SUBTITLE
        ================================================= */}

        <p
          className="
            font-script
            text-wedding-rose

            mt-1

            text-[clamp(1.15rem,2.4vw,1.65rem)]

            leading-none
          "
        >
          {wedding.curtain.subtitle}
        </p>
      </motion.div>
    </motion.div>
  );
}