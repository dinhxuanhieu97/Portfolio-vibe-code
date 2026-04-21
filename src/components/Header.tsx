import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

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
            ? "glass-panel rounded-full px-6 py-3 border border-white/10 shadow-lg w-[90%] max-w-5xl"
            : "w-full max-w-7xl px-6 h-20 bg-transparent"
        }`}
      >
        <a
          href="#home"
          className="text-xl font-bold tracking-tighter z-50 gradient-text hover:opacity-80 transition-opacity"
        >
          Dinh Hieu<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-mono text-text-muted">
          {portfolioData.navbar.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition-colors text-xs uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Social & Theme */}
        <div className="hidden md:flex items-center gap-4 text-text-muted">
          <button
            onClick={toggleTheme}
            className="hover:text-primary transition-colors mr-2"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <div className="w-[1px] h-4 bg-white/10 mx-1" />
          <a
            href="https://github.com/dinhxuanhieu97"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/hieu-xuan-4b9a26144/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:dxhieu97@gmail.com"
            className="hover:text-primary transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4 z-[60]">
          <button
            onClick={toggleTheme}
            className="text-text-muted hover:text-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="relative text-text-muted hover:text-primary transition-colors"
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
              className="fixed top-0 right-0 bottom-0 w-[70%] bg-surface border-l border-white/5 shadow-2xl z-50 md:hidden flex flex-col pt-24"
            >
              <div className="flex flex-col px-8 py-4 gap-6 h-full">
                <nav className="flex flex-col gap-6 text-sm font-mono text-text-muted">
                  {portfolioData.navbar.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="hover:text-primary transition-colors uppercase tracking-widest"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                <div className="h-[1px] bg-white/5 w-full my-4"></div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-6 text-text-muted mt-auto pb-8"
                >
                  <a href="https://github.com/dinhxuanhieu97" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/hieu-xuan-4b9a26144/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:dxhieu97@gmail.com" className="hover:text-primary transition-colors">
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
