import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";
import Hero from "../components/hero/Hero";
import CTA from "../components/sections/CTA";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "error">("idle");
  const [err, setErr] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Validate required fields
    if (!name || !email || !message) {
      setStatus("error");
      setErr("Please fill in all required fields.");
      return;
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErr("Please enter a valid email address.");
      return;
    }

    // Form is valid for now.
    // API/email functionality can be connected later.
    const inquiry = {
      name,
      email,
      company,
      service,
      budget,
      message,
    };

    console.log("Inquiry:", inquiry);

    setStatus("idle");
    setErr("");
  };

  return (
    <>
      <Hero
        eyebrow="CONTACT"
        title={
          <>
            Let's Build Something That{" "}
            <span className="text-indigo-400">Matters.</span>
          </>
        }
        description="Tell us what you are trying to improve, build or scale. We’ll structure the conversation around your business needs."
        primary={{ label: "SEND INQUIRY", to: "#inquiry" }}
      />

      <section id="inquiry" className="section-pad">
        <div className="container grid lg:grid-cols-[.75fr_1.25fr] gap-10">
          <aside className="dark-section rounded-[32px] p-8 sm:p-10 h-fit">
            <p className="eyebrow text-indigo-200">
              START A CONVERSATION
            </p>

            <h2 className="display text-4xl text-white">
              Tell us where you want to go.
            </h2>

            <p className="text-slate-400 leading-7 mt-5">
              Use the form and connect your project with the right Nextronix
              Global service.
            </p>

            <div className="space-y-5 mt-9 text-sm text-slate-300">
              <p className="flex gap-3">
                <Mail size={17} className="text-indigo-300" />
                contact@nextronixglobal.com
              </p>

              <p className="flex gap-3">
                <Phone size={17} className="text-indigo-300" />
                (512)-612-1865
              </p>

              <p className="flex gap-3">
                <MapPin size={17} className="text-indigo-300" />
                Austin, Texas
              </p>

              <p className="flex gap-3">
                <Clock size={17} className="text-indigo-300" />
                Mon–Fri · 9:00 AM–6:00 PM
              </p>
            </div>
          </aside>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="soft-card p-7 sm:p-10 grid sm:grid-cols-2 gap-5"
          >
            <Field
              label="Full Name"
              name="name"
              required
            />

            <Field
              label="Email"
              name="email"
              type="email"
              required
            />

            <Field
              label="Company"
              name="company"
            />

            <label className="text-xs font-semibold">
              Service

              <select
                name="service"
                defaultValue="BPO"
                className="mt-2 w-full rounded-xl border border-[var(--line)] bg-transparent p-3 outline-none focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="BPO">BPO</option>
                <option value="Website Development">
                  Website Development
                </option>
                <option value="Digital Marketing">
                  Digital Marketing
                </option>
                <option value="SEO">SEO</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <Field
              label="Budget"
              name="budget"
            />

            <label className="text-xs font-semibold sm:col-span-2">
              Message
              <span className="text-red-500"> *</span>

              <textarea
                required
                name="message"
                rows={6}
                className="mt-2 w-full rounded-xl border border-[var(--line)] bg-transparent p-3 outline-none resize-y focus:ring-2 focus:ring-indigo-500/20"
                placeholder="Tell us about your goals, challenge or opportunity."
              />
            </label>

            <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-4">
              <button
                type="submit"
                className="btn-core btn-primary-core"
              >
                SEND INQUIRY
              </button>

              {status === "error" && (
                <div
                  role="alert"
                  className="text-sm text-red-500 flex items-center gap-2"
                >
                  <AlertCircle size={17} />
                  {err}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      <CTA />
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="text-xs font-semibold">
      {label}

      {required && (
        <span className="text-red-500"> *</span>
      )}

      <input
        required={required}
        type={type}
        name={name}
        className="mt-2 w-full rounded-xl border border-[var(--line)] bg-transparent p-3 outline-none focus:ring-2 focus:ring-indigo-500/20"
      />
    </label>
  );
}