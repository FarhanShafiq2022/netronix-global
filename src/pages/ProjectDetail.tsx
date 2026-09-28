import { useParams, Navigate } from "react-router-dom";
import { projects } from "../data/navigation";
import Hero from "../components/hero/Hero";
import CTA from "../components/sections/CTA";
export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p) return <Navigate to="/work" replace />;
  return (
    <>
      <Hero
        eyebrow={`CASE STUDY · ${p.category.toUpperCase()}`}
        title={<>{p.title}</>}
        description={p.desc}
        primary={{ label: "START A PROJECT", to: "/contact" }}
        secondary={{ label: "BACK TO WORK", to: "/work" }}
        image={p.image}
      />
      <section className="section-pad">
        <div className="container grid lg:grid-cols-[1.2fr_.8fr] gap-14">
          <div>
            <p className="eyebrow eyebrow-blue">CASE STUDY STRUCTURE</p>
            <h2 className="display text-4xl sm:text-5xl">
              A clear story from challenge to{" "}
              <span className="text-[var(--blue)]">outcome.</span>
            </h2>
            <p className="body-copy mt-6">
              This portfolio entry is a reusable case-study framework. Replace
              the placeholder narrative with approved project facts, visuals,
              results and client information before publication.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-8">
              {["Challenge", "Approach", "Outcome"].map((x) => (
                <div key={x} className="soft-card p-5">
                  <h3 className="font-display font-bold">{x}</h3>
                  <p className="text-xs text-[var(--muted)] mt-2">
                    Editable case-study content block.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <aside className="soft-card p-7 h-fit">
            <p className="eyebrow eyebrow-blue">PROJECT DETAILS</p>
            <p className="text-sm">
              <b>Category:</b> {p.category}
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[9px] border border-[var(--line)] rounded-full px-3 py-2"
                >
                  {t}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>
      <CTA />
    </>
  );
}
