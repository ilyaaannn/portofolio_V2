import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Container from "./ui/Container";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="border-t border-line bg-surface">
        <Container className="flex flex-col items-center gap-3 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 text-xs font-bold text-white">
              {personalInfo.initials}
            </span>
            <p className="font-mono text-xs text-muted">
              © {new Date().getFullYear()} {personalInfo.fullName}. Dibuat dengan React &amp; Tailwind CSS.
            </p>
          </div>
          <p className="font-mono text-xs text-muted">Dirancang &amp; dikembangkan dengan ☕</p>
        </Container>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-muted shadow-lg shadow-primary-900/10 transition-all duration-300 hover:border-primary-300 hover:text-primary-600 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        aria-label="Kembali ke atas"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
