"use client";

import Image from "next/image";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

type LightboxImage = {
  src: string;
  alt: string;
  title?: string;
};

type ImageLightboxProps = {
  open: boolean;
  images: LightboxImage[];
  currentIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export default function ImageLightbox({
  open,
  images,
  currentIndex,
  onClose,
  onChange,
}: ImageLightboxProps) {
  const [direction, setDirection] =
    useState(0);

  const currentImage =
    images[currentIndex];

  /* ===============================
      ẢNH TRƯỚC
  =============================== */

  function previousImage() {
    setDirection(-1);

    const nextIndex =
      currentIndex === 0
        ? images.length - 1
        : currentIndex - 1;

    onChange(nextIndex);
  }

  /* ===============================
      ẢNH SAU
  =============================== */

  function nextImage() {
    setDirection(1);

    const nextIndex =
      currentIndex === images.length - 1
        ? 0
        : currentIndex + 1;

    onChange(nextIndex);
  }

  /* ===============================
      KEYBOARD
  =============================== */

  useEffect(() => {
    if (!open) return;

    const oldOverflow =
      document.body.style.overflow;

    document.body.style.overflow =
      "hidden";

    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        oldOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    open,
    currentIndex,
    onClose,
  ]);

  if (!currentImage) {
    return null;
  }

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
          transition={{
            duration: 0.35,
          }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[999]

            flex
            items-center
            justify-center

            bg-[#171310]/90

            p-3

            backdrop-blur-xl

            sm:p-6
            lg:p-10
          "
        >
          {/* =========================
              TOP BAR
          ========================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-30

              flex
              w-full

              items-center
              justify-between

              px-4
              py-4

              sm:px-7
              sm:py-6
            "
          >
            {/* SỐ ẢNH */}
            <div
              className="
                pointer-events-auto

                rounded-full

                border
                border-white/15

                bg-black/20

                px-4
                py-2

                text-xs
                font-medium

                tracking-[0.15em]

                text-white/90

                backdrop-blur-md
              "
            >
              {String(
                currentIndex + 1,
              ).padStart(2, "0")}
              <span
                className="
                  mx-2
                  text-white/40
                "
              >
                /
              </span>
              {String(
                images.length,
              ).padStart(2, "0")}
            </div>

            {/* CLOSE */}
            <motion.button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onClose();
              }}
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.95,
              }}
              aria-label="Đóng ảnh"
              className="
                pointer-events-auto

                flex
                h-11
                w-11

                items-center
                justify-center

                rounded-full

                border
                border-white/20

                bg-white/10

                text-white

                backdrop-blur-xl

                transition-colors

                hover:bg-white/20

                sm:h-12
                sm:w-12
              "
            >
              <X
                size={21}
                strokeWidth={1.5}
              />
            </motion.button>
          </div>

          {/* =========================
              PREVIOUS
          ========================= */}

          {images.length > 1 && (
            <motion.button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousImage();
              }}
              whileHover={{
                scale: 1.07,
                x: -2,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Ảnh trước"
              className="
                absolute
                left-3
                top-1/2
                z-30

                flex
                h-11
                w-11

                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-white/20

                bg-black/20

                text-white

                backdrop-blur-xl

                transition-colors

                hover:bg-white/15

                sm:left-6
                sm:h-13
                sm:w-13

                lg:left-10
              "
            >
              <ChevronLeft
                size={25}
                strokeWidth={1.5}
              />
            </motion.button>
          )}

          {/* =========================
              NEXT
          ========================= */}

          {images.length > 1 && (
            <motion.button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextImage();
              }}
              whileHover={{
                scale: 1.07,
                x: 2,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Ảnh tiếp theo"
              className="
                absolute
                right-3
                top-1/2
                z-30

                flex
                h-11
                w-11

                -translate-y-1/2

                items-center
                justify-center

                rounded-full

                border
                border-white/20

                bg-black/20

                text-white

                backdrop-blur-xl

                transition-colors

                hover:bg-white/15

                sm:right-6
                sm:h-13
                sm:w-13

                lg:right-10
              "
            >
              <ChevronRight
                size={25}
                strokeWidth={1.5}
              />
            </motion.button>
          )}

          {/* =========================
              IMAGE
          ========================= */}

          <div
            onClick={(event) =>
              event.stopPropagation()
            }
            className="
              relative

              flex
              h-[82dvh]
              w-full
              max-w-[1450px]

              items-center
              justify-center
            "
          >
            <AnimatePresence
              mode="wait"
              custom={direction}
            >
              <motion.div
                key={currentImage.src}
                custom={direction}
                initial={{
                  opacity: 0,
                  x:
                    direction > 0
                      ? 55
                      : direction < 0
                        ? -55
                        : 0,
                  scale: 0.97,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  x:
                    direction > 0
                      ? -40
                      : 40,
                  scale: 0.985,
                  filter: "blur(4px)",
                }}
                transition={{
                  duration: 0.42,
                  ease: [
                    0.22,
                    1,
                    0.36,
                    1,
                  ],
                }}
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                dragElastic={0.12}
                onDragEnd={(
                  _,
                  info,
                ) => {
                  if (
                    info.offset.x <
                    -70
                  ) {
                    nextImage();
                  }

                  if (
                    info.offset.x >
                    70
                  ) {
                    previousImage();
                  }
                }}
                className="
                  relative

                  h-full
                  w-full

                  cursor-grab

                  active:cursor-grabbing
                "
              >
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  priority
                  sizes="100vw"
                  className="
                    select-none
                    object-contain
                  "
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* TITLE */}
            {currentImage.title && (
              <motion.div
                key={`${currentImage.src}-title`}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                }}
                className="
                  pointer-events-none

                  absolute
                  bottom-2
                  left-1/2

                  -translate-x-1/2

                  whitespace-nowrap

                  rounded-full

                  bg-black/25

                  px-4
                  py-2

                  text-center

                  text-xs
                  font-medium

                  tracking-[0.08em]

                  text-white/90

                  backdrop-blur-md

                  sm:bottom-3
                  sm:text-sm
                "
              >
                {currentImage.title}
              </motion.div>
            )}
          </div>

          {/* =========================
              MOBILE HINT
          ========================= */}

          <p
            className="
              pointer-events-none

              absolute
              bottom-4
              left-1/2

              -translate-x-1/2

              text-[10px]
              font-medium

              tracking-[0.08em]

              text-white/50

              sm:hidden
            "
          >
            Vuốt để xem ảnh khác
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}