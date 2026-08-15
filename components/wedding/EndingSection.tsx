"use client";

import { motion } from "motion/react";

export default function EndingSection() {
  return (
    <section
      className="
        flex
        min-h-[75dvh]
        items-center justify-center
        bg-white
        px-5 py-24
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.7,
        }}
        transition={{
          duration: 1.5,
        }}
        className="
          max-w-3xl
          text-center
        "
      >
        <div
          className="
            text-3xl
            text-[#A78D77]
          "
        >
          ♡
        </div>

        <h2
          className="
            font-editorial
            mt-8
            text-4xl
            font-medium
            leading-tight
            text-[#302B27]
            sm:text-5xl
            lg:text-6xl
          "
        >
          Thank you for being part
          of our story.
        </h2>

        <p
          className="
            mt-7
            text-base
            font-medium
            text-[#665E58]
            sm:text-lg
          "
        >
          Và một hành trình mới bắt đầu.
        </p>
      </motion.div>
    </section>
  );
}