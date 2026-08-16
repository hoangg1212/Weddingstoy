"use client";

import Image from "next/image";

import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

import { useRef } from "react";

import { wedding } from "@/data/wedding";
import HeartLayer from "./HeartLayer";

export default function TwoOfUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  // Chú rể từ trái tiến vào
  const groomX = useTransform(
    scrollYProgress,
    [0, 1],
    [-45, 0],
  );

  // Cô dâu từ phải tiến vào
  const brideX = useTransform(
    scrollYProgress,
    [0, 1],
    [45, 0],
  );

  // Xoay nhẹ lúc bắt đầu
  const groomRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [-1.2, 0],
  );

  const brideRotate = useTransform(
    scrollYProgress,
    [0, 1],
    [1.2, 0],
  );

  // Zoom nhẹ
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0.97, 1],
  );

  return (
    <section
      ref={sectionRef}
      id="two-of-us"
      className="
        relative
        overflow-hidden
        bg-[#F8F5EF]
        px-5
        py-24
        sm:px-7
        sm:py-28
        md:px-10
        lg:px-12
        lg:py-36
      "
    >
      {/* ÁNH SÁNG NỀN */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[20%]
          top-[10%]
          h-[40rem]
          w-[40rem]
          rounded-full
          bg-[#E8D6D2]/20
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[20%]
          bottom-[5%]
          h-[38rem]
          w-[38rem]
          rounded-full
          bg-[#E6D8C8]/25
          blur-[130px]
        "
      />

      {/* TRÁI TIM BAY */}
      <HeartLayer density="low" />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
        "
      >
        {/* =========================
            HEADER
        ========================= */}

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
            amount: 0.4,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            className="
              mb-5
              text-2xl
              text-[#A68C75]
            "
          >
            ♡
          </motion.div>

          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#8B7664]
              sm:text-xs
            "
          >
            Hai chúng mình
          </p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 22,
              filter: "blur(5px)",
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.1,
              duration: 1,
            }}
            className="
              font-editorial
              mt-4
              text-[clamp(3.2rem,9vw,7rem)]
              font-medium
              leading-[0.9]
              tracking-[-0.035em]
              text-[#2C2723]
            "
          >
            Chúng ta
          </motion.h2>

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.25,
              duration: 0.9,
            }}
            className="
              mx-auto
              mt-6
              h-px
              w-16
              origin-center
              bg-[#B69F8B]
            "
          />

          <motion.p
            initial={{
              opacity: 0,
              y: 16,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.35,
              duration: 0.8,
            }}
            className="
              mx-auto
              mt-6
              max-w-xl
              text-[15px]
              font-medium
              leading-7
              text-[#615850]
              sm:text-base
              md:text-lg
              md:leading-8
            "
          >
            Từ hai người xa lạ, chúng mình đã tìm thấy nhau
            giữa những ngày rất đỗi bình thường.
          </motion.p>
        </motion.div>

        {/* =========================
            HAI NGƯỜI
        ========================= */}

        <div
          className="
            relative
            mt-16
            grid
            items-start
            gap-14
            md:grid-cols-2
            md:gap-8
            lg:mt-24
            lg:gap-14
          "
        >
          {/* =========================
              CHÚ RỂ - BÊN TRÁI
          ========================= */}

          <motion.div
            style={{
              x: groomX,
              rotate: groomRotate,
              scale: imageScale,
            }}
            className="relative z-10"
          >
            <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                group
                relative
                mx-auto
                aspect-[4/5]
                w-full
                max-w-[500px]
                overflow-hidden
                rounded-[1.6rem]
                bg-[#EEE7DE]
                shadow-[0_25px_80px_rgba(67,52,41,0.12)]
                sm:rounded-[2rem]
              "
            >
              <Image
                src={wedding.couple.groomImage}
                alt={`Chú rể ${wedding.groom}`}
                fill
                sizes="
                  (max-width: 768px) 100vw,
                  50vw
                "
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-[1400ms]
                  ease-out
                  group-hover:scale-[1.035]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-white/[0.03]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-3
                  rounded-[1.25rem]
                  border
                  border-white/40
                  sm:rounded-[1.6rem]
                "
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
              className="mt-7 text-center"
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-[#947C68]
                  sm:text-xs
                "
              >
                Chú rể
              </p>

              <h3
                className="
                  font-editorial
                  mt-2
                  text-4xl
                  font-medium
                  tracking-[-0.02em]
                  text-[#2F2925]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {wedding.groom}
              </h3>
            </motion.div>
          </motion.div>

          {/* =========================
              TRÁI TIM GIỮA
              DESKTOP
          ========================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.45,
              duration: 0.8,
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[42%]
              z-20
              hidden
              h-16
              w-16
              -translate-x-1/2
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              border
              border-white/70
              bg-white/60
              text-2xl
              text-[#AA8D75]
              shadow-[0_12px_40px_rgba(82,62,47,0.10)]
              backdrop-blur-xl
              md:flex
              lg:h-[72px]
              lg:w-[72px]
              lg:text-3xl
            "
          >
            <motion.span
              animate={{
                scale: [1, 1.14, 1],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ♡
            </motion.span>
          </motion.div>

          {/* =========================
              CÔ DÂU - BÊN PHẢI
          ========================= */}

          <motion.div
            style={{
              x: brideX,
              rotate: brideRotate,
              scale: imageScale,
            }}
            className="relative z-10"
          >
            <motion.div
              whileHover={{
                y: -5,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                group
                relative
                mx-auto
                aspect-[4/5]
                w-full
                max-w-[500px]
                overflow-hidden
                rounded-[1.6rem]
                bg-[#EEE7DE]
                shadow-[0_25px_80px_rgba(67,52,41,0.12)]
                sm:rounded-[2rem]
              "
            >
              <Image
                src={wedding.couple.brideImage}
                alt={`Cô dâu ${wedding.bride}`}
                fill
                sizes="
                  (max-width: 768px) 100vw,
                  50vw
                "
                className="
                  object-cover
                  object-center
                  transition-transform
                  duration-[1400ms]
                  ease-out
                  group-hover:scale-[1.035]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/10
                  via-transparent
                  to-white/[0.03]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-3
                  rounded-[1.25rem]
                  border
                  border-white/40
                  sm:rounded-[1.6rem]
                "
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="mt-7 text-center"
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.32em]
                  text-[#947C68]
                  sm:text-xs
                "
              >
                Cô dâu
              </p>

              <h3
                className="
                  font-editorial
                  mt-2
                  text-4xl
                  font-medium
                  tracking-[-0.02em]
                  text-[#2F2925]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                {wedding.bride}
              </h3>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================
            QUOTE
        ========================= */}

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
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-20
            max-w-3xl
            text-center
            lg:mt-28
          "
        >
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mb-6
              text-xl
              text-[#A88C75]
            "
          >
            ♡
          </motion.div>

          <blockquote
            className="
              font-editorial
              text-[clamp(2rem,5vw,3.8rem)]
              font-medium
              leading-[1.18]
              tracking-[-0.025em]
              text-[#332C27]
            "
          >
            “{wedding.couple.quote}”
          </blockquote>

          <motion.div
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.25,
              duration: 0.9,
            }}
            className="
              mx-auto
              mt-8
              h-px
              w-12
              origin-center
              bg-[#B7A18E]
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
            Và từ hôm nay, những ngày bình thường
            sẽ trở thành những ngày có nhau.
          </p>
        </motion.div>
      </div>
    </section>
  );
}