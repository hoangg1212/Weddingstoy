"use client";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import { X } from "lucide-react";
import { useEffect } from "react";

type VideoModalProps = {
  open: boolean;
  src: string;
  onClose: () => void;
};

export default function VideoModal({
  open,
  src,
  onClose,
}: VideoModalProps) {
  useEffect(() => {
    if (!open) return;

    const oldOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKey = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKey,
    );

    return () => {
      document.body.style.overflow =
        oldOverflow;

      window.removeEventListener(
        "keydown",
        handleKey,
      );
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={onClose}
          className="
            fixed inset-0
            z-[200]
            flex
            items-center justify-center
            bg-black/80
            p-4
            backdrop-blur-xl
          "
        >
          <button
            onClick={onClose}
            aria-label="Đóng video"
            className="
              absolute
              right-5 top-5
              z-20
              flex h-12 w-12
              items-center justify-center
              rounded-full
              bg-white/15
              text-white
              backdrop-blur-md
              transition
              hover:bg-white/25
              sm:right-8
              sm:top-8
            "
          >
            <X size={24} />
          </button>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.94,
            }}
            transition={{
              duration: 0.45,
            }}
            onClick={(event) =>
              event.stopPropagation()
            }
            className="
              w-full
              max-w-6xl
              overflow-hidden
              rounded-2xl
              bg-black
              shadow-2xl
            "
          >
            <video
              key={src}
              src={src}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="
                max-h-[88dvh]
                w-full
                bg-black
              "
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}