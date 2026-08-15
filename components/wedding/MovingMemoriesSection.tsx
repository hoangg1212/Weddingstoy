"use client";

import Image from "next/image";

import { motion } from "motion/react";

import {
  Play,
} from "lucide-react";

import { useState } from "react";

import BubbleLayer from "./BubbleLayer";
import VideoModal from "./VideoModal";

import { wedding } from "@/data/wedding";

export default function MovingMemoriesSection() {
  const [open, setOpen] =
    useState(false);

  return (
    <>
      <section
        className="
          relative
          overflow-hidden
          bg-[#F8F5EF]
          px-5
          py-28
          sm:px-8
          lg:py-40
        "
      >
        <BubbleLayer density="low" />

        <div
          className="
            relative z-10
            mx-auto
            max-w-6xl
            text-center
          "
        >
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              text-xs font-bold
              tracking-[0.35em]
              text-[#88715D]
            "
          >
            FILM
          </motion.p>

          <motion.h2
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
              font-editorial
              mt-4
              text-5xl
              font-semibold
              sm:text-7xl
              lg:text-8xl
            "
          >
            MOVING MEMORIES
          </motion.h2>

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
            Những khoảnh khắc mà chúng ta
            có thể xem lại thêm một lần nữa.
          </p>

          <motion.button
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              scale: 1.015,
            }}
            onClick={() => setOpen(true)}
            className="
              group
              relative
              mt-14
              aspect-video
              w-full
              overflow-hidden
              rounded-[1.5rem]
              shadow-[0_25px_90px_rgba(55,41,32,0.15)]
              sm:mt-20
              sm:rounded-[2rem]
            "
          >
            <Image
              src={wedding.mainVideo.poster}
              alt="Moving Memories"
              fill
              sizes="100vw"
              className="
                object-cover
                transition-transform
                duration-1000
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute inset-0
                bg-black/25
                transition
                group-hover:bg-black/35
              "
            />

            <div
              className="
                absolute inset-0
                flex
                items-center justify-center
              "
            >
              <span
                className="
                  flex
                  h-16 w-16
                  items-center justify-center
                  rounded-full
                  border border-white/70
                  bg-white/20
                  text-white
                  shadow-xl
                  backdrop-blur-lg
                  sm:h-20 sm:w-20
                "
              >
                <Play
                  size={30}
                  fill="currentColor"
                />
              </span>
            </div>
          </motion.button>

          <p
            className="
              font-editorial
              mt-8
              text-2xl
              font-medium
              sm:text-3xl
            "
          >
            Moments we can replay.
          </p>
        </div>
      </section>

      <VideoModal
        open={open}
        src={wedding.mainVideo.video}
        onClose={() => setOpen(false)}
      />
    </>
  );
}