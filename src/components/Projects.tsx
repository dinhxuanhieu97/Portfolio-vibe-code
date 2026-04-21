import React from "react";
import { motion } from "motion/react";
import { Github, ExternalLink, Activity } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-32 px-6 relative bg-bg overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-24 text-center"
        >
          <span className="section-label">{projects.label}</span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading">{projects.title}</h2>
          <p className="text-text-muted mt-6 max-w-2xl text-lg">
            {projects.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col h-full glass-card rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="p-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors font-heading">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a href="https://github.com/dinhxuanhieu97" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:text-primary transition-colors">
                      <Github size={20} />
                    </a>
                    <a href="#" className="p-2 rounded-lg bg-white/5 border border-white/5 hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-primary font-mono text-xs uppercase tracking-widest mb-4 font-bold">
                  {project.short}
                </p>

                <p className="text-text-muted text-sm md:text-base mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-[10px] uppercase font-bold bg-white/5 text-text-muted border border-white/5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <Activity size={18} className="text-primary" />
                    <span className="text-xs text-text-muted font-medium">
                      Production ready & Scalable architecture
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="https://github.com/dinhxuanhieu97" target="_blank" rel="noreferrer" className="btn-secondary inline-flex">
            {projects.button}
          </a>
        </div>
      </div>
    </section>
  );
}
