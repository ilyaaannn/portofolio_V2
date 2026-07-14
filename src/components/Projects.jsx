import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { projects } from "../data/portfolioData";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Proyek Pilihan"
          description="Beberapa proyek yang saya bangun — dari eksplorasi pribadi hingga kebutuhan klien nyata."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={fadeUp}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-900/10"
            >
              <div
                className="relative h-40 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.28), transparent 60%)",
                  }}
                />
                {project.featured && (
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 font-display text-[11px] font-medium text-ink">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-ink">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-primary-50 px-2.5 py-1 font-display text-[11px] text-primary-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-line pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-primary-600"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary-600"
                  >
                    <FaGithub size={15} />
                    Source
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
