import { useEffect, useState } from "react";
import { Menu, Sun, Moon, X, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    () => localStorage.getItem("nextronix-theme") === "dark",
  );
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("nextronix-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const logoSrc = scrolled
    ? "/brand/netronix1.png"
    : "/brand/netronix2.png";

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-24px)] max-w-[1180px] transition-all ${scrolled ? "shadow-2xl" : "shadow-lg"} rounded-2xl ${scrolled ? "glass" : "bg-white/75 backdrop-blur-xl border border-white/50"} dark:bg-[#111318]/80 dark:border-white/10`}
    >
      <div className="h-[66px] px-4 sm:px-5 flex items-center justify-between">
        <Link
          to="/"
          aria-label="Nextronix Global home"
          className="flex items-center shrink-0"
        >
          <img
            src={logoSrc}
            alt="Nextronix Global"
            className="block w-[142px] sm:w-[166px] h-auto max-h-7 object-contain"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-[10px] font-bold tracking-[.14em]">
          {navigation.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`transition hover:text-[var(--blue)] ${loc.pathname === n.to || (n.to === "/services" && loc.pathname.startsWith("/services")) ? "text-[var(--blue)]" : "opacity-65"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((v) => !v)}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-slate-500/10"
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          {/* <Link
            to="/contact"
            className="hidden sm:flex btn-core btn-primary-core py-3"
          >
            GET STARTED <ArrowUpRight size={13} />
          </Link> */}
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-slate-200/70 dark:border-white/10"
          >
            <div className="p-5 flex flex-col gap-1">
              {navigation.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className="py-3 text-sm font-bold tracking-[.12em]"
                >
                  {n.label}
                </Link>
              ))}
              <Link to="/contact" className="btn-core btn-primary-core mt-3">
                GET STARTED <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
