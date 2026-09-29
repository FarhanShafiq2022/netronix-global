import { useParams } from "react-router-dom";
import { services } from "../data/navigation";
import Hero from "../components/hero/Hero";
import CTA from "../components/sections/CTA";
import { Check, ArrowRight, BarChart3, Workflow, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
const extras: {
  [k: string]: {
    headline: string;
    overview: string;
    benefits: string[];
    process: string[];
    tools: string[];
  };
} = {
  bpo: {
    headline: "Business operations, built to scale.",
    overview:
      "BPO services that help teams handle customer-facing and back-office work with clearer workflows, dependable support and operational visibility.",
    benefits: [
      "Flexible capacity",
      "Consistent workflows",
      "Customer-focused support",
      "Operational visibility",
    ],
    process: [
      "Discover",
      "Map workflows",
      "Launch support",
      "Measure & refine",
    ],
    tools: ["CRM platforms", "Helpdesk systems", "Reporting", "Workflow tools"],
  },
  "website-development": {
    headline: "Web Experiences Built to Perform.",
    overview:
      "Corporate websites, e-commerce experiences and custom web applications engineered for usability, performance and maintainability.",
    benefits: [
      "Responsive experiences",
      "Performance-minded builds",
      "Clear content systems",
      "Scalable architecture",
    ],
    process: ["Discovery", "UX & UI", "Development", "QA & launch"],
    tools: [
      "React",
      "Vite",
      "JavaScript",
      "TypeScript",
      "WordPress",
      "PHP",
      "Laravel",
    ],
  },
  "digital-marketing": {
    headline: "Marketing that connects strategy to action.",
    overview:
      "A connected digital marketing approach across social, content, paid campaigns, email and conversion optimization.",
    benefits: [
      "Clear positioning",
      "Content systems",
      "Campaign coordination",
      "Measurement-ready setup",
    ],
    process: ["Research", "Strategy", "Creative", "Launch & optimize"],
    tools: [
      "Analytics",
      "CRM",
      "Ad platforms",
      "Email platforms",
      "Content systems",
    ],
  },
  "seo": {
    headline: "Search visibility built on solid foundations.",
    overview:
      "Technical, on-page and off-page SEO programs that organize the fundamentals, uncover opportunities and track meaningful progress.",
    benefits: [
      "Technical health",
      "Search-focused content",
      "Structured optimization",
      "Transparent tracking",
    ],
    process: ["Audit", "Prioritize", "Optimize", "Monitor"],
    tools: [
      "Search analytics",   
      "Crawler tools",
      "Rank tracking",
      "Structured data",
    ],
  },
  "software-web-applications": {
  headline: "Digital products built for real-world use.",
  overview:
    "Scalable software and web applications designed around usability, performance and maintainability, from business platforms to custom digital products.",
  benefits: [
    "User-focused experiences",
    "Scalable architecture",
    "Reliable performance",
    "Maintainable systems",
  ],
  process: [
    "Discovery",
    "UX & UI",
    "Development",
    "QA & launch",
  ],
  tools: [
    "React",
    "Vite",
    "JavaScript",
    "TypeScript",
    "PHP",
    "Laravel",
  ],
},

};
export default function ServiceDetail() {
  const { slug } = useParams();
  const s = services.find((x) => x.slug === slug);
  if (!s) return <Navigate to="/services" replace />;
  const e = extras[slug!];
  return (
    <>
      <Hero
        eyebrow={`NEXTRONIX GLOBAL · ${s.name.toUpperCase()}`}
        title={<>{e.headline}</>}
        description={e.overview}
        primary={{ label: "TALK TO US", to: "/contact" }}
        secondary={{ label: "ALL SERVICES", to: "/services" }}
      />
      <section className="section-pad bg-[var(--surface)]">
        <div className="container grid lg:grid-cols-[1fr_1.1fr] gap-14">
          <div>
            <p className="eyebrow eyebrow-blue">OVERVIEW</p>
            <h2 className="display text-4xl sm:text-5xl">
              A service designed around{" "}
              <span className="text-[var(--blue)]">your operation.</span>
            </h2>
            <p className="body-copy mt-6">{e.overview}</p>
            <div className="mt-7 space-y-3">
              {e.benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 text-sm">
                  <Check size={16} className="text-[var(--blue)]" />
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["Process", Workflow, e.process],
              ["Capabilities", Layers3, s.capabilities],
              ["Technology", BarChart3, e.tools],
            ].map(([t, I, list]) => {
              const Icon = I as any;
              return (
                <div key={t as string} className="soft-card p-7">
                  <Icon className="text-[var(--blue)]" />
                  <h3 className="font-display text-xl mt-5">{t as string}</h3>
                  <div className="mt-4 space-y-2">
                    {(list as string[]).map((x) => (
                      <div
                        key={x}
                        className="text-xs text-[var(--muted)] flex gap-2"
                      >
                        <ArrowRight size={12} className="mt-0.5" />
                        {x}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="dark-section section-pad">
        <div className="container">
          <p className="eyebrow text-indigo-200">WORKFLOW</p>
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            {e.process.map((x, i) => (
              <motion.div
                key={x}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="border border-white/10 rounded-[26px] p-7"
              >
                <span className="text-indigo-300 font-display font-bold">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl mt-12">{x}</h3>
                <p className="text-xs text-slate-500 leading-6 mt-2">
                  A focused stage in a reusable delivery workflow.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
