import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function TrustStrip() {
  return (
    <section className="py-12 bg-surface/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {portfolioData.trustStrip.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                {item.title}
              </div>
              <div className="text-xs md:text-sm text-text-muted font-medium uppercase tracking-wider">
                {item.subtitle}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
