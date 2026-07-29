import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-12 sm:py-12">
      <Container>
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />

        <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="visible" viewport={viewportOnce} className="relative mt-16">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-line" aria-hidden="true" />

          {t.experience.items.map((exp, i) => (
            <motion.div key={i} variants={fadeUp} className="group relative pl-12 pb-14 last:pb-0">
              <span className="absolute left-4 top-1.5 block h-3 w-3 -translate-x-1/2 rounded-full bg-primary-500 ring-4 ring-white transition-transform duration-300 group-hover:scale-125" />

              <div className="rounded-2xl p-4 -m-4 transition-all duration-300 group-hover:bg-white/70 group-hover:backdrop-blur-md group-hover:shadow-md group-hover:shadow-primary-900/5">
                <p className="font-display text-xs text-secondary-600">{exp.period}</p>
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
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
