"use client";

import Image from "next/image";
import { motion } from "motion/react";

import BubbleLayer from "./BubbleLayer";
import { wedding } from "@/data/wedding";

export default function MomentsSection() {
  return (
    <section className="overflow-hidden bg-[#F8F5EF]">
      {/* ================= FIRST MOMENT ================= */}

      <div
        className="
          relative
          min-h-dvh
          overflow-hidden
        "
      >
        <motion.div
          initial={{
            scale: 1.07,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0"
        >
          <Image
            src={wedding.moments.first.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        <div
          className="
            absolute inset-0
            bg-gradient-to-t
            from-black/65
            via-black/15
            to-black/10
          "
        />

        <BubbleLayer density="low" />

        <div
          className="
            relative z-10
            flex min-h-dvh
            items-end
            px-5 py-16
            sm:px-10
            lg:px-16
            lg:py-20
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
            }}
            transition={{
              duration: 1,
            }}
            className="
              max-w-3xl
              text-white
            "
          >
            <p
              className="
                mb-3
                text-sm font-bold
                tracking-[0.3em]
              "
            >
              OUR MOMENTS / 01
            </p>

            <h2
              className="
                font-editorial
                text-5xl
                font-semibold
                leading-[0.9]
                sm:text-6xl
                lg:text-8xl
              "
            >
              {wedding.moments.first.title}
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-lg
                font-medium
                leading-8
                sm:text-xl
                lg:text-2xl
              "
            >
              “{wedding.moments.first.text}”
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= LITTLE MOMENTS ================= */}

      <div
        className="
          relative
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
            max-w-7xl
          "
        >
          <div className="text-center">
            <p
              className="
                text-xs font-bold
                tracking-[0.35em]
                text-[#8D7866]
              "
            >
              OUR MOMENTS / 02
            </p>

            <h2
              className="
                font-editorial
                mt-4
                text-5xl
                font-semibold
                sm:text-6xl
                lg:text-8xl
              "
            >
              {wedding.moments.little.title}
            </h2>

            <p
              className="
                mx-auto mt-5
                max-w-xl
                text-base
                font-medium
                leading-7
                text-[#5D554E]
                sm:text-lg
              "
            >
              {wedding.moments.little.text}
            </p>
          </div>

          <div
            className="
              mt-16
              grid
              gap-6
              sm:grid-cols-2
              lg:mt-24
              lg:grid-cols-12
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[1.8rem]
                sm:col-span-1
                lg:col-span-4
              "
            >
              <Image
                src={
                  wedding.moments.little
                    .images[0]
                }
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
              }}
              className="
                relative
                aspect-[3/4]
                overflow-hidden
                rounded-[1.8rem]
                lg:col-span-5
                lg:mt-24
              "
            >
              <Image
                src={
                  wedding.moments.little
                    .images[1]
                }
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
              }}
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[1.8rem]
                sm:col-span-2
                lg:col-span-3
              "
            >
              <Image
                src={
                  wedding.moments.little
                    .images[2]
                }
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= TOGETHER ================= */}

      <div
        className="
          relative
          min-h-dvh
          overflow-hidden
        "
      >
        <Image
          src={wedding.moments.together.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div
          className="
            absolute inset-0
            bg-black/40
          "
        />

        <div
          className="
            relative z-10
            flex min-h-dvh
            items-center justify-center
            px-5
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
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
            <p
              className="
                text-sm font-bold
                tracking-[0.35em]
              "
            >
              OUR MOMENTS / 03
            </p>

            <h2
              className="
                font-editorial
                mt-5
                text-6xl
                font-semibold
                sm:text-7xl
                lg:text-9xl
              "
            >
              {wedding.moments.together.title}
            </h2>

            <p
              className="
                mx-auto mt-7
                max-w-2xl
                text-lg
                font-medium
                leading-8
                sm:text-2xl
              "
            >
              “{wedding.moments.together.text}”
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}