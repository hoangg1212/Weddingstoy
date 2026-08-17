"use client";

import Image from "next/image";

import {
  motion,
} from "motion/react";

import {
  Play,
} from "lucide-react";

import {
  useState,
} from "react";

import {
  wedding,
} from "@/data/wedding";

import HeartLayer from "./HeartLayer";
import VideoModal from "./VideoModal";

export default function MovingMemoriesSection() {
  const [
    open,
    setOpen,
  ] = useState(false);

  return (
    <>
      <section
        id="moving-memories"
        className="
          bg-wedding-blue
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
            top-[2%]

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
            bottom-[3%]

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
            top-[46%]

            h-[32rem]
            w-[32rem]

            -translate-x-1/2

            rounded-full

            opacity-30

            blur-[130px]
          "
        />

        {/* =================================================
            HEART LAYER
        ================================================= */}

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
                delay: 0.06,
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
                wedding.mainVideo
                  .eyebrow
              }
            </motion.p>

            {/* =================================================
                TITLE
            ================================================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 22,
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
                delay: 0.12,
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

                mt-3

                font-medium

                leading-[0.88]

                tracking-[-0.04em]
              "
            >
              <span
                className="
                  block

                  text-[clamp(2.8rem,8vw,6.4rem)]

                  lg:whitespace-nowrap
                "
              >
                {
                  wedding.mainVideo
                    .title
                }
              </span>

              <span
                className="
                  font-script
                  text-wedding-rose

                  mt-1

                  block

                  text-[clamp(2.6rem,7vw,5.5rem)]

                  font-normal

                  leading-[0.9]
                "
              >
                {
                  wedding.mainVideo
                    .titleAccent
                }
              </span>
            </motion.h2>

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
                delay: 0.24,
                duration: 0.85,
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

            {/* =================================================
                DESCRIPTION
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
                delay: 0.32,
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
                wedding.mainVideo
                  .description
              }
            </motion.p>
          </motion.div>

          {/* =================================================
              VIDEO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 42,
              scale: 0.985,
              filter:
                "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter:
                "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: 0.1,
              duration: 1.1,

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              relative

              mx-auto

              mt-10

              max-w-6xl

              sm:mt-12

              lg:mt-16
            "
          >
            {/* =================================================
                SIDE DECORATIONS
            ================================================= */}

            <div
              className="
                pointer-events-none

                absolute

                -left-10
                top-1/2

                hidden

                -translate-y-1/2

                items-center

                gap-2

                xl:flex
              "
            >
              <span
                className="
                  wedding-divider-left

                  h-px
                  w-14
                "
              />

              <span
                className="
                  text-wedding-blue

                  text-[10px]
                "
              >
                ♡
              </span>
            </div>

            <div
              className="
                pointer-events-none

                absolute

                -right-10
                top-1/2

                hidden

                -translate-y-1/2

                items-center

                gap-2

                xl:flex
              "
            >
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
                  w-14
                "
              />
            </div>

            {/* =================================================
                EDITORIAL VIDEO FRAME
            ================================================= */}

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

                relative

                aspect-video

                w-full

                rounded-[1.5rem]

                sm:rounded-[1.9rem]

                lg:rounded-[2.2rem]
              "
            >
              <motion.button
                type="button"
                onClick={() => {
                  setOpen(
                    true,
                  );
                }}
                whileTap={{
                  scale: 0.995,
                }}
                aria-label={
                  wedding.mainVideo
                    .playLabel
                }
                className="
                  group

                  absolute
                  inset-0

                  overflow-hidden

                  rounded-[inherit]

                  text-left
                "
              >
                {/* =========================================
                    POSTER
                ========================================= */}

                <Image
                  src={
                    wedding.mainVideo
                      .poster
                  }
                  alt={
                    wedding.mainVideo
                      .posterAlt
                  }
                  fill
                  sizes="100vw"
                  className="
                    object-cover
                    object-center

                    transition-transform

                    duration-[1800ms]

                    ease-out

                    group-hover:scale-[1.035]
                  "
                />

                {/* =========================================
                    CINEMATIC OVERLAY
                ========================================= */}

                <div
                  className="
                    pointer-events-none

                    absolute
                    inset-0

                    bg-gradient-to-b

                    from-black/[0.03]
                    via-black/[0.12]
                    to-black/40

                    transition-colors

                    duration-700

                    group-hover:to-black/45
                  "
                />

                {/* BLUE LIGHT */}

                <div
                  className="
                    wedding-glow-blue

                    pointer-events-none

                    absolute

                    -left-[20%]
                    -top-[40%]

                    h-[70%]
                    w-[55%]

                    rounded-full

                    opacity-20

                    blur-[100px]
                  "
                />

                {/* ROSE LIGHT */}

                <div
                  className="
                    wedding-glow-pink

                    pointer-events-none

                    absolute

                    -bottom-[45%]
                    -right-[15%]

                    h-[70%]
                    w-[55%]

                    rounded-full

                    opacity-20

                    blur-[100px]
                  "
                />

                {/* =========================================
                    INNER BORDER
                ========================================= */}

                <div
                  className="
                    border-wedding-white

                    pointer-events-none

                    absolute
                    inset-3

                    rounded-[1.15rem]

                    border

                    sm:inset-4
                    sm:rounded-[1.5rem]

                    lg:rounded-[1.8rem]
                  "
                />

                {/* =========================================
                    TOP BADGE
                ========================================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
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
                    absolute

                    left-5
                    top-5

                    z-10

                    flex

                    items-center

                    gap-2

                    rounded-full

                    border
                    border-white/35

                    bg-white/10

                    px-3.5
                    py-2

                    text-[8px]
                    font-semibold

                    uppercase

                    tracking-[0.22em]

                    text-white

                    shadow-[0_8px_30px_rgba(0,0,0,0.08)]

                    backdrop-blur-xl

                    sm:left-7
                    sm:top-7
                    sm:px-4
                    sm:text-[10px]
                  "
                >
                  <span
                    className="
                      text-wedding-rose

                      text-xs
                    "
                  >
                    ♡
                  </span>

                  <span>
                    {
                      wedding.mainVideo
                        .badge
                    }
                  </span>
                </motion.div>

                {/* =================================================
                    PLAY AREA
                ================================================= */}

                <div
                  className="
                    absolute
                    inset-0

                    z-10

                    flex

                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      relative

                      flex

                      items-center
                      justify-center
                    "
                  >
                    {/* RING 01 */}

                    <motion.span
                      animate={{
                        scale: [
                          1,
                          1.5,
                        ],

                        opacity: [
                          0.42,
                          0,
                        ],
                      }}
                      transition={{
                        duration: 2.8,
                        repeat:
                          Infinity,
                        ease:
                          "easeOut",
                      }}
                      className="
                        absolute

                        h-20
                        w-20

                        rounded-full

                        border
                        border-white/55

                        sm:h-24
                        sm:w-24
                      "
                    />

                    {/* RING 02 */}

                    <motion.span
                      animate={{
                        scale: [
                          1,
                          1.6,
                        ],

                        opacity: [
                          0.28,
                          0,
                        ],
                      }}
                      transition={{
                        duration: 2.8,

                        delay: 0.7,

                        repeat:
                          Infinity,

                        ease:
                          "easeOut",
                      }}
                      className="
                        absolute

                        h-20
                        w-20

                        rounded-full

                        border
                        border-white/35

                        sm:h-24
                        sm:w-24
                      "
                    />

                    {/* =========================================
                        MAIN PLAY BUTTON
                    ========================================= */}

                    <motion.span
                      animate={{
                        scale: [
                          1,
                          1.035,
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
                        relative

                        flex

                        h-16
                        w-16

                        items-center
                        justify-center

                        rounded-full

                        border
                        border-white/70

                        bg-white/20

                        text-white

                        shadow-[0_15px_50px_rgba(0,0,0,0.18)]

                        backdrop-blur-xl

                        transition-all

                        duration-500

                        group-hover:scale-105
                        group-hover:bg-white/30

                        sm:h-20
                        sm:w-20
                      "
                    >
                      <Play
                        size={27}
                        strokeWidth={
                          1.5
                        }
                        fill="currentColor"
                        className="
                          ml-1

                          sm:h-8
                          sm:w-8
                        "
                      />
                    </motion.span>
                  </div>
                </div>

                {/* =================================================
                    BOTTOM CONTENT
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
                    delay: 0.45,
                    duration: 0.8,
                  }}
                  className="
                    absolute

                    bottom-5
                    left-1/2

                    z-10

                    w-[88%]

                    -translate-x-1/2

                    text-center

                    text-white

                    sm:bottom-7
                  "
                >
                  <p
                    className="
                      font-editorial

                      text-[clamp(1.35rem,3vw,2.2rem)]

                      font-medium

                      leading-tight

                      drop-shadow-[0_3px_12px_rgba(0,0,0,0.4)]
                    "
                  >
                    {
                      wedding.mainVideo
                        .playLabel
                    }
                  </p>

                  <p
                    className="
                      mx-auto

                      mt-1

                      hidden

                      max-w-xl

                      text-[10px]
                      font-medium

                      leading-5

                      text-white/80

                      sm:block
                      sm:text-xs
                    "
                  >
                    {
                      wedding.mainVideo
                        .playDescription
                    }
                  </p>
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* =================================================
              QUOTE
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
                ease: "easeInOut",
              }}
              className="
                text-wedding-rose

                inline-block

                text-lg
              "
            >
              ♡
            </motion.span>

            <div
              className="
    font-editorial
    text-wedding-primary

    mt-4

    font-medium

    leading-[1.2]

    tracking-[-0.025em]
  "
            >
              {/* =========================================
      MOBILE
      Giữ xuống dòng tự nhiên như hiện tại
  ========================================= */}

              <p
                className="
      text-[clamp(2rem,8vw,3rem)]

      md:hidden
    "
              >
                “{
                  wedding.mainVideo
                    .quoteLines.join(" ")
                }”
              </p>

              {/* =========================================
      TABLET / DESKTOP
      CỐ ĐỊNH ĐÚNG 2 HÀNG
  ========================================= */}

              <div
                className="
      hidden

      md:block

      md:text-[clamp(2.3rem,3.5vw,3.2rem)]
    "
              >
                <p
                  className="
        whitespace-nowrap
      "
                >
                  “{
                    wedding.mainVideo
                      .quoteLines[0]
                  }
                </p>

                <p
                  className="
        whitespace-nowrap
      "
                >
                  {
                    wedding.mainVideo
                      .quoteLines[1]
                  }”
                </p>
              </div>
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

                  text-[10px]
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
      </section>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      <VideoModal
        open={
          open
        }
        src={
          wedding.mainVideo
            .video
        }
        onClose={() => {
          setOpen(
            false,
          );
        }}
      />
    </>
  );
}