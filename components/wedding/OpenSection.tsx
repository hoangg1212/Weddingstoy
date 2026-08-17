"use client";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  useEffect,
  useState,
} from "react";

import {
  wedding,
} from "@/data/wedding";

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

      MOBILE OPTIMIZATION:

      1. Không await audio.
      2. Không smooth scroll.
      3. OpenSection đóng trước.
      4. HeartCurtain chạy sau khi OpenSection gần đóng xong.
  ===================================================== */

  function handleOpen() {
    /*
     * Gọi trực tiếp trong click để giữ quyền autoplay
     * trên mobile.
     *
     * KHÔNG await vì việc khởi tạo audio có thể làm
     * animation đứng lại trên một số điện thoại.
     */
    void openInvitation();

    /*
     * Bắt đầu đóng OpenSection ngay.
     */
    setOpened(true);

    /*
     * Đưa StorySection về đúng viewport.
     *
     * OpenSection vẫn đang fixed phủ màn hình,
     * nên người dùng không nhìn thấy cú nhảy này.
     *
     * Không dùng smooth scroll để tránh GPU phải
     * xử lý thêm animation scroll.
     */
    window.setTimeout(() => {
      const story =
        document.getElementById(
          "our-story",
        );

      if (!story) {
        return;
      }

      story.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    }, 80);

    /*
     * OpenSection exit mất khoảng 550ms.
     *
     * Sau đó mới kích hoạt HeartCurtain,
     * tránh 2 animation fullscreen chạy chồng nhau.
     */
    window.setTimeout(() => {
      window.dispatchEvent(
        new Event(
          "wedding-story-open",
        ),
      );
    }, 600);
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
            scale: 1.018,
          }}
          transition={{
            duration: 0.55,

            ease: [
              0.22,
              1,
              0.36,
              1,
            ],
          }}
          className="
            bg-wedding-luxury

            fixed
            inset-0

            z-[100]

            flex

            min-h-[100svh]

            items-center
            justify-center

            overflow-hidden

            will-change-[opacity,transform]

            md:min-h-dvh
          "
        >
          {/* =================================================
              HEART LAYER

              Desktop vẫn giữ tim bay.
              Mobile tắt để giảm lượng animation cùng lúc.
          ================================================= */}

          <div
            className="
              hidden

              md:block
            "
          >
            <HeartLayer
              density="low"
            />
          </div>

          {/* =================================================
              BACKGROUND - MOBILE

              Static glow.
              Không animate các layer blur lớn trên mobile.
          ================================================= */}

          <div
            className="
              wedding-glow-blue

              pointer-events-none

              absolute

              -left-[35%]
              -top-[20%]

              h-[85vw]
              w-[85vw]

              rounded-full

              opacity-40

              blur-[65px]

              md:hidden
            "
          />

          <div
            className="
              wedding-glow-pink

              pointer-events-none

              absolute

              -bottom-[18%]
              -right-[30%]

              h-[80vw]
              w-[80vw]

              rounded-full

              opacity-35

              blur-[65px]

              md:hidden
            "
          />

          <div
            className="
              wedding-glow-green

              pointer-events-none

              absolute

              bottom-[8%]
              left-[4%]

              h-[18rem]
              w-[18rem]

              rounded-full

              opacity-25

              blur-[60px]

              md:hidden
            "
          />

          {/* =================================================
              BACKGROUND - DESKTOP

              Desktop giữ animation glow như cũ.
          ================================================= */}

          <motion.div
            animate={{
              scale: [
                1,
                1.08,
                1,
              ],

              x: [
                0,
                20,
                0,
              ],

              y: [
                0,
                10,
                0,
              ],
            }}
            transition={{
              duration: 10,

              repeat:
                Infinity,

              ease:
                "easeInOut",
            }}
            className="
              wedding-glow-blue

              pointer-events-none

              absolute

              -left-[28%]
              -top-[25%]

              hidden

              h-[80vw]
              w-[80vw]

              rounded-full

              opacity-55

              blur-[140px]

              md:block
            "
          />

          <motion.div
            animate={{
              scale: [
                1,
                1.1,
                1,
              ],

              x: [
                0,
                -15,
                0,
              ],

              y: [
                0,
                -12,
                0,
              ],
            }}
            transition={{
              duration: 12,

              repeat:
                Infinity,

              ease:
                "easeInOut",
            }}
            className="
              wedding-glow-pink

              pointer-events-none

              absolute

              -bottom-[30%]
              -right-[22%]

              hidden

              h-[72vw]
              w-[72vw]

              rounded-full

              opacity-40

              blur-[150px]

              md:block
            "
          />

          <div
            className="
              wedding-glow-green

              pointer-events-none

              absolute

              bottom-[5%]
              left-[5%]

              hidden

              h-[28rem]
              w-[28rem]

              rounded-full

              opacity-35

              blur-[125px]

              md:block
            "
          />

          {/* =================================================
              CENTER LIGHT

              Mobile giảm blur đáng kể.
          ================================================= */}

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

              bg-white/45

              blur-[55px]

              md:h-[56vh]
              md:w-[56vh]

              md:bg-white/60

              md:blur-[110px]
            "
          />

          {/* =================================================
              DECORATIVE HEART - DESKTOP ONLY
          ================================================= */}

          <motion.span
            aria-hidden="true"
            animate={{
              y: [
                0,
                -18,
                0,
              ],

              rotate: [
                -8,
                4,
                -8,
              ],

              opacity: [
                0.14,
                0.3,
                0.14,
              ],
            }}
            transition={{
              duration: 7,

              repeat:
                Infinity,

              ease:
                "easeInOut",
            }}
            className="
              text-wedding-blue

              pointer-events-none

              absolute

              left-[9%]
              top-[22%]

              hidden

              text-5xl

              md:block
            "
          >
            ♡
          </motion.span>

          <motion.span
            aria-hidden="true"
            animate={{
              y: [
                0,
                -22,
                0,
              ],

              rotate: [
                7,
                -5,
                7,
              ],

              opacity: [
                0.14,
                0.3,
                0.14,
              ],
            }}
            transition={{
              duration: 8,

              repeat:
                Infinity,

              ease:
                "easeInOut",
            }}
            className="
              text-wedding-rose

              pointer-events-none

              absolute

              bottom-[19%]
              right-[10%]

              hidden

              text-6xl

              md:block
            "
          >
            ♡
          </motion.span>

          {/* =================================================
              GLASS FRAME
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              scale: 1,
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
              glass-wedding

              pointer-events-none

              absolute

              inset-4

              rounded-[2rem]

              sm:inset-7
              sm:rounded-[2.5rem]

              md:inset-10

              lg:left-1/2
              lg:right-auto

              lg:w-[88%]
              lg:max-w-5xl

              lg:-translate-x-1/2
            "
          />

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
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
              relative
              z-10

              mx-auto

              flex

              w-full
              max-w-5xl

              flex-col

              items-center
              justify-center

              px-7
              py-16

              text-center

              sm:px-10
              sm:py-12

              md:px-12
            "
          >
            {/* =================================================
                HEART
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.08,
                duration: 0.7,
              }}
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

                  repeat:
                    Infinity,

                  ease:
                    "easeInOut",
                }}
                className="
                  text-wedding-rose-deep

                  inline-block

                  text-xl

                  sm:text-2xl
                  md:text-3xl
                "
              >
                ♡
              </motion.span>
            </motion.div>

            {/* =================================================
                LABEL
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.16,
                duration: 0.7,
              }}
              className="
                text-wedding-blue

                mt-3

                text-[10px]

                font-semibold

                uppercase

                tracking-[0.3em]

                sm:mt-4
                sm:text-xs
              "
            >
              {
                wedding.open
                  .label
              }
            </motion.p>

            {/* =================================================
                QUOTE
            ================================================= */}

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.23,
                duration: 0.75,
              }}
              className="
                font-editorial
                text-wedding-blue

                mt-3

                max-w-2xl

                text-[clamp(1.35rem,2.5vw,2rem)]

                font-medium
                italic

                leading-[1.18]

                tracking-[-0.015em]

                lg:max-w-none
                lg:whitespace-nowrap

                xl:text-[2.1rem]
              "
            >
              “{
                wedding.open
                  .quote
              }”
            </motion.p>

            {/* =================================================
                COUPLE
            ================================================= */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.9,

                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              className="
                font-editorial

                mt-5

                flex

                w-full

                flex-col

                items-center

                text-center

                sm:mt-6
              "
            >
              {/* GROOM */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.36,
                  duration: 0.82,
                }}
                className="
                  text-wedding-primary

                  text-[clamp(3.2rem,8vw,7.3rem)]

                  font-medium

                  leading-[0.86]

                  tracking-[-0.045em]
                "
              >
                {
                  wedding.groom
                }
              </motion.span>

              {/* AMPERSAND */}

              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  rotate: -5,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                }}
                className="
                  font-script
                  text-wedding-rose

                  my-1

                  text-[clamp(2.7rem,5.5vw,5rem)]

                  font-normal

                  leading-none

                  sm:my-2
                "
              >
                &
              </motion.span>

              {/* BRIDE */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.58,
                  duration: 0.82,
                }}
                className="
                  text-wedding-primary

                  text-[clamp(3.2rem,8vw,7.3rem)]

                  font-medium

                  leading-[0.86]

                  tracking-[-0.045em]
                "
              >
                {
                  wedding.bride
                }
              </motion.span>
            </motion.h1>

            {/* =================================================
                DIVIDER
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
                delay: 0.68,
                duration: 0.85,
              }}
              className="
                mt-6

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
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.75,
                duration: 0.78,
              }}
              className="
                text-wedding-soft

                mt-4

                max-w-xl

                text-[13px]

                font-medium

                leading-6

                sm:mt-5
                sm:text-[15px]
                sm:leading-7

                md:text-base
              "
            >
              {
                wedding.open
                  .description
              }
            </motion.p>

            {/* =================================================
                BUTTON
            ================================================= */}

            <motion.button
              type="button"
              onClick={
                handleOpen
              }
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.84,
                duration: 0.75,
              }}
              whileHover={{
                scale: 1.035,
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                wedding-button

                group

                relative

                mt-7

                min-h-[54px]

                overflow-hidden

                rounded-full

                px-8
                py-3.5

                text-[11px]

                font-semibold

                uppercase

                tracking-[0.15em]

                sm:min-h-[58px]
                sm:px-11
                sm:py-4
                sm:text-[12px]
              "
            >
              {/* =============================================
                  BUTTON GLOW

                  Mobile: static.
                  Desktop: animation.
              ============================================= */}

              <span
                aria-hidden="true"
                className="
                  wedding-glow-blue

                  pointer-events-none

                  absolute

                  -inset-[8px]

                  -z-10

                  rounded-full

                  opacity-25

                  blur-lg

                  md:hidden
                "
              />

              <motion.span
                aria-hidden="true"
                animate={{
                  opacity: [
                    0.12,
                    0.4,
                    0.12,
                  ],

                  scale: [
                    0.96,
                    1.06,
                    0.96,
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
                  wedding-glow-blue

                  pointer-events-none

                  absolute

                  -inset-[8px]

                  -z-10

                  hidden

                  rounded-full

                  blur-xl

                  md:block
                "
              />

              {/* =============================================
                  LIGHT SWEEP

                  Tắt trên mobile.
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
                  duration: 3.6,

                  repeat:
                    Infinity,

                  repeatDelay:
                    1.7,

                  ease:
                    "easeInOut",
                }}
                className="
                  pointer-events-none

                  absolute
                  top-0

                  hidden

                  h-full
                  w-[34%]

                  -skew-x-[20deg]

                  bg-gradient-to-r

                  from-transparent
                  via-white/90
                  to-transparent

                  blur-[1px]

                  md:block
                "
              />

              {/* INNER BORDER */}

              <span
                className="
                  border-wedding-white

                  pointer-events-none

                  absolute
                  inset-[3px]

                  rounded-full

                  border
                "
              />

              {/* HOVER */}

              <span
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  scale-0

                  rounded-full

                  bg-white/25

                  transition-transform

                  duration-500

                  group-hover:scale-100
                "
              />

              {/* CONTENT */}

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
                  {
                    wedding.open
                      .button
                  }
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

                    repeat:
                      Infinity,

                    ease:
                      "easeInOut",
                  }}
                  className="
                    text-wedding-rose

                    text-lg

                    font-normal
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
                delay: 0.96,
                duration: 0.8,
              }}
              className="
                text-wedding-muted

                mt-4

                flex

                items-center
                justify-center

                gap-2

                text-[9px]

                font-medium

                tracking-[0.04em]

                sm:mt-5
                sm:text-[11px]
              "
            >
              <span
                className="
                  text-wedding-blue

                  text-sm
                "
              >
                ♪
              </span>

              <span>
                {
                  wedding.open
                    .musicHint
                }
              </span>
            </motion.p>
          </motion.div>

          {/* =================================================
              BOTTOM HEART

              Animation nhỏ này rất nhẹ,
              có thể giữ cả mobile.
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
              delay: 1.05,
              duration: 0.8,
            }}
            className="
              pointer-events-none

              absolute

              bottom-6
              left-1/2

              z-10

              -translate-x-1/2

              sm:bottom-8
            "
          >
            <motion.span
              animate={{
                y: [
                  0,
                  4,
                  0,
                ],

                opacity: [
                  0.4,
                  0.8,
                  0.4,
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

                block

                text-sm
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