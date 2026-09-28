import Hero from "../components/hero/Hero";
import ServicesSection from "../components/sections/ServicesSection";
import EffectivenessSection from "../components/sections/EffectivenessSection";
import { services } from "../data/navigation";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import CTA from "../components/sections/CTA";
import Button from "../components/ui/Button";
export default function Services() {
  return (
    <>
      <section className="section-pad bg-[var(--surface)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="eyebrow eyebrow-blue">ABOUT US</p>

              <h2 className="display text-4xl sm:text-5xl lg:text-6xl">
                Complete Digital &<br />
                Business Solutions
                <br />
                <span className="text-[var(--blue)]">Under One Roof</span>
              </h2>

              <p className="body-copy mt-6 max-w-xl">
                At Nextronix Global, we provide digital and business solutions
                for organizations looking to simplify operations, strengthen
                technology and create measurable growth.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-5 gap-y-3 mt-7 text-xs">
                {[
                  "Business Process Outsourcing (BPO)",
                  "Answer Engine Optimization (AEO)",
                  "Back Office Support",
                  "Software & Web Applications",
                  "Website Design & Development",
                  "Digital Marketing",
                  "Search Engine Optimization (SEO)",
                  "Generative Engine Optimization (GEO)",
                  "Application Development",
                  "24/7 Customer Support",
                ].map((x) => (
                  <div key={x} className="flex gap-2 items-start leading-5">
                    <Check
                      size={14}
                      className="text-[var(--blue)] mt-0.5 shrink-0"
                    />
                    <span>{x}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button to="/contact">Contact US</Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative h-[420px] sm:h-[520px] lg:h-[600px]"
            >
              <div className="group relative h-full w-full overflow-hidden rounded-[28px] border border-[var(--line)]">
                <img
                  src="/brand/corporate-2-img-1.jpg"
                  alt="Technology professional"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <ServicesSection />

     <EffectivenessSection />           

      <section className="section-pad">
        <div className="container grid md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const I = Icons.Sparkles;
            return (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="soft-card p-8 group hover:-translate-y-1 transition"
              >
                <I className="text-[var(--blue)]" />
                <h2 className="font-display text-3xl mt-7">{s.name}</h2>
                <p className="body-copy mt-3">{s.short}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {s.capabilities.map((c) => (
                    <span
                      key={c}
                      className="text-[9px] border border-[var(--line)] rounded-full px-3 py-2 text-[var(--muted)]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <CTA />
    </>
  );
}
