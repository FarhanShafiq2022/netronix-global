import { Users, TrendingUp, Clock, ShieldCheck, Check } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
const values = [
  [
    "Cooperation with you",
    Users,
    "We work closely with clients to understand goals and build around real business needs.",
  ],
  [
    "Growing your business",
    TrendingUp,
    "Technology and support services designed to improve efficiency, experience and scale.",
  ],
  [
    "Save your time",
    Clock,
    "Streamlined workflows and dependable support help your team focus on what matters most.",
  ],
  [
    "Reliable delivery",
    ShieldCheck,
    "Clear communication and dependable processes support long-term operations.",
  ],
];
export default function AboutPreview() {
  return (
    <section className="section-pad bg-[var(--surface)]">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
              At Nextronix Global, we provide digital and business solutions for
              organizations looking to simplify operations, strengthen
              technology and create measurable growth.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-7 ">
              {[
                "Business Process Outsourcing (BPO)",
                "Custom Engineered IT Solutions",
                "Back Office Support",
                "Software & Web Applications",
                "Website Design & Development",
                "Digital Marketing",
                "E-Commerce Solutions",
                "Managed IT Services",
                "Application Development",
                "24/7 Customer Support",
              ].map((x) => (
                <div key={x} className="flex gap-2 items-start">
                  <Check
                    size={14}
                    className="text-[var(--blue)] mt-0.5 shrink-0"
                  />
                  {x}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button to="/about">CONTACT US</Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 mt-20">
          {values.map(([title, Icon, desc], i) => {
            const I = Icon as any;
            return (
              <motion.div
                key={title as string}
                whileHover={{ y: -7 }}
                className="soft-card p-6"
              >
                <I className="text-[var(--blue)]" size={25} />
                <h3 className="font-display font-bold mt-5">
                  {title as string}
                </h3>
                <p className=" text-[var(--muted)] leading-6 mt-2">
                  {desc as string}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
