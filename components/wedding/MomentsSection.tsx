"use client";

import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  useRef,
  useState,
} from "react";

import {
  ZoomIn,
} from "lucide-react";

import {
  wedding,
} from "@/data/wedding";

import HeartLayer from "./HeartLayer";
import ImageLightbox from "./ImageLightbox";

export default function MomentsSection() {
  const firstRef =
    useRef<HTMLDivElement>(null);

  const togetherRef =
    useRef<HTMLDivElement>(null);

  /* =====================================================
      LIGHTBOX
  ===================================================== */

  const [
    lightboxOpen,
    setLightboxOpen,
  ] = useState(false);

  const [
    lightboxIndex,
    setLightboxIndex,
  ] = useState(0);

  const momentImages = [
    {
      src:
        wedding.moments.first.image,

      alt:
        wedding.moments.first.alt,

      title:
        wedding.moments.first
          .lightboxTitle,
    },

    ...wedding.moments.little.images,

    {
      src:
        wedding.moments.together.image,

      alt:
        wedding.moments.together.alt,

      title:
        wedding.moments.together
          .lightboxTitle,
    },
  ];

  function openLightbox(
    index: number,
  ) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  /* =====================================================
      MOMENT 01 - PARALLAX

      QUAN TRỌNG:
      Không di chuyển toàn bộ button nữa.
      Chỉ di chuyển layer ảnh overscan bên trong.
  ===================================================== */

  const {
    scrollYProgress:
    firstProgress,
  } = useScroll({
    target: firstRef,

    offset: [
      "start end",
      "end start",
    ],
  });

  const firstScale =
    useTransform(
      firstProgress,
      [0, 0.5, 1],
      [1.06, 1, 1.05],
    );

  const firstY =
    useTransform(
      firstProgress,
      [0, 1],
      ["-2.5%", "2.5%"],
    );

  /* =====================================================
      MOMENT 03 - PARALLAX
  ===================================================== */

  const {
    scrollYProgress:
    togetherProgress,
  } = useScroll({
    target: togetherRef,

    offset: [
      "start end",
      "end start",
    ],
  });

  const togetherScale =
    useTransform(
      togetherProgress,
      [0, 0.5, 1],
      [1.05, 1, 1.05],
    );

  const togetherY =
    useTransform(
      togetherProgress,
      [0, 1],
      ["-2.5%", "2.5%"],
    );

  return (
    <>
      <section
        id="our-moments"
        className="
           bg-wedding-sage
  wedding-section
          relative

          -mt-px

          overflow-hidden
        "
      >
        {/* =================================================
            MOMENT 01
            KHOẢNH KHẮC ĐẦU TIÊN
        ================================================= */}

        <div
          ref={firstRef}
          className="
            relative

            min-h-[100svh]

            overflow-hidden

            bg-wedding

            md:min-h-dvh
          "
        >
          {/* =============================================
              FULLSCREEN IMAGE BUTTON
          ============================================= */}

          <button
            type="button"
            onClick={() =>
              openLightbox(0)
            }
            aria-label={
              wedding.moments.first
                .lightboxTitle
            }
            className="
              group

              absolute
              inset-0

              z-0

              cursor-zoom-in

              overflow-hidden
            "
          >
            {/* =========================================
                OVERSCAN IMAGE

                Layer lớn hơn section để khi
                parallax không bị lộ viền đen.
            ========================================= */}

            <motion.div
              style={{
                scale:
                  firstScale,

                y:
                  firstY,
              }}
              className="
                absolute

                -inset-y-[8%]
                inset-x-0
              "
            >
              <Image
                src={
                  wedding.moments.first
                    .image
                }
                alt={
                  wedding.moments.first
                    .alt
                }
                fill
                priority
                sizes="100vw"
                className="
                  object-cover
                  object-center

                  transition-transform

                  duration-[1600ms]

                  ease-out

                  group-hover:scale-[1.012]
                "
              />
            </motion.div>

            <ZoomButton
              large
            />
          </button>

          {/* =============================================
              CINEMATIC OVERLAY
          ============================================= */}

          <div
            className="
              pointer-events-none

              absolute
              inset-0

              z-[1]

              bg-gradient-to-b

              from-black/[0.03]
              via-black/[0.08]
              to-black/50
            "
          />

          {/* =============================================
              TRANSITION LIGHT

              Không để đầu ảnh bị cắt cứng.
          ============================================= */}

          <div
            className="
              pointer-events-none

              absolute
              inset-x-0
              top-0

              z-[2]

              h-24

              bg-gradient-to-b

              from-white/[0.06]
              to-transparent
            "
          />

          {/* =============================================
              WEDDING COLOR
          ============================================= */}

          <div
            className="
              wedding-glow-blue

              pointer-events-none

              absolute

              -left-[24%]
              top-[4%]

              z-[2]

              h-[56vw]
              w-[56vw]

              rounded-full

              opacity-20

              blur-[145px]
            "
          />

          <div
            className="
              wedding-glow-pink

              pointer-events-none

              absolute

              -bottom-[24%]
              -right-[16%]

              z-[2]

              h-[52vw]
              w-[52vw]

              rounded-full

              opacity-20

              blur-[145px]
            "
          />

          <HeartLayer
            density="low"
          />

          {/* =============================================
              CONTENT
          ============================================= */}

          <div
            className="
              pointer-events-none

              relative

              z-10

              flex

              min-h-[100svh]

              items-end

              px-5

              pb-14
              pt-24

              sm:px-8
              sm:pb-16

              md:min-h-dvh
              md:px-12
              md:pb-20

              lg:px-16
              lg:pb-24
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
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
                duration: 1,

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                max-w-3xl

                text-white
              "
            >
              {/* =========================================
                  LABEL
              ========================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -16,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.05,
                  duration: 0.75,
                }}
                className="
                  mb-4

                  flex

                  items-center

                  gap-3
                "
              >
                <span
                  className="
                    h-px

                    w-8

                    bg-gradient-to-r
                    from-white/90
                    to-white/20

                    sm:w-12
                  "
                />

                <p
                  className="
                    text-[10px]

                    font-semibold

                    uppercase

                    tracking-[0.28em]

                    text-white/90

                    sm:text-xs
                  "
                >
                  {
                    wedding.moments.first
                      .eyebrow
                  }

                  {" · "}

                  {
                    wedding.moments.first
                      .number
                  }
                </p>
              </motion.div>

              {/* =========================================
                  TITLE
              ========================================= */}

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 18,
                  filter:
                    "blur(6px)",
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

                  text-[clamp(3.3rem,10vw,7.5rem)]

                  font-medium

                  leading-[0.88]

                  tracking-[-0.04em]

                  drop-shadow-[0_5px_24px_rgba(0,0,0,0.25)]
                "
              >
                {
                  wedding.moments.first
                    .title
                }
              </motion.h2>

              {/* =========================================
                  DESCRIPTION
              ========================================= */}

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
                  delay: 0.2,
                  duration: 0.85,
                }}
                className="
                  font-editorial

                  mt-5

                  max-w-xl

                  text-[clamp(1.2rem,2.4vw,1.65rem)]

                  font-medium
                  italic

                  leading-[1.35]

                  text-white/95

                  drop-shadow-[0_3px_14px_rgba(0,0,0,0.4)]
                "
              >
                “{
                  wedding.moments.first
                    .text
                }”
              </motion.p>

              {/* HEART */}

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
                  ease:
                    "easeInOut",
                }}
                className="
                  text-wedding-rose

                  mt-5

                  inline-block

                  text-xl
                "
              >
                ♡
              </motion.span>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            MOMENT 02
            NHỮNG ĐIỀU NHỎ BÉ
        ================================================= */}

        <div
          className="
            bg-wedding

            relative

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
          {/* =============================================
              BACKGROUND GLOW
          ============================================= */}

          <div
            className="
              wedding-glow-blue

              pointer-events-none

              absolute

              -left-[20%]
              top-[10%]

              h-[38rem]
              w-[38rem]

              rounded-full

              opacity-40

              blur-[135px]
            "
          />

          <div
            className="
              wedding-glow-pink

              pointer-events-none

              absolute

              -right-[20%]
              bottom-[5%]

              h-[34rem]
              w-[34rem]

              rounded-full

              opacity-35

              blur-[135px]
            "
          />

          <div
            className="
              wedding-glow-green

              pointer-events-none

              absolute

              left-1/2
              top-[48%]

              h-[28rem]
              w-[28rem]

              -translate-x-1/2

              rounded-full

              opacity-25

              blur-[130px]
            "
          />

          <HeartLayer
            density="low"
          />

          <div
            className="
              relative
              z-10

              mx-auto

              max-w-7xl
            "
          >
            {/* =========================================
                HEADER
            ========================================= */}

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
                amount: 0.3,
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
                  repeat: Infinity,
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

              <p
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
                  wedding.moments.little
                    .eyebrow
                }

                {" · "}

                {
                  wedding.moments.little
                    .number
                }
              </p>

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
                  delay: 0.08,
                  duration: 0.95,
                }}
                className="
                  font-editorial
                  text-wedding-primary

                  mt-3

                  text-[clamp(3.2rem,9vw,7rem)]

                  font-medium

                  leading-[0.9]

                  tracking-[-0.04em]
                "
              >
                {
                  wedding.moments.little
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
                  delay: 0.18,
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
                  delay: 0.25,
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
                  wedding.moments.little
                    .text
                }
              </motion.p>
            </motion.div>

            {/* =========================================
                EDITORIAL PHOTO GROUP
            ========================================= */}

            <div
              className="
                mt-10

                grid

                gap-7

                sm:mt-12
                sm:grid-cols-2

                lg:mt-16
                lg:grid-cols-12
                lg:gap-8
              "
            >
              {/* PHOTO 1 */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -42,
                  filter:
                    "blur(7px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  filter:
                    "blur(0px)",
                }}
                viewport={{
                  once: true,
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
                  wedding-photo-frame

                  relative

                  aspect-[4/5]

                  rounded-[1.5rem]

                  sm:col-span-1
                  sm:rounded-[1.8rem]

                  lg:col-span-4
                "
              >
                <MomentPhoto
                  image={
                    wedding.moments
                      .little.images[0]
                  }
                  onClick={() =>
                    openLightbox(1)
                  }
                />
              </motion.div>

              {/* PHOTO 2 */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 45,
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
                }}
                transition={{
                  delay: 0.12,
                  duration: 1.05,

                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="
                  wedding-photo-frame
                  wedding-photo-frame-bride

                  relative

                  aspect-[4/5]

                  rounded-[1.5rem]

                  sm:rounded-[1.8rem]

                  lg:col-span-5
                "
              >
                <MomentPhoto
                  image={
                    wedding.moments
                      .little.images[1]
                  }
                  onClick={() =>
                    openLightbox(2)
                  }
                />
              </motion.div>

              {/* PHOTO 3 */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 42,
                  filter:
                    "blur(7px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  filter:
                    "blur(0px)",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                  duration: 1,

                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                className="
                  wedding-photo-frame

                  relative

                  aspect-[4/5]

                  rounded-[1.5rem]

                  sm:col-span-2
                  sm:rounded-[1.8rem]

                  lg:col-span-3
                "
              >
                <MomentPhoto
                  image={
                    wedding.moments
                      .little.images[2]
                  }
                  onClick={() =>
                    openLightbox(3)
                  }
                />
              </motion.div>
            </div>

            {/* =========================================
                QUOTE
            ========================================= */}

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
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
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
                  ease:
                    "easeInOut",
                }}
                className="
                  text-wedding-rose

                  mb-3

                  inline-block

                  text-lg
                "
              >
                ♡
              </motion.span>

              <p
                className="
                  font-editorial
                  text-wedding-primary

                  text-[clamp(2rem,4vw,3rem)]

                  font-medium

                  leading-[1.22]

                  tracking-[-0.025em]
                "
              >
                “{
                  wedding.moments.little
                    .quote
                }”
              </p>
            </motion.div>
          </div>
        </div>

        {/* =================================================
            MOMENT 03
            BÊN NHAU
        ================================================= */}

        <div
          ref={togetherRef}
          className="
            relative

            min-h-[100svh]

            overflow-hidden

            bg-wedding

            md:min-h-dvh
          "
        >
          {/* =============================================
              IMAGE BUTTON
          ============================================= */}

          <button
            type="button"
            onClick={() =>
              openLightbox(4)
            }
            aria-label={
              wedding.moments.together
                .lightboxTitle
            }
            className="
              group

              absolute
              inset-0

              z-0

              cursor-zoom-in

              overflow-hidden
            "
          >
            {/* OVERSCAN */}

            <motion.div
              style={{
                scale:
                  togetherScale,

                y:
                  togetherY,
              }}
              className="
                absolute

                -inset-y-[8%]
                inset-x-0
              "
            >
              <Image
                src={
                  wedding.moments.together
                    .image
                }
                alt={
                  wedding.moments.together
                    .alt
                }
                fill
                sizes="100vw"
                className="
                  object-cover
                  object-center

                  transition-transform

                  duration-[1600ms]

                  ease-out

                  group-hover:scale-[1.012]
                "
              />
            </motion.div>

            <ZoomButton
              large
            />
          </button>

          {/* =============================================
              OVERLAY
          ============================================= */}

          <div
            className="
              pointer-events-none

              absolute
              inset-0

              z-[1]

              bg-gradient-to-b

              from-black/[0.04]
              via-black/[0.14]
              to-black/46
            "
          />

          <div
            className="
              wedding-glow-blue

              pointer-events-none

              absolute

              -left-[20%]
              -top-[15%]

              z-[2]

              h-[55vw]
              w-[55vw]

              rounded-full

              opacity-20

              blur-[140px]
            "
          />

          <div
            className="
              wedding-glow-pink

              pointer-events-none

              absolute

              -bottom-[22%]
              -right-[15%]

              z-[2]

              h-[55vw]
              w-[55vw]

              rounded-full

              opacity-22

              blur-[150px]
            "
          />

          <HeartLayer
            density="low"
          />

          {/* =============================================
              CONTENT
          ============================================= */}

          <div
            className="
              pointer-events-none

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
            "
          >
            <motion.div
              initial={{
                opacity: 0,

                y: 35,

                scale: 0.98,
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
                duration: 1.1,

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                max-w-4xl

                text-center

                text-white
              "
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
                  duration: 2.8,
                  repeat: Infinity,
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

              <p
                className="
                  mt-3

                  text-[10px]

                  font-semibold

                  uppercase

                  tracking-[0.3em]

                  text-white/90

                  sm:text-xs
                "
              >
                {
                  wedding.moments.together
                    .eyebrow
                }

                {" · "}

                {
                  wedding.moments.together
                    .number
                }
              </p>

              <motion.h2
                initial={{
                  opacity: 0,

                  y: 18,

                  filter:
                    "blur(6px)",
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
                  delay: 0.08,
                  duration: 1,
                }}
                className="
                  font-editorial

                  mt-4

                  text-[clamp(4rem,13vw,9rem)]

                  font-medium

                  leading-[0.85]

                  tracking-[-0.04em]

                  drop-shadow-[0_5px_24px_rgba(0,0,0,0.28)]
                "
              >
                {
                  wedding.moments.together
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
                  delay: 0.18,
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
                    h-px
                    w-9

                    bg-gradient-to-r
                    from-transparent
                    to-white/80
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
                    w-9

                    bg-gradient-to-l
                    from-transparent
                    to-white/80
                  "
                />
              </motion.div>

              <motion.p
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
                  delay: 0.28,
                  duration: 0.85,
                }}
                className="
                  font-editorial

                  mx-auto

                  mt-5

                  max-w-2xl

                  text-[clamp(1.2rem,2.6vw,1.7rem)]

                  font-medium
                  italic

                  leading-[1.35]

                  text-white/95

                  drop-shadow-[0_3px_14px_rgba(0,0,0,0.4)]
                "
              >
                “{
                  wedding.moments.together
                    .text
                }”
              </motion.p>

              {/* NAMES */}

              <motion.div
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
                  delay: 0.4,
                  duration: 0.85,
                }}
                className="
                  font-editorial

                  mt-7

                  flex

                  flex-col

                  items-center
                  justify-center

                  text-2xl

                  sm:text-3xl

                  md:flex-row
                  md:text-4xl
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
                    duration: 2.6,
                    repeat: Infinity,
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LIGHTBOX
      ===================================================== */}

      <ImageLightbox
        open={
          lightboxOpen
        }
        images={
          momentImages
        }
        currentIndex={
          lightboxIndex
        }
        onChange={
          setLightboxIndex
        }
        onClose={() => {
          setLightboxOpen(
            false,
          );
        }}
      />
    </>
  );
}

/* =====================================================
    MOMENT PHOTO
===================================================== */

type MomentPhotoProps = {
  image: {
    src: string;
    alt: string;
    title: string;
  };

  onClick: () => void;
};

function MomentPhoto({
  image,
  onClick,
}: MomentPhotoProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={image.title}
      className="
        group

        absolute
        inset-0

        cursor-zoom-in

        overflow-hidden

        rounded-[inherit]
      "
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="
          (max-width: 640px)
          100vw,

          (max-width: 1024px)
          50vw,

          33vw
        "
        className="
          object-cover
          object-center

          transition-transform

          duration-[1500ms]

          ease-out

          group-hover:scale-[1.04]
        "
      />

      {/* OVERLAY */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-gradient-to-t

          from-black/[0.09]
          via-transparent
          to-white/[0.05]
        "
      />

      {/* SOFT LIGHT */}

      <div
        className="
          pointer-events-none

          absolute

          -left-[25%]
          -top-[20%]

          h-[45%]
          w-[65%]

          rounded-full

          bg-white/15

          blur-[70px]
        "
      />

      <ZoomButton />
    </button>
  );
}

/* =====================================================
    ZOOM BUTTON
===================================================== */

type ZoomButtonProps = {
  large?: boolean;
};

function ZoomButton({
  large = false,
}: ZoomButtonProps) {
  return (
    <>
      <div
        className="
          pointer-events-none

          absolute
          inset-0

          bg-black/0

          transition-colors

          duration-500

          group-hover:bg-black/[0.04]
        "
      />

      <span
        className={`
          pointer-events-none

          absolute

          z-20

          flex

          items-center
          justify-center

          rounded-full

          border
          border-white/55

          bg-white/10

          text-white

          opacity-100

          shadow-[0_10px_35px_rgba(0,0,0,0.12)]

          backdrop-blur-md

          transition-all

          duration-500

          group-hover:scale-105
          group-hover:bg-white/20

          md:opacity-0
          md:group-hover:opacity-100

          ${large
            ? `
                right-5
                top-5

                h-11
                w-11

                sm:right-8
                sm:top-8
              `
            : `
                right-4
                top-4

                h-10
                w-10
              `
          }
        `}
      >
        <ZoomIn
          size={
            large
              ? 19
              : 17
          }
          strokeWidth={1.5}
        />
      </span>
    </>
  );
}