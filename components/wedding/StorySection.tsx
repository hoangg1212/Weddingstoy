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

import { wedding } from "@/data/wedding";

import HeartLayer from "./HeartLayer";
import HeartCurtain from "./HeartCurtain";

export default function StorySection() {
  const sectionRef =
    useRef<HTMLElement>(null);

  /*
   * storyStarted:
   * bắt đầu hiệu ứng mở cửa
   */
  const [storyStarted, setStoryStarted] =
    useState(false);

  /*
   * curtainOpened:
   * khi cửa mở xong mới hiện content
   * và trái tim nhỏ
   */
  const [curtainOpened, setCurtainOpened] =
    useState(false);

  /*
   * Lắng nghe event từ OpenSection
   */
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

  /*
   * Scroll animation
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [
      "start start",
      "end start",
    ],
  });

  /* ============================
      DESKTOP
  ============================ */

  const desktopScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.07],
  );

  const desktopY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "4%"],
  );

  /* ============================
      MOBILE
  ============================ */

  const mobileScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.035],
  );

  /* ============================
      CONTENT
  ============================ */

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-4%"],
  );

  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.82, 1],
    [1, 1, 0],
  );

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#F8F5EF]
        md:min-h-dvh
      "
    >
      {/* ==========================================
          MOBILE BACKGROUND
      ========================================== */}

      <motion.div
        style={{
          scale: mobileScale,
        }}
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={
          storyStarted
            ? {
              opacity: 1,
              filter: "blur(0px)",
            }
            : {
              opacity: 0,
              filter: "blur(10px)",
            }
        }
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
          z-0
          block
          md:hidden
        "
      >
        <Image
          src={wedding.story.imageMobile}
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

      {/* ==========================================
          DESKTOP BACKGROUND
      ========================================== */}

      <motion.div
        style={{
          scale: desktopScale,
          y: desktopY,
        }}
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        animate={
          storyStarted
            ? {
              opacity: 1,
              filter: "blur(0px)",
            }
            : {
              opacity: 0,
              filter: "blur(10px)",
            }
        }
        transition={{
          duration: 1.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
          z-0
          hidden
          md:block
        "
      >
        <Image
          src={wedding.story.imageDesktop}
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

      {/* ==========================================
          OVERLAY

          Rất nhẹ để giữ màu banner
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]

          bg-gradient-to-b

          from-black/[0.02]
          via-black/[0.08]
          to-black/[0.16]

          md:from-black/[0.03]
          md:via-black/[0.09]
          md:to-black/[0.19]
        "
      />

      {/* ==========================================
          SOFT LIGHT
      ========================================== */}

      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          top-1/2

          z-[1]

          h-[60vh]
          w-[90vw]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-white/[0.02]

          blur-[90px]

          md:h-[70vh]
          md:w-[80vw]
        "
      />

      {/* ==========================================
          HEART CURTAIN

          Chỉ xuất hiện lúc đầu
      ========================================== */}

      <HeartCurtain
        start={storyStarted}
        onOpened={() =>
          setCurtainOpened(true)
        }
      />

      {/* ==========================================
          HEART PARTICLES

          Chỉ chạy sau khi rèm mở xong
      ========================================== */}

      {curtainOpened && (
        <HeartLayer density="medium" />
      )}

      {/* ==========================================
          CONTENT
      ========================================== */}

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
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
        <div
          className="
            mx-auto

            flex
            w-full
            max-w-6xl

            flex-col
            items-center

            text-center
            text-white
          "
        >
          {/* =====================================
              HEART
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 12,
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
                  scale: 0.5,
                  y: 12,
                }
            }
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mb-4

              text-[22px]

              text-white

              drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]

              sm:text-2xl
              md:text-3xl
            "
          >
            ♡
          </motion.div>

          {/* =====================================
              SMALL TITLE
          ===================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              curtainOpened
                ? {
                  opacity: 1,
                  y: 0,
                }
                : {
                  opacity: 0,
                  y: 20,
                }
            }
            transition={{
              delay: 0.15,
              duration: 0.8,
            }}
            className="
              mb-4

              text-[10px]
              font-bold
              uppercase

              tracking-[0.25em]

              text-white

              drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]

              sm:text-[11px]
              sm:tracking-[0.3em]

              md:mb-5
              md:text-sm
            "
          >
            Một hành trình của hai trái tim
          </motion.p>

          {/* =====================================
              MAIN TITLE
          ===================================== */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(8px)",
              scale: 0.97,
            }}
            animate={
              curtainOpened
                ? {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  scale: 1,
                }
                : {
                  opacity: 0,
                  y: 35,
                  filter: "blur(8px)",
                  scale: 0.97,
                }
            }
            transition={{
              delay: 0.3,
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              font-editorial

              mx-auto
              max-w-[950px]

              text-[clamp(3rem,13vw,5rem)]

              font-medium

              leading-[0.88]

              tracking-[-0.035em]

              text-white

              drop-shadow-[0_4px_22px_rgba(0,0,0,0.4)]

              sm:text-[clamp(3.8rem,11vw,6rem)]

              md:text-[clamp(4.5rem,9vw,8.5rem)]
            "
          >
            {wedding.story.title}
          </motion.h2>

          {/* =====================================
              LINE
          ===================================== */}

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
              delay: 0.55,
              duration: 0.9,
            }}
            className="
              mt-6

              h-px
              w-14

              origin-center

              bg-white/80

              sm:w-16
              md:w-20
            "
          />

          {/* =====================================
              DESCRIPTION
          ===================================== */}

          <motion.p
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={
              curtainOpened
                ? {
                  opacity: 1,
                  y: 0,
                }
                : {
                  opacity: 0,
                  y: 22,
                }
            }
            transition={{
              delay: 0.65,
              duration: 0.85,
            }}
            className="
              mx-auto

              mt-6

              max-w-[650px]

              px-1

              text-[14px]
              font-semibold

              leading-6

              text-white

              drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]

              sm:text-base
              sm:leading-7

              md:mt-7
              md:text-xl
              md:leading-8
            "
          >
            Một câu chuyện được viết nên từ
            những lần gặp gỡ, những cái nắm tay
            và những ngày bình yên có nhau.
          </motion.p>

          {/* =====================================
              NAMES
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={
              curtainOpened
                ? {
                  opacity: 1,
                  y: 0,
                }
                : {
                  opacity: 0,
                  y: 20,
                }
            }
            transition={{
              delay: 0.85,
              duration: 0.9,
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

              text-white

              drop-shadow-[0_3px_12px_rgba(0,0,0,0.5)]

              sm:text-3xl

              md:mt-9
              md:flex-row
              md:text-4xl
            "
          >
            <span>
              {wedding.groom}
            </span>

            <motion.span
              animate={
                curtainOpened
                  ? {
                    scale: [
                      1,
                      1.16,
                      1,
                    ],
                  }
                  : undefined
              }
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                my-1

                text-xl

                text-[#F8E7DC]

                sm:text-2xl

                md:mx-5
                md:my-0
              "
            >
              ♡
            </motion.span>

            <span>
              {wedding.bride}
            </span>
          </motion.div>

          {/* =====================================
              END TEXT
          ===================================== */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={
              curtainOpened
                ? {
                  opacity: 1,
                }
                : {
                  opacity: 0,
                }
            }
            transition={{
              delay: 1.05,
              duration: 1,
            }}
            className="
              mt-6

              text-[11px]
              font-semibold

              tracking-[0.04em]

              text-white/95

              drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]

              sm:text-xs
              md:text-sm
            "
          >
            Và câu chuyện ấy vẫn đang được viết tiếp...
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}