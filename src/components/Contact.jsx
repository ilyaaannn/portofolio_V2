import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { personalInfo } from "../data/portfolioData";
import { fadeUp, staggerContainer, viewportOnce } from "../utils/animations";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Default behaviour needs no backend: it opens the visitor's email
    // client with the message pre-filled. Swap this for EmailJS, Formspree,
    // or your own API route if you'd rather send messages silently.
    const subject = encodeURIComponent(`Pesan dari ${form.name || "Portfolio"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    {
      icon: Phone,
      label: "Telepon",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^\d+]/g, "")}`,
    },
    { icon: MapPin, label: "Lokasi", value: personalInfo.location, href: null },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Mari Terhubung"
          description="Punya proyek, peluang kerja, atau sekadar ingin menyapa? Kotak masuk saya selalu terbuka."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {contactItems.map((item) => {
              const content = (
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-md hover:shadow-primary-900/5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-50 text-primary-600">
                    <item.icon size={19} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-[11px] uppercase tracking-wide text-muted">{item.label}</p>
                    <p className="mt-0.5 truncate text-sm font-medium text-ink">{item.value}</p>
                  </div>
                </div>
              );
              return (
                <motion.div key={item.label} variants={fadeUp}>
                  {item.href ? <a href={item.href}>{content}</a> : content}
                </motion.div>
              );
            })}

            <motion.div variants={fadeUp} className="flex items-center gap-4 pt-2">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-primary-300 hover:text-primary-600"
              >
                <FaGithub size={17} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-primary-300 hover:text-primary-600"
              >
                <FaLinkedin size={17} />
              </a>
              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-primary-300 hover:text-primary-600"
              >
                <FaInstagram size={17} />
              </a>
            </motion.div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-line bg-white p-7 sm:p-9"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  Nama
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nama kamu"
                  className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-400 focus:bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="kamu@email.com"
                  className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-400 focus:bg-white"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium text-ink">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Ceritakan tentang proyek atau peluang yang kamu punya..."
                className="mt-2 w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-400 focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary-500/30 transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:shadow-lg sm:w-auto"
            >
              <Send size={16} />
              Kirim Pesan
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-sm text-secondary-600"
              >
                Terima kasih! Aplikasi email kamu akan terbuka untuk mengirim pesan ini.
              </motion.p>
            )}
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
