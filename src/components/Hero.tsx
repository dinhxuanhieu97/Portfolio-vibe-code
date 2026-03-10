import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, FileText, Github, Linkedin, Mail, Phone } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const fullText = "Dinh Hieu";

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          currentText += fullText[currentIndex];
          setTypedText(currentText);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }, 600);

    return () => clearTimeout(timeout);
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen relative flex items-center overflow-hidden bg-[var(--color-bg)]"
    >
      {/* Background effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-primary)] opacity-20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-accent)] opacity-20 blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 pt-20 h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center py-10 md:py-20 h-full"
        >
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-[var(--color-primary)] mb-2"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 gradient-text flex items-center min-h-[1.2em]"
          >
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
              className="ml-2 inline-block w-[4px] h-[0.8em] bg-[var(--color-primary)]"
            />
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium tracking-tight text-[var(--color-text-muted)] mb-6"
          >
            I build scalable Machine Learning systems.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[var(--color-text-muted)] max-w-lg mb-10 leading-relaxed"
          >
            I'm an AI Engineer specializing in transforming raw data into
            intelligent solutions. My focus is on designing, training, and
            deploying robust models that drive real-world impact.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:0345995727"
              className="btn-primary flex items-center gap-2 rounded-xl px-6 py-3 font-medium"
            >
              Contact <Phone size={18} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center gap-2 px-6 py-3 border border-[var(--color-border)] text-[var(--color-text)] font-medium rounded-xl hover:bg-[var(--color-surface)] transition-all duration-300"
            >
              <FileText size={18} /> Resume
            </motion.button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4">
            <a href="mailto:dxhieu97@gmail.com" className="w-12 h-12 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center rounded-xl shadow-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors text-[var(--color-text-muted)]">
              <Mail size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center rounded-xl shadow-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors text-[var(--color-text-muted)]">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-12 h-12 bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center rounded-xl shadow-sm hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors text-[var(--color-text-muted)]">
              <Linkedin size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center relative h-full min-h-[400px] md:min-h-[600px]"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl transform rotate-6 opacity-20 blur-lg"></div>
            <div className="absolute inset-0 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/ht.jpg" 
                alt="Dinh Hieu" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}
