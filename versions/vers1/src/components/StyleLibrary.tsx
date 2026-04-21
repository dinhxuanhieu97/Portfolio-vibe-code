import { motion } from "motion/react";

export default function StyleLibrary() {
  return (
    <section id="style-library" className="py-24 relative bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[var(--color-text)]">
            Style <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">Library</span>
          </h2>
          <p className="text-lg text-[var(--color-text-muted)] max-w-2xl">
            A showcase of the neutral tones and vibrant accents used throughout this application.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Colors */}
          <div className="glass-panel p-6 rounded-2xl border border-[var(--color-border)]">
            <h3 className="text-xl font-semibold mb-6 text-[var(--color-text)]">Colors</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] shadow-sm"></div>
                <div>
                  <div className="text-sm font-medium text-[var(--color-text)]">Background</div>
                  <div className="text-xs text-[var(--color-text-muted)] font-mono">var(--color-bg)</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-sm"></div>
                <div>
                  <div className="text-sm font-medium text-[var(--color-text)]">Surface</div>
                  <div className="text-xs text-[var(--color-text-muted)] font-mono">var(--color-surface)</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)] shadow-md shadow-[var(--color-primary)]/20"></div>
                <div>
                  <div className="text-sm font-medium text-[var(--color-text)]">Primary Accent</div>
                  <div className="text-xs text-[var(--color-text-muted)] font-mono">var(--color-primary)</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] shadow-md shadow-[var(--color-accent)]/20"></div>
                <div>
                  <div className="text-sm font-medium text-[var(--color-text)]">Secondary Accent</div>
                  <div className="text-xs text-[var(--color-text-muted)] font-mono">var(--color-accent)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Typography */}
          <div className="glass-panel p-6 rounded-2xl border border-[var(--color-border)]">
            <h3 className="text-xl font-semibold mb-6 text-[var(--color-text)]">Typography</h3>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-[var(--color-text)] tracking-tighter">Heading 1</div>
                <div className="text-xs text-[var(--color-text-muted)] font-mono mt-2">Space Grotesk / Bold</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-[var(--color-text)] tracking-tight">Heading 2</div>
                <div className="text-xs text-[var(--color-text-muted)] font-mono mt-2">Space Grotesk / Semibold</div>
              </div>
              <div>
                <div className="text-base text-[var(--color-text)] leading-relaxed">Body Text. The quick brown fox jumps over the lazy dog.</div>
                <div className="text-xs text-[var(--color-text-muted)] font-mono mt-2">DM Sans / Regular</div>
              </div>
            </div>
          </div>

          {/* Components */}
          <div className="glass-panel p-6 rounded-2xl border border-[var(--color-border)]">
            <h3 className="text-xl font-semibold mb-6 text-[var(--color-text)]">Components</h3>
            <div className="space-y-6">
              <div>
                <button className="w-full py-3 px-4 bg-[var(--color-primary)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity shadow-lg shadow-[var(--color-primary)]/20">
                  Primary Button
                </button>
              </div>
              <div>
                <button className="w-full py-3 px-4 bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] rounded-xl font-medium hover:bg-[var(--color-surface-hover)] transition-colors">
                  Secondary Button
                </button>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface-hover)] border border-[var(--color-border)] text-sm text-[var(--color-text)]">
                <div className="font-medium mb-1">Interactive Card</div>
                <div className="text-[var(--color-text-muted)]">Hover states and subtle borders define the neutral surface hierarchy.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
