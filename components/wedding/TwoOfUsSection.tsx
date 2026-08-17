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

export default function TwoOfUsSection() {
  const sectionRef =
    useRef<HTMLElement>(null);

  /* =====================================================
      SCROLL PROGRESS
  ===================================================== */

  const {
    scrollYProgress,
  } = useScroll({
    target: sectionRef,

    offset: [
      "start end",
      "center center",
    ],
  });

  /* =====================================================
      CHÚ RỂ
      TỪ TRÁI ĐI VÀO
  ===================================================== */

  const groomX =
    useTransform(
      scrollYProgress,
      [0, 1],
      [-45, 0],
    );

  const groomRotate =
    useTransform(
      scrollYProgress,
      [0, 1],
      [-1.2, 0],
    );

  /* =====================================================
      CÔ DÂU
      TỪ PHẢI ĐI VÀO
  ===================================================== */

  const brideX =
    useTransform(
      scrollYProgress,
      [0, 1],
      [45, 0],
    );

  const brideRotate =
    useTransform(
      scrollYProgress,
      [0, 1],
      [1.2, 0],
    );

  /* =====================================================
      ZOOM NHẸ
  ===================================================== */

  const imageScale =
    useTransform(
      scrollYProgress,
      [0, 1],
      [0.97, 1],
    );

  return (
    <section
      ref={sectionRef}
      id="two-of-us"
      className="
         bg-wedding-pearl
  wedding-section

        relative

        overflow-hidden

        px-5
        py-16

        sm:px-7
        sm:py-20

        md:px-10

        lg:px-12
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div
        className="
          wedding-glow-blue

          pointer-events-none

          absolute

          -left-[20%]
          top-[8%]

          h-[38rem]
          w-[38rem]

          rounded-full

          opacity-50

          blur-[135px]
        "
      />

      <div
        className="
          wedding-glow-pink

          pointer-events-none

          absolute

          -right-[20%]
          bottom-[4%]

          h-[38rem]
          w-[38rem]

          rounded-full

          opacity-45

          blur-[135px]
        "
      />

      <div
        className="
          wedding-glow-green

          pointer-events-none

          absolute

          left-1/2
          top-[45%]

          h-[28rem]
          w-[28rem]

          -translate-x-1/2

          rounded-full

          opacity-30

          blur-[130px]
        "
      />

      {/* =====================================================
          HEART LAYER
      ===================================================== */}

      <HeartLayer
        density="low"
      />

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
            y: 24,
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
            duration: 0.85,

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
          >
            <motion.span
              animate={{
                scale: [
                  1,
                  1.15,
                  1,
                ],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                text-wedding-rose

                inline-block

                text-2xl
              "
            >
              ♡
            </motion.span>
          </motion.div>

          {/* EYEBROW */}

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
              delay: 0.06,
              duration: 0.7,
            }}
            className="
              text-wedding-blue

              mt-2

              text-[10px]
              font-semibold

              uppercase

              tracking-[0.32em]

              sm:text-xs
            "
          >
            {
              wedding.couple
                .eyebrow
            }
          </motion.p>

          {/* TITLE */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 18,
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
              delay: 0.12,
              duration: 0.9,
            }}
            className="
              font-editorial
              text-wedding-primary

              mt-2

              text-[clamp(3.2rem,9vw,7rem)]

              font-medium

              leading-[0.9]

              tracking-[-0.04em]
            "
          >
            {
              wedding.couple
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
              delay: 0.22,
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
              delay: 0.3,
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
              wedding.couple
                .description
            }
          </motion.p>
        </motion.div>

        {/* =================================================
            HAI NGƯỜI
        ================================================= */}

        <div
          className="
            relative

            mt-10

            grid

            items-start

            gap-11

            sm:mt-12

            md:grid-cols-2
            md:gap-8

            lg:mt-16
            lg:gap-12
          "
        >
          {/* =================================================
              CHÚ RỂ
          ================================================= */}

          <motion.div
            style={{
              x:
                groomX,

              rotate:
                groomRotate,

              scale:
                imageScale,
            }}
            className="
              relative
              z-10
            "
          >
            {/* PHOTO */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                wedding-photo-frame

                group
                relative

                mx-auto

                aspect-[4/5]

                w-full
                max-w-[500px]

                rounded-[1.5rem]

                sm:rounded-[1.8rem]

                lg:rounded-[2rem]
              "
            >
              <div
                className="
                  absolute
                  inset-0

                  overflow-hidden

                  rounded-[inherit]
                "
              >
                <Image
                  src={
                    wedding.couple
                      .groomImage
                  }
                  alt={`${wedding.couple.groomLabel} ${wedding.groom}`}
                  fill
                  sizes="
                    (max-width: 768px)
                    100vw,
                    50vw
                  "
                  className="
                    object-cover
                    object-center

                    transition-transform
                    duration-[1400ms]

                    ease-out

                    group-hover:scale-[1.035]
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-t

                    from-black/15
                    via-transparent
                    to-white/[0.05]
                  "
                />

                {/* LIGHT */}

                <div
                  className="
                    pointer-events-none

                    absolute

                    -left-[20%]
                    -top-[15%]

                    h-[45%]
                    w-[60%]

                    rounded-full

                    bg-white/15

                    blur-[70px]
                  "
                />
              </div>

              {/* HEART GÓC ẢNH */}

              <motion.span
                animate={{
                  scale: [
                    1,
                    1.12,
                    1,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  text-wedding-blue

                  absolute

                  -bottom-3
                  -right-2

                  z-30

                  flex

                  h-9
                  w-9

                  items-center
                  justify-center

                  rounded-full

                  bg-white/80

                  text-sm

                  shadow-wedding-soft

                  backdrop-blur-lg

                  sm:h-10
                  sm:w-10
                "
              >
                ♡
              </motion.span>
            </motion.div>

            {/* GROOM INFO */}

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
                delay: 0.18,
                duration: 0.75,
              }}
              className="
                mt-5

                text-center

                sm:mt-6
              "
            >
              <p
                className="
                  text-wedding-blue

                  text-[10px]
                  font-semibold

                  uppercase

                  tracking-[0.32em]

                  sm:text-xs
                "
              >
                {
                  wedding.couple
                    .groomLabel
                }
              </p>

              <h3
                className="
                  font-editorial
                  text-wedding-primary

                  mt-1

                  text-4xl

                  font-medium

                  tracking-[-0.025em]

                  sm:text-5xl

                  lg:text-6xl
                "
              >
                {
                  wedding.groom
                }
              </h3>
            </motion.div>
          </motion.div>

          {/* =================================================
              HEART GIỮA - DESKTOP
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
            }}
            transition={{
              delay: 0.4,
              duration: 0.75,
            }}
            className="
              wedding-heart-glass

              pointer-events-none

              absolute

              left-1/2
              top-[42%]

              z-20

              hidden

              h-16
              w-16

              -translate-x-1/2
              -translate-y-1/2

              items-center
              justify-center

              rounded-full

              md:flex

              lg:h-[74px]
              lg:w-[74px]
            "
          >
            <motion.span
              animate={{
                scale: [
                  1,
                  1.16,
                  1,
                ],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                text-wedding-rose

                text-2xl

                lg:text-3xl
              "
            >
              ♡
            </motion.span>
          </motion.div>

          {/* =================================================
              CÔ DÂU
          ================================================= */}

          <motion.div
            style={{
              x:
                brideX,

              rotate:
                brideRotate,

              scale:
                imageScale,
            }}
            className="
              relative
              z-10
            "
          >
            {/* PHOTO */}

            <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                wedding-photo-frame
                wedding-photo-frame-bride

                group
                relative

                mx-auto

                aspect-[4/5]

                w-full
                max-w-[500px]

                rounded-[1.5rem]

                sm:rounded-[1.8rem]

                lg:rounded-[2rem]
              "
            >
              <div
                className="
                  absolute
                  inset-0

                  overflow-hidden

                  rounded-[inherit]
                "
              >
                <Image
                  src={
                    wedding.couple
                      .brideImage
                  }
                  alt={`${wedding.couple.brideLabel} ${wedding.bride}`}
                  fill
                  sizes="
                    (max-width: 768px)
                    100vw,
                    50vw
                  "
                  className="
                    object-cover
                    object-center

                    transition-transform
                    duration-[1400ms]

                    ease-out

                    group-hover:scale-[1.035]
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-t

                    from-black/15
                    via-transparent
                    to-white/[0.05]
                  "
                />

                {/* LIGHT */}

                <div
                  className="
                    pointer-events-none

                    absolute

                    -right-[20%]
                    -top-[15%]

                    h-[45%]
                    w-[60%]

                    rounded-full

                    bg-white/15

                    blur-[70px]
                  "
                />
              </div>

              {/* HEART GÓC ẢNH */}

              <motion.span
                animate={{
                  scale: [
                    1,
                    1.12,
                    1,
                  ],
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  text-wedding-rose

                  absolute

                  -bottom-3
                  -left-2

                  z-30

                  flex

                  h-9
                  w-9

                  items-center
                  justify-center

                  rounded-full

                  bg-white/80

                  text-sm

                  shadow-wedding-soft

                  backdrop-blur-lg

                  sm:h-10
                  sm:w-10
                "
              >
                ♡
              </motion.span>
            </motion.div>

            {/* BRIDE INFO */}

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
                delay: 0.24,
                duration: 0.75,
              }}
              className="
                mt-5

                text-center

                sm:mt-6
              "
            >
              <p
                className="
                  text-wedding-rose

                  text-[10px]
                  font-semibold

                  uppercase

                  tracking-[0.32em]

                  sm:text-xs
                "
              >
                {
                  wedding.couple
                    .brideLabel
                }
              </p>

              <h3
                className="
                  font-editorial
                  text-wedding-primary

                  mt-1

                  text-4xl

                  font-medium

                  tracking-[-0.025em]

                  sm:text-5xl

                  lg:text-6xl
                "
              >
                {
                  wedding.bride
                }
              </h3>
            </motion.div>
          </motion.div>
        </div>

        {/* =================================================
            QUOTE
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

            mt-12

            max-w-4xl

            text-center

            sm:mt-14

            lg:mt-[72px]
          "
        >
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
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              text-wedding-rose

              mb-4

              text-xl
            "
          >
            ♡
          </motion.div>

          {/* QUOTE */}

          <blockquote
            className="
    font-editorial
    text-wedding-primary

    font-medium

    leading-[1.16]

    tracking-[-0.03em]
  "
          >
            {/* =========================================
      MOBILE
      Giữ cách xuống dòng tự nhiên như hiện tại
  ========================================= */}

            <span
              className="
      block

      text-[clamp(2rem,9vw,3rem)]

      md:hidden
    "
            >
              “{wedding.couple.quoteLines.join(" ")}”
            </span>

            {/* =========================================
      TABLET / DESKTOP
      CỐ ĐỊNH ĐÚNG 2 DÒNG
  ========================================= */}

            <span
              className="
      hidden

      text-[clamp(2.6rem,4.2vw,3.8rem)]

      md:block
    "
            >
              <span
                className="
        block
        whitespace-nowrap
      "
              >
                “{wedding.couple.quoteLines[0]}
              </span>

              <span
                className="
        block
        whitespace-nowrap
      "
              >
                {wedding.couple.quoteLines[1]}”
              </span>
            </span>
          </blockquote>

          {/* DIVIDER */}

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
                w-8
              "
            />

            <span
              className="
                text-wedding-rose

                text-[10px]
              "
            >
              ♡
            </span>

            <span
              className="
                wedding-divider-right

                h-px
                w-8
              "
            />
          </motion.div>

          {/* CLOSING */}

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
              delay: 0.26,
              duration: 0.75,
            }}
            className="
              text-wedding-soft

              mx-auto

              mt-4

              max-w-xl

              text-sm
              font-medium

              leading-7

              sm:text-base
            "
          >
            {
              wedding.couple
                .closing
            }
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}