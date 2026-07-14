import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { experiences } from "../data/portfolioData";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Pengalaman Kerja"
          description="Perjalanan profesional saya sejauh ini, disusun dari yang paling baru."
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-16"
        >
          <div className="absolute left-4 top-2 bottom-2 w-px bg-line" aria-hidden="true" />

          {experiences.map((exp, i) => (
            <motion.div key={i} variants={fadeUp} className="relative pl-12 pb-14 last:pb-0">
              <span className="absolute left-4 top-1.5 block h-3 w-3 -translate-x-1/2 rounded-full bg-primary-500 ring-4 ring-white" />

              <p className="font-mono text-xs text-secondary-600">{exp.period}</p>
              <h3 className="mt-1.5 font-display text-xl font-semibold text-ink">{exp.role}</h3>
              <p className="mt-0.5 text-sm font-medium text-muted">{exp.company}</p>

              <ul className="mt-4 space-y-2.5">
                {exp.points.map((point, pi) => (
                  <li key={pi} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
