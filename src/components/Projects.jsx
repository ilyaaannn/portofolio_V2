import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations";
import { useLanguage } from "../context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-12 sm:py-12 bg-surface">
      <Container>
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />

        <motion.div variants={staggerContainer(0.1)} initial="hidden" whileInView="visible" viewport={viewportOnce} className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {t.projects.items.map((project) => (
            <motion.div key={project.title} variants={fadeUp} className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/10">
              <div
                className="relative h-40 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.28), transparent 60%)",
                  }}
                />
                {project.featured && <span className="absolute top-4 left-4 rounded-full border border-white/30 bg-white/15 backdrop-blur-md px-3 py-1 font-display text-[11px] font-medium text-white transition-all duration-300">{t.projects.featuredLabel}</span>}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-semibold text-ink">{project.title}</h3>
                <p className="mt-2 flex-1 text-base leading-relaxed text-muted">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-primary-50 px-2.5 py-1 font-display text-[11px] text-primary-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-all duration-300 hover:text-primary-600 hover:translate-x-0.5">
                    <FaGithub size={15} />
                    {t.projects.source}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
