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

export default function MessagesSection() {
  const [
    video,
    setVideo,
  ] = useState<string | null>(
    null,
  );

  return (
    <>
      <section
        id="messages-for-us"
        className="
          bg-weddingbg-wedding-rose
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

            h-[42rem]
            w-[42rem]

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

            -right-[20%]
            bottom-[4%]

            h-[40rem]
            w-[40rem]

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
            top-[45%]

            h-[32rem]
            w-[32rem]

            -translate-x-1/2

            rounded-full

            opacity-30

            blur-[135px]
          "
        />

        {/* =================================================
            HEARTS
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
                delay: 0.05,
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
                wedding
                  .messagesSection
                  .eyebrow
              }
            </motion.p>

            {/* =================================================
                TITLE
            ================================================= */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
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

                  text-[clamp(3rem,8vw,6.4rem)]
                "
              >
                {
                  wedding
                    .messagesSection
                    .title
                }
              </span>

              <span
                className="
                  font-script
                  text-wedding-rose

                  mt-1

                  block

                  text-[clamp(3rem,8vw,6rem)]

                  font-normal

                  leading-[0.9]
                "
              >
                {
                  wedding
                    .messagesSection
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
                wedding
                  .messagesSection
                  .description
              }
            </motion.p>
          </motion.div>

          {/* =================================================
              MESSAGE CARDS
          ================================================= */}

          <div
            className="
              mx-auto

              mt-10

              grid

              max-w-6xl

              gap-10

              sm:mt-12

              md:grid-cols-2
              md:items-start
              md:gap-8

              lg:mt-16
              lg:gap-12
            "
          >
            {wedding.messages.map(
              (
                message,
                index,
              ) => (
                <motion.article
                  key={
                    message.name
                  }
                  initial={{
                    opacity: 0,
                    y: 42,
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
                    amount: 0.18,
                  }}
                  transition={{
                    delay:
                      index * 0.12,

                    duration: 1,

                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                  className="
                    relative
                  "
                >
                  {/* =====================================
                      VIDEO FRAME
                  ===================================== */}

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.45,
                    }}
                    className={`
                      wedding-photo-frame

                      ${index % 2 ===
                        1
                        ? "wedding-photo-frame-bride"
                        : ""
                      }

                      relative

                      aspect-[4/5]

                      rounded-[1.5rem]

                      sm:rounded-[1.8rem]

                      lg:rounded-[2rem]
                    `}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setVideo(
                          message.video,
                        );
                      }}
                      aria-label={`Xem lời chúc từ ${message.name}`}
                      className="
                        group

                        absolute
                        inset-0

                        cursor-pointer

                        overflow-hidden

                        rounded-[inherit]

                        text-left
                      "
                    >
                      {/* =================================
                          IMAGE
                      ================================= */}

                      <Image
                        src={
                          message.poster
                        }
                        alt={
                          message.posterAlt
                        }
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

                          duration-[1600ms]

                          ease-out

                          group-hover:scale-[1.04]
                        "
                      />

                      {/* =================================
                          OVERLAY
                      ================================= */}

                      <div
                        className="
                          pointer-events-none

                          absolute
                          inset-0

                          bg-gradient-to-b

                          from-black/[0.02]
                          via-black/[0.08]
                          to-black/45

                          transition-colors

                          duration-700

                          group-hover:to-black/50
                        "
                      />

                      {/* =================================
                          SOFT BLUE LIGHT
                      ================================= */}

                      <div
                        className="
                          wedding-glow-blue

                          pointer-events-none

                          absolute

                          -left-[30%]
                          -top-[20%]

                          h-[50%]
                          w-[70%]

                          rounded-full

                          opacity-[0.18]

                          blur-[90px]
                        "
                      />

                      {/* =================================
                          SOFT ROSE LIGHT
                      ================================= */}

                      <div
                        className="
                          wedding-glow-pink

                          pointer-events-none

                          absolute

                          -bottom-[25%]
                          -right-[25%]

                          h-[50%]
                          w-[70%]

                          rounded-full

                          opacity-[0.18]

                          blur-[90px]
                        "
                      />

                      {/* =================================
                          BADGE
                      ================================= */}

                      <div
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
                          border-white/40

                          bg-white/10

                          px-3.5
                          py-2

                          text-[8px]

                          font-semibold

                          uppercase

                          tracking-[0.22em]

                          text-white

                          backdrop-blur-xl

                          sm:left-6
                          sm:top-6
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

                        {
                          wedding
                            .messagesSection
                            .cardBadge
                        }
                      </div>

                      {/* =================================
                          PLAY BUTTON
                      ================================= */}

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
                                1.48,
                              ],

                              opacity: [
                                0.38,
                                0,
                              ],
                            }}
                            transition={{
                              duration:
                                2.8,

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
                                1.58,
                              ],

                              opacity: [
                                0.22,
                                0,
                              ],
                            }}
                            transition={{
                              duration:
                                2.8,

                              delay:
                                0.7,

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

                          {/* MAIN PLAY */}

                          <motion.span
                            animate={{
                              scale: [
                                1,
                                1.035,
                                1,
                              ],
                            }}
                            transition={{
                              duration:
                                3,

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

                              shadow-[0_15px_45px_rgba(0,0,0,0.18)]

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
                              size={
                                27
                              }
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

                      {/* =================================
                          NAME OVER IMAGE
                      ================================= */}

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
                            text-[9px]

                            font-semibold

                            uppercase

                            tracking-[0.25em]

                            text-white/75

                            sm:text-[10px]
                          "
                        >
                          {
                            wedding
                              .messagesSection
                              .cardEyebrow
                          }
                        </p>

                        <p
                          className="
                            font-editorial

                            mt-1

                            text-3xl

                            font-medium

                            leading-tight

                            drop-shadow-[0_3px_12px_rgba(0,0,0,0.4)]

                            sm:text-4xl
                          "
                        >
                          {
                            message.name
                          }
                        </p>
                      </div>
                    </button>
                  </motion.div>

                  {/* =====================================
                      TEXT BELOW
                  ===================================== */}

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
                      delay:
                        0.18 +
                        index * 0.08,

                      duration:
                        0.8,
                    }}
                    className="
                      mx-auto

                      max-w-md

                      px-2
                      pt-5

                      text-center

                      sm:pt-6
                    "
                  >
                    <p
                      className={`
                        ${index % 2 ===
                          0
                          ? "text-wedding-blue"
                          : "text-wedding-rose"
                        }

                        text-[10px]

                        font-semibold

                        uppercase

                        tracking-[0.28em]

                        sm:text-xs
                      `}
                    >
                      {
                        wedding
                          .messagesSection
                          .cardEyebrow
                      }
                    </p>

                    <h3
                      className="
                        font-editorial
                        text-wedding-primary

                        mt-1

                        text-3xl

                        font-medium

                        leading-tight

                        tracking-[-0.025em]

                        sm:text-4xl
                      "
                    >
                      {
                        message.name
                      }
                    </h3>

                    <p
                      className="
                        text-wedding-soft

                        mt-2

                        text-sm

                        font-medium

                        leading-7

                        sm:text-[15px]
                      "
                    >
                      {
                        message.message
                      }
                    </p>

                    <motion.span
                      animate={{
                        scale: [
                          1,
                          1.12,
                          1,
                        ],
                      }}
                      transition={{
                        duration:
                          3,

                        repeat:
                          Infinity,

                        ease:
                          "easeInOut",
                      }}
                      className="
                        text-wedding-rose

                        mt-3

                        inline-block

                        text-lg
                      "
                    >
                      ♡
                    </motion.span>
                  </motion.div>
                </motion.article>
              ),
            )}
          </div>

          {/* =================================================
              ENDING QUOTE
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.95,

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

              max-w-6xl

              text-center

              sm:mt-14

              lg:mt-16
            "
          >
            {/* =============================================
                DIVIDER
            ============================================= */}

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
                duration: 0.8,
              }}
              className="
                mx-auto

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

                  repeat:
                    Infinity,

                  ease:
                    "easeInOut",
                }}
                className="
                  text-wedding-rose

                  text-lg
                "
              >
                ♡
              </motion.span>

              <span
                className="
                  wedding-divider-right

                  h-px
                  w-10
                "
              />
            </motion.div>

            {/* =============================================
                MOBILE + TABLET

                Giữ xuống dòng tự nhiên
            ============================================= */}

            <p
              className="
                font-editorial
                text-wedding-primary

                mx-auto

                mt-4

                max-w-3xl

                text-[clamp(2rem,8vw,3rem)]

                font-medium

                leading-[1.2]

                tracking-[-0.03em]

                lg:hidden
              "
            >
              “{
                wedding
                  .messagesSection
                  .endingQuoteLines
                  .join(" ")
              }”
            </p>

            {/* =============================================
                DESKTOP

                CỐ ĐỊNH ĐÚNG 3 HÀNG
            ============================================= */}

            <div
              className="
                font-editorial
                text-wedding-primary

                mx-auto

                mt-4

                hidden

                font-medium

                leading-[1.16]

                tracking-[-0.03em]

                lg:block

                lg:text-[clamp(2.2rem,3vw,3.4rem)]
              "
            >
              {/* LINE 01 */}

              <p
                className="
                  whitespace-nowrap
                "
              >
                “{
                  wedding
                    .messagesSection
                    .endingQuoteLines[0]
                }
              </p>

              {/* LINE 02 */}

              <p
                className="
                  whitespace-nowrap
                "
              >
                {
                  wedding
                    .messagesSection
                    .endingQuoteLines[1]
                }
              </p>

              {/* LINE 03 */}

              <p
                className="
                  whitespace-nowrap
                "
              >
                {
                  wedding
                    .messagesSection
                    .endingQuoteLines[2]
                }”
              </p>
            </div>

            {/* =============================================
                SIGNATURE
            ============================================= */}

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
                delay: 0.25,
                duration: 0.8,
              }}
              className="
                text-wedding-soft

                mt-4

                text-sm

                font-medium

                tracking-[0.03em]

                sm:text-base
              "
            >
              {
                wedding
                  .messagesSection
                  .endingText
              }
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
        onClose={() => {
          setVideo(
            null,
          );
        }}
      />
    </>
  );
}