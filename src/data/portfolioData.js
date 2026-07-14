// ============================================================================
// SEMUA ISI PORTOFOLIO ADA DI SINI.
// Ganti teks di bawah ini dengan data kamu sendiri — komponen React
// di folder /src/components TIDAK PERLU diubah sama sekali.
// ============================================================================

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiFigma,
  SiVite,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { Award, BadgeCheck, GraduationCap, Trophy } from "lucide-react";

// ----------------------------------------------------------------------------
// 1. INFO PRIBADI
// ----------------------------------------------------------------------------
export const personalInfo = {
  firstName: "Farrel",
  lastName: "Ardiansyah",
  fullName: "Farrel Ardiansyah",
  initials: "FA",
  role: "Frontend Web Developer",
  tagline:
    "Saya membangun antarmuka web yang bersih, cepat, dan nyaman digunakan — dari rancangan hingga baris kode terakhir.",
  bioParagraphs: [
    "Saya frontend developer dengan fokus pada React.js dan pengalaman pengguna yang rapi. Senang mengubah desain menjadi antarmuka yang hidup, responsif, dan terasa detail di setiap interaksinya.",
    "Selain menulis kode, saya suka mendalami sisi UI/UX — memastikan setiap tombol, transisi, dan tata letak punya alasan untuk ada. Selalu terbuka untuk kolaborasi dan tantangan baru.",
  ],
  location: "Jakarta, Indonesia",
  email: "farrel.ardiansyah@email.com",
  phone: "+62 812-3456-7890",
  availability: "Terbuka untuk kerja sama freelance & full-time",
  cvPath: "/cv.pdf",
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
  },
};

// Fakta singkat — ditampilkan inline di hero, bukan kartu statistik besar
export const quickFacts = [
  { label: "Berbasis di", value: "Jakarta, ID" },
  { label: "Pengalaman", value: "2+ tahun" },
  { label: "Fokus utama", value: "React & Tailwind" },
];

// ----------------------------------------------------------------------------
// 2. TECH SKILLS — dikelompokkan per kategori
// ----------------------------------------------------------------------------
export const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
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
    title: "Front-End Web Developer Expert",
    issuer: "Dicoding Indonesia",
    year: "2024",
    icon: BadgeCheck,
  },
  {
    title: "Belajar Pengembangan Web dengan React",
    issuer: "Dicoding Indonesia",
    year: "2024",
    icon: GraduationCap,
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Coursera (Meta)",
    year: "2025",
    icon: Award,
  },
  {
    title: "Juara 2 — Hackathon Web Development Nasional",
    issuer: "Kompetisi Mahasiswa Nasional",
    year: "2024",
    icon: Trophy,
  },
];

// ----------------------------------------------------------------------------
// 4. EXPERIENCE — urutan terbaru di atas (data kronologis, jadi timeline sah dipakai)
// ----------------------------------------------------------------------------
export const experiences = [
  {
    role: "Freelance Frontend Developer",
    company: "Self-Employed",
    period: "2024 — Sekarang",
    points: [
      "Membangun 10+ landing page dan company profile untuk UMKM & startup lokal menggunakan React dan Tailwind CSS.",
      "Berkolaborasi langsung dengan klien untuk menerjemahkan kebutuhan bisnis menjadi antarmuka yang jelas dan mudah dipakai.",
      "Mengoptimalkan performa dan skor Lighthouse setiap proyek sebelum serah terima.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "PT Nusantara Digital Kreatif",
    period: "Jan 2024 — Jun 2024",
    points: [
      "Mengembangkan komponen UI reusable untuk produk internal bersama tim frontend beranggotakan 4 orang.",
      "Melakukan migrasi sebagian halaman dari JavaScript ke TypeScript untuk mengurangi bug produksi.",
      "Ikut serta dalam code review mingguan dan penerapan alur kerja Git yang lebih rapi.",
    ],
  },
  {
    role: "Web Development Volunteer",
    company: "Himpunan Mahasiswa Ilmu Komputer",
    period: "2022 — 2023",
    points: [
      "Membangun dan memelihara situs organisasi kampus menggunakan HTML, CSS, dan JavaScript.",
      "Membantu 3 divisi lain mendokumentasikan kegiatan dalam bentuk halaman web yang mudah diakses.",
    ],
  },
];

// ----------------------------------------------------------------------------
// 5. PROJECTS
// ----------------------------------------------------------------------------
export const projects = [
  {
    title: "UMKM Store",
    description:
      "Platform e-commerce ringan untuk pelaku UMKM — katalog produk, keranjang belanja, dan checkout melalui WhatsApp.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    gradient: ["var(--color-primary-500)", "var(--color-secondary-500)"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "TaskFlow",
    description:
      "Aplikasi manajemen tugas bergaya kanban dengan drag-and-drop, label prioritas, dan sinkronisasi real-time.",
    tags: ["React", "Firebase", "Framer Motion"],
    gradient: ["var(--color-secondary-500)", "var(--color-accent-500)"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Cuaca Kita",
    description:
      "Dashboard cuaca dengan data real-time, grafik suhu 7 hari, dan pencarian lokasi di seluruh Indonesia.",
    tags: ["React", "OpenWeather API", "Chart.js"],
    gradient: ["var(--color-primary-400)", "var(--color-accent-400)"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "EduLearn",
    description:
      "Platform belajar online dengan sistem kelas, progress tracking, dan kuis interaktif untuk siswa SMA.",
    tags: ["Next.js", "PostgreSQL", "Tailwind CSS"],
    gradient: ["var(--color-accent-500)", "var(--color-primary-500)"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];
