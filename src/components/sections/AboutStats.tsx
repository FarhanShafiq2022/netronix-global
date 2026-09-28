import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    value: 2024,
    label: "FOUNDING YEAR",
    suffix: "",
  },
  {
    value: 2000,
    label: "HAPPY CUSTOMERS",
    suffix: "+",
  },
  {
    value: 190,
    label: "COMPANIES WORK WITH US",
    suffix: "+",
  },
  {
    value: 2,
    label: "OFFICES",
    suffix: "",
  },
  {
    value: 21,
    label: "TEAM MEMBERS",
    suffix: "+",
  },
  {
    value: 800,
    label: "PROJECTS COMPLETED",
    suffix: "+",
  },
];

export default function AboutStats() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)] py-20 sm:py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-180px] top-[-180px] h-[420px] w-[420px] rounded-full bg-indigo-600/10 blur-[130px]" />

        <div className="absolute right-[-180px] bottom-[-180px] h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="container relative z-10">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="eyebrow text-indigo-400">
            NEXTRONIX GLOBAL
          </p>

          <h2 className="display mt-3 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-[var(--text)]">
            We work through every aspect of the{" "}
            <span className="text-indigo-400">
              planning.
            </span>
          </h2>

          <div className="mt-7 flex items-center gap-4">
            <span className="h-px w-10 bg-indigo-400" />

            <a
              href="#"
              className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[var(--text)] transition-colors hover:text-indigo-400"
            >
              WE DO IT FOR YOU WITH LOVE

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-3 gap-px overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--line)]">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  suffix,
  delay,
}: {
  value: number;
  label: string;
  suffix: string;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let animationFrame: number;
    let startTime: number | null = null;

    const duration = 1600;

    const animate = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      // Smooth ease-out
      const eased =
        1 - Math.pow(1 - progress, 4);

      setCount(
        Math.floor(eased * value)
      );

      if (progress < 1) {
        animationFrame =
          requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const timeout = window.setTimeout(() => {
      animationFrame =
        requestAnimationFrame(animate);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(animationFrame);
    };
  }, [started, value, delay]);

  return (
    <div
      ref={ref}
      className="
        group relative
        min-h-[190px]
        sm:min-h-[220px]
        lg:min-h-[250px]
        bg-[var(--surface)]
        p-6
        sm:p-8
        lg:p-10
        transition-all
        duration-500
        hover:bg-black
        dark:hover:bg-white/[0.025]
      "
    >
      {/* Top accent */}
      <div className="absolute left-0 top-0 h-px w-0 bg-indigo-400 transition-all duration-500 group-hover:w-full" />

      {/* Number */}
      <div className="flex items-start">
        <span className="font-display text-4xl font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl lg:text-6xl xl:text-7xl">
          {count.toLocaleString()}
        </span>

        {suffix && (
          <span className="mt-1 ml-1 font-display text-xl text-indigo-400 sm:text-2xl lg:text-3xl">
            {suffix}
          </span>
        )}
      </div>

      {/* Divider */}
      <div className="mt-8 h-px w-8 bg-[var(--line)] transition-all duration-500 group-hover:w-14 group-hover:bg-indigo-400" />

      {/* Label */}
      <p className="mt-5 max-w-[180px] text-[9px] font-semibold tracking-[0.18em] text-slate-500 sm:text-[10px]">
        {label}
      </p>

      {/* Corner number */}
      <span className="absolute bottom-6 right-6 text-[9px] tracking-[0.2em] text-slate-600 sm:bottom-8 sm:right-8">
        {String(
          stats.findIndex((item) => item.value === value) + 1
        ).padStart(2, "0")}
      </span>
    </div>
  );
}