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

import HeartLayer from "./HeartLayer";
import VideoModal from "./VideoModal";

import {
  wedding,
} from "@/data/wedding";

export default function MovingMemoriesSection() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <section
        id="moving-memories"
        className="
          relative
          overflow-hidden

          bg-[#F8F5EF]

          px-5
          py-24

          sm:px-8
          sm:py-28

          md:px-10

          lg:px-12
          lg:py-40
        "
      >
        {/* =================================================
            BACKGROUND DECORATION
        ================================================= */}

        <div
          className="
            pointer-events-none

            absolute
            -left-[18%]
            top-[5%]

            h-[40rem]
            w-[40rem]

            rounded-full

            bg-[#E9D9CF]/25

            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none

            absolute
            -right-[18%]
            bottom-[5%]

            h-[38rem]
            w-[38rem]

            rounded-full

            bg-[#E7DACB]/30

            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none

            absolute
            left-1/2
            top-[48%]

            h-[28rem]
            w-[28rem]

            -translate-x-1/2

            rounded-full

            bg-white/60

            blur-[120px]
          "
        />

        {/* =================================================
            TRÁI TIM BAY
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
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.45,
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
                mb-5

                text-2xl

                text-[#A78B74]
              "
            >
              ♡
            </motion.div>

            {/* SMALL TITLE */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                text-[10px]
                font-bold
                uppercase

                tracking-[0.3em]

                text-[#8A725F]

                sm:text-xs
              "
            >
              Thước phim của chúng mình
            </motion.p>

            {/* TITLE */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
                filter: "blur(6px)",
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
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                font-editorial

                mt-4

                text-[clamp(3.4rem,9vw,7.5rem)]

                font-medium

                leading-[0.9]

                tracking-[-0.04em]

                text-[#2E2824]
              "
            >
              Những khoảnh khắc
              <span
                className="
                  block
                  text-[#8F7460]
                "
              >
                còn mãi
              </span>
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

                bg-[#B69B85]
              "
            />

            {/* DESCRIPTION */}

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
                delay: 0.38,
                duration: 0.8,
              }}
              className="
                mx-auto

                mt-6

                max-w-2xl

                text-[15px]
                font-medium

                leading-7

                text-[#615850]

                sm:text-base

                md:text-lg
                md:leading-8
              "
            >
              Có những khoảnh khắc không chỉ để nhớ,
              mà còn để chúng mình có thể cùng nhau
              xem lại thêm thật nhiều lần.
            </motion.p>
          </motion.div>

          {/* =================================================
              VIDEO CINEMATIC
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
              scale: 0.98,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              delay: 0.15,
              duration: 1.15,
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

              mt-14

              max-w-6xl

              sm:mt-18

              lg:mt-24
            "
          >
            {/* DECORATION LINE */}

            <div
              className="
                pointer-events-none

                absolute
                -left-5
                top-1/2

                hidden

                h-px
                w-20

                bg-gradient-to-r
                from-transparent
                to-[#BCA28D]

                lg:block
              "
            />

            <div
              className="
                pointer-events-none

                absolute
                -right-5
                top-1/2

                hidden

                h-px
                w-20

                bg-gradient-to-l
                from-transparent
                to-[#BCA28D]

                lg:block
              "
            />

            {/* VIDEO BUTTON */}

            <motion.button
              type="button"
              onClick={() =>
                setOpen(true)
              }
              whileHover={{
                y: -5,
                scale: 1.008,
              }}
              whileTap={{
                scale: 0.995,
              }}
              aria-label="Xem thước phim của chúng mình"
              className="
                group
                relative

                block

                aspect-video
                w-full

                overflow-hidden

                rounded-[1.5rem]

                bg-[#DDD1C6]

                shadow-[0_28px_90px_rgba(61,45,35,0.16)]

                sm:rounded-[2rem]

                lg:rounded-[2.5rem]
              "
            >
              {/* IMAGE */}

              <Image
                src={
                  wedding.mainVideo.poster
                }
                alt="Thước phim của Nguyễn Nam và Huỳnh Thư"
                fill
                sizes="100vw"
                className="
                  object-cover
                  object-center

                  transition-transform

                  duration-[1800ms]

                  ease-out

                  group-hover:scale-[1.045]
                "
              />

              {/* CINEMATIC OVERLAY */}

              <div
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  bg-gradient-to-b

                  from-black/[0.04]
                  via-black/[0.12]
                  to-black/35

                  transition-colors
                  duration-700

                  group-hover:to-black/40
                "
              />

              {/* INNER BORDER */}

              <div
                className="
                  pointer-events-none

                  absolute
                  inset-3

                  rounded-[1.15rem]

                  border
                  border-white/40

                  sm:inset-4
                  sm:rounded-[1.6rem]

                  lg:rounded-[2rem]
                "
              />

              {/* TOP LABEL */}

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
                  delay: 0.55,
                  duration: 0.8,
                }}
                className="
                  absolute

                  left-5
                  top-5

                  z-10

                  rounded-full

                  border
                  border-white/30

                  bg-black/10

                  px-4
                  py-2

                  text-[9px]
                  font-semibold

                  uppercase

                  tracking-[0.25em]

                  text-white

                  backdrop-blur-md

                  sm:left-7
                  sm:top-7
                  sm:text-[10px]
                "
              >
                Chuyện của chúng mình
              </motion.div>

              {/* =================================================
                  PLAY BUTTON
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
                        1.45,
                      ],
                      opacity: [
                        0.35,
                        0,
                      ],
                    }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                    className="
                      absolute

                      h-20
                      w-20

                      rounded-full

                      border
                      border-white/50

                      sm:h-24
                      sm:w-24
                    "
                  />

                  {/* RING 02 */}

                  <motion.span
                    animate={{
                      scale: [
                        1,
                        1.55,
                      ],
                      opacity: [
                        0.22,
                        0,
                      ],
                    }}
                    transition={{
                      duration: 2.6,
                      delay: 0.7,
                      repeat: Infinity,
                      ease: "easeOut",
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

                  {/* MAIN BUTTON */}

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
                      repeat: Infinity,
                      ease: "easeInOut",
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
                      border-white/65

                      bg-white/20

                      text-white

                      shadow-[0_15px_45px_rgba(0,0,0,0.20)]

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
                      strokeWidth={1.6}
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

              {/* BOTTOM CONTENT */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
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
                  duration: 0.8,
                }}
                className="
                  absolute

                  bottom-6
                  left-1/2

                  z-10

                  w-[90%]

                  -translate-x-1/2

                  text-center

                  text-white

                  sm:bottom-8
                "
              >
                <p
                  className="
                    font-editorial

                    text-2xl
                    font-medium

                    drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]

                    sm:text-3xl
                    md:text-4xl
                  "
                >
                  Nhấn để xem lại câu chuyện
                </p>
              </motion.div>
            </motion.button>
          </motion.div>

          {/* =================================================
              AFTER VIDEO TEXT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
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
                text-lg

                text-[#A88C74]
              "
            >
              ♡
            </motion.div>

            <p
              className="
                font-editorial

                mt-5

                text-[clamp(2rem,4vw,3.2rem)]

                font-medium

                leading-[1.2]

                tracking-[-0.025em]

                text-[#382F29]
              "
            >
              “Có những ký ức chỉ cần xem lại một lần,
              là cả một khoảng trời thương nhớ lại ùa về.”
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
                delay: 0.25,
                duration: 0.9,
              }}
              className="
                mx-auto

                mt-8

                h-px
                w-14

                origin-center

                bg-[#B69C87]
              "
            />

            <p
              className="
                mt-6

                text-sm
                font-medium

                tracking-[0.04em]

                text-[#71675F]

                sm:text-base
              "
            >
              Nguyễn Nam
              <span
                className="
                  mx-3

                  text-[#A68B74]
                "
              >
                ♡
              </span>
              Huỳnh Thư
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      <VideoModal
        open={open}
        src={
          wedding.mainVideo.video
        }
        onClose={() =>
          setOpen(false)
        }
      />
    </>
  );
}