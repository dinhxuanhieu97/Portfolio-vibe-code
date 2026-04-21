import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";
import { MessageSquare, Target, Code2, ShieldCheck } from "lucide-react";

const icons = [MessageSquare, Target, Code2, ShieldCheck];

export default function WhyWorkWithMe() {
  const { whyWorkWithMe } = portfolioData;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">{whyWorkWithMe.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold">{whyWorkWithMe.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyWorkWithMe.cards.map((card, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-10 flex flex-col md:flex-row gap-8 items-start hover:bg-white/5 transition-colors group"
              >
                <div className="w-16 h-16 rounded-2xl bg-surface border border-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <Icon size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
