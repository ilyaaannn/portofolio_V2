# Portfolio Website — React + Tailwind CSS

Landing page portofolio satu halaman (single page) dengan 6 navigasi utama:
**Home · About Me · Skills · Experience · Projects · Contact**

Dibangun dengan React 19 + Vite, Tailwind CSS v4, dan Framer Motion untuk animasi.
Palet warna hanya memakai 3 warna (primary / secondary / accent) di atas latar putih,
supaya tetap terasa cerah tapi tidak ramai.

---

## 🚀 Menjalankan di Komputer

Pastikan [Node.js](https://nodejs.org) versi 18 ke atas sudah terpasang.

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser. Perubahan kode akan otomatis ter-refresh.

Untuk build versi produksi (dipakai saat deploy):

```bash
npm run build
```

Hasilnya ada di folder `dist/` — folder inilah yang di-upload ke hosting.

Bisa juga langsung diintip hasil build-nya secara lokal dengan:

```bash
npm run preview
```

---

## ✏️ Cara Mengganti Isi Konten (PALING PENTING)

**Hampir semua teks ada di satu file:** `src/data/portfolioData.js`.

Cukup ganti isi file ini dengan data kamu sendiri — nama, bio, email, skill,
sertifikat, pengalaman kerja, dan proyek. Komponen di `src/components/` **tidak
perlu disentuh sama sekali**.

Yang bisa diganti di file itu:

| Bagian                                            | Variabel          |
| ------------------------------------------------- | ----------------- |
| Nama, role, bio, kontak, sosial media             | `personalInfo`    |
| Fakta singkat di hero (lokasi, pengalaman, fokus) | `quickFacts`      |
| Tech skills per kategori                          | `skillCategories` |
| Sertifikat & penghargaan                          | `certifications`  |
| Pengalaman kerja (timeline)                       | `experiences`     |
| Daftar proyek                                     | `projects`        |

Icon tech skill memakai [`react-icons/si`](https://react-icons.github.io/react-icons/icons/si/)
(Simple Icons) — cari nama ikon lain di link tersebut kalau mau menambah/mengganti stack.
Icon sertifikat memakai [`lucide-react`](https://lucide.dev/icons/).

### Foto profil & CV

- Bagian About memakai monogram inisial (bukan foto) supaya template ini langsung
  bisa dipakai tanpa aset tambahan. Kalau mau pakai foto asli, ganti isi kotak
  `<span className="text-gradient">{personalInfo.initials}</span>` di
  `src/components/About.jsx` dengan tag `<img>`.
- Tombol "Unduh CV" di hero mengarah ke `/cv.pdf`. Taruh file CV kamu di folder
  `public/` dengan nama `cv.pdf` supaya tombol ini langsung berfungsi.

### Form Contact

Form di bagian Contact secara default **tidak butuh backend** — saat disubmit,
form akan membuka aplikasi email pengunjung dengan pesan yang sudah terisi
otomatis, ditujukan ke `personalInfo.email`. Kalau ingin pesan terkirim otomatis
di belakang layar (tanpa membuka aplikasi email), ganti fungsi `handleSubmit` di
`src/components/Contact.jsx` dengan integrasi seperti
[EmailJS](https://www.emailjs.com/) atau [Formspree](https://formspree.io/).

---

## 🎨 Cara Mengganti Warna & Font

Semua token desain ada di `src/index.css`, di dalam blok `@theme`:

```css
@theme {
  --color-primary-500: #4f63d2;   /* warna utama */
  --color-secondary-500: #17a398; /* warna kedua */
  --color-accent-500: #f5a623;    /* warna aksen/pemanis */
  ...
}
```

Ganti nilai hex-nya, lalu semua komponen di seluruh halaman akan otomatis
menyesuaikan (karena semua memakai kelas seperti `bg-primary-500`,
`text-secondary-600`, dll — tidak ada warna yang di-hardcode di komponen).

Font diatur lewat variabel `--font-display` (Space Grotesk, untuk judul),
`--font-body` (Inter, untuk paragraf), dan `--font-mono` (JetBrains Mono, untuk
label kecil bergaya kode). Font-nya dimuat dari Google Fonts lewat `index.html`.

---

## 🗂️ Struktur Folder

```
src/
├── components/
│   ├── ui/
│   │   ├── Container.jsx      # wrapper lebar halaman
│   │   └── SectionHeading.jsx # judul section + label ala tag JSX
│   ├── Navbar.jsx             # nav + scroll-spy + menu mobile
│   ├── Hero.jsx               # Home — termasuk animasi "code card" mengetik
│   ├── About.jsx              # Tentang Saya + Certification & Awards
│   ├── Skills.jsx             # Tech Skills per kategori
│   ├── Experience.jsx         # Timeline pengalaman kerja
│   ├── Projects.jsx           # Grid kartu proyek
│   ├── Contact.jsx            # Info kontak + form
│   └── Footer.jsx             # Footer + tombol kembali ke atas
├── data/
│   └── portfolioData.js       # 👉 SEMUA KONTEN ADA DI SINI
├── utils/
│   └── animations.js          # variasi animasi Framer Motion yang dipakai bersama
├── App.jsx
├── main.jsx
└── index.css                  # token warna, font, dan gaya dasar
```

---

## ☁️ Deploy

Cara termudah: deploy folder ini ke [Vercel](https://vercel.com) atau
[Netlify](https://netlify.com) — tinggal hubungkan repo GitHub atau upload
folder `dist/` hasil `npm run build`, tanpa konfigurasi tambahan.

---

## 🧰 Tech Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) — animasi
- [lucide-react](https://lucide.dev/) & [react-icons](https://react-icons.github.io/react-icons/) — ikon
