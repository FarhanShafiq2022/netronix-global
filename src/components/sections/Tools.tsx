import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tools = [
  { name: "Matic", logo: "/brand/matic.png" },
  { name: "Microsoft", logo: "/brand/microsoft.png" },
  { name: "Figma", logo: "/brand/figma.png" },
  { name: "Sketch", logo: "/brand/sketch.png" },
  { name: "Slack", logo: "/brand/slack.png" },
  { name: "Pinterest", logo: "/brand/pinterest.png" },
];

export default function Tools() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

 const scroll = (direction: "left" | "right") => {
  if (!sliderRef.current) return;

  const slider = sliderRef.current;
  const amount = 220;

  const maxScroll = slider.scrollWidth - slider.clientWidth;

  if (direction === "right") {
    if (slider.scrollLeft >= maxScroll - 5) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: amount,
        behavior: "smooth",
      });
    }
  } else {
    if (slider.scrollLeft <= 5) {
      slider.scrollTo({
        left: maxScroll,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: -amount,
        behavior: "smooth",
      });
    }
  }
};

  return (
    <section className="bg-[#080808] py-8 border-b border-white/10 overflow-hidden">
      <div className="container">
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={sliderRef}
            className="
              flex
              items-center
              gap-10
              sm:gap-14
              md:gap-20
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              px-12
              sm:px-14
              md:px-16
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            "
          >
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="
                  group/logo
                  flex
                  h-14
                  min-w-[120px]
                  sm:min-w-[150px]
                  md:min-w-[170px]
                  shrink-0
                  snap-center
                  items-center
                  justify-center
                  cursor-pointer
                "
              >
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  loading="lazy"
                  className="
                    h-8
                    max-w-[120px]
                    sm:h-9
                    sm:max-w-[135px]
                    md:h-10
                    md:max-w-[150px]
                    object-contain
                    opacity-70
                    brightness-100
                    
                    duration-500
                    group-hover/logo:opacity-100
                    group-hover/logo:scale-110
                  "
                />
              </div>
            ))}
          </div>

          {/* Navigation buttons - visible only on hover */}
          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous technology"
            className={`
              absolute
              left-1
              top-1/2
              -translate-y-1/2
              z-10
              flex
              h-9
              w-9
              sm:h-10
              sm:w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/10
              text-white
              backdrop-blur-md
              shadow-lg
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white/20
              ${
                isHovered
                  ? "visible translate-x-0 opacity-100"
                  : "invisible -translate-x-3 opacity-0"
              }
            `}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next technology"
            className={`
              absolute
              right-1
              top-1/2
              -translate-y-1/2
              z-10
              flex
              h-9
              w-9
              sm:h-10
              sm:w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/15
              bg-white/10
              text-white
              backdrop-blur-md
              shadow-lg
              transition-all
              duration-300
              hover:scale-110
              hover:bg-white/20
              ${
                isHovered
                  ? "visible translate-x-0 opacity-100"
                  : "invisible translate-x-3 opacity-0"
              }
            `}
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <p className="mt-5 text-center text-[9px] uppercase tracking-[0.25em] text-white/40">
          Technology Ecosystem · Tools We Work With
        </p>
      </div>
    </section>
  );
}