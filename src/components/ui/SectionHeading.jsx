import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../utils/animations";

/**
 * Consistent section heading used across About, Skills, Experience,
 * Projects and Contact. The mono "<Tag />" eyebrow is the page's quiet,
 * recurring echo of the hero's code-card signature.
 */
export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCenter = align === "center";

  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className={isCenter ? "text-center mx-auto max-w-2xl" : "text-left"}>
      <span className="inline-flex items-center gap-2 font-display text-sm font-medium text-primary-600">
        <span className="text-secondary-500">&lt;</span>
        {eyebrow}
        <span className="text-secondary-500">/&gt;</span>
      </span>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">{title}</h2>
      {description && <p className={`mt-4 text-base leading-relaxed text-muted ${isCenter ? "mx-auto" : ""} max-w-xl`}>{description}</p>}
    </motion.div>
  );
}
