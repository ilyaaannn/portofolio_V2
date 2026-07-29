// ============================================================================
// KAMUS TERJEMAHAN — Bahasa Indonesia (id) & English (en)
// Semua teks yang tampil di layar diambil dari sini lewat useLanguage().t
// ============================================================================

import { CreditCard } from "lucide-react";

export const translations = {
  id: {
    nav: {
      home: "Home",
      about: "Tentang",
      skills: "Skills",
      experience: "Pengalaman",
      projects: "Proyek",
      contact: "Kontak",
      openMenu: "Buka menu",
      closeMenu: "Tutup menu",
    },
    langToggle: {
      switchTo: "Ganti ke Bahasa Inggris",
    },
    hero: {
      greeting: "Hai, saya",
      tagline: "Saya membangun aplikasi mobile dan solusi data yang bersih, responsif, dan siap dipakai — dari riset hingga peluncuran.",
      availability: "Terbuka untuk kerja sama freelance & full-time",
      ctaProjects: "Lihat Proyek",
      ctaCV: "Unduh CV",
      codeFileName: "tentang-saya.js",
      quickFacts: [
        { label: "Berbasis di", value: "Riau, ID" },
        { label: "Fokus utama", value: "Data Science" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "Tentang Saya",
      badgeValue: "Fresh Graduate",
      badgeLabel: "Status",
      bioParagraphs: [
        "Saya fresh graduate yang baru memasuki dunia data science dan mobile development dengan pengalaman membangun aplikasi Flutter serta model data sederhana menggunakan Python.",
        "Saya percaya pada penggabungan solusi mobile yang rapi dengan pengolahan data yang bermakna. Saat ini fokus saya adalah memperkuat keterampilan sebagai calon Data Scientist dan Junior Software Engineer.",
      ],
      certTitle: "Certification & Awards",
    },
    skills: {
      eyebrow: "Skills",
      title: "Keterampilan Teknis",
    },
    experience: {
      eyebrow: "Experience",
      title: "Pengalaman Kerja",
      items: [
        {
          role: "Junior Software Engineering Intern",
          company: "PT. Mobilkom Telekomindo",
          period: "Mar 2026 — May 2026",
          points: ["Magang 3 bulan dalam tim pengembangan perangkat lunak, mendukung pembuatan aplikasi mobile, pemeliharaan backend, dan pengujian fungsional untuk meningkatkan pengalaman pengguna.", "Berkolaborasi dengan tim lintas fungsi untuk mengimplementasikan fitur, menulis dokumentasi teknis, dan menjaga kualitas kode dalam lingkungan perusahaan."],
        },
      ],
    },
    projects: {
      eyebrow: "Projek",
      title: "Karya Terbaik",
      featuredLabel: "Featured",
      liveDemo: "Live Demo",
      source: "Source",
      items: [
        {
          title: "Aplikasi Aksi Komunitas",
          description: "Aplikasi mobile yang membantu mahasiswa mendokumentasikan kegiatan komunitas, dengan fitur pencatatan aktivitas, laporan, dan ringkasan performa.",
          tags: ["Flutter", "PHP", "MySQL"],
          gradient: ["var(--color-primary-500)", "var(--color-secondary-500)"],
          githubUrl: "https://github.com/ilyaaannn/Aksi_Community.git",
          featured: true,
        },
        {
          title: "Sistem Akuaponik Pintar",
          description: "Sistem mobile dan data-driven untuk memantau kualitas air akuaponik, menggabungkan Flutter, Python, dan model K-NN untuk klasifikasi kualitas air.",
          tags: ["Flutter", "Python", "Machine Learning"],
          gradient: ["var(--color-secondary-500)", "var(--color-accent-500)"],
          githubUrl: "https://github.com/ilyaaannn/Tugasakhir_Akuaponik.git",
          featured: true,
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Mari Terhubung",
      description: "Punya proyek, peluang kerja, atau sekadar ingin menyapa? Kotak masuk saya selalu terbuka.",
      labels: { email: "Email", phone: "Telepon", location: "Lokasi" },
      form: {
        name: "Nama",
        namePlaceholder: "Nama kamu",
        email: "Email",
        emailPlaceholder: "emailkamu@gmail.com",
        message: "Pesan",
        messagePlaceholder: "Ceritakan tentang proyek atau peluang yang kamu punya...",
        submit: "Kirim Pesan",
        sentMessage: "Terima kasih! Aplikasi email kamu akan terbuka untuk mengirim pesan ini.",
        subjectPrefix: "Pesan dari",
      },
    },
    footer: {
      CreditCard: "© 2026 IlyanHabib™. All Rights Reserved",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    langToggle: {
      switchTo: "Switch to Indonesian",
    },
    hero: {
      greeting: "Hi, I'm",
      tagline: "I build mobile-first and data-aware applications with clean interfaces, practical UX, and real-world impact.",
      availability: "Open to freelance & full-time collaboration",
      ctaProjects: "View Projects",
      ctaCV: "Download CV",
      codeFileName: "about-me.js",
      quickFacts: [
        { label: "Based in", value: "Riau, ID" },
        { label: "Main focus", value: "Data Science" },
      ],
    },
    about: {
      eyebrow: "About",
      title: "About Me",
      badgeValue: "Fresh Graduate",
      badgeLabel: "Status",
      bioParagraphs: ["I'm a fresh graduate entering the world of data science and mobile development, with experience building Flutter apps and creating simple data models using Python.", "I believe in combining polished mobile experiences with meaningful data insights. Right now I'm focused on growing as a future Data Scientist and Junior Software Engineer."],
      certTitle: "Certification & Awards",
    },
    skills: {
      eyebrow: "Skills",
      title: "Tech Skills",
    },
    experience: {
      eyebrow: "Experience",
      title: "Work Experience",
      items: [
        {
          role: "Junior Software Engineering Intern",
          company: "PT. Mobilkom Telekomindo",
          period: "Mar 2026 — May 2026",
          points: ["Completed a 3-month internship supporting mobile app development, backend maintenance, and functional testing to improve user experience.", "Collaborated with cross-functional teammates to implement features, maintain documentation, and keep code quality consistent in a corporate environment."],
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Featured Works",
      featuredLabel: "Featured",
      liveDemo: "Live Demo",
      source: "Source",
      items: [
        {
          title: "Aplikasi Aksi Komunitas",
          description: "A mobile app that helps students record community action activities, with activity logging, reports, and performance summaries.",
          tags: ["Flutter", "PHP", "MySQL"],
          gradient: ["var(--color-primary-500)", "var(--color-secondary-500)"],
          githubUrl: "https://github.com/ilyaaannn/Aksi_Community.git",
          featured: true,
        },
        {
          title: "Sistem Akuaponik Pintar",
          description: "A mobile and data-driven system for monitoring aquaponics water quality, combining Flutter, Python, and a K-NN classification model.",
          tags: ["Flutter", "Python", "Machine Learning"],
          gradient: ["var(--color-secondary-500)", "var(--color-accent-500)"],
          githubUrl: "https://github.com/ilyaaannn/Tugasakhir_Akuaponik.git",
          featured: true,
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's Connect",
      description: "Got a project, a job opportunity, or just want to say hi? My inbox is always open.",
      labels: { email: "Email", phone: "Phone", location: "Location" },
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "youremail@gmail.com",
        message: "Message",
        messagePlaceholder: "Tell me about the project or opportunity you have...",
        submit: "Send Message",
        sentMessage: "Thank you! Your email app will open to send this message.",
        subjectPrefix: "Message from",
      },
    },
    footer: {
      CreditCard: "© 2026 IlyanHabib™. All Rights Reserved",
    },
  },
};
