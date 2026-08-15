"use client";

import Image from "next/image";
import { Play } from "lucide-react";

import {
  motion,
} from "motion/react";

import { useState } from "react";

import BubbleLayer from "./BubbleLayer";
import VideoModal from "./VideoModal";
import { wedding } from "@/data/wedding";

export default function MessagesSection() {
  const [video, setVideo] =
    useState<string | null>(null);

  return (
    <>
      <section
        className="
          relative
          overflow-hidden
          bg-[#EFE8DE]
          px-5
          py-28
          sm:px-8
          lg:py-40
        "
      >
        <BubbleLayer
          density="medium"
          labels={[
            "Mom",
            "Dad",
            "Best Friend",
            "Love",
          ]}
        />

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
                text-[#806C5A]
              "
            >
              WORDS FROM OUR PEOPLE
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
              MESSAGES FOR US
            </h2>

            <p
              className="
                mx-auto mt-6
                max-w-xl
                text-base
                font-medium
                leading-7
                text-[#554E48]
                sm:text-lg
              "
            >
              Words from the people we love.
            </p>
          </div>

          <div
            className="
              mx-auto
              mt-16
              grid
              max-w-5xl
              gap-8
              md:grid-cols-2
              lg:mt-24
            "
          >
            {wedding.messages.map(
              (message, index) => (
                <motion.button
                  key={message.name}
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
                    delay: index * 0.15,
                  }}
                  onClick={() =>
                    setVideo(message.video)
                  }
                  className="
                    group
                    text-left
                  "
                >
                  <div
                    className="
                      relative
                      aspect-[4/5]
                      overflow-hidden
                      rounded-[1.8rem]
                      shadow-[0_20px_60px_rgba(55,42,34,0.12)]
                    "
                  >
                    <Image
                      src={message.poster}
                      alt={message.name}
                      fill
                      sizes="
                        (max-width:768px) 100vw,
                        50vw
                      "
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
                        bg-black/20
                      "
                    />

                    <div
                      className="
                        absolute inset-0
                        flex
                        items-center justify-center
                      "
                    >
                      <div
                        className="
                          flex
                          h-16 w-16
                          items-center justify-center
                          rounded-full
                          bg-white/90
                          text-[#332D29]
                          shadow-xl
                        "
                      >
                        <Play
                          size={24}
                          fill="currentColor"
                        />
                      </div>
                    </div>
                  </div>

                  <h3
                    className="
                      font-editorial
                      mt-5
                      text-center
                      text-3xl
                      font-semibold
                      sm:text-4xl
                    "
                  >
                    {message.name}
                  </h3>
                </motion.button>
              ),
            )}
          </div>
        </div>
      </section>

      <VideoModal
        open={Boolean(video)}
        src={video ?? ""}
        onClose={() => setVideo(null)}
      />
    </>
  );
}