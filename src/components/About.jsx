import { motion } from "framer-motion";
import { MapPin, Mail, Sparkles } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { personalInfo, certifications } from "../data/portfolioData";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "../utils/animations";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-12 sm:py-12">
      <Container>
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-14 items-start">
          {/* Portrait + quick info */}
          <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mx-auto lg:mx-0 w-full max-w-sm">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-100 to-secondary-100" />
              <div className="aspect-square rounded-[1.75rem] border border-line bg-white grid place-items-center overflow-hidden">
                <span className="font-display text-7xl font-semibold text-gradient">{personalInfo.initials}</span>
              </div>
              <div className="absolute -bottom-5 -right-5 flex items-center gap-2 rounded-2xl border border-line bg-white/80 backdrop-blur-md px-4 py-3 shadow-lg shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Sparkles size={18} className="text-accent-500" />
                <div>
                  <p className="font-display text-sm font-semibold text-ink leading-none">{t.about.badgeValue}</p>
                  <p className="mt-1 font-display text-[11px] text-muted">{t.about.badgeLabel}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-50 text-primary-600">
                  <MapPin size={16} />
                </span>
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary-50 text-secondary-600">
                  <Mail size={16} />
                </span>
                {personalInfo.email}
              </div>
            </div>
          </motion.div>

          {/* Bio + certifications */}
          <div>
            <motion.div variants={staggerContainer(0.15)} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-5">
              {t.about.bioParagraphs.map((p, i) => (
                <motion.p key={i} variants={fadeUp} className="text-base leading-relaxed text-muted">
                  {p}
                </motion.p>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-11">
              <h3 className="inline-flex items-center gap-2 font-display text-sm font-medium text-secondary-600">
                <span className="text-primary-500">&lt;</span>
                {t.about.certTitle}
                <span className="text-primary-500">/&gt;</span>
              </h3>

              <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certifications.map((cert) => (
                  <motion.div key={cert.title} variants={fadeUp} className="group flex gap-4 rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-900/5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-white">
                      <cert.icon size={20} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-sm font-semibold text-ink leading-snug">{cert.title}</p>
                      <p className="mt-1 font-display text-xs text-muted">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
