import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Mail, Menu, X, Moon, Sun } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Research", href: "#research" },
    { name: "Certs", href: "#certificates" },
  ];

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
        isScrolled ? "top-4" : "top-0"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "glass-panel rounded-full px-6 py-3 border border-[var(--color-border)] shadow-lg w-[90%] max-w-5xl"
            : "w-full max-w-7xl px-6 h-20 bg-transparent"
        }`}
      >
        <div className="text-xl font-bold tracking-tighter z-50 gradient-text">
          DinhHieu
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-[var(--color-text-muted)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[var(--color-text)] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center gap-4 text-[var(--color-text-muted)]">
          <button
            onClick={toggleTheme}
            className="hover:text-[var(--color-text)] transition-colors mr-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[var(--color-primary)] transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 z-[60]">
          <button
            onClick={toggleTheme}
            className="text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="relative text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 w-1/2 bg-[var(--color-surface)] border-l border-[var(--color-border)] shadow-2xl z-50 md:hidden flex flex-col pt-24"
            >
              <div className="flex flex-col px-6 py-4 gap-6 h-full">
                <nav className="flex flex-col gap-6 text-lg font-mono text-[var(--color-text-muted)]">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="hover:text-[var(--color-primary)] transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                <div className="h-[1px] bg-[var(--color-border)] w-full my-4"></div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4 text-[var(--color-text-muted)] mt-auto pb-8"
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--color-primary)] transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:dxhieu97@gmail.com"
                    className="hover:text-[var(--color-text)] transition-colors"
                  >
                    <Mail size={24} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
