import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 px-6 relative bg-surface/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass-panel border-white/10 relative group">
            <img
              src="/avatar.jpg"
              alt="Dinh Hieu"
              className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl -z-10"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">{about.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">{about.title}</h2>
          
          <div className="space-y-6 text-text-muted leading-relaxed text-lg">
            {about.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-10 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all"
          >
            {about.button}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
