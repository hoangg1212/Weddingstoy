"use client";

import { motion, useReducedMotion } from "motion/react";

type BubbleLayerProps = {
  density?: "low" | "medium" | "high";
  labels?: string[];
};

const bubbles = [
  { left: 5, size: 36, duration: 13, delay: 0, drift: 20 },
  { left: 12, size: 60, duration: 17, delay: 2, drift: -30 },
  { left: 22, size: 30, duration: 15, delay: 5, drift: 25 },
  { left: 31, size: 72, duration: 20, delay: 1, drift: -20 },

  { left: 42, size: 45, duration: 14, delay: 7, drift: 35 },
  { left: 51, size: 80, duration: 21, delay: 3, drift: -35 },
  { left: 61, size: 32, duration: 16, delay: 4, drift: 20 },
  { left: 70, size: 55, duration: 18, delay: 6, drift: -25 },

  { left: 80, size: 38, duration: 15, delay: 2, drift: 25 },
  { left: 91, size: 67, duration: 22, delay: 5, drift: -30 },

  { left: 16, size: 42, duration: 18, delay: 8, drift: 24 },
  { left: 27, size: 58, duration: 21, delay: 4, drift: -19 },

  { left: 37, size: 35, duration: 17, delay: 10, drift: 30 },
  { left: 47, size: 52, duration: 18, delay: 6, drift: -25 },

  { left: 58, size: 38, duration: 16, delay: 9, drift: 20 },
  { left: 66, size: 70, duration: 22, delay: 4, drift: -28 },

  { left: 75, size: 44, duration: 19, delay: 7, drift: 23 },
  { left: 84, size: 33, duration: 16, delay: 11, drift: -20 },

  { left: 8, size: 52, duration: 22, delay: 12, drift: 35 },
  { left: 34, size: 64, duration: 19, delay: 13, drift: -25 },

  { left: 55, size: 48, duration: 20, delay: 12, drift: 28 },
  { left: 72, size: 58, duration: 21, delay: 10, drift: -30 },

  { left: 88, size: 40, duration: 17, delay: 12, drift: 25 },
  { left: 96, size: 62, duration: 23, delay: 8, drift: -20 },
];

export default function BubbleLayer({
  density = "medium",
  labels = [],
}: BubbleLayerProps) {
  const reduceMotion = useReducedMotion();

  const count =
    density === "low"
      ? 5
      : density === "medium"
        ? 10
        : 24;

  if (reduceMotion) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
    >
      {bubbles.slice(0, count).map((bubble, index) => {
        const label = labels[index];

        const size = label
          ? Math.max(bubble.size, 88)
          : bubble.size;

        return (
          <motion.div
            key={index}
            className="glass-bubble flex items-center justify-center"
            style={{
              left: `${bubble.left}%`,
              width: size,
              height: size,
              bottom: "-120px",
            }}
            initial={{
              y: 0,
              opacity: 0,
            }}
            animate={{
              y: "-125vh",
              x: [
                0,
                bubble.drift,
                bubble.drift * -0.35,
                0,
              ],
              opacity: [0, 0.72, 0.72, 0],
            }}
            transition={{
              duration: bubble.duration,
              delay: bubble.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {label && (
              <span className="px-2 text-center text-[11px] font-semibold text-[#514942] sm:text-xs">
                ♡ {label}
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}