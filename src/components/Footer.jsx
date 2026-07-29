import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Container from "./ui/Container";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer className="border-t border-line bg-surface">
        <Container className="py-8 text-center">
          <p className="mx-auto max-w-3xl font-display text-xs text-muted">{t.footer.CreditCard}</p>
        </Container>
      </footer>
    </>
  );
}
