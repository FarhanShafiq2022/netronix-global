import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

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
    value: 800,
    label: "PROJECTS COMPLETED",
    suffix: "+",
  },
];

const principles = [
  {
    number: "01",
    title: "DEDICATION",
    text: "Our team goes the extra mile, embracing challenges with passion and persistence. We invest time and effort to understand our clients’ needs deeply and tailor solutions that drive real results.",
  },
  {
    number: "02",
    title: "QUALITY",
    text: "We maintain high standards across every project, combining thoughtful planning, reliable technology and careful execution to deliver solutions built for long-term value.",
  },
  {
    number: "03",
    title: "TRANSPARENCY",
    text: "Clear communication and honest collaboration are central to the way we work. Our clients stay informed and involved throughout every stage of their project.",
  },
  {
    number: "04",
    title: "RESULTS",
    text: "We focus on measurable outcomes rather than activity alone. Every solution is designed to improve performance, strengthen operations and create meaningful business impact.",
  },
];

export default function EffectivenessSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--surface)] py-20 sm:py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[140px]" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="absolute inset-0 grid-bg opacity-25" />
      </div>

      <div className="container relative z-10">
        {/* =========================
            EFFECTIVENESS INTRO
        ========================== */}

        <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative h-[430px] sm:h-[520px] lg:h-[600px]"
          >
            <div className="group relative h-full overflow-hidden rounded-[32px] border border-[var(--line)]">
              <img
                src="/brand/corporate-2-img-2.png"
                alt="Nextronix Global team and technology"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute left-6 right-6 bottom-6 sm:left-8 sm:right-8 sm:bottom-8">
                <p className="text-[9px] tracking-[0.22em] text-indigo-300">
                  NEXTRONIX GLOBAL
                </p>

                <h3 className="mt-2 max-w-sm font-display text-2xl sm:text-3xl text-white">
                  Built around effectiveness.
                </h3>
              </div>

            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="eyebrow eyebrow-blue">
              OUR EFFECTIVENESS
            </p>

            <h2 className="display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl">
              How Effective Is What{" "}
              <span className="text-[var(--blue)]">
                Our Clients Use?
              </span>
            </h2>

            <p className="body-copy mt-6 max-w-2xl">
              At Nextronix Global, effectiveness is measured by
              real results. Our clients experience improved
              productivity, increased online visibility, and
              measurable business growth through our tailored
              solutions.
            </p>

            <p className="body-copy mt-4 max-w-2xl">
              From BPO services that streamline operations to
              high-performing websites, applications, and SEO
              strategies, we deliver solutions designed to
              generate impact — not just activity.
            </p>

            {/* Stats */}
            <div className="mt-9 grid grid-cols-2 gap-3">
              {stats.map((stat, index) => (
                <CounterCard
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  suffix={stat.suffix}
                  delay={index * 120}
                />
              ))}
            </div>

            <div className="mt-8">
              <Button to="/about">
                ABOUT US
              </Button>
            </div>
          </motion.div>
        </div>

        {/* =========================
            PRINCIPLES
        ========================== */}

        <div className="mt-24 sm:mt-28 lg:mt-36">
          <div className="grid lg:grid-cols-[.75fr_1.25fr] gap-10 lg:gap-16">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow eyebrow-blue">
                OUR PRINCIPLES
              </p>

              <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
                Check out{" "}
                <span className="text-[var(--blue)]">
                  These Rules
                </span>
              </h2>

              <p className="body-copy mt-6 max-w-lg">
                At Nextronix Global, we follow a clear set of
                principles that guide every project we
                undertake. Our rules ensure quality,
                transparency, and measurable results for our
                clients.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs tracking-[0.16em] text-slate-500">
                <span className="h-px w-8 bg-[var(--blue)]" />
                HOW WE WORK
              </div>
            </motion.div>

            {/* Rules Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {principles.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border border-[var(--line)]
                    bg-[var(--surface)]
                    p-6 sm:p-7
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:border-indigo-400/30
                    hover:bg-black/[0.025]
                    dark:hover:bg-white/[0.025]
                  "
                >
                  {/* Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] tracking-[0.2em] text-indigo-400">
                      {item.number}
                    </span>

                    <Check
                      size={16}
                      className="text-indigo-400 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 font-display text-xl text-[var(--text)]">
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.text}
                  </p>

                  {/* Hover line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-indigo-400 transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   COUNTER CARD
========================== */

function CounterCard({
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
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    let startTime: number | null = null;

    const duration = 1600;

    const animate = (time: number) => {
      if (startTime === null) {
        startTime = time;
      }

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const timeout = window.setTimeout(() => {
      frame = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [started, value, delay]);

  return (
    <div
      ref={ref}
      className="
        group
        relative
        overflow-hidden
        rounded-[20px]
        border border-[var(--line)]
        bg-[var(--surface)]
        p-5 sm:p-6
        transition-all duration-500
        hover:-translate-y-1
        hover:border-indigo-400/30
      "
    >
      <div className="flex items-start">
        <span className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-[-0.05em] text-[var(--text)]">
          {count.toLocaleString()}
        </span>

        {suffix && (
          <span className="ml-1 mt-0.5 font-display text-xl sm:text-2xl text-indigo-400">
            {suffix}
          </span>
        )}
      </div>

      <div className="mt-5 h-px w-7 bg-[var(--blue)] transition-all duration-500 group-hover:w-12" />

      <p className="mt-4 text-[9px] sm:text-[10px] font-semibold tracking-[0.16em] text-slate-500">
        {label}
      </p>
    </div>
  );
}