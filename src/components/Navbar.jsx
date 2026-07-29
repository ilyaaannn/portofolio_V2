import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const NAV_IDS = ["home", "about", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = NAV_IDS.map((id) => ({ id, label: t.nav[id] }));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_IDS.map((id) => document.getElementById(id)).filter(Boolean);
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

  // Compact ID/EN switch with a sliding highlight — replaces the old
  // "Hubungi Saya" CTA. Available in both the desktop bar and mobile panel.
  const LanguageSwitch = ({ className = "" }) => (
    <button onClick={toggleLanguage} aria-label={t.langToggle.switchTo} className={`group relative inline-flex items-center gap-1 rounded-full border border-line bg-white/60 p-1 backdrop-blur-md transition-all duration-300 hover:border-primary-200 hover:shadow-sm hover:shadow-primary-900/10 ${className}`}>
      <Languages size={14} className="ml-1.5 mr-0.5 text-muted transition-colors duration-300 group-hover:text-primary-600" />
      {["id", "en"].map((code) => (
        <span key={code} className={`relative px-2.5 py-1 text-xs font-semibold uppercase rounded-full transition-colors duration-300 ${language === code ? "text-white" : "text-muted"}`}>
          {language === code && <motion.span layoutId="lang-active-pill" className="absolute inset-0 -z-10 rounded-full bg-primary-500" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
          {code}
        </span>
      ))}
    </button>
  );

  return (
    <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-4">
      {/* Centered "island" bar: name — nav — language switch, all pulled
          into one narrow, evenly-spaced group instead of stretching
          edge-to-edge, so the three pieces sit close together. */}
      <div className={`mx-auto flex w-full max-w-3xl items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-300 md:grid md:grid-cols-[auto_1fr_auto] md:justify-items-center ${scrolled ? "border-line bg-white/80 backdrop-blur-md shadow-lg shadow-primary-900/5" : "border-white/40 bg-white/60 backdrop-blur-md"}`}>
        <button onClick={() => scrollToSection("home")} className="justify-self-start flex items-center gap-2 px-2 font-display font-semibold text-ink transition-transform duration-300 hover:scale-105">
          {personalInfo.firstName}
        </button>

        {/* Desktop nav — centered column */}
        <nav className="hidden md:flex items-center gap-1 justify-self-center rounded-full border border-line bg-white/60 p-1 backdrop-blur-md transition-all duration-300">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === item.id ? "text-primary-700" : "text-muted hover:text-ink"}`}>
              {activeSection === item.id && <motion.span layoutId="nav-active-pill" className="absolute inset-0 bg-primary-50 rounded-full -z-10" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="justify-self-end flex items-center gap-2">
          <LanguageSwitch className="hidden md:inline-flex" />

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen((v) => !v)} className="md:hidden grid place-items-center h-9 w-9 rounded-full text-ink transition-all duration-300 hover:bg-primary-50 hover:text-primary-600" aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="md:hidden mx-auto mt-2 w-full max-w-3xl overflow-hidden rounded-2xl border border-line bg-white/90 backdrop-blur-md shadow-lg shadow-primary-900/5">
            <div className="flex flex-col gap-1 p-3">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === item.id ? "bg-primary-50 text-primary-700" : "text-muted hover:bg-surface"}`}>
                  {item.label}
                </button>
              ))}
              <div className="mt-1 flex justify-center pt-2">
                <LanguageSwitch />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
