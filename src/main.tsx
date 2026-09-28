import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import App from "./App";
import "./index.css"
gsap.registerPlugin(ScrollTrigger);
function MotionRoot() {
  React.useEffect(() => {
    const lenis = new Lenis({ autoRaf: false, smoothWheel: true, lerp: 0.08 });
    const hero = gsap.utils.toArray<HTMLElement>(".hero");
    hero.forEach((h) =>
      gsap.to(h, {
        backgroundPosition: "50% 20%",
        scrollTrigger: {
          trigger: h,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }),
    );
    let raf = (t: number) => {
      lenis.raf(t);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    };
    const id = requestAnimationFrame(raf);
    const move = (e: PointerEvent) => {
      if (matchMedia("(pointer:fine)").matches) {
        const g = document.querySelector(".cursor-glow") as HTMLElement | null;
        if (g) {
          g.style.left = `${e.clientX}px`;
          g.style.top = `${e.clientY}px`;
        }
      }
    };
    addEventListener("pointermove", move, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      removeEventListener("pointermove", move);
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <div className="cursor-glow" aria-hidden="true" />
      <App />
    </>
  );
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MotionRoot />
    </BrowserRouter>
  </React.StrictMode>,
);
