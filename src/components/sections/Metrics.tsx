import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
const metrics = [
  ["1,775+", "Views"],
  ["1,753+", "Happy Customers"],
  ["167+", "Companies"],
  ["702+", "Projects Completed"],
];
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState("0");
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const end = parseInt(value.replace(/\D/g, ""), 10);
    let done = false;
    const ob = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !done) {
          done = true;
          let start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / 1300, 1);
            setShown(
              Math.round(end * (1 - Math.pow(1 - p, 3))).toLocaleString(),
            );
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          ob.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    ob.observe(node);
    return () => ob.disconnect();
  }, [value]);
  return (
    <span ref={ref}>
      {shown}
      {value.includes("+") ? "+" : ""}
    </span>
  );
}
export default function Metrics() {
  return (
    <section className="blue-section section-pad relative overflow-hidden">
      <div className="absolute -left-80 -bottom-96 w-[700px] h-[700px] rounded-full border-[100px] border-white/5" />
      <div className="container relative grid lg:grid-cols-[.85fr_1.15fr] gap-14 items-center">
        <div>
          <p className="eyebrow text-indigo-100">OUR IMPACT</p>
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-white">
            How Effective Is What
            <br />
            Our Clients Use?
          </h2>
          <p className="text-indigo-100/80 leading-7 max-w-xl mt-5">
            We combine people, process and technology to deliver practical
            solutions that support reliable operations, better customer
            experiences and sustainable business growth.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-7">
          {metrics.map(([v, l]) => (
            <div key={l} className="border-t border-white/20 pt-5">
              <strong className="font-display text-4xl sm:text-5xl text-white">
                <Counter value={v} />
              </strong>
              <span className="block text-[9px] tracking-[.14em] text-indigo-100 mt-2 uppercase">
                {l}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="container mt-12 text-[9px] text-indigo-100/60 tracking-wide">
        DEMO / REFERENCE METRICS — replace with verified Nextronix Global
        business data before production publication.
      </div>
    </section>
  );
}
