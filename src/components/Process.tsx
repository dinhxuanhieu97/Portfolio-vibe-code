import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Process() {
  const { process } = portfolioData;

  return (
    <section id="process" className="py-24 px-6 relative bg-surface/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">{process.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold">{process.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-6xl font-bold text-white/5 absolute -top-4 -left-4 z-0 font-mono">
                0{index + 1}
              </div>
              <div className="relative z-10 pl-4">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-4">
                  <span className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center text-xs font-bold border border-primary/20">
                    {index + 1}
                  </span>
                  {step.title}
                </h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
