"use client";

import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import {
  useRef,
  useState,
} from "react";

import { ZoomIn } from "lucide-react";

import { wedding } from "@/data/wedding";

import HeartLayer from "./HeartLayer";
import ImageLightbox from "./ImageLightbox";

export default function MomentsSection() {
  const firstRef =
    useRef<HTMLDivElement>(null);

  const togetherRef =
    useRef<HTMLDivElement>(null);

  /* ==========================================
      LIGHTBOX
  ========================================== */

  const [lightboxOpen, setLightboxOpen] =
    useState(false);

  const [
    lightboxIndex,
    setLightboxIndex,
  ] = useState(0);

  const momentImages = [
    {
      src: wedding.moments.first.image,
      alt: "Khoảnh khắc đầu tiên của Nguyễn Nam và Huỳnh Thư",
      title: "Khoảnh khắc đầu tiên",
    },

    {
      src: wedding.moments.little.images[0],
      alt: "Kỷ niệm của Nguyễn Nam và Huỳnh Thư",
      title: "Những điều nhỏ bé",
    },

    {
      src: wedding.moments.little.images[1],
      alt: "Kỷ niệm của Nguyễn Nam và Huỳnh Thư",
      title: "Những ngày có nhau",
    },

    {
      src: wedding.moments.little.images[2],
      alt: "Kỷ niệm của Nguyễn Nam và Huỳnh Thư",
      title: "Kỷ niệm của chúng mình",
    },

    {
      src: wedding.moments.together.image,
      alt: "Nguyễn Nam và Huỳnh Thư bên nhau",
      title: "Bên nhau",
    },
  ];

  function openLightbox(
    index: number,
  ) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  /* ==========================================
      MOMENT 01 SCROLL
  ========================================== */

  const {
    scrollYProgress: firstProgress,
  } = useScroll({
    target: firstRef,

    offset: [
      "start end",
      "end start",
    ],
  });

  const firstScale = useTransform(
    firstProgress,
    [0, 0.5, 1],
    [1.08, 1, 1.06],
  );

  const firstY = useTransform(
    firstProgress,
    [0, 1],
    ["-2%", "5%"],
  );

  /* ==========================================
      MOMENT 03 SCROLL
  ========================================== */

  const {
    scrollYProgress: togetherProgress,
  } = useScroll({
    target: togetherRef,

    offset: [
      "start end",
      "end start",
    ],
  });

  const togetherScale = useTransform(
    togetherProgress,
    [0, 0.5, 1],
    [1.07, 1, 1.06],
  );

  const togetherY = useTransform(
    togetherProgress,
    [0, 1],
    ["-2%", "4%"],
  );

  return (
    <>
      <section
        id="our-moments"
        className="
          overflow-hidden
          bg-[#F8F5EF]
        "
      >
        {/* =============================================
            01 - KHOẢNH KHẮC ĐẦU TIÊN
        ============================================= */}

        <div
          ref={firstRef}
          className="
            relative
            min-h-[100svh]
            overflow-hidden
            bg-[#25201C]
            md:min-h-dvh
          "
        >
          {/* IMAGE */}

          <motion.button
            type="button"
            onClick={() =>
              openLightbox(0)
            }
            aria-label="Phóng to ảnh khoảnh khắc đầu tiên"
            style={{
              scale: firstScale,
              y: firstY,
            }}
            className="
              group
              absolute
              inset-0

              cursor-zoom-in

              text-left
            "
          >
            <Image
              src={
                wedding.moments.first
                  .image
              }
              alt="Khoảnh khắc đầu tiên"
              fill
              sizes="100vw"
              className="
                object-cover
                object-center

                transition-transform
                duration-[1600ms]

                group-hover:scale-[1.015]
              "
            />

            {/* ICON ZOOM */}
            <span
              className="
                absolute
                right-5
                top-5
                z-10

                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-full

                border
                border-white/40

                bg-black/15

                text-white

                opacity-100

                backdrop-blur-md

                transition-all
                duration-500

                group-hover:bg-white/20

                sm:right-8
                sm:top-8

                md:opacity-0
                md:group-hover:opacity-100
              "
            >
              <ZoomIn
                size={19}
                strokeWidth={1.5}
              />
            </span>
          </motion.button>

          {/* OVERLAY */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-gradient-to-b

              from-black/[0.05]
              via-black/[0.10]
              to-black/45
            "
          />

          <HeartLayer density="low" />

          {/* CONTENT */}

          <div
            className="
              pointer-events-none

              relative
              z-10

              flex
              min-h-[100svh]

              items-end

              px-5
              pb-16
              pt-24

              sm:px-8
              sm:pb-20

              md:min-h-dvh
              md:px-12

              lg:px-16
              lg:pb-24
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 45,
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
                max-w-3xl
                text-white
              "
            >
              <div
                className="
                  mb-5
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-px
                    w-8
                    bg-white/70
                    sm:w-12
                  "
                />

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase

                    tracking-[0.28em]

                    sm:text-xs
                  "
                >
                  Những khoảnh khắc · 01
                </p>
              </div>

              <h2
                className="
                  font-editorial

                  text-[clamp(3.3rem,10vw,7.5rem)]

                  font-medium

                  leading-[0.9]

                  tracking-[-0.035em]
                "
              >
                {
                  wedding.moments.first
                    .title
                }
              </h2>

              <p
                className="
                  mt-6
                  max-w-xl

                  text-[15px]
                  font-medium

                  leading-7

                  sm:text-lg
                  sm:leading-8

                  md:text-xl
                "
              >
                “
                {
                  wedding.moments.first
                    .text
                }
                ”
              </p>

              <div
                className="
                  mt-7
                  text-xl
                  text-[#F5DFD4]
                "
              >
                ♡
              </div>
            </motion.div>
          </div>
        </div>

        {/* =============================================
            02 - NHỮNG ĐIỀU NHỎ BÉ
        ============================================= */}

        <div
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
          {/* BG */}

          <div
            className="
              pointer-events-none
              absolute
              -left-[20%]
              top-[15%]

              h-[40rem]
              w-[40rem]

              rounded-full

              bg-[#E9D8CE]/20

              blur-[130px]
            "
          />

          <HeartLayer density="low" />

          <div
            className="
              relative
              z-10

              mx-auto
              max-w-7xl
            "
          >
            {/* HEADER */}

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
              className="
                mx-auto
                max-w-3xl
                text-center
              "
            >
              <div
                className="
                  mb-5
                  text-2xl
                  text-[#A88D76]
                "
              >
                ♡
              </div>

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]
                  text-[#8C7663]

                  sm:text-xs
                "
              >
                Những khoảnh khắc · 02
              </p>

              <h2
                className="
                  font-editorial

                  mt-4

                  text-[clamp(3.2rem,9vw,7rem)]

                  font-medium

                  leading-[0.9]

                  tracking-[-0.035em]

                  text-[#2D2824]
                "
              >
                {
                  wedding.moments.little
                    .title
                }
              </h2>

              <div
                className="
                  mx-auto
                  mt-6

                  h-px
                  w-16

                  bg-[#B69D87]
                "
              />

              <p
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
                {
                  wedding.moments.little
                    .text
                }
              </p>
            </motion.div>

            {/* =========================================
                3 IMAGES
            ========================================= */}

            <div
              className="
                mt-16

                grid
                gap-7

                sm:grid-cols-2

                lg:mt-24
                lg:grid-cols-12
                lg:gap-8
              "
            >
              {/* PHOTO 01 */}

              <motion.button
                type="button"
                onClick={() =>
                  openLightbox(1)
                }
                initial={{
                  opacity: 0,
                  x: -50,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                }}
                className="
                  group
                  relative

                  aspect-[4/5]

                  cursor-zoom-in

                  overflow-hidden

                  rounded-[1.6rem]

                  shadow-[0_22px_70px_rgba(63,48,38,0.10)]

                  sm:col-span-1
                  sm:rounded-[2rem]

                  lg:col-span-4
                "
              >
                <Image
                  src={
                    wedding.moments
                      .little.images[0]
                  }
                  alt="Kỷ niệm 1"
                  fill
                  className="
                    object-cover

                    transition-transform
                    duration-[1500ms]

                    group-hover:scale-[1.04]
                  "
                />

                <ZoomButton />
              </motion.button>

              {/* PHOTO 02 */}

              <motion.button
                type="button"
                onClick={() =>
                  openLightbox(2)
                }
                initial={{
                  opacity: 0,
                  y: 55,
                  filter: "blur(8px)",
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
                  delay: 0.15,
                  duration: 1.1,
                }}
                className="
                  group
                  relative

                  aspect-[4/5]

                  cursor-zoom-in

                  overflow-hidden

                  rounded-[1.6rem]

                  shadow-[0_28px_90px_rgba(63,48,38,0.13)]

                  sm:rounded-[2rem]

                  lg:col-span-5
                "
              >
                <Image
                  src={
                    wedding.moments
                      .little.images[1]
                  }
                  alt="Kỷ niệm 2"
                  fill
                  className="
                    object-cover

                    transition-transform
                    duration-[1500ms]

                    group-hover:scale-[1.04]
                  "
                />

                <ZoomButton />
              </motion.button>

              {/* PHOTO 03 */}

              <motion.button
                type="button"
                onClick={() =>
                  openLightbox(3)
                }
                initial={{
                  opacity: 0,
                  x: 50,
                  filter: "blur(8px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.25,
                  duration: 1,
                }}
                className="
                  group
                  relative

                  aspect-[4/5]

                  cursor-zoom-in

                  overflow-hidden

                  rounded-[1.6rem]

                  shadow-[0_22px_70px_rgba(63,48,38,0.10)]

                  sm:col-span-2
                  sm:rounded-[2rem]

                  lg:col-span-3
                "
              >
                <Image
                  src={
                    wedding.moments
                      .little.images[2]
                  }
                  alt="Kỷ niệm 3"
                  fill
                  className="
                    object-cover

                    transition-transform
                    duration-[1500ms]

                    group-hover:scale-[1.04]
                  "
                />

                <ZoomButton />
              </motion.button>
            </div>

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
              className="
                mx-auto
                mt-16
                max-w-2xl
                text-center
                lg:mt-24
              "
            >
              <p
                className="
                  font-editorial

                  text-[clamp(2rem,4vw,3rem)]

                  font-medium

                  leading-[1.25]

                  text-[#372F2A]
                "
              >
                “Có những điều thật nhỏ,
                nhưng khi có nhau lại trở
                thành những ký ức thật lớn.”
              </p>

              <div
                className="
                  mt-7
                  text-lg
                  text-[#A78B74]
                "
              >
                ♡
              </div>
            </motion.div>
          </div>
        </div>

        {/* =============================================
            03 - BÊN NHAU
        ============================================= */}

        <div
          ref={togetherRef}
          className="
            relative

            min-h-[100svh]

            overflow-hidden

            bg-[#211D1A]

            md:min-h-dvh
          "
        >
          <motion.button
            type="button"
            onClick={() =>
              openLightbox(4)
            }
            aria-label="Phóng to ảnh bên nhau"
            style={{
              scale: togetherScale,
              y: togetherY,
            }}
            className="
              group
              absolute
              inset-0

              cursor-zoom-in
            "
          >
            <Image
              src={
                wedding.moments
                  .together.image
              }
              alt="Nguyễn Nam và Huỳnh Thư bên nhau"
              fill
              sizes="100vw"
              className="
                object-cover
                object-center

                transition-transform
                duration-[1600ms]

                group-hover:scale-[1.015]
              "
            />

            <span
              className="
                absolute
                right-5
                top-5
                z-10

                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-full

                border
                border-white/40

                bg-black/15

                text-white

                backdrop-blur-md

                sm:right-8
                sm:top-8
              "
            >
              <ZoomIn
                size={19}
                strokeWidth={1.5}
              />
            </span>
          </motion.button>

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-gradient-to-b

              from-black/[0.08]
              via-black/[0.17]
              to-black/40
            "
          />

          <HeartLayer density="low" />

          <div
            className="
              pointer-events-none

              relative
              z-10

              flex
              min-h-[100svh]

              items-center
              justify-center

              px-5
              py-20

              md:min-h-dvh
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
              }}
              className="
                max-w-4xl
                text-center
                text-white
              "
            >
              <div
                className="
                  mb-5
                  text-2xl
                "
              >
                ♡
              </div>

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.3em]

                  sm:text-xs
                "
              >
                Những khoảnh khắc · 03
              </p>

              <h2
                className="
                  font-editorial

                  mt-5

                  text-[clamp(4rem,13vw,9rem)]

                  font-medium

                  leading-[0.85]

                  tracking-[-0.04em]
                "
              >
                {
                  wedding.moments
                    .together.title
                }
              </h2>

              <div
                className="
                  mx-auto
                  mt-7
                  h-px
                  w-16
                  bg-white/80
                "
              />

              <p
                className="
                  mx-auto
                  mt-7
                  max-w-2xl

                  text-[15px]
                  font-medium
                  leading-7

                  sm:text-lg
                  sm:leading-8

                  md:text-xl
                "
              >
                “
                {
                  wedding.moments
                    .together.text
                }
                ”
              </p>

              <div
                className="
                  font-editorial
                  mt-9
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                "
              >
                {wedding.groom}
                <span className="mx-4">
                  ♡
                </span>
                {wedding.bride}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==============================================
          LIGHTBOX
      ============================================== */}

      <ImageLightbox
        open={lightboxOpen}
        images={momentImages}
        currentIndex={lightboxIndex}
        onChange={setLightboxIndex}
        onClose={() =>
          setLightboxOpen(false)
        }
      />
    </>
  );
}

/* ==============================================
    BUTTON ZOOM TRÊN ẢNH NHỎ
============================================== */

function ZoomButton() {
  return (
    <>
      <div
        className="
          pointer-events-none
          absolute
          inset-0

          bg-black/0

          transition-colors
          duration-500

          group-hover:bg-black/[0.05]
        "
      />

      <span
        className="
          pointer-events-none

          absolute
          right-4
          top-4

          flex
          h-10
          w-10

          items-center
          justify-center

          rounded-full

          border
          border-white/50

          bg-black/15

          text-white

          opacity-100

          backdrop-blur-md

          transition-all
          duration-500

          group-hover:scale-105
          group-hover:bg-black/25

          md:opacity-0
          md:group-hover:opacity-100
        "
      >
        <ZoomIn
          size={17}
          strokeWidth={1.5}
        />
      </span>
    </>
  );
}