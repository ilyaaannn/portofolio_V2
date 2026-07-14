import { motion } from "framer-motion";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { skillCategories } from "../data/portfolioData";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Skills"
          title="Tech Skills"
          description="Kumpulan tools dan teknologi yang paling sering saya pakai untuk membangun produk dari ujung ke ujung."
        />

        <div className="mt-14 space-y-12">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <p className="font-display text-xs uppercase tracking-widest text-muted">{category.name}</p>
              <motion.div
                variants={staggerContainer(0.06)}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-5 flex flex-wrap gap-3"
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={fadeUp}
                    className="group flex items-center gap-2.5 rounded-xl border border-line bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-md hover:shadow-primary-900/5"
                  >
                    <skill.icon
                      size={20}
                      className="text-muted transition-colors duration-300 group-hover:text-primary-600"
                    />
                    <span className="text-sm font-medium text-ink">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
