import React from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Contact() {
  const { contact } = portfolioData;

  const icons = {
    "Contact Me": Phone,
    "Send an Email": Mail,
    "View GitHub": Github,
    "Connect on LinkedIn": Linkedin,
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-surface/10 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        <span className="section-label">{contact.label}</span>
        <h2 className="text-4xl md:text-6xl font-bold mb-8 font-heading">{contact.title}</h2>
        <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          {contact.mainText}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {contact.links.map((link, index) => {
            const Icon = icons[link.name as keyof typeof icons];
            
            if (link.type === "primary") {
              return (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  className="btn-primary w-full sm:w-auto"
                >
                  <Icon size={20} className="mr-2" /> {link.name}
                </motion.a>
              );
            }
            
            if (link.type === "secondary") {
              return (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <Icon size={20} className="mr-2" /> {link.name}
                </motion.a>
              );
            }

            return (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full glass-panel border-white/10 flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-all shadow-xl"
                title={link.name}
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
