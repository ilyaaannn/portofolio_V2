import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Container from "./ui/Container";
import { personalInfo, quickFacts } from "../data/portfolioData";
import { fadeUp, staggerContainer } from "../utils/animations";

// The hero's signature: a small "code editor" that types itself out,
// using the same 3 brand colors as its syntax-highlight palette.
const codeLines = [
  { tokens: [{ t: "keyword", v: "const " }, { t: "plain", v: "developer" }, { t: "plain", v: " = {" }] },
  {
    tokens: [
      { t: "property", v: "  name" },
      { t: "punct", v: ": " },
      { t: "string", v: `"${personalInfo.fullName}"` },
      { t: "punct", v: "," },
    ],
  },
  {
    tokens: [
      { t: "property", v: "  role" },
      { t: "punct", v: ": " },
      { t: "string", v: `"${personalInfo.role}"` },
      { t: "punct", v: "," },
    ],
  },
  {
    tokens: [
      { t: "property", v: "  stack" },
      { t: "punct", v: ": [" },
      { t: "string", v: '"React"' },
      { t: "punct", v: ", " },
      { t: "string", v: '"Tailwind"' },
      { t: "punct", v: ", " },
      { t: "string", v: '"Node.js"' },
      { t: "punct", v: "]," },
    ],
  },
  {
    tokens: [
      { t: "property", v: "  available" },
      { t: "punct", v: ": " },
      { t: "keyword2", v: "true" },
      { t: "punct", v: "," },
    ],
  },
  { tokens: [{ t: "plain", v: "};" }] },
];

const TOKEN_COLOR = {
  keyword: "text-primary-600",
  keyword2: "text-accent-600",
  property: "text-ink",
  string: "text-secondary-600",
  punct: "text-muted",
  plain: "text-ink",
};

const FULL_LENGTH = codeLines.reduce(
  (sum, line) => sum + line.tokens.reduce((s, tk) => s + tk.v.length, 0) + 1,
  0
);

export default function Hero() {
  const [revealed, setRevealed] = useState(0);

  useEffect(() => {
    if (revealed >= FULL_LENGTH) return;
    const id = setTimeout(() => setRevealed((r) => r + 1), 16);
    return () => clearTimeout(id);
  }, [revealed]);

  const renderedLines = useMemo(() => {
    let budget = revealed;
    return codeLines.map((line) => {
      const shown = [];
      for (const tk of line.tokens) {
        if (budget <= 0) break;
        const take = Math.min(tk.v.length, budget);
        shown.push({ ...tk, v: tk.v.slice(0, take) });
        budget -= take;
      }
      budget -= 1; // newline
      return shown;
    });
  }, [revealed]);

  const cursorLine = renderedLines.reduce(
    (last, tokens, idx) => (tokens.length > 0 ? idx : last),
    0
  );

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Ambient backdrop: quiet graph-paper texture, not a generic gradient blob */}
      <div className="absolute inset-0 -z-20 dot-grid opacity-70" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/30 via-white/70 to-white" />
      <div className="absolute -top-24 -right-16 -z-10 h-72 w-72 rounded-full bg-secondary-100/70 blur-3xl animate-float-slow" />
      <div
        className="absolute top-52 -left-20 -z-10 h-64 w-64 rounded-full bg-accent-100/70 blur-3xl animate-float-slow"
        style={{ animationDelay: "-3s" }}
      />

      <Container className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-10 items-center">
        <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="visible">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-sm font-medium text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary-500" />
            </span>
            {personalInfo.availability}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight text-ink leading-[1.12]"
          >
            Hai, saya <span className="text-gradient">{personalInfo.firstName}</span>
            <br />
            {personalInfo.role}
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            {personalInfo.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary-500/30 transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-lg"
            >
              Lihat Proyek
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href={personalInfo.cvPath}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-700"
            >
              <Download size={16} />
              Unduh CV
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            {quickFacts.map((fact) => (
              <div key={fact.label}>
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted">{fact.label}</p>
                <p className="mt-1 font-display text-base font-semibold text-ink">{fact.value}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-5">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-primary-600"
            >
              <FaGithub size={19} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-primary-600"
            >
              <FaLinkedin size={19} />
            </a>
            <a
              href={personalInfo.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-muted transition-colors hover:text-primary-600"
            >
              <FaInstagram size={19} />
            </a>
          </motion.div>
        </motion.div>

        {/* Signature element: the self-typing code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-100 via-transparent to-secondary-100 blur-2xl" />
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-xl shadow-primary-900/5">
            <div className="flex items-center gap-1.5 border-b border-line bg-surface px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-accent-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-secondary-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary-300" />
              <span className="ml-3 font-mono text-xs text-muted">tentang-saya.js</span>
            </div>
            <pre className="px-6 py-6 font-mono text-[13px] sm:text-sm leading-7 overflow-x-auto">
              {renderedLines.map((tokens, li) => (
                <div key={li} className="min-h-[1.75rem]">
                  {tokens.map((tk, ti) => (
                    <span key={ti} className={TOKEN_COLOR[tk.t]}>
                      {tk.v}
                    </span>
                  ))}
                  {li === cursorLine && <span className="blink-caret text-primary-500">|</span>}
                </div>
              ))}
            </pre>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
