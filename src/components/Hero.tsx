import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import TrustStrip from "./TrustStrip";

export default function Hero() {
  const { hero } = portfolioData;
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const phrases = [
      " build modern websites.",
      " build scalable web and mobile applications.",
      " help startups and growing businesses grow online."
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];
      
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
        typingSpeed = 50;
      } else {
        setTypedText(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
      }

      const timeoutId = setTimeout(type, typingSpeed);
      return () => clearTimeout(timeoutId);
    };

    const timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="home" className="relative pt-32 lg:pt-48 overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full -z-10 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 text-center lg:text-left flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto lg:mx-0"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel border-white/10 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] text-primary">
              {hero.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1] font-heading relative inline-block w-full"
          >
            {/* Ghost text to reserve space perfectly */}
            <span className="opacity-0 pointer-events-none select-none" aria-hidden="true">
              I help startups and growing businesses grow online.
            </span>
            
            {/* Animated text overlay */}
            <div className="absolute top-0 left-0 right-0 h-full text-center lg:text-left">
              <span className="gradient-text inline">I{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="inline-block w-[4px] h-[0.8em] bg-primary ml-2 translate-y-[0.1em]"
              />
            </div>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-text-muted font-medium mb-4"
          >
            {hero.subheadline}
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-text-muted/80 max-w-2xl mb-12 leading-relaxed mx-auto lg:mx-0"
          >
            {hero.supportingText}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16"
          >
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              {hero.primaryCTA} <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              {hero.secondaryCTA}
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="text-sm text-text-muted/60 font-medium italic"
          >
            {hero.smallNote}
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-12">
        <TrustStrip />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center py-8"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-text-muted/30"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
