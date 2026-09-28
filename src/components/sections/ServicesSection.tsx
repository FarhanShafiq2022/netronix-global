import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/navigation";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const s = services[active];
  const Icon = s.icon
  ? (Icons as any)[s.icon] || Icons.Sparkles
  : Icons.Sparkles;
  return (
    <section className="dark-section section-pad">
      <div className="container">
        <SectionHeading
          dark
          eyebrow="OUR SERVICES"
          title="Solutions Built Around Your Business"
        >
          People, process and technology brought together through a focused
          service ecosystem.
        </SectionHeading>
        <div className="grid lg:grid-cols-[.72fr_1.28fr] gap-5">
          <div className="border-y border-white/10">
            {services.map((x, i) => (
              <button
                key={x.slug}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`w-full text-left py-6 border-b border-white/10 flex items-center gap-5 transition ${i === active ? "text-white" : "text-slate-500 hover:text-slate-300"}`}
              >
                <span className="text-[10px] font-bold tracking-widest">
                  0{i + 1}
                </span>
                <span className="font-display text-2xl sm:text-3xl">
                  {x.name}
                </span>
                <ArrowUpRight
                  className={`ml-auto transition ${i === active ? "opacity-100 rotate-0" : "opacity-30 -rotate-45"}`}
                  size={19}
                />
              </button>
            ))}
          </div>
          <div className="relative min-h-[470px] rounded-[30px] overflow-hidden border border-white/10 bg-white/[.04] p-7 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                className="h-full flex flex-col"
              >
                <div className="flex justify-between">
                  <span className="w-14 h-14 rounded-2xl bg-indigo-500/15 grid place-items-center text-indigo-300">
                    <Icon size={25} />
                  </span>
                  <span className="text-[110px] font-display font-bold leading-none text-white/[.04]">
                    0{active + 1}
                  </span>
                </div>
                <div className="mt-auto max-w-xl">
                  <p className="eyebrow text-indigo-200">
                    SERVICE {String(active + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-display text-4xl sm:text-5xl">
                    {s.name}
                  </h3>
                  <p className="text-slate-400 leading-7 mt-4">{s.short}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {s.capabilities.slice(0, 5).map((c) => (
                      <span
                        key={c}
                        className="text-[9px] border border-white/10 rounded-full px-3 py-2 text-slate-400"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  <div className="mt-7">
                    <Button to={`/services/${s.slug}`} variant="dark">
                      EXPLORE SERVICE
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
