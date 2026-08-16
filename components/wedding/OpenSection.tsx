"use client";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  useEffect,
  useState,
} from "react";

import HeartLayer from "./HeartLayer";

import {
  useWedding,
} from "./WeddingProvider";

export default function OpenSection() {
  const [
    opened,
    setOpened,
  ] = useState(false);

  const {
    openInvitation,
  } = useWedding();

  /* =====================================================
      KHÓA SCROLL KHI CHƯA MỞ THIỆP
  ===================================================== */

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    if (!opened) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "";
    }

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [opened]);

  /* =====================================================
      MỞ CÂU CHUYỆN
  ===================================================== */

  async function handleOpen() {
    /*
     * QUAN TRỌNG:
     *
     * Phát nhạc ngay trong thao tác click.
     * Điều này giúp tránh việc browser
     * chặn autoplay.
     */
    await openInvitation();

    /*
     * Bắt đầu đóng màn OPEN.
     */
    setOpened(true);

    /*
     * Sau khi màn hình bắt đầu fade,
     * cuộn tới StorySection.
     */
    window.setTimeout(() => {
      document
        .getElementById(
          "our-story",
        )
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 550);

    /*
     * Kích hoạt HeartCurtain
     * bên StorySection.
     */
    window.setTimeout(() => {
      window.dispatchEvent(
        new Event(
          "wedding-story-open",
        ),
      );
    }, 850);
  }

  return (
    <AnimatePresence>
      {!opened && (
        <motion.section
          key="opening"
          initial={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.035,
            filter: "blur(7px)",
          }}
          transition={{
            duration: 1.15,
            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            fixed
            inset-0

            z-[100]

            flex
            min-h-[100svh]

            items-center
            justify-center

            overflow-hidden

            bg-[#F9F6F0]

            md:min-h-dvh
          "
        >
          {/* =================================================
              TRÁI TIM BAY
          ================================================= */}

          <HeartLayer
            density="low"
          />

          {/* =================================================
              BACKGROUND DECORATION
          ================================================= */}

          {/* Ánh sáng góc trái */}

          <div
            className="
              pointer-events-none

              absolute
              -left-[30%]
              -top-[25%]

              h-[75vw]
              w-[75vw]

              rounded-full

              bg-[#E7D5CC]/35

              blur-[130px]
            "
          />

          {/* Ánh sáng góc phải */}

          <div
            className="
              pointer-events-none

              absolute
              -bottom-[25%]
              -right-[25%]

              h-[70vw]
              w-[70vw]

              rounded-full

              bg-[#EDE4D7]/80

              blur-[145px]
            "
          />

          {/* Ánh sáng trung tâm */}

          <div
            className="
              pointer-events-none

              absolute
              left-1/2
              top-1/2

              h-[48vh]
              w-[48vh]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-white/55

              blur-[100px]
            "
          />

          {/* Ánh champagne nhẹ */}

          <div
            className="
              pointer-events-none

              absolute
              bottom-[5%]
              left-[3%]

              h-[28rem]
              w-[28rem]

              rounded-full

              bg-[#E8D6D2]/20

              blur-[120px]
            "
          />

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
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
              relative
              z-10

              mx-auto

              flex
              w-full
              max-w-6xl

              flex-col

              items-center
              justify-center

              px-5

              text-center

              sm:px-8
            "
          >
            {/* =================================================
                HEART
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.65,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.12,
                duration: 0.8,
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
                  duration: 3,
                  repeat: Infinity,
                  ease:
                    "easeInOut",
                }}
                className="
                  mb-5

                  inline-block

                  text-2xl

                  text-[#A58C76]

                  sm:text-3xl
                "
              >
                ♡
              </motion.span>
            </motion.div>

            {/* =================================================
                SMALL TITLE
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.22,
                duration: 0.8,
              }}
              className="
                mb-6

                text-[10px]
                font-semibold

                uppercase

                tracking-[0.32em]

                text-[#74685F]

                sm:text-xs

                md:text-sm
              "
            >
              Chuyện của chúng mình
            </motion.p>

            {/* =================================================
                COUPLE NAMES
            ================================================= */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.32,
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

                flex
                w-full

                flex-col

                items-center

                text-center

                text-[#2B2724]
              "
            >
              {/* CHÚ RỂ */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.38,
                  duration: 0.9,
                }}
                className="
                  text-[clamp(3.4rem,9vw,7.4rem)]

                  font-medium

                  leading-[0.88]

                  tracking-[-0.045em]
                "
              >
                Nguyễn Nam
              </motion.span>

              {/* & */}

              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0.6,
                  rotate: -6,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.62,
                  duration: 0.8,
                }}
                className="
                  font-script

                  my-2

                  text-[clamp(2.8rem,6vw,5rem)]

                  font-normal

                  leading-none

                  text-[#AD9077]

                  sm:my-3
                "
              >
                &
              </motion.span>

              {/* CÔ DÂU */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.75,
                  duration: 0.9,
                }}
                className="
                  text-[clamp(3.4rem,9vw,7.4rem)]

                  font-medium

                  leading-[0.88]

                  tracking-[-0.045em]
                "
              >
                Huỳnh Thư
              </motion.span>
            </motion.h1>

            {/* =================================================
                LINE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              animate={{
                opacity: 1,
                scaleX: 1,
              }}
              transition={{
                delay: 0.92,
                duration: 0.95,
              }}
              className="
                mt-8

                h-px
                w-16

                origin-center

                bg-[#B9A38F]

                sm:w-20
              "
            />

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.98,
                duration: 0.85,
              }}
              className="
                mt-6

                max-w-xl

                px-2

                text-[15px]
                font-medium

                leading-7

                text-[#5B524B]

                sm:text-[17px]
                sm:leading-8

                md:text-lg
              "
            >
              Một hành trình dịu dàng,
              được viết nên từ hai trái tim.
            </motion.p>

            {/* =================================================
                OPEN BUTTON
            ================================================= */}

            <motion.button
              type="button"
              onClick={() => {
                void handleOpen();
              }}
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.1,
                duration: 0.85,
              }}
              whileHover={{
                scale: 1.035,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                group
                relative

                mt-9

                min-h-[58px]

                overflow-hidden

                rounded-full

                border
                border-[#B49B84]/75

                bg-white/65

                px-9
                py-4

                text-[13px]
                font-semibold

                uppercase

                tracking-[0.15em]

                text-[#40372F]

                shadow-[0_14px_45px_rgba(89,68,52,0.10)]

                backdrop-blur-xl

                transition-all
                duration-500

                hover:border-[#A88B70]

                hover:bg-white/90

                hover:shadow-[0_18px_55px_rgba(89,68,52,0.14)]

                sm:min-h-[62px]
                sm:px-12
                sm:text-sm
              "
            >
              {/* =============================================
                  GLOW
              ============================================= */}

              <motion.span
                aria-hidden="true"
                animate={{
                  opacity: [
                    0.15,
                    0.42,
                    0.15,
                  ],
                  scale: [
                    0.96,
                    1.05,
                    0.96,
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease:
                    "easeInOut",
                }}
                className="
                  pointer-events-none

                  absolute
                  -inset-[7px]

                  -z-10

                  rounded-full

                  bg-[#D4BBA4]/30

                  blur-xl
                "
              />

              {/* =============================================
                  LIGHT SWEEP
              ============================================= */}

              <motion.span
                aria-hidden="true"
                initial={{
                  x: "-180%",
                }}
                animate={{
                  x: [
                    "-180%",
                    "430%",
                  ],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatDelay: 1.7,
                  ease:
                    "easeInOut",
                }}
                className="
                  pointer-events-none

                  absolute
                  top-0

                  h-full
                  w-[35%]

                  -skew-x-[20deg]

                  bg-gradient-to-r
                  from-transparent
                  via-white/80
                  to-transparent

                  blur-[1px]
                "
              />

              {/* =============================================
                  INNER BORDER
              ============================================= */}

              <span
                className="
                  pointer-events-none

                  absolute
                  inset-[3px]

                  rounded-full

                  border
                  border-white/65
                "
              />

              {/* =============================================
                  HOVER BACKGROUND
              ============================================= */}

              <span
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  scale-0

                  rounded-full

                  bg-[#F2E8DF]/50

                  transition-transform
                  duration-500

                  group-hover:scale-100
                "
              />

              {/* =============================================
                  BUTTON CONTENT
              ============================================= */}

              <span
                className="
                  relative
                  z-10

                  flex

                  items-center
                  justify-center

                  gap-3
                "
              >
                <span>
                  Mở câu chuyện
                </span>

                <motion.span
                  animate={{
                    scale: [
                      1,
                      1.2,
                      1,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease:
                      "easeInOut",
                  }}
                  className="
                    text-lg

                    font-normal

                    text-[#A68D77]
                  "
                >
                  ♡
                </motion.span>
              </span>
            </motion.button>

            {/* =================================================
                MUSIC HINT
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.28,
                duration: 1,
              }}
              className="
                mt-5

                flex
                items-center
                justify-center

                gap-2

                text-[10px]
                font-medium

                tracking-[0.06em]

                text-[#80756C]

                sm:text-xs
              "
            >
              <motion.span
                animate={{
                  rotate: [
                    -5,
                    5,
                    -5,
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease:
                    "easeInOut",
                }}
                className="
                  text-sm

                  text-[#A58A73]
                "
              >
                ♪
              </motion.span>

              <span>
                Chạm để mở câu chuyện và bắt đầu giai điệu
              </span>
            </motion.p>
          </motion.div>

          {/* =================================================
              BOTTOM HEART
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 6,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.45,
              duration: 1,
            }}
            className="
              absolute

              bottom-5
              left-1/2

              z-10

              -translate-x-1/2

              sm:bottom-7
            "
          >
            <motion.span
              animate={{
                y: [
                  0,
                  5,
                  0,
                ],

                opacity: [
                  0.45,
                  0.8,
                  0.45,
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease:
                  "easeInOut",
              }}
              className="
                block

                text-sm

                text-[#A18E7D]
              "
            >
              ♡
            </motion.span>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}