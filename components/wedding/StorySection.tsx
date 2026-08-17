"use client";

import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  wedding,
} from "@/data/wedding";

import HeartLayer from "./HeartLayer";
import HeartCurtain from "./HeartCurtain";

export default function StorySection() {
  const sectionRef =
    useRef<HTMLElement>(null);

  /* =====================================================
      STORY STATE
  ===================================================== */

  const [
    storyStarted,
    setStoryStarted,
  ] = useState(false);

  const [
    curtainOpened,
    setCurtainOpened,
  ] = useState(false);

  const [
    isDesktop,
    setIsDesktop,
  ] = useState(false);

  /* =====================================================
      SCREEN SIZE

      Dùng để giảm số lượng heart particle trên mobile.
  ===================================================== */

  useEffect(() => {
    const mediaQuery =
      window.matchMedia(
        "(min-width: 768px)",
      );

    const updateScreen =
      () => {
        setIsDesktop(
          mediaQuery.matches,
        );
      };

    updateScreen();

    mediaQuery.addEventListener(
      "change",
      updateScreen,
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updateScreen,
      );
    };
  }, []);

  /* =====================================================
      EVENT FROM OPEN SECTION
  ===================================================== */

  useEffect(() => {
    function handleStoryOpen() {
      setStoryStarted(true);
    }

    window.addEventListener(
      "wedding-story-open",
      handleStoryOpen,
    );

    return () => {
      window.removeEventListener(
        "wedding-story-open",
        handleStoryOpen,
      );
    };
  }, []);

  /* =====================================================
      SCROLL
  ===================================================== */

  const {
    scrollYProgress,
  } = useScroll({
    target:
      sectionRef,

    offset: [
      "start start",
      "end start",
    ],
  });

  /* =====================================================
      DESKTOP IMAGE PARALLAX
  ===================================================== */

  const desktopScale =
    useTransform(
      scrollYProgress,

      [
        0,
        1,
      ],

      [
        1,
        1.055,
      ],
    );

  const desktopY =
    useTransform(
      scrollYProgress,

      [
        0,
        1,
      ],

      [
        "-1.5%",
        "2.5%",
      ],
    );

  /* =====================================================
      MOBILE IMAGE

      Chỉ zoom rất nhẹ.
      KHÔNG Y parallax để giảm workload.
  ===================================================== */

  const mobileScale =
    useTransform(
      scrollYProgress,

      [
        0,
        1,
      ],

      [
        1,
        1.025,
      ],
    );

  /* =====================================================
      CONTENT PARALLAX
  ===================================================== */

  const contentY =
    useTransform(
      scrollYProgress,

      [
        0,
        1,
      ],

      [
        "0%",
        "-3%",
      ],
    );

  const contentOpacity =
    useTransform(
      scrollYProgress,

      [
        0,
        0.82,
        1,
      ],

      [
        1,
        1,
        0,
      ],
    );

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="
        relative

        min-h-[100svh]

        overflow-hidden

        bg-[#1e2c31]

        md:min-h-dvh
      "
    >
      {/* =====================================================
          MOBILE BACKGROUND

          QUAN TRỌNG:

          - Không filter blur.
          - Không y parallax.
          - Chỉ opacity + scale.
      ===================================================== */}

      <motion.div
        style={{
          scale:
            mobileScale,
        }}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity:
            storyStarted
              ? 1
              : 0,
        }}
        transition={{
          duration: 0.7,

          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        className="
          absolute
          inset-0

          z-0

          block

          will-change-[opacity,transform]

          md:hidden
        "
      >
        <Image
          src={
            wedding.story
              .imageMobile
          }
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
          DESKTOP BACKGROUND

          Có parallax nhưng dùng overscan để không
          xuất hiện khe ảnh khi y thay đổi.
      ===================================================== */}

      <div
        className="
          absolute
          inset-0

          z-0

          hidden

          overflow-hidden

          md:block
        "
      >
        <motion.div
          style={{
            scale:
              desktopScale,

            y:
              desktopY,
          }}
          initial={{
            opacity: 0,
            filter:
              "blur(7px)",
          }}
          animate={
            storyStarted
              ? {
                  opacity: 1,

                  filter:
                    "blur(0px)",
                }
              : {
                  opacity: 0,

                  filter:
                    "blur(7px)",
                }
          }
          transition={{
            duration: 1.25,

            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            absolute

            -inset-y-[7%]
            inset-x-0

            will-change-[opacity,transform]
          "
        >
          <Image
            src={
              wedding.story
                .imageDesktop
            }
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
      </div>

      {/* =====================================================
          OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute
          inset-0

          z-[1]

          bg-gradient-to-b

          from-black/[0.08]
          via-black/[0.16]
          to-black/[0.34]

          md:from-black/[0.07]
          md:via-black/[0.14]
          md:to-black/[0.32]
        "
      />

      {/* =====================================================
          MOBILE COLOR ATMOSPHERE

          Mobile dùng glow tĩnh, nhỏ hơn,
          blur thấp hơn.
      ===================================================== */}

      <div
        className="
          wedding-glow-blue

          pointer-events-none

          absolute

          -left-[30%]
          -top-[12%]

          z-[2]

          h-[75vw]
          w-[75vw]

          rounded-full

          opacity-25

          blur-[65px]

          md:hidden
        "
      />

      <div
        className="
          wedding-glow-pink

          pointer-events-none

          absolute

          -bottom-[15%]
          -right-[30%]

          z-[2]

          h-[72vw]
          w-[72vw]

          rounded-full

          opacity-22

          blur-[65px]

          md:hidden
        "
      />

      {/* =====================================================
          DESKTOP COLOR ATMOSPHERE
      ===================================================== */}

      <div
        className="
          wedding-glow-blue

          pointer-events-none

          absolute

          -left-[22%]
          -top-[20%]

          z-[2]

          hidden

          h-[45vw]
          w-[45vw]

          rounded-full

          opacity-35

          blur-[135px]

          md:block
        "
      />

      <div
        className="
          wedding-glow-pink

          pointer-events-none

          absolute

          -bottom-[25%]
          -right-[20%]

          z-[2]

          hidden

          h-[45vw]
          w-[45vw]

          rounded-full

          opacity-30

          blur-[135px]

          md:block
        "
      />

      <div
        className="
          wedding-glow-green

          pointer-events-none

          absolute

          bottom-[4%]
          left-[12%]

          z-[2]

          hidden

          h-[35vw]
          w-[35vw]

          rounded-full

          opacity-18

          blur-[120px]

          md:block
        "
      />

      {/* =====================================================
          CENTER LIGHT

          Mobile giảm blur.
      ===================================================== */}

      <div
        className="
          pointer-events-none

          absolute

          left-1/2
          top-1/2

          z-[2]

          h-[48vh]
          w-[90vw]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/[0.025]

          blur-[45px]

          md:h-[70vh]
          md:w-[75vw]

          md:bg-white/[0.035]

          md:blur-[100px]
        "
      />

      {/* =====================================================
          HEART CURTAIN
      ===================================================== */}

      <HeartCurtain
        start={
          storyStarted
        }
        onOpened={() => {
          setCurtainOpened(
            true,
          );
        }}
      />

      {/* =====================================================
          HEART PARTICLES

          Mobile:
          LOW

          Desktop:
          MEDIUM
      ===================================================== */}

      {curtainOpened && (
        <HeartLayer
          density={
            isDesktop
              ? "medium"
              : "low"
          }
        />
      )}

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <motion.div
        style={{
          y:
            contentY,

          opacity:
            contentOpacity,
        }}
        className="
          relative

          z-10

          flex

          min-h-[100svh]

          items-center
          justify-center

          px-5
          py-16

          sm:px-7
          sm:py-20

          md:min-h-dvh
          md:px-10
          md:py-24

          lg:px-12
        "
      >
        {/* =================================================
            CONTENT WRAPPER
        ================================================= */}

        <div
          className="
            relative

            mx-auto

            flex

            w-full
            max-w-6xl

            flex-col

            items-center

            text-center
          "
        >
          {/* =================================================
              HEART
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
              y: 10,
            }}
            animate={
              curtainOpened
                ? {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    scale: 0.6,
                    y: 10,
                  }
            }
            transition={{
              duration: 0.7,

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
          >
            <motion.span
              animate={
                curtainOpened
                  ? {
                      scale: [
                        1,
                        1.14,
                        1,
                      ],
                    }
                  : undefined
              }
              transition={{
                duration: 2.6,

                repeat:
                  Infinity,

                ease:
                  "easeInOut",
              }}
              className="
                text-wedding-rose

                inline-block

                text-2xl

                drop-shadow-[0_2px_8px_rgba(0,0,0,0.28)]

                sm:text-3xl
              "
            >
              ♡
            </motion.span>
          </motion.div>

          {/* =================================================
              EYEBROW
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 14,
            }}
            animate={
              curtainOpened
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 14,
                  }
            }
            transition={{
              delay: 0.08,
              duration: 0.7,
            }}
            className="
              mt-4

              text-[10px]

              font-semibold

              uppercase

              tracking-[0.26em]

              text-white/95

              drop-shadow-[0_2px_8px_rgba(0,0,0,0.40)]

              sm:text-[11px]
              sm:tracking-[0.32em]

              md:mt-5
              md:text-xs
            "
          >
            {
              wedding.story
                .eyebrow
            }
          </motion.p>

          {/* =================================================
              TITLE

              Không blur title nữa.

              Blur text lớn cũng rất tốn GPU trên mobile.
          ================================================= */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 28,
              scale: 0.98,
            }}
            animate={
              curtainOpened
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    y: 28,
                    scale: 0.98,
                  }
            }
            transition={{
              delay: 0.18,

              duration: 0.95,

              ease: [
                0.22,
                1,
                0.36,
                1,
              ],
            }}
            className="
              font-editorial

              mx-auto

              mt-4

              max-w-[1000px]

              text-[clamp(3rem,13vw,5rem)]

              font-medium

              leading-[0.86]

              tracking-[-0.04em]

              text-white

              drop-shadow-[0_5px_24px_rgba(0,0,0,0.35)]

              sm:text-[clamp(3.8rem,11vw,6.2rem)]

              md:mt-5
              md:text-[clamp(4.5rem,9vw,8.5rem)]
            "
          >
            {
              wedding.story
                .title
            }
          </motion.h2>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            animate={
              curtainOpened
                ? {
                    opacity: 1,
                    scaleX: 1,
                  }
                : {
                    opacity: 0,
                    scaleX: 0,
                  }
            }
            transition={{
              delay: 0.34,
              duration: 0.75,
            }}
            className="
              mt-6

              flex

              items-center
              justify-center

              gap-3

              sm:mt-7
            "
          >
            <span
              className="
                h-px
                w-10

                bg-gradient-to-r

                from-transparent
                to-white/80

                sm:w-14
              "
            />

            <span
              className="
                text-wedding-rose

                text-xs

                drop-shadow
              "
            >
              ♡
            </span>

            <span
              className="
                h-px
                w-10

                bg-gradient-to-l

                from-transparent
                to-white/80

                sm:w-14
              "
            />
          </motion.div>

          {/* =================================================
              SUBTITLE
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={
              curtainOpened
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            transition={{
              delay: 0.44,
              duration: 0.8,
            }}
            className="
              font-editorial

              mx-auto

              mt-5

              max-w-[760px]

              px-1

              text-[clamp(1.35rem,3.2vw,2rem)]

              font-medium
              italic

              leading-[1.2]

              tracking-[-0.01em]

              text-white

              drop-shadow-[0_3px_14px_rgba(0,0,0,0.42)]

              sm:mt-6
            "
          >
            “{
              wedding.story
                .subtitle
            }”
          </motion.p>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={
              curtainOpened
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            transition={{
              delay: 0.56,
              duration: 0.8,
            }}
            className="
              mx-auto

              mt-5

              max-w-[680px]

              px-1

              text-[13px]

              font-medium

              leading-6

              text-white/90

              drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]

              sm:text-[15px]
              sm:leading-7

              md:mt-6
              md:text-base
              md:leading-8
            "
          >
            {
              wedding.story
                .description
            }
          </motion.p>

          {/* =================================================
              NAMES
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={
              curtainOpened
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 16,
                  }
            }
            transition={{
              delay: 0.68,
              duration: 0.8,
            }}
            className="
              font-editorial

              mt-7

              flex
              flex-col

              items-center
              justify-center

              text-[28px]

              font-semibold

              leading-tight

              tracking-[-0.02em]

              text-white

              drop-shadow-[0_3px_14px_rgba(0,0,0,0.42)]

              sm:text-3xl

              md:mt-8
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
              animate={
                curtainOpened
                  ? {
                      scale: [
                        1,
                        1.18,
                        1,
                      ],
                    }
                  : undefined
              }
              transition={{
                duration: 2.4,

                repeat:
                  Infinity,

                ease:
                  "easeInOut",
              }}
              className="
                text-wedding-rose

                my-1

                text-xl

                md:mx-5
                md:my-0
                md:text-2xl
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

          {/* =================================================
              CLOSING
          ================================================= */}

          <motion.p
            initial={{
              opacity: 0,
              y: 7,
            }}
            animate={
              curtainOpened
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 7,
                  }
            }
            transition={{
              delay: 0.8,
              duration: 0.85,
            }}
            className="
              mt-6

              max-w-xl

              text-[10px]

              font-medium

              leading-5

              tracking-[0.04em]

              text-white/85

              drop-shadow-[0_2px_8px_rgba(0,0,0,0.42)]

              sm:text-xs
              sm:leading-6

              md:mt-7
              md:text-[13px]
            "
          >
            {
              wedding.story
                .closing
            }
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}