"use client";

import Image from "next/image";
import { motion } from "motion/react";

import BubbleLayer from "./BubbleLayer";
import { wedding } from "@/data/wedding";

type PhotoProps = {
  src: string;
  className?: string;
  direction?: "left" | "right" | "up";
};

function Photo({
  src,
  className = "",
  direction = "up",
}: PhotoProps) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -60, filter: "blur(12px)" }
      : direction === "right"
        ? { opacity: 0, x: 60, filter: "blur(12px)" }
        : { opacity: 0, y: 60, filter: "blur(12px)" };

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
        amount: 0.25,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      <div
        className="
          relative
          h-full w-full
          overflow-hidden
          rounded-[1.8rem]
          shadow-[0_24px_80px_rgba(56,43,34,0.1)]
        "
      >
        <motion.div
          whileInView={{
            scale: [1.05, 1],
          }}
          transition={{
            duration: 1.6,
          }}
          className="relative h-full w-full"
        >
          <Image
            src={src}
            alt=""
            fill
            sizes="
              (max-width:768px) 100vw,
              50vw
            "
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function PhotoStorySection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F6F1E9]
        px-5
        py-28
        sm:px-8
        lg:py-40
      "
    >
      <BubbleLayer density="medium" />

      <div
        className="
          relative z-10
          mx-auto
          max-w-7xl
        "
      >
        <div className="text-center">
          <p
            className="
              text-xs font-bold
              tracking-[0.35em]
              text-[#88715D]
            "
          >
            PHOTO STORY
          </p>

          <h2
            className="
              font-editorial
              mt-4
              text-5xl
              font-semibold
              sm:text-7xl
              lg:text-8xl
            "
          >
            OUR MEMORIES
          </h2>

          <p
            className="
              mx-auto mt-6
              max-w-xl
              text-base
              font-medium
              leading-7
              text-[#5D554E]
              sm:text-lg
            "
          >
            Những khoảnh khắc mà chúng ta muốn
            giữ lại thật lâu.
          </p>
        </div>

        <div className="mt-20 lg:mt-28">
          <Photo
            src={wedding.gallery[0]}
            className="
              mx-auto
              aspect-[4/5]
              w-full
              max-w-3xl
              md:aspect-[16/10]
            "
          />

          <div
            className="
              mt-10
              grid
              gap-10
              md:grid-cols-12
              lg:mt-20
            "
          >
            <Photo
              src={wedding.gallery[1]}
              direction="left"
              className="
                aspect-[4/5]
                md:col-span-5
              "
            />

            <Photo
              src={wedding.gallery[2]}
              direction="right"
              className="
                aspect-[3/4]
                md:col-span-5
                md:col-start-8
                md:mt-32
              "
            />
          </div>

          <Photo
            src={wedding.gallery[3]}
            className="
              mt-14
              ml-auto
              aspect-[16/10]
              w-full
              max-w-4xl
              lg:mt-28
            "
          />

          <div
            className="
              mt-14
              grid
              gap-10
              md:grid-cols-2
              lg:mt-28
              lg:gap-24
            "
          >
            <Photo
              src={wedding.gallery[4]}
              direction="left"
              className="aspect-[4/5]"
            />

            <Photo
              src={wedding.gallery[5]}
              direction="right"
              className="
                aspect-[4/5]
                md:mt-28
              "
            />
          </div>

          <Photo
            src={wedding.gallery[6]}
            className="
              mx-auto mt-14
              aspect-[16/10]
              w-full
              max-w-5xl
              lg:mt-28
            "
          />
        </div>
      </div>
    </section>
  );
}