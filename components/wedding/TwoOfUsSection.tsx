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

export default function TwoOfUsSection() {
  const ref =
    useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [
      "start end",
      "center center",
    ],
  });

  const leftX = useTransform(
    scrollYProgress,
    [0, 1],
    [-75, 0],
  );

  const rightX = useTransform(
    scrollYProgress,
    [0, 1],
    [75, 0],
  );

  return (
    <section
      ref={ref}
      className="
        relative
        overflow-hidden
        bg-[#F8F5EF]
        px-5
        py-24
        sm:py-28
        lg:py-36
      "
    >
      <BubbleLayer density="low" />

      <div
        className="
          relative z-10
          mx-auto
          max-w-7xl
        "
      >
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
          className="text-center"
        >
          <p
            className="
              text-xs font-bold
              tracking-[0.34em]
              text-[#8D7866]
              sm:text-sm
            "
          >
            CHAPTER TWO
          </p>

          <h2
            className="
              font-editorial
              mt-4
              text-5xl
              font-semibold
              tracking-[-0.03em]
              text-[#292521]
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
            "
          >
            THE TWO OF US
          </h2>

          <p
            className="
              mx-auto mt-6
              max-w-xl
              text-base
              font-medium
              leading-7
              text-[#5E5650]
              sm:text-lg
            "
          >
            Two hearts. One beautiful story.
          </p>
        </motion.div>

        <div
          className="
            mt-16
            grid
            gap-10
            md:grid-cols-2
            md:gap-6
            lg:mt-24
            lg:gap-10
          "
        >
          <motion.div
            style={{
              x: leftX,
            }}
          >
            <div
              className="
                relative
                mx-auto
                aspect-[4/5]
                w-full
                max-w-[520px]
                overflow-hidden
                rounded-[2rem]
                shadow-[0_24px_80px_rgba(60,47,37,0.12)]
              "
            >
              <Image
                src={wedding.couple.brideImage}
                alt={wedding.bride}
                fill
                sizes="
                  (max-width:768px) 100vw,
                  50vw
                "
                className="object-cover"
              />
            </div>

            <div className="mt-7 text-center">
              <p
                className="
                  text-xs font-bold
                  tracking-[0.3em]
                  text-[#8E7A68]
                "
              >
                CÔ DÂU
              </p>

              <h3
                className="
                  font-editorial
                  mt-2
                  text-4xl
                  font-semibold
                  sm:text-5xl
                "
              >
                {wedding.bride}
              </h3>
            </div>
          </motion.div>

          <motion.div
            style={{
              x: rightX,
            }}
          >
            <div
              className="
                relative
                mx-auto
                aspect-[4/5]
                w-full
                max-w-[520px]
                overflow-hidden
                rounded-[2rem]
                shadow-[0_24px_80px_rgba(60,47,37,0.12)]
              "
            >
              <Image
                src={wedding.couple.groomImage}
                alt={wedding.groom}
                fill
                sizes="
                  (max-width:768px) 100vw,
                  50vw
                "
                className="object-cover"
              />
            </div>

            <div className="mt-7 text-center">
              <p
                className="
                  text-xs font-bold
                  tracking-[0.3em]
                  text-[#8E7A68]
                "
              >
                CHÚ RỂ
              </p>

              <h3
                className="
                  font-editorial
                  mt-2
                  text-4xl
                  font-semibold
                  sm:text-5xl
                "
              >
                {wedding.groom}
              </h3>
            </div>
          </motion.div>
        </div>

        <motion.p
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
            mx-auto mt-20
            max-w-2xl
            text-center
            text-3xl
            font-medium
            leading-tight
            sm:text-4xl
            lg:text-5xl
          "
        >
          “{wedding.couple.quote}”
        </motion.p>
      </div>
    </section>
  );
}