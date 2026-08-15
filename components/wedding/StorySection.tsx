"use client";

import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

import { wedding } from "@/data/wedding";
import BubbleLayer from "./BubbleLayer";

export default function StorySection() {
  const sectionRef =
    useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.09],
  );

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "7%"],
  );

  return (
    <section
      ref={sectionRef}
      id="our-story"
      className="
        relative
        min-h-dvh
        overflow-hidden
        bg-[#1C1917]
      "
    >
      <motion.div
        style={{
          scale: imageScale,
          y: imageY,
        }}
        className="absolute inset-0"
      >
        <Image
          src={wedding.story.image}
          alt="Ảnh cưới"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/25
          via-black/30
          to-black/55
        "
      />

      <BubbleLayer density="low" />

      <div
        className="
          relative z-10
          flex min-h-dvh
          items-center justify-center
          px-5 py-24
        "
      >
        <div
          className="
            mx-auto
            max-w-5xl
            text-center
            text-white
            drop-shadow-[0_3px_20px_rgba(0,0,0,0.4)]
          "
        >
          <motion.p
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
              amount: 0.6,
            }}
            transition={{
              duration: 0.9,
            }}
            className="
              mb-4
              text-xs font-bold
              tracking-[0.38em]
              sm:text-sm
            "
          >
            A STORY OF TWO HEARTS
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
            transition={{
              duration: 1,
              delay: 0.15,
            }}
            className="
              font-editorial
              text-[clamp(4rem,12vw,10rem)]
              font-medium
              leading-[0.85]
              tracking-[-0.04em]
            "
          >
            OUR STORY
          </motion.h2>

          <motion.p
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
              delay: 0.4,
              duration: 0.9,
            }}
            className="
              mx-auto mt-7
              max-w-2xl
              text-lg font-medium
              leading-8
              sm:text-xl
              md:text-2xl
            "
          >
            A story written by two hearts.
          </motion.p>

          <motion.div
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
            transition={{
              delay: 0.65,
              duration: 0.9,
            }}
            className="
              font-editorial
              mt-10
              text-2xl
              font-semibold
              sm:text-3xl
              md:text-4xl
            "
          >
            {wedding.bride}
            <span className="mx-4">♡</span>
            {wedding.groom}
          </motion.div>
        </div>
      </div>
    </section>
  );
}