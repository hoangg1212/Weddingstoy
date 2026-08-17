"use client";

import Image from "next/image";

import {
  motion,
} from "motion/react";

import {
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

/* =========================================================
   TYPES
========================================================= */

type Direction =
  | "left"
  | "right"
  | "up";

type FrameTone =
  | "blue"
  | "rose";

type PhotoProps = {
  src: string;
  alt: string;
  title: string;

  index: number;

  className?: string;

  direction?: Direction;

  frameTone?: FrameTone;

  priority?: boolean;

  onOpen: (
    index: number,
  ) => void;
};

/* =========================================================
   PHOTO
========================================================= */

function Photo({
  src,
  alt,
  title,
  index,
  className = "",
  direction = "up",
  frameTone = "blue",
  priority = false,
  onOpen,
}: PhotoProps) {
  const initial =
    direction === "left"
      ? {
        opacity: 0,
        x: -45,
        filter:
          "blur(8px)",
      }
      : direction === "right"
        ? {
          opacity: 0,
          x: 45,
          filter:
            "blur(8px)",
        }
        : {
          opacity: 0,
          y: 45,
          filter:
            "blur(8px)",
        };

  return (
    <motion.div
      initial={
        initial
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter:
          "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.18,
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
      className={`
        wedding-photo-frame

        ${frameTone === "rose"
          ? "wedding-photo-frame-bride"
          : ""
        }

        relative

        ${className}
      `}
    >
      <motion.button
        type="button"
        onClick={() => {
          onOpen(
            index,
          );
        }}
        aria-label={
          title
        }
        whileHover={{
          y: -4,
        }}
        whileTap={{
          scale:
            0.995,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          group

          absolute
          inset-0

          block

          h-full
          w-full

          cursor-zoom-in

          overflow-hidden

          rounded-[inherit]
        "
      >
        {/* =============================================
            IMAGE
        ============================================= */}

        <motion.div
          initial={{
            scale:
              1.045,
          }}
          whileInView={{
            scale:
              1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.5,

            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            relative

            h-full
            w-full
          "
        >
          <Image
            src={
              src
            }
            alt={
              alt
            }
            fill
            priority={
              priority
            }
            sizes="
              (max-width: 768px)
              100vw,

              (max-width: 1200px)
              60vw,

              50vw
            "
            className="
              object-cover
              object-center

              transition-transform

              duration-[1500ms]

              ease-out

              group-hover:scale-[1.035]
            "
          />
        </motion.div>

        {/* =============================================
            SOFT OVERLAY
        ============================================= */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            bg-gradient-to-t

            from-black/[0.10]
            via-transparent
            to-white/[0.05]
          "
        />

        {/* =============================================
            SOFT LIGHT
        ============================================= */}

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

        {/* =============================================
            ZOOM
        ============================================= */}

        <motion.span
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          className="
            pointer-events-none

            absolute

            right-4
            top-4

            z-20

            flex

            h-10
            w-10

            items-center
            justify-center

            rounded-full

            border
            border-white/55

            bg-white/10

            text-white

            shadow-[0_10px_30px_rgba(0,0,0,0.12)]

            backdrop-blur-xl

            transition-all

            duration-500

            group-hover:scale-105
            group-hover:bg-white/20

            md:opacity-0
            md:group-hover:opacity-100

            sm:right-5
            sm:top-5
            sm:h-11
            sm:w-11
          "
        >
          <ZoomIn
            size={18}
            strokeWidth={
              1.5
            }
          />
        </motion.span>
      </motion.button>
    </motion.div>
  );
}

/* =========================================================
   SECTION
========================================================= */

export default function PhotoStorySection() {
  const [
    lightboxOpen,
    setLightboxOpen,
  ] = useState(false);

  const [
    currentIndex,
    setCurrentIndex,
  ] = useState(0);

  const galleryImages =
    wedding.photoStory.images;

  function openLightbox(
    index: number,
  ) {
    setCurrentIndex(
      index,
    );

    setLightboxOpen(
      true,
    );
  }

  return (
    <>
      <section
        id="our-memories"
        className="
          bg-wedding-pearl
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
        {/* =================================================
            BACKGROUND
        ================================================= */}

        <div
          className="
            wedding-glow-blue

            pointer-events-none

            absolute

            -left-[20%]
            top-[3%]

            h-[42rem]
            w-[42rem]

            rounded-full

            opacity-40

            blur-[145px]
          "
        />

        <div
          className="
            wedding-glow-green

            pointer-events-none

            absolute

            -right-[20%]
            top-[38%]

            h-[38rem]
            w-[38rem]

            rounded-full

            opacity-35

            blur-[140px]
          "
        />

        <div
          className="
            wedding-glow-pink

            pointer-events-none

            absolute

            bottom-[4%]
            left-[15%]

            h-[34rem]
            w-[34rem]

            rounded-full

            opacity-32

            blur-[135px]
          "
        />

        <HeartLayer
          density="low"
        />

        {/* =================================================
            CONTENT
        ================================================= */}

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
                wedding.photoStory
                  .eyebrow
              }
            </p>

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
                delay: 0.08,
                duration: 1,
              }}
              className="
                font-editorial
                text-wedding-primary

                mt-3

                text-[clamp(3.4rem,9vw,7.5rem)]

                font-medium

                leading-[0.88]

                tracking-[-0.04em]
              "
            >
              {
                wedding.photoStory
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
                wedding.photoStory
                  .description
              }
            </motion.p>
          </motion.div>

          {/* =================================================
              GALLERY
          ================================================= */}

          <div
            className="
              mt-10

              sm:mt-12

              lg:mt-16
            "
          >
            {/* ===============================================
                PHOTO 01 - HERO
            =============================================== */}

            <Photo
              {...galleryImages[0]}
              index={0}
              priority
              onOpen={
                openLightbox
              }
              className="
                mx-auto

                aspect-[4/5]

                w-full
                max-w-5xl

                rounded-[1.6rem]

                sm:rounded-[1.9rem]

                md:aspect-[16/10]
              "
            />

            {/* ===============================================
                QUOTE 01
            =============================================== */}

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
                amount: 0.35,
              }}
              transition={{
                duration: 0.9,
              }}
              className="
                mx-auto

                my-12

                max-w-3xl

                text-center

                sm:my-14

                lg:my-16
              "
            >
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
                  repeat:
                    Infinity,
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

                  text-[clamp(2rem,4vw,3.2rem)]

                  font-medium

                  leading-[1.2]

                  tracking-[-0.025em]
                "
              >
                “{
                  wedding.photoStory
                    .firstQuote
                }”
              </p>
            </motion.div>

            {/* ===============================================
                PHOTO 02 + 03
            =============================================== */}

            <div
              className="
                grid

                gap-7

                md:grid-cols-12
                md:items-start

                lg:gap-10
              "
            >
              <Photo
                {...galleryImages[1]}
                index={1}
                direction="left"
                frameTone="blue"
                onOpen={
                  openLightbox
                }
                className="
                  aspect-[4/5]

                  rounded-[1.5rem]

                  md:col-span-5

                  sm:rounded-[1.8rem]
                "
              />

              <Photo
                {...galleryImages[2]}
                index={2}
                direction="right"
                frameTone="rose"
                onOpen={
                  openLightbox
                }
                className="
                  aspect-[4/5]

                  rounded-[1.5rem]

                  sm:rounded-[1.8rem]

                  md:col-span-5
                  md:col-start-8

                  lg:mt-10
                "
              />
            </div>

            {/* ===============================================
                EDITORIAL TEXT
            =============================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.9,
              }}
              className="
                my-14

                max-w-xl

                sm:my-16

                lg:my-20
                lg:ml-[7%]
              "
            >
              <p
                className="
                  text-wedding-blue

                  text-[10px]

                  font-semibold

                  uppercase

                  tracking-[0.3em]

                  sm:text-xs
                "
              >
                {
                  wedding.photoStory
                    .interludeEyebrow
                }
              </p>

              <p
                className="
                  font-editorial
                  text-wedding-primary

                  mt-3

                  text-[clamp(2.5rem,5vw,4.2rem)]

                  font-medium

                  leading-[1.03]

                  tracking-[-0.035em]
                "
              >
                {
                  wedding.photoStory
                    .interlude
                }
              </p>

              <div
                className="
                  mt-5

                  flex

                  items-center

                  gap-3
                "
              >
                <span
                  className="
                    wedding-divider-left

                    h-px
                    w-12
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
              </div>
            </motion.div>

            {/* ===============================================
                PHOTO 04
            =============================================== */}

            <Photo
              {...galleryImages[3]}
              index={3}
              direction="right"
              frameTone="rose"
              onOpen={
                openLightbox
              }
              className="
                ml-auto

                aspect-[4/5]

                w-full
                max-w-5xl

                rounded-[1.6rem]

                sm:rounded-[1.9rem]

                md:aspect-[16/10]
              "
            />

            {/* ===============================================
                PHOTO 05 + 06
            =============================================== */}

            <div
              className="
                mt-12

                grid

                gap-7

                md:grid-cols-2

                lg:mt-16
                lg:gap-12
              "
            >
              <Photo
                {...galleryImages[4]}
                index={4}
                direction="left"
                frameTone="blue"
                onOpen={
                  openLightbox
                }
                className="
                  aspect-[4/5]

                  rounded-[1.5rem]

                  sm:rounded-[1.8rem]
                "
              />

              <Photo
                {...galleryImages[5]}
                index={5}
                direction="right"
                frameTone="rose"
                onOpen={
                  openLightbox
                }
                className="
                  aspect-[4/5]

                  rounded-[1.5rem]

                  sm:rounded-[1.8rem]

                  md:mt-12
                "
              />
            </div>

            {/* ===============================================
                QUOTE 02
            =============================================== */}

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
                duration: 0.95,
              }}
              className="
                mx-auto

                my-14

                max-w-3xl

                text-center

                sm:my-16

                lg:my-20
              "
            >
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

              <p
                className="
                  font-editorial
                  text-wedding-primary

                  mt-4

                  text-[clamp(2.2rem,5vw,3.8rem)]

                  font-medium

                  leading-[1.18]

                  tracking-[-0.03em]
                "
              >
                “{
                  wedding.photoStory
                    .secondQuote
                }”
              </p>
            </motion.div>

            {/* ===============================================
                PHOTO 07
            =============================================== */}

            <Photo
              {...galleryImages[6]}
              index={6}
              direction="up"
              frameTone="blue"
              onOpen={
                openLightbox
              }
              className="
                mx-auto

                aspect-[4/5]

                w-full
                max-w-6xl

                rounded-[1.6rem]

                sm:rounded-[1.9rem]

                md:aspect-[16/10]
              "
            />

            {/* ===============================================
                ENDING
            =============================================== */}

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

              <p
                className="
                  font-editorial
                  text-wedding-primary

                  mx-auto

                  mt-4

                  text-[clamp(2rem,5vw,3.5rem)]

                  font-medium

                  leading-[1.1]

                  tracking-[-0.03em]
                "
              >
                {
                  wedding.photoStory
                    .ending
                }
              </p>

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

              <p
                className="
                  font-editorial
                  text-wedding-soft

                  mt-4

                  flex

                  flex-col

                  items-center
                  justify-center

                  text-xl

                  sm:text-2xl

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
                    duration: 2.6,
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
              </p>
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
          galleryImages
        }
        currentIndex={
          currentIndex
        }
        onChange={
          setCurrentIndex
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