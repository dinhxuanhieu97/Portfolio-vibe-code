import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-[var(--color-text-muted)] font-mono text-sm border-t border-[var(--color-border)] mt-24 bg-[var(--color-bg)]">
      <div className="flex justify-center gap-6 mb-6 md:hidden">
        <a
          href="https://github.com/dinhxuanhieu97"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--color-primary)] transition-colors"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/hieu-xuan-4b9a26144/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--color-accent)] transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:dxhieu97@gmail.com"
          className="hover:text-[var(--color-text)] transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
      <p className="hover:text-[var(--color-primary)] transition-colors cursor-pointer">
        Designed & Built by Dinh Hieu
      </p>
      <p className="mt-2 text-xs opacity-50">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
