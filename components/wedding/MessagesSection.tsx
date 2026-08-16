"use client";

import Image from "next/image";

import {
  Play,
} from "lucide-react";

import {
  motion,
} from "motion/react";

import {
  useState,
} from "react";

import HeartLayer from "./HeartLayer";
import VideoModal from "./VideoModal";

import {
  wedding,
} from "@/data/wedding";

export default function MessagesSection() {
  const [
    video,
    setVideo,
  ] = useState<string | null>(null);

  return (
    <>
      <section
        id="messages-for-us"
        className="
          relative
          overflow-hidden

          bg-[#F1E9DF]

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

            h-[42rem]
            w-[42rem]

            rounded-full

            bg-[#E6D3C8]/35

            blur-[145px]
          "
        />

        <div
          className="
            pointer-events-none

            absolute
            -right-[18%]
            bottom-[5%]

            h-[40rem]
            w-[40rem]

            rounded-full

            bg-[#E8DCCF]/45

            blur-[145px]
          "
        />

        <div
          className="
            pointer-events-none

            absolute
            left-1/2
            top-[45%]

            h-[34rem]
            w-[34rem]

            -translate-x-1/2

            rounded-full

            bg-white/35

            blur-[120px]
          "
        />

        {/* =================================================
            HEARTS
        ================================================= */}

        <HeartLayer
          density="medium"
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
                mb-5

                text-2xl

                text-[#A58972]
              "
            >
              ♡
            </motion.div>

            {/* SMALL TITLE */}

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
                duration: 0.8,
              }}
              className="
                text-[10px]
                font-bold
                uppercase

                tracking-[0.3em]

                text-[#826B59]

                sm:text-xs
              "
            >
              Từ những người chúng mình yêu thương
            </motion.p>

            {/* TITLE */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
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

                mt-4

                text-[clamp(3.4rem,9vw,7.5rem)]

                font-medium

                leading-[0.9]

                tracking-[-0.04em]

                text-[#2F2925]
              "
            >
              Những lời yêu thương
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

                bg-[#AF947D]
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

                text-[#5C534C]

                sm:text-base

                md:text-lg
                md:leading-8
              "
            >
              Có những lời chúc không chỉ để nghe trong
              một ngày, mà còn là những điều chúng mình
              muốn mang theo trên cả hành trình phía trước.
            </motion.p>
          </motion.div>

          {/* =================================================
              MESSAGE VIDEOS
          ================================================= */}

          <div
            className="
              mx-auto

              mt-16

              grid
              max-w-6xl

              gap-10

              md:grid-cols-2

              md:items-start

              lg:mt-24
              lg:gap-14
            "
          >
            {wedding.messages.map(
              (
                message,
                index,
              ) => (
                <motion.button
                  type="button"
                  key={message.name}
                  initial={{
                    opacity: 0,
                    y: 45,
                    filter:
                      "blur(8px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter:
                      "blur(0px)",
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    delay:
                      index * 0.15,
                    duration: 1,
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
                  whileTap={{
                    scale: 0.995,
                  }}
                  onClick={() =>
                    setVideo(
                      message.video,
                    )
                  }
                  className="
                    group
                    block

                    w-full

                    text-left
                  "
                >
                  {/* =========================================
                      VIDEO POSTER
                  ========================================= */}

                  <div
                    className="
                      relative

                      aspect-[4/5]

                      overflow-hidden

                      rounded-[1.6rem]

                      bg-[#DDD0C3]

                      shadow-[0_25px_75px_rgba(65,49,38,0.13)]

                      sm:rounded-[2rem]
                    "
                  >
                    <Image
                      src={
                        message.poster
                      }
                      alt={`Lời chúc từ ${message.name}`}
                      fill
                      sizes="
                        (max-width: 768px) 100vw,
                        50vw
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

                        bg-gradient-to-b

                        from-black/[0.03]
                        via-black/[0.10]
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

                        rounded-[1.25rem]

                        border
                        border-white/45

                        sm:inset-4
                        sm:rounded-[1.6rem]
                      "
                    />

                    {/* =========================================
                        TOP LABEL
                    ========================================= */}

                    <div
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

                        tracking-[0.22em]

                        text-white

                        backdrop-blur-md

                        sm:left-6
                        sm:top-6
                        sm:text-[10px]
                      "
                    >
                      Lời chúc
                    </div>

                    {/* =========================================
                        PLAY
                    ========================================= */}

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
                        {/* RING 1 */}

                        <motion.span
                          animate={{
                            scale: [
                              1,
                              1.45,
                            ],
                            opacity: [
                              0.32,
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

                        {/* RING 2 */}

                        <motion.span
                          animate={{
                            scale: [
                              1,
                              1.55,
                            ],
                            opacity: [
                              0.18,
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

                        {/* MAIN */}

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
                            border-white/65

                            bg-white/20

                            text-white

                            shadow-[0_14px_45px_rgba(0,0,0,0.20)]

                            backdrop-blur-xl

                            transition-all
                            duration-500

                            group-hover:bg-white/30

                            sm:h-20
                            sm:w-20
                          "
                        >
                          <Play
                            size={27}
                            strokeWidth={
                              1.6
                            }
                            fill="currentColor"
                            className="ml-1"
                          />
                        </motion.span>
                      </div>
                    </div>

                    {/* =========================================
                        BOTTOM NAME
                    ========================================= */}

                    <div
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

                          text-3xl
                          font-medium

                          drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]

                          sm:text-4xl
                        "
                      >
                        {
                          message.name
                        }
                      </p>
                    </div>
                  </div>

                  {/* =========================================
                      TEXT BELOW CARD
                  ========================================= */}

                  <div
                    className="
                      mx-auto

                      max-w-md

                      px-2
                      pt-6

                      text-center
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase

                        tracking-[0.28em]

                        text-[#927863]

                        sm:text-xs
                      "
                    >
                      Một lời nhắn gửi
                    </p>

                    <h3
                      className="
                        font-editorial

                        mt-2

                        text-3xl
                        font-medium

                        leading-tight

                        text-[#332C27]

                        sm:text-4xl
                      "
                    >
                      {
                        message.name
                      }
                    </h3>

                    {"message" in message &&
                      message.message && (
                        <p
                          className="
                            mt-3

                            text-sm
                            font-medium

                            leading-7

                            text-[#71665E]

                            sm:text-[15px]
                          "
                        >
                          {
                            message.message
                          }
                        </p>
                      )}

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
                        repeat:
                          Infinity,
                        ease:
                          "easeInOut",
                      }}
                      className="
                        mt-5

                        text-lg

                        text-[#A58972]
                      "
                    >
                      ♡
                    </motion.div>
                  </div>
                </motion.button>
              ),
            )}
          </div>

          {/* =================================================
              END QUOTE
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
              duration: 1,
              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              mx-auto

              mt-20

              max-w-3xl

              text-center

              lg:mt-28
            "
          >
            {/* LINE TOP */}

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
                duration: 0.9,
              }}
              className="
                mx-auto

                h-px
                w-14

                origin-center

                bg-[#B29A85]
              "
            />

            {/* HEART */}

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
                mt-7

                text-xl

                text-[#A58972]
              "
            >
              ♡
            </motion.div>

            {/* QUOTE */}

            <p
              className="
                font-editorial

                mt-6

                text-[clamp(2.2rem,5vw,3.8rem)]

                font-medium

                leading-[1.2]

                tracking-[-0.03em]

                text-[#352E29]
              "
            >
              “Tình yêu của chúng mình không chỉ có hai người,
              mà còn được vun đầy bởi những người luôn thương
              và chúc phúc cho chúng mình.”
            </p>

            {/* SIGNATURE */}

            <motion.p
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
                delay: 0.35,
                duration: 0.9,
              }}
              className="
                mt-8

                text-sm
                font-medium

                tracking-[0.04em]

                text-[#776C63]

                sm:text-base
              "
            >
              Cảm ơn vì đã luôn ở bên chúng mình.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          VIDEO MODAL
      ===================================================== */}

      <VideoModal
        open={
          Boolean(video)
        }
        src={
          video ?? ""
        }
        onClose={() =>
          setVideo(null)
        }
      />
    </>
  );
}