import { SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiGit, SiGithub, SiFigma, SiVite, SiPostman, SiVercel, SiFlutter, SiLaravel, SiMysql, SiRedis, SiFirebase, SiPhp, SiPython } from "react-icons/si";
import { Award, BadgeCheck, GraduationCap } from "lucide-react";

// ----------------------------------------------------------------------------
// 1. INFO PRIBADI
// ----------------------------------------------------------------------------
export const personalInfo = {
  firstName: "Ilyan Habib",
  lastName: "Maulana",
  fullName: "Ilyan Habib Maulana",
  initials: "IH.",
  role: "Aspiring Data Scientist",
  location: "Riau, Indonesia",
  email: "habibilyan91@gmail.com",
  phone: "+62 8831-84454993",
  cvPath: "/CV_Ilyan_Habib_Maulana.pdf",
  social: {
    github: "https://github.com/ilyaaannn",
    linkedin: "https://linkedin.com/in/ilyanhabib-maulana",
    instagram: "https://instagram.com/ilyanhabib",
    Tiktok: "https://instagram.com/@ilyanhabib",
  },
};

// ----------------------------------------------------------------------------
// 2. TECH SKILLS — dikelompokkan per kategori
// ----------------------------------------------------------------------------
export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#E9C321" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    name: "Tools & Lainnya",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

// Semua skill sebagai satu daftar datar — dipakai oleh marquee 2-baris di Skills.jsx
export const allSkills = skillCategories.flatMap((category) => category.skills);

// ----------------------------------------------------------------------------
// 3. CERTIFICATION & AWARDS
// ----------------------------------------------------------------------------
export const certifications = [
  {
    title: "Web Development",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2025",
    icon: BadgeCheck,
  },
  {
    title: "Belajar Dasar Data Science",
    issuer: "Dicoding Indonesia",
    year: "2024",
    icon: GraduationCap,
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia & Google Developers",
    year: "2025",
    icon: Award,
  },
];
