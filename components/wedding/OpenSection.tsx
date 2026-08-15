"use client";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import { useEffect, useState } from "react";

import BubbleLayer from "./BubbleLayer";
import { wedding } from "@/data/wedding";

export default function OpenSection() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow;

    if (!opened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [opened]);

  function handleOpen() {
    setOpened(true);

    window.setTimeout(() => {
      document
        .getElementById("our-story")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 700);
  }

  return (
    <AnimatePresence>
      {!opened && (
        <motion.section
          key="opening"
          initial={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.045,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            fixed inset-0 z-[100]
            flex min-h-dvh
            items-center justify-center
            overflow-hidden
            bg-[#F8F5EF]
          "
        >
          <BubbleLayer density="low" />

          <div
            className="
              absolute left-[-20%] top-[-20%]
              h-[60vw] w-[60vw]
              rounded-full
              bg-[#E8D6D2]/30
              blur-[120px]
            "
          />

          <div
            className="
              absolute bottom-[-25%] right-[-15%]
              h-[55vw] w-[55vw]
              rounded-full
              bg-[#EEE7DC]/70
              blur-[130px]
            "
          />

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
            className="
              relative z-10
              mx-auto
              flex max-w-5xl
              flex-col items-center
              px-5 text-center
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.25,
                duration: 0.8,
              }}
              className="
                mb-6 text-2xl
                text-[#9D8672]
                sm:text-3xl
              "
            >
              ♡
            </motion.div>

            <p
              className="
                mb-4
                text-xs font-semibold
                tracking-[0.35em]
                text-[#746A62]
                sm:text-sm
              "
            >
              OUR WEDDING STORY
            </p>

            <h1
              className="
                font-editorial
                max-w-4xl
                text-[clamp(3.4rem,10vw,8rem)]
                font-medium
                leading-[0.85]
                tracking-[-0.04em]
                text-[#292521]
              "
            >
              {wedding.bride}

              <span
                className="
                  mx-3
                  inline-block
                  text-[0.65em]
                  font-normal
                  text-[#A88F76]
                "
              >
                &
              </span>

              {wedding.groom}
            </h1>

            <p
              className="
                mt-7
                text-base
                font-medium
                leading-7
                text-[#5F5750]
                sm:text-lg
              "
            >
              Một câu chuyện được viết bởi hai trái tim.
            </p>

            <motion.button
              onClick={handleOpen}
              animate={{
                scale: [1, 1.025, 1],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                mt-10
                min-h-14
                rounded-full
                border border-[#B9A795]
                bg-white/80
                px-8 py-4
                text-sm font-semibold
                tracking-[0.12em]
                text-[#342F2B]
                shadow-[0_14px_45px_rgba(66,52,42,0.09)]
                backdrop-blur-md
                transition-colors
                hover:bg-white
                sm:px-10
                sm:text-base
              "
            >
              MỞ CÂU CHUYỆN ♡
            </motion.button>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}