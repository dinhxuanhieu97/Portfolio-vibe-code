import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";
import { Globe, Layout, Code, Layers } from "lucide-react";

const icons = [Globe, Layout, Code, Layers];

export default function Services() {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label">{services.label}</span>
          <h2 className="text-4xl md:text-5xl font-bold">{services.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.items.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-muted leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
