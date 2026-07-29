import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import { personalInfo } from "../data/portfolioData";
import { fadeUp, viewportOnce } from "../utils/animations";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
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
    const subject = encodeURIComponent(`${t.contact.form.subjectPrefix} ${form.name || "Portfolio"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-12 sm:py-12">
      <Container>
        <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} className="space-y-4">
            <a href={`mailto:${personalInfo.email}`} className="group flex items-center gap-4 rounded-3xl border border-line bg-white px-5 py-5 transition hover:border-primary-300 hover:shadow-lg hover:shadow-primary-200/20">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-100 text-sky-700 transition-all duration-300 group-hover:scale-105">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-muted">{t.contact.labels.email}</p>
                <p className="mt-1 text-base font-semibold text-ink">{personalInfo.email}</p>
              </div>
            </a>

            <div className="group flex items-center gap-4 rounded-3xl border border-line bg-white px-5 py-5 transition hover:border-primary-300 hover:shadow-lg hover:shadow-primary-200/20">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-100 text-rose-700">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-muted">{t.contact.labels.location}</p>
                <p className="mt-1 text-base font-semibold text-ink">{personalInfo.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.form variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce} onSubmit={handleSubmit} className="relative overflow-hidden rounded-[40px] border border-line bg-white p-8 shadow-[0_30px_100px_rgba(15,23,42,0.08)]">
            <div className="relative space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink">
                  {t.contact.form.name}
                </label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder={t.contact.form.namePlaceholder} className="mt-3 w-full rounded-3xl border border-line bg-surface px-5 py-4 text-sm text-ink outline-none transition-all duration-300 focus:border-primary-400 focus:bg-white" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-ink">
                  {t.contact.form.email}
                </label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder={t.contact.form.emailPlaceholder} className="mt-3 w-full rounded-3xl border border-line bg-surface px-5 py-4 text-sm text-ink outline-none transition-all duration-300 focus:border-primary-400 focus:bg-white" />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-ink">
                  {t.contact.form.message}
                </label>
                <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} placeholder={t.contact.form.messagePlaceholder} className="mt-3 w-full resize-none rounded-3xl border border-line bg-surface px-5 py-4 text-sm text-ink outline-none transition-all duration-300 focus:border-primary-400 focus:bg-white" />
              </div>

              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-600">
                <Send size={16} />
                {t.contact.form.submit}
              </button>

              {sent && (
                <motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} className="text-sm text-secondary-600">
                  {t.contact.form.sentMessage}
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
