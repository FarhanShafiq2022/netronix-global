import Hero from "../components/hero/Hero";
import SectionHeading from "../components/ui/SectionHeading";
import AboutStats from "../components/sections/AboutStats";
import { motion } from "framer-motion";
import {
  Handshake,
  Lightbulb,
  ShieldCheck,
  TrendingUp,
  Eye,
  Layers,
} from "lucide-react";
import Process from "../components/sections/Process";
import CTA from "../components/sections/CTA";
const values = [
  [
    "Collaboration",
    Handshake,
    "Work closely with clients and teams to create solutions around real priorities.",
  ],
  [
    "Innovation",
    Lightbulb,
    "Use modern technology thoughtfully where it creates a meaningful advantage.",
  ],
  [
    "Reliability",
    ShieldCheck,
    "Build dependable experiences and processes that people can trust.",
  ],
  [
    "Growth",
    TrendingUp,
    "Keep business outcomes and long-term scalability at the center.",
  ],
  [
    "Transparency",
    Eye,
    "Make communication, decisions and project progress easy to understand.",
  ],
];
export default function About() {
  return (
    <>
      <Hero
        eyebrow="ABOUT NEXTRONIX GLOBAL"
        title={
          <>
            Technology with a{" "}
            <span className="text-indigo-400">business point of view.</span>
          </>
        }
        description="A complete digital and business solutions company bringing technology, people and process together under one roof."
        primary={{ label: "OUR SERVICES", to: "/services" }}
        secondary={{ label: "START A PROJECT", to: "/contact" }}
      />
      <section className="section-pad bg-[var(--surface)]">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <SectionHeading
              eyebrow="COMPANY OVERVIEW"
              title="Built for modern business."
            >
             Netronix Global is a dynamic business solutions company delivering innovative digital services and reliable outsourcing support to clients worldwide. We specialize in Business Process Outsourcing (BPO), Digital Marketing, Website Development, Application Development, and Search Engine Optimization (SEO).
            </SectionHeading>
            <p className="body-copy">
              Our mission is to help businesses operate smarter, grow faster, and compete stronger in the digital age. By combining strategic thinking, advanced technology, and industry expertise, we create customized solutions that drive measurable results.
            </p>

            <p className="body-copy">
              At Netronix Global, we believe success comes from strong partnerships. We work closely with our clients to understand their goals, streamline operations, and build powerful digital platforms that enhance performance and profitability.
            </p>
          </div>
          <div className="rounded-[32px] overflow-hidden aspect-[4/3]">
            <img
              className="image-cover"
              src="/brand/about-us-3-image-1.jpg"
              alt="Team collaboration"
            />
          </div>
        </div>
      </section>

      <AboutStats/ >

      {/* <section className="dark-section section-pad">
        <div className="container">
          <SectionHeading
            dark
            eyebrow="MISSION & VISION"
            title="Useful technology. Human delivery."
          >
            <p>
              Mission: create practical digital and business solutions that help
              organizations operate with more clarity and capacity.
            </p>
            <p>
              Vision: become a trusted long-term partner where technology and
              people work together to move businesses forward.
            </p>
          </SectionHeading>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-white/10 rounded-[28px] p-8">
              <Layers className="text-indigo-300" />
              <h3 className="font-display text-2xl mt-6">
                What makes us different
              </h3>
              <p className="text-slate-400 leading-7 mt-3">
                One connected service ecosystem instead of disconnected vendors,
                with a strong focus on communication and practical execution.
              </p>
            </div>
            <div className="border border-white/10 rounded-[28px] p-8">
              <ShieldCheck className="text-indigo-300" />
              <h3 className="font-display text-2xl mt-6">
                Technology & expertise
              </h3>
              <p className="text-slate-400 leading-7 mt-3">
                A flexible technology foundation across modern web development,
                digital growth, search and operational support.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section className="section-pad">
        <div className="container">
          <SectionHeading
            eyebrow="CORE VALUES"
            title="Principles that shape the work."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map(([t, I, d], i) => {
              const Icon = I as any;
              return (
                <motion.div
                  key={t as string}
                  whileHover={{ y: -6 }}
                  className="soft-card p-6"
                >
                  <Icon className="text-[var(--blue)]" />
                  <h3 className="font-display font-bold mt-7">{t as string}</h3>
                  <p className="text-xs text-[var(--muted)] leading-6 mt-2">
                    {d as string}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <Process />
      <CTA />
    </>
  );
}
