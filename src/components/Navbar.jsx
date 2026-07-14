import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Container from "./ui/Container";
import { personalInfo } from "../data/portfolioData";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToSection = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]" : "bg-transparent"}`}>
      <Container className="flex items-center justify-between py-4">
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-2.5 font-display font-semibold text-ink">
          <span className="hidden sm:inline">{personalInfo.firstName}</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full border border-line bg-white/60 p-1">
          {NAV_ITEMS.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeSection === item.id ? "text-primary-700" : "text-muted hover:text-ink"}`}>
              {activeSection === item.id && <motion.span layoutId="nav-active-pill" className="absolute inset-0 bg-primary-50 rounded-full -z-10" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              {item.label}
            </button>
          ))}
        </nav>

        <button onClick={() => scrollToSection("contact")} className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/30 transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-md">
          Hubungi Saya
        </button>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen((v) => !v)} className="md:hidden grid place-items-center w-10 h-10 rounded-lg text-ink" aria-label={mobileOpen ? "Tutup menu" : "Buka menu"} aria-expanded={mobileOpen}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="md:hidden overflow-hidden bg-white border-t border-line">
            <Container className="flex flex-col py-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeSection === item.id ? "bg-primary-50 text-primary-700" : "text-muted"}`}>
                  {item.label}
                </button>
              ))}
              <button onClick={() => scrollToSection("contact")} className="mt-2 rounded-full bg-primary-500 px-5 py-3 text-sm font-semibold text-white text-center">
                Hubungi Saya
              </button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
