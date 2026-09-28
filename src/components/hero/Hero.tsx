import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

type Slide = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  primary?: {
    label: string;
    to: string;
  };
  secondary?: {
    label: string;
    to: string;
  };
  image?: string;
};

type Props = {
  // New slider support
  slides?: Slide[];

  // Existing Hero props
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  primary?: {
    label: string;
    to: string;
  };
  secondary?: {
    label: string;
    to: string;
  };
  image?: string;
  images?: string[];

  dark?: boolean;
  children?: React.ReactNode;
};

export default function Hero({
  slides: customSlides,
  eyebrow = "",
  title = "",
  description = "",
  primary,
  secondary,
  image,
  images,
  dark = true,
  children,
}: Props) {
  /*
   * IMPORTANT:
   *
   * 1. If `slides` exists -> use the new content-changing slider.
   * 2. If `slides` does not exist -> use the original Hero content.
   * 3. Existing pages do NOT need to be changed.
   */

  const slides: Slide[] =
    customSlides && customSlides.length > 0
      ? customSlides
      : images && images.length > 0
        ? images.map((img) => ({
            eyebrow,
            title,
            description,
            primary,
            secondary,
            image: img,
          }))
        : [
            {
              eyebrow,
              title,
              description,
              primary,
              secondary,
              image,
            },
          ];

  const isSlider = Boolean(customSlides?.length || images?.length);
  const hasSlider = isSlider && slides.length > 1;

  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const activeSlide = slides[current] || slides[0];

  /*
   * Keep current slide valid if slides change.
   */
  useEffect(() => {
    if (current >= slides.length) {
      setCurrent(0);
    }
  }, [current, slides.length]);

  /*
   * Autoplay only when there is actually more than one slide.
   *
   * Normal pages using the old Hero API will NOT autoplay.
   */
  useEffect(() => {
    if (!hasSlider || isDragging) return;

    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      window.clearInterval(interval);
    };
  }, [hasSlider, isDragging, slides.length]);

  const nextSlide = () => {
    if (!hasSlider) return;

    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    if (!hasSlider) return;

    setCurrent(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  /*
   * Mobile swipe
   */
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!hasSlider) return;

    setIsDragging(true);

    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!hasSlider) return;

    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!hasSlider) return;

    const distance =
      touchStartX.current - touchEndX.current;

    if (Math.abs(distance) >= 50) {
      if (distance > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    setIsDragging(false);
  };

  return (
    <section
      className={`relative overflow-hidden min-h-[82svh] flex items-center pt-32 pb-20 ${
        dark
          ? "dark-section noise"
          : "bg-[var(--surface)]"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px] -top-40 right-0" />

      <div className="absolute w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[100px] bottom-0 left-0" />

      <div className="container relative z-10 grid lg:grid-cols-[1.02fr_.98fr] gap-12 items-center">

        {/* =========================
            HERO CONTENT
        ========================== */}

        <AnimatePresence mode={hasSlider ? "wait" : undefined}>
          <motion.div
            key={hasSlider ? `content-${current}` : "static-content"}
            initial={
              hasSlider
                ? {
                    opacity: 0,
                    y: 25,
                  }
                : {
                    opacity: 0,
                    y: 35,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={
              hasSlider
                ? {
                    opacity: 0,
                    y: -15,
                  }
                : undefined
            }
            transition={{
              duration: hasSlider ? 0.45 : 0.8,
              ease: "easeOut",
            }}
          >
            <p className="eyebrow text-indigo-200">
              {activeSlide.eyebrow}
            </p>

            <h1
              className={`display text-[clamp(3rem,7vw,5rem)] ${
                dark
                  ? "text-white"
                  : "text-[var(--text)]"
              }`}
            >
              {activeSlide.title}
            </h1>

            <p
              className={`max-w-xl mt-7 text-base sm:text-lg leading-8 ${
                dark
                  ? "text-slate-400"
                  : "body-copy"
              }`}
            >
              {activeSlide.description}
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              {activeSlide.primary && (
                <Button to={activeSlide.primary.to}>
                  {activeSlide.primary.label}
                </Button>
              )}

              {activeSlide.secondary && (
                <Button
                  to={activeSlide.secondary.to}
                  variant={
                    dark
                      ? "dark"
                      : "outline"
                  }
                >
                  {activeSlide.secondary.label}
                </Button>
              )}
            </div>

            {children}
          </motion.div>
        </AnimatePresence>

        {/* =========================
            HERO IMAGE
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 35,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
          className="relative min-h-[390px] sm:min-h-[500px]"
        >
          {activeSlide.image ? (
            <div
              className="absolute inset-0 group"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="absolute inset-0 rounded-[34px] overflow-hidden border border-white/10 rotate-[1.5deg] shadow-2xl">

                <AnimatePresence
                  mode={hasSlider ? "wait" : undefined}
                >
                  <motion.div
                    key={
                      hasSlider
                        ? `image-${current}`
                        : "static-image"
                    }
                    initial={
                      hasSlider
                        ? {
                            opacity: 0,
                            scale: 1.06,
                          }
                        : {
                            opacity: 0,
                          }
                    }
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={
                      hasSlider
                        ? {
                            opacity: 0,
                            scale: 0.98,
                          }
                        : undefined
                    }
                    transition={{
                      duration: hasSlider
                        ? 0.7
                        : 1,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0"
                  >
                    <img
                      src={activeSlide.image}
                      alt={
                        activeSlide.eyebrow ||
                        "Nextronix Global"
                      }
                      draggable={false}
                      className="image-cover saturate-[.7] contrast-125"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>

              </div>

              {/* =========================
                  SLIDER ARROWS
              ========================== */}

              {hasSlider && (
                <>
                  <button
                    type="button"
                    onClick={previousSlide}
                    aria-label="Previous slide"
                    className="
                      absolute
                      left-3 sm:left-5
                      top-1/2
                      -translate-y-1/2
                      z-20
                      flex
                      h-10 w-10
                      sm:h-11 sm:w-11
                      items-center
                      justify-center
                      rounded-full
                      border border-white/15
                      bg-black/40
                      text-white
                      backdrop-blur-xl
                      opacity-0
                      -translate-x-2
                      transition-all
                      duration-300
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="
                      absolute
                      right-3 sm:right-5
                      top-1/2
                      -translate-y-1/2
                      z-20
                      flex
                      h-10 w-10
                      sm:h-11 sm:w-11
                      items-center
                      justify-center
                      rounded-full
                      border border-white/15
                      bg-black/40
                      text-white
                      backdrop-blur-xl
                      opacity-0
                      translate-x-2
                      transition-all
                      duration-300
                      group-hover:opacity-100
                      group-hover:translate-x-0
                      hover:bg-white
                      hover:text-black
                    "
                  >
                    <ArrowRight size={18} />
                  </button>
                </>
              )}

              {/* =========================
                  SLIDER DOTS
              ========================== */}

              {hasSlider && (
                <div className="absolute bottom-5 left-5 right-5 z-20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() =>
                          setCurrent(index)
                        }
                        aria-label={`Go to slide ${
                          index + 1
                        }`}
                        aria-current={
                          current === index
                            ? "true"
                            : undefined
                        }
                        className={`
                          h-1.5 rounded-full
                          transition-all duration-300
                          ${
                            current === index
                              ? "w-8 bg-white"
                              : "w-2 bg-white/40 hover:bg-white/70"
                          }
                        `}
                      />
                    ))}
                  </div>

                  <span className="text-[9px] tracking-[0.2em] text-white/60">
                    {String(current + 1).padStart(
                      2,
                      "0"
                    )}{" "}
                    /{" "}
                    {String(slides.length).padStart(
                      2,
                      "0"
                    )}
                  </span>
                </div>
              )}
            </div>
          ) : (
            /* =========================
               ORIGINAL FALLBACK VISUAL
            ========================== */

            <div className="absolute inset-0 group">
  <div className="absolute inset-0 rounded-[34px] overflow-hidden border border-white/10 rotate-[1.5deg] shadow-2xl">
    <img
      src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85"
      alt="Nextronix Global"
      draggable={false}
      className="image-cover saturate-[.7] contrast-125"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
  </div>
</div>
          )}
        </motion.div>
      </div>
    </section>
  );
}