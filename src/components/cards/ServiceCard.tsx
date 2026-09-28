import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { services } from "../../data/navigation";
type Service = (typeof services)[number];
export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon =
  service.icon && service.icon in Icons
    ? (Icons as any)[service.icon]
    : Icons.Sparkles;
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
    >
      <Link
        to={`/services/${service.slug}`}
        className="group relative block min-h-[300px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[.045] p-7 hover:bg-white/[.07] transition"
      >
        <span className="absolute -right-4 -top-10 text-[150px] leading-none font-display font-bold text-white/[.035]">
          0{index + 1}
        </span>
        <div className="relative z-10 flex justify-between">
          <span className="w-11 h-11 grid place-items-center rounded-2xl bg-indigo-500/15 text-indigo-300">
            <Icon size={20} />
          </span>
          <span className="text-xs text-slate-500">0{index + 1}</span>
        </div>
        <div className="absolute inset-x-7 bottom-7">
          <h3 className="font-display text-2xl text-white">{service.name}</h3>
          <p className="text-sm text-slate-400 leading-6 mt-2 max-w-sm">
            {service.short}
          </p>
          <span className="inline-flex items-center gap-2 mt-5 text-[10px] font-bold tracking-[.15em] text-indigo-300 group-hover:text-white">
            LEARN MORE{" "}
            <ArrowUpRight
              size={13}
              className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
