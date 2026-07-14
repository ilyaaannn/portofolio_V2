// ============================================================================
// SEMUA ISI PORTOFOLIO ADA DI SINI.
// Ganti teks di bawah ini dengan data kamu sendiri — komponen React
// di folder /src/components TIDAK PERLU diubah sama sekali.
// ============================================================================

import { SiReact, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5, SiCss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit, SiGithub, SiFigma, SiVite, SiPostman, SiVercel, SiFlutter, SiLaravel, SiMysql, SiRedis, SiFirebase } from "react-icons/si";
import { Award, BadgeCheck, GraduationCap, Trophy } from "lucide-react";

// ----------------------------------------------------------------------------
// 1. INFO PRIBADI
// ----------------------------------------------------------------------------
export const personalInfo = {
  firstName: "Ilyan Habib",
  lastName: "Maulana",
  fullName: "Ilyan Habib Maulana",
  initials: "IH.",
  role: "Frontend Web Developer",
  tagline: "Saya membangun antarmuka web yang bersih, cepat, dan nyaman digunakan — dari rancangan hingga baris kode terakhir.",
  bioParagraphs: [
    "Saya frontend developer dengan fokus pada React.js dan pengalaman pengguna yang rapi. Senang mengubah desain menjadi antarmuka yang hidup, responsif, dan terasa detail di setiap interaksinya.",
    "Selain menulis kode, saya suka mendalami sisi UI/UX — memastikan setiap tombol, transisi, dan tata letak punya alasan untuk ada. Selalu terbuka untuk kolaborasi dan tantangan baru.",
  ],
  location: "Riau, Indonesia",
  email: "habibilyan91@gmail.com",
  phone: "+62 8831-84454993",
  availability: "Terbuka untuk kerja sama freelance & full-time",
  cvPath: "/cv.pdf",
  social: {
    github: "https://github.com/ilyaaannn",
    linkedin: "https://linkedin.com/in/ilyan habib maulana",
    instagram: "https://instagram.com/ilyanhabib",
    Tiktok: "https://instagram.com/@ilyanhabib",
  },
};

// Fakta singkat — ditampilkan inline di hero, bukan kartu statistik besar
export const quickFacts = [
  { label: "Berbasis di", value: "Riau, ID" },
  { label: "Pengalaman", value: "Fresh Graduate" },
  { label: "Fokus utama", value: "Machine Learning" },
];

// ----------------------------------------------------------------------------
// 2. TECH SKILLS — dikelompokkan per kategori
// ----------------------------------------------------------------------------
export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Laravel", icon: SiLaravel },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MySQL", icon: SiMysql },
      { name: "Redis", icon: SiRedis },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    name: "Tools & Lainnya",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Vite", icon: SiVite },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

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

// ----------------------------------------------------------------------------
// 4. EXPERIENCE — urutan terbaru di atas (data kronologis, jadi timeline sah dipakai)
// ----------------------------------------------------------------------------
export const experiences = [
  {
    role: "Aplikasi Aksi Komunitas",
    company: "Self-Employed",
    period: "Feb 2025 - Apr 2025",
    points: ["Merancang dan mengembangkan aplikasi mobile secara mandiri (frontend Flutter, backend PHP, database MySQL) untuk mencatat kegiatan aksi komunitas mahasiswa. Bertujuan membantu komunitas memiliki pencatatan kegiatan yang rapi dan track record yang baik dan terukur."],
  },
  {
    role: "Sistem Akuaponik Pintar",
    company: "Tugas Akhir Akademik",
    period: "Okt 2025 — Jun 2026",
    points: ["Mengembangkan sistem klasifikasi kualitas air akuaponik menggunakan algoritma K-Nearest Neighbor (K-NN) berbasis Euclidean Distance untuk mengukur kedekatan antar data. Menggunakan Python untuk pengolahan data dan pembangunan model machine learning, serta Flutter untuk antarmuka mobile. "],
  },
];

// ----------------------------------------------------------------------------
// 5. PROJECTS
// ----------------------------------------------------------------------------
export const projects = [
  {
    title: "UMKM Store",
    description: "Platform e-commerce ringan untuk pelaku UMKM — katalog produk, keranjang belanja, dan checkout melalui WhatsApp.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    gradient: ["var(--color-primary-500)", "var(--color-secondary-500)"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "TaskFlow",
    description: "Aplikasi manajemen tugas bergaya kanban dengan drag-and-drop, label prioritas, dan sinkronisasi real-time.",
    tags: ["React", "Firebase", "Framer Motion"],
    gradient: ["var(--color-secondary-500)", "var(--color-accent-500)"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Cuaca Kita",
    description: "Dashboard cuaca dengan data real-time, grafik suhu 7 hari, dan pencarian lokasi di seluruh Indonesia.",
    tags: ["React", "OpenWeather API", "Chart.js"],
    gradient: ["var(--color-primary-400)", "var(--color-accent-400)"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "EduLearn",
    description: "Platform belajar online dengan sistem kelas, progress tracking, dan kuis interaktif untuk siswa SMA.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    gradient: ["var(--color-accent-500)", "var(--color-primary-500)"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];
