"use client";

import { motion } from "motion/react";

import BubbleLayer from "./BubbleLayer";
import { wedding } from "@/data/wedding";

export default function WordsToRememberSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FAF8F3]
      "
    >
      <BubbleLayer density="low" />

      <div
        className="
          relative z-10
          mx-auto
          max-w-6xl
          px-5
        "
      >
        {wedding.words.map(
          (word, index) => (
            <div
              key={word}
              className="
                flex
                min-h-[80dvh]
                items-center
                justify-center
                py-20
              "
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  amount: 0.6,
                }}
                transition={{
                  duration: 1.1,
                }}
                className="
                  mx-auto
                  max-w-4xl
                  text-center
                "
              >
                {index === 0 && (
                  <p
                    className="
                      mb-8
                      text-xs font-bold
                      tracking-[0.35em]
                      text-[#88715D]
                    "
                  >
                    WORDS TO REMEMBER
                  </p>
                )}

                <blockquote
                  className="
                    font-editorial
                    text-3xl
                    font-medium
                    leading-[1.35]
                    text-[#302B27]
                    sm:text-4xl
                    md:text-5xl
                    lg:text-6xl
                  "
                >
                  “{word}”
                </blockquote>

                <div
                  className="
                    mx-auto mt-10
                    h-px w-14
                    bg-[#B59C85]
                  "
                />
              </motion.div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}