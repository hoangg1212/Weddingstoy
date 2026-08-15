"use client";

import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

import BubbleLayer from "./BubbleLayer";
import { wedding } from "@/data/wedding";

export default function ForeverSection() {
  const ref =
    useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1.04, 1.12],
  );

  return (
    <section
      ref={ref}
      className="
        relative
        min-h-dvh
        overflow-hidden
        bg-black
      "
    >
      <motion.div
        style={{
          scale,
        }}
        className="absolute inset-0"
      >
        <Image
          src={wedding.forever.image}
          alt="Forever"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/20
          via-black/35
          to-black/65
        "
      />

      <BubbleLayer density="high" />

      <div
        className="
          relative z-10
          flex min-h-dvh
          items-center justify-center
          px-5
          py-24
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            max-w-5xl
            text-center
            text-white
          "
        >
          <p
            className="
              text-xs font-bold
              tracking-[0.38em]
              sm:text-sm
            "
          >
            AND SO IT BEGINS
          </p>

          <h2
            className="
              font-editorial
              mt-6
              text-[clamp(5rem,15vw,12rem)]
              font-semibold
              leading-[0.8]
              tracking-[-0.05em]
            "
          >
            {wedding.forever.title}
          </h2>

          <p
            className="
              font-editorial
              mt-7
              text-3xl
              font-medium
              sm:text-4xl
              md:text-5xl
            "
          >
            {wedding.forever.subtitle}
          </p>

          <div
            className="
              font-editorial
              mt-12
              text-3xl
              font-semibold
              sm:text-4xl
              md:text-5xl
            "
          >
            {wedding.bride}

            <span className="mx-4">
              &
            </span>

            {wedding.groom}
          </div>

          <p
            className="
              mt-10
              text-3xl
            "
          >
            ♡
          </p>
        </motion.div>
      </div>
    </section>
  );
}