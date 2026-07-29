import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { allSkills } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";

const MID = Math.ceil(allSkills.length / 2);
const ROW_1 = allSkills.slice(0, MID);
const ROW_2 = allSkills.slice(MID);

function SkillPill({ skill }) {
  return (
    <div className="group flex shrink-0 items-center gap-4 rounded-3xl border border-line bg-white/70 px-7 py-3 shadow-[0_10px_16px_rgba(0,0,0,0.04)] transition-all duration-500 will-change-transform hover:z-20 hover:scale-110 hover:border-purple-200 hover:shadow-[0_12px_24px_rgba(147,51,234,0.08)] cursor-pointer">
      {/* Icon Wrapper & Icon */}
      <div className="flex shrink-0 items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <skill.icon size={32} style={{ color: skill.color }} />
      </div>
      {/* Teks Nama Skill - Modern & Profesional */}
      <span className="whitespace-nowrap text-lg font-medium text-slate-800 transition-colors duration-500 group-hover:text-purple-600 tracking-wide">{skill.name}</span>
    </div>
  );
}

function MarqueeRow({ skills, direction, duration }) {
  const doubled = [...skills, ...skills];

  return (
    <div className="marquee-row">
      <div className={`marquee-track gap-8 ${direction === "ltr" ? "marquee-track--ltr" : "marquee-track--rtl"}`} style={{ animationDuration: `${duration}s` }}>
        {doubled.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

const MARQUEE_SPEED = {
  row1: 24,
  row2: 22,
};

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-12 sm:py-12 bg-surface">
      <Container>
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />
      </Container>

      <Container className="mt-14 space-y-5 overflow-hidden py-4">
        <MarqueeRow skills={ROW_1} direction="ltr" duration={MARQUEE_SPEED.row1} />
        <MarqueeRow skills={ROW_2} direction="rtl" duration={MARQUEE_SPEED.row2} />
      </Container>
    </section>
  );
}
