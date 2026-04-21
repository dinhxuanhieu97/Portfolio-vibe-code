import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";
import { Cpu } from "lucide-react";

export default function TechStack() {
  const { techStack } = portfolioData;

  return (
    <section id="tech-stack" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">{techStack.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">{techStack.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                  <Cpu size={24} />
                </div>
                <h3 className="text-lg font-bold font-heading">{cat.name}</h3>
              </div>
              <p className="text-text-muted leading-relaxed font-medium">
                {cat.tools}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
