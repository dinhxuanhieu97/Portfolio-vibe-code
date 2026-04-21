import React from "react";
import { portfolioData } from "../data/portfolio";

export default function Footer() {
  const { footer } = portfolioData;

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-text-muted text-sm">{footer.text}</p>
          <p className="text-text-muted/60 text-xs italic">{footer.optionalText}</p>
        </div>

        <div className="flex items-center gap-8">
          {portfolioData.navbar.slice(0, 4).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-mono uppercase tracking-widest text-text-muted hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs font-mono uppercase tracking-widest text-primary hover:text-emerald-400 transition-colors"
        >
          {footer.backToTop} ↑
        </button>
      </div>
    </footer>
  );
}
