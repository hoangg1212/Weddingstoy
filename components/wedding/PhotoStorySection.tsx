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

import { wedding } from "@/data/wedding";

import HeartLayer from "./HeartLayer";
import ImageLightbox from "./ImageLightbox";

/* =========================================================
   TYPES
========================================================= */

type Direction =
  | "left"
  | "right"
  | "up";

type PhotoProps = {
  src: string;
  alt: string;
  index: number;

  className?: string;

  direction?: Direction;

  priority?: boolean;

  onOpen: (
    index: number,
  ) => void;
};

/* =========================================================
   PHOTO ITEM
========================================================= */

function Photo({
  src,
  alt,
  index,
  className = "",
  direction = "up",
  priority = false,
  onOpen,
}: PhotoProps) {
  const initial =
    direction === "left"
      ? {
          opacity: 0,
          x: -55,
          filter: "blur(10px)",
        }
      : direction === "right"
        ? {
            opacity: 0,
            x: 55,
            filter: "blur(10px)",
          }
        : {
            opacity: 0,
            y: 55,
            filter: "blur(10px)",
          };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1.05,
        ease: [
          0.22,
          1,
          0.36,
          1,
        ],
      }}
      className={className}
    >
      <motion.button
        type="button"
        onClick={() =>
          onOpen(index)
        }
        whileHover={{
          y: -4,
        }}
        whileTap={{
          scale: 0.995,
        }}
        transition={{
          duration: 0.4,
        }}
        aria-label={`Phóng to ${alt}`}
        className="
          group
          relative
          block
          h-full
          w-full

          cursor-zoom-in

          overflow-hidden

          rounded-[1.5rem]

          bg-[#EEE6DD]

          shadow-[0_24px_70px_rgba(70,52,40,0.10)]

          sm:rounded-[1.8rem]

          lg:rounded-[2rem]
        "
      >
        {/* IMAGE */}

        <motion.div
          initial={{
            scale: 1.045,
          }}
          whileInView={{
            scale: 1,
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
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 60vw,
              50vw
            "
            className="
              object-cover

              transition-transform
              duration-[1500ms]

              ease-out

              group-hover:scale-[1.035]
            "
          />
        </motion.div>

        {/* SOFT OVERLAY */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-t

            from-black/[0.12]
            via-transparent
            to-white/[0.03]

            transition-colors
            duration-700
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

            sm:rounded-[1.45rem]

            lg:rounded-[1.65rem]
          "
        />

        {/* ZOOM BUTTON */}

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

            z-10

            flex
            h-10
            w-10

            items-center
            justify-center

            rounded-full

            border
            border-white/45

            bg-black/15

            text-white

            shadow-lg

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
            strokeWidth={1.5}
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

  /* =======================================================
     DATA CHO LIGHTBOX
  ======================================================= */

  const galleryImages =
    wedding.gallery.map(
      (
        src,
        index,
      ) => ({
        src,

        alt: `Kỷ niệm ${
          index + 1
        } của Nguyễn Nam và Huỳnh Thư`,

        title:
          index === 0
            ? "Một ngày thật đẹp"
            : index === 1
              ? "Những điều bình dị"
              : index === 2
                ? "Ngày mình có nhau"
                : index === 3
                  ? "Một khoảng trời riêng"
                  : index === 4
                    ? "Những nụ cười"
                    : index === 5
                      ? "Đi cùng nhau"
                      : "Kỷ niệm của chúng mình",
      }),
    );

  function openLightbox(
    index: number,
  ) {
    setCurrentIndex(index);
    setLightboxOpen(true);
  }

  return (
    <>
      <section
        id="our-memories"
        className="
          relative
          overflow-hidden

          bg-[#F7F2EA]

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
            -left-[20%]
            top-[5%]

            h-[42rem]
            w-[42rem]

            rounded-full

            bg-[#E8D7CD]/25

            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none

            absolute
            -right-[20%]
            top-[45%]

            h-[40rem]
            w-[40rem]

            rounded-full

            bg-[#E9DECF]/30

            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none

            absolute
            bottom-[5%]
            left-[20%]

            h-[30rem]
            w-[30rem]

            rounded-full

            bg-[#F0DDD7]/20

            blur-[120px]
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
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
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

                text-[#A68A73]
              "
            >
              ♡
            </motion.div>

            {/* SMALL TITLE */}

            <p
              className="
                text-[10px]
                font-bold
                uppercase

                tracking-[0.3em]

                text-[#8B7461]

                sm:text-xs
              "
            >
              Album của chúng mình
            </p>

            {/* TITLE */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 22,
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
                delay: 0.1,
                duration: 1,
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
              Những ký ức
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

                bg-[#B69C86]
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

                text-[#625850]

                sm:text-base

                md:text-lg
                md:leading-8
              "
            >
              Có những khoảnh khắc chỉ đi qua một lần,
              nhưng lại đủ đẹp để chúng mình muốn giữ
              bên nhau thật lâu.
            </motion.p>
          </motion.div>

          {/* =================================================
              EDITORIAL GALLERY
          ================================================= */}

          <div
            className="
              mt-16

              sm:mt-20

              lg:mt-28
            "
          >
            {/* ===============================================
                PHOTO 01
                Ảnh hero
            =============================================== */}

            <Photo
              src={
                wedding.gallery[0]
              }
              alt="Kỷ niệm đầu tiên"
              index={0}
              priority
              onOpen={
                openLightbox
              }
              className="
                mx-auto

                aspect-[4/5]

                w-full
                max-w-4xl

                md:aspect-[16/10]
              "
            />

            {/* QUOTE */}

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

                my-16

                max-w-2xl

                text-center

                sm:my-20

                lg:my-28
              "
            >
              <p
                className="
                  font-editorial

                  text-[clamp(2rem,4vw,3.2rem)]

                  font-medium

                  leading-[1.2]

                  tracking-[-0.025em]

                  text-[#392F29]
                "
              >
                “Không phải ngày nào cũng đặc biệt,
                nhưng khi có nhau, ngày nào cũng
                trở thành một điều đáng nhớ.”
              </p>

              <div
                className="
                  mt-6

                  text-lg

                  text-[#A88D75]
                "
              >
                ♡
              </div>
            </motion.div>

            {/* ===============================================
                PHOTO 02 + 03
            =============================================== */}

            <div
              className="
                grid

                gap-8

                md:grid-cols-12

                md:items-start

                lg:gap-12
              "
            >
              {/* LEFT */}

              <Photo
                src={
                  wedding.gallery[1]
                }
                alt="Một khoảnh khắc bình dị"
                index={1}
                direction="left"
                onOpen={
                  openLightbox
                }
                className="
                  aspect-[4/5]

                  md:col-span-5
                "
              />

              {/* RIGHT */}

              <Photo
                src={
                  wedding.gallery[2]
                }
                alt="Ngày mình có nhau"
                index={2}
                direction="right"
                onOpen={
                  openLightbox
                }
                className="
                  aspect-[4/5]

                  md:col-span-5
                  md:col-start-8

                  lg:mt-16
                "
              />
            </div>

            {/* ===============================================
                TEXT BETWEEN
            =============================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.9,
              }}
              className="
                my-20

                max-w-xl

                sm:my-24

                lg:my-32
                lg:ml-[8%]
              "
            >
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase

                  tracking-[0.3em]

                  text-[#947B66]

                  sm:text-xs
                "
              >
                Chúng mình
              </p>

              <p
                className="
                  font-editorial

                  mt-4

                  text-[clamp(2.5rem,5vw,4.2rem)]

                  font-medium

                  leading-[1.05]

                  tracking-[-0.03em]

                  text-[#332C27]
                "
              >
                Có nhau trong những ngày thật bình thường.
              </p>

              <div
                className="
                  mt-6

                  h-px
                  w-12

                  bg-[#B49B86]
                "
              />
            </motion.div>

            {/* ===============================================
                PHOTO 04
            =============================================== */}

            <Photo
              src={
                wedding.gallery[3]
              }
              alt="Một khoảng trời riêng"
              index={3}
              direction="right"
              onOpen={
                openLightbox
              }
              className="
                ml-auto

                aspect-[16/10]

                w-full
                max-w-5xl
              "
            />

            {/* ===============================================
                PHOTO 05 + 06
            =============================================== */}

            <div
              className="
                mt-16

                grid

                gap-8

                md:grid-cols-2

                lg:mt-28
                lg:gap-16
              "
            >
              <Photo
                src={
                  wedding.gallery[4]
                }
                alt="Những nụ cười"
                index={4}
                direction="left"
                onOpen={
                  openLightbox
                }
                className="
                  aspect-[4/5]
                "
              />

              <Photo
                src={
                  wedding.gallery[5]
                }
                alt="Đi cùng nhau"
                index={5}
                direction="right"
                onOpen={
                  openLightbox
                }
                className="
                  aspect-[4/5]

                  md:mt-20
                "
              />
            </div>

            {/* ===============================================
                QUOTE 02
            =============================================== */}

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
              }}
              transition={{
                duration: 1,
              }}
              className="
                mx-auto

                my-20

                max-w-3xl

                text-center

                lg:my-32
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
                  repeat: Infinity,
                  ease:
                    "easeInOut",
                }}
                className="
                  block

                  text-xl

                  text-[#A98C74]
                "
              >
                ♡
              </motion.span>

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
                “Sau này khi nhìn lại,
                mong rằng chúng mình vẫn nhớ
                mình đã từng hạnh phúc như thế nào.”
              </p>
            </motion.div>

            {/* ===============================================
                PHOTO 07 - FINAL IMAGE
            =============================================== */}

            <Photo
              src={
                wedding.gallery[6]
              }
              alt="Kỷ niệm của chúng mình"
              index={6}
              direction="up"
              onOpen={
                openLightbox
              }
              className="
                mx-auto

                aspect-[4/5]

                w-full
                max-w-6xl

                md:aspect-[16/10]
              "
            />

            {/* ===============================================
                END TEXT
            =============================================== */}

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

                mt-16

                max-w-2xl

                text-center

                lg:mt-24
              "
            >
              <div
                className="
                  text-xl
                  text-[#A78A72]
                "
              >
                ♡
              </div>

              <p
                className="
                  font-editorial

                  mt-5

                  text-3xl
                  font-medium

                  leading-tight

                  text-[#332C27]

                  sm:text-4xl

                  md:text-5xl
                "
              >
                Những ký ức này,
                chúng mình sẽ cùng nhau giữ lấy.
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

                  bg-[#B59B85]
                "
              />

              <p
                className="
                  mt-6

                  text-sm
                  font-medium

                  leading-7

                  text-[#746A62]

                  sm:text-base
                "
              >
                Nguyễn Nam
                <span className="mx-3 text-[#A68A73]">
                  ♡
                </span>
                Huỳnh Thư
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
        onClose={() =>
          setLightboxOpen(
            false,
          )
        }
      />
    </>
  );
}