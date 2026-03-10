import { motion } from "motion/react";
import { ExternalLink, Github, Activity, Database, Server } from "lucide-react";

const projects = [
  {
    title: "Real-time Fraud Detection System",
    description:
      "Building a system to classify suspicious transactions for a Fintech platform.",
    problem:
      "High false positive rate in legacy rule-based systems causing customer friction and manual review overhead.",
    solution:
      "Implemented an XGBoost model combined with SMOTE (Synthetic Minority Over-sampling Technique) for handling imbalanced data.",
    result:
      "Reduced the false positive rate by 15%, saving the business $50,000 monthly.",
    metrics:
      "Achieved accuracy F1 score = 0.92 and reduced inference time (latency) by 30%.",
    tech: ["Python", "XGBoost", "Scikit-learn", "Docker", "AWS SageMaker"],
    github: "https://github.com",
    demo: "https://huggingface.co",
    image: "https://picsum.photos/seed/fraud/800/500?blur=2",
  },
  {
    title: "LLM-Powered Customer Support Agent",
    description:
      "An autonomous agent capable of resolving complex customer queries using RAG.",
    problem:
      "Customer support team was overwhelmed with repetitive technical queries, leading to slow response times.",
    solution:
      "Developed a Retrieval-Augmented Generation (RAG) pipeline using LangChain, Pinecone, and fine-tuned Llama 3.",
    result:
      "Automated 40% of tier-1 support tickets with high customer satisfaction.",
    metrics:
      "Achieved 85% resolution rate on automated tickets. Reduced average response time from 4 hours to 2 seconds.",
    tech: ["PyTorch", "LangChain", "Pinecone", "FastAPI", "React"],
    github: "https://github.com",
    demo: "https://streamlit.io",
    image: "https://picsum.photos/seed/llm/800/500?blur=2",
  },
  {
    title: "Computer Vision Defect Detection",
    description: "Automated quality control for manufacturing assembly lines.",
    problem:
      "Manual visual inspection was slow and prone to human error, resulting in defective products reaching customers.",
    solution:
      "Trained a YOLOv8 object detection model on custom dataset of manufacturing defects, deployed on edge devices.",
    result:
      "Significantly improved defect catch rate and increased production line throughput.",
    metrics:
      "Achieved 98.5% mAP@0.5. Inference runs at 60 FPS on edge hardware.",
    tech: ["Python", "PyTorch", "YOLOv8", "TensorRT", "C++"],
    github: "https://github.com",
    image: "https://picsum.photos/seed/vision/800/500?blur=2",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative bg-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text tracking-tight">
            Featured Projects
          </h2>
          <div className="h-[1px] bg-[var(--color-border)] flex-grow ml-4"></div>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 items-center relative`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-7/12 relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-[var(--color-primary)]/20 mix-blend-multiply rounded-xl group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-xl shadow-2xl grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 border border-[var(--color-border)]"
                />
              </div>

              {/* Content Side */}
              <div
                className={`w-full lg:w-6/12 z-20 ${index % 2 === 1 ? "lg:text-left" : "lg:text-right"} lg:-ml-12 ${index % 2 === 1 ? "lg:-mr-12 lg:ml-0" : ""}`}
              >
                <p className="font-mono text-[var(--color-accent)] text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-6 hover:opacity-80 transition-opacity">
                  {project.title}
                </h3>

                <div className="glass-panel p-6 rounded-xl shadow-xl mb-6 text-[var(--color-text-muted)] text-sm md:text-base leading-relaxed text-left">
                  <div className="mb-4">
                    <span className="text-[var(--color-primary)] font-semibold">
                      Problem:
                    </span>{" "}
                    {project.problem}
                  </div>
                  <div className="mb-4">
                    <span className="text-[var(--color-accent)] font-semibold">
                      Solution:
                    </span>{" "}
                    {project.solution}
                  </div>
                  <div className="mb-4">
                    <span className="text-emerald-400 font-semibold">
                      Result:
                    </span>{" "}
                    {project.result}
                  </div>
                  <div className="p-3 bg-[var(--color-surface)] rounded border border-[var(--color-border)] font-mono text-xs text-[var(--color-text-muted)] mt-4 flex items-start gap-3">
                    <Activity
                      size={16}
                      className="text-[var(--color-primary)] shrink-0 mt-0.5"
                    />
                    <span>{project.metrics}</span>
                  </div>
                </div>

                <ul
                  className={`flex flex-wrap gap-3 font-mono text-xs text-[var(--color-text-muted)] mb-6 ${index % 2 === 1 ? "justify-start" : "lg:justify-end"}`}
                >
                  {project.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="px-2 py-1 bg-[var(--color-surface)] rounded border border-[var(--color-border)]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div
                  className={`flex items-center gap-4 ${index % 2 === 1 ? "justify-start" : "lg:justify-end"}`}
                >
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                      title="View Source"
                    >
                      <Github size={22} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
