import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronUp } from "lucide-react";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation();

  // Show/hide Go To Top button
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top whenever page/route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={goToTop}
      aria-label="Go to top"
      className={`
        fixed bottom-6 right-6 z-[9999]
        flex h-11 w-11 items-center justify-center
        rounded-full
        border border-white/15
        bg-black/80
        text-white
        backdrop-blur-md
        shadow-lg
        transition-all duration-300
        hover:scale-110
        hover:bg-white
        hover:text-black
        sm:bottom-8 sm:right-8
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }
      `}
    >
      <ChevronUp size={20} strokeWidth={2} />
    </button>
  );
}