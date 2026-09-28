import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="dark-section pt-20 pb-6">
      <div className="container">
        <div className="grid lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 pb-14">
          <div>
            <Link
              to="/"
              aria-label="Nextronix Global home"
              className="inline-flex items-center"
            >
              <img
  src="/brand/netronix1.png"
  alt="Nextronix Global"
  className="block w-[170px] sm:w-[190px] h-auto object-contain"
/>
            </Link>
            <p className="text-slate-400 text-sm mt-5 max-w-sm leading-7">
              Complete Digital & Business Solutions.
            </p>
            <div className="mt-5 space-y-2 text-xs text-slate-400">
              <p className="flex gap-2">
                <Mail size={14} />
                contact@nextronixglobal.com
              </p>
              <p className="flex gap-2">
                <Phone size={14} />
                (512)-612-1865
              </p>
              <p className="flex gap-2">
                <MapPin size={14} />
                Austin, Texas
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[10px] tracking-[.18em] text-slate-300 font-bold">
              SERVICES
            </h3>
            {["bpo", "website-development", "digital-marketing", "seo"].map(
              (s, i) => (
                <Link
                  key={s}
                  to={`/services/${s}`}
                  className="block text-sm text-slate-500 hover:text-white mt-4"
                >
                  {
                    ["BPO", "Website Development", "Digital Marketing", "SEO"][
                      i
                    ]
                  }
                </Link>
              ),
            )}
          </div>
          <div>
            <h3 className="text-[10px] tracking-[.18em] text-slate-300 font-bold">
              USEFUL LINKS
            </h3>
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Services", "/services"],
              ["Contact Us", "/contact"],
            ].map((x) => (
              <Link
                key={x[1]}
                to={x[1]}
                className="block text-sm text-slate-500 hover:text-white mt-4"
              >
                {x[0]}
              </Link>
            ))}
          </div>
          <div>
            <h3 className="text-[10px] tracking-[.18em] text-slate-300 font-bold">
              STAY AHEAD OF WHAT'S NEXT
            </h3>
            <p className="text-slate-500 text-xs mt-4 leading-6">
              Subscribe for occasional insights and company updates.
            </p>
            <form className="flex mt-4" onSubmit={(e) => e.preventDefault()}>
              <input
                aria-label="Email address"
                type="email"
                placeholder="Your email"
                className="min-w-0 w-full rounded-l-xl bg-white/5 border border-white/10 px-3 py-3 text-xs outline-none"
              />
              <button
                aria-label="Subscribe"
                className="px-3 bg-[var(--blue)] rounded-r-xl"
              >
                <ArrowUpRight size={16} />
              </button>
            </form>
            <div className="flex gap-3 mt-5">
              <a
                aria-label="Instagram"
                href="#"
                className="text-slate-500 hover:text-white"
              >
                <Instagram size={17} />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="text-slate-500 hover:text-white"
              >
                <Linkedin size={17} />
              </a>
              <a
                aria-label="Facebook"
                href="#"
                className="text-slate-500 hover:text-white"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between gap-3 text-[10px] text-slate-600">
          <span>© 2026 Nextronix Global. All Rights Reserved.</span>
          <span className="flex gap-4">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
