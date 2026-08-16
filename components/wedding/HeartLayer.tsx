"use client";

import {
    motion,
    useReducedMotion,
} from "motion/react";

type HeartLayerProps = {
    density?: "low" | "medium" | "high";
};

const hearts = [
    {
        left: 7,
        size: 20,
        duration: 12,
        delay: 0,
        drift: 25,
    },
    {
        left: 16,
        size: 28,
        duration: 15,
        delay: 2,
        drift: -20,
    },
    {
        left: 26,
        size: 17,
        duration: 13,
        delay: 4,
        drift: 30,
    },
    {
        left: 38,
        size: 24,
        duration: 16,
        delay: 1,
        drift: -28,
    },
    {
        left: 50,
        size: 18,
        duration: 14,
        delay: 3,
        drift: 22,
    },
    {
        left: 61,
        size: 30,
        duration: 17,
        delay: 5,
        drift: -25,
    },
    {
        left: 72,
        size: 19,
        duration: 13,
        delay: 1,
        drift: 24,
    },
    {
        left: 82,
        size: 25,
        duration: 15,
        delay: 3,
        drift: -30,
    },
    {
        left: 91,
        size: 16,
        duration: 12,
        delay: 5,
        drift: 20,
    },
    {
        left: 33,
        size: 22,
        duration: 16,
        delay: 6,
        drift: -25,
    },
    {
        left: 56,
        size: 17,
        duration: 14,
        delay: 7,
        drift: 20,
    },
    {
        left: 76,
        size: 28,
        duration: 17,
        delay: 7,
        drift: -28,
    },
];

export default function HeartLayer({
    density = "medium",
}: HeartLayerProps) {
    const reduceMotion = useReducedMotion();

    if (reduceMotion) {
        return null;
    }

    const count =
        density === "low"
            ? 5
            : density === "medium"
                ? 9
                : 12;

    return (
        <div
            aria-hidden="true"
            className="
        pointer-events-none
        absolute inset-0
        z-[5]
        overflow-hidden
      "
        >
            {hearts
                .slice(0, count)
                .map((heart, index) => (
                    <motion.div
                        key={index}
                        style={{
                            left: `${heart.left}%`,
                            bottom: "-40px",
                        }}
                        initial={{
                            y: "10vh",
                            opacity: 0,
                            scale: 0.8,
                            rotate: -8,
                        }}
                        animate={{
                            y: "-115vh",

                            x: [
                                0,
                                heart.drift,
                                -heart.drift * 0.5,
                                heart.drift * 0.4,
                                0,
                            ],

                            opacity: [
                                0,
                                0.6,
                                0.7,
                                0.55,
                                0,
                            ],

                            scale: [
                                0.8,
                                1,
                                1.05,
                                0.95,
                            ],

                            rotate: [
                                -8,
                                5,
                                -5,
                                7,
                            ],
                        }}
                        transition={{
                            duration: heart.duration,
                            delay: heart.delay,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="
              absolute
              text-white
              drop-shadow-[0_3px_8px_rgba(0,0,0,0.25)]
            "
                    >
                        <span
                            style={{
                                fontSize: heart.size,
                            }}
                            className="
                block
                font-light
                text-white/90
              "
                        >
                            ♡
                        </span>
                    </motion.div>
                ))}
        </div>
    );
}