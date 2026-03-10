import { motion } from "motion/react";
import { BookOpen, ExternalLink, FileText } from "lucide-react";

const articles = [
  {
    title: "Demystifying Transformers: A Deep Dive into Attention Mechanisms",
    platform: "Medium",
    date: "Oct 2025",
    description:
      "An in-depth look at how self-attention allows models to weigh the importance of different words in a sequence, complete with PyTorch implementations.",
    link: "https://medium.com",
    icon: <BookOpen size={20} className="text-[var(--color-primary)]" />,
  },
  {
    title: "Optimizing Inference Latency for LLMs in Production",
    platform: "Viblo",
    date: "Aug 2025",
    description:
      "Techniques for reducing latency and memory footprint when deploying large language models, covering quantization, KV caching, and continuous batching.",
    link: "https://viblo.asia",
    icon: <FileText size={20} className="text-[var(--color-accent)]" />,
  },
  {
    title: "Handling Imbalanced Datasets in Financial Fraud Detection",
    platform: "Towards Data Science",
    date: "May 2025",
    description:
      "A comparative study of SMOTE, ADASYN, and cost-sensitive learning approaches for detecting rare fraudulent transactions.",
    link: "https://towardsdatascience.com",
    icon: <BookOpen size={20} className="text-[var(--color-primary)]" />,
  },
];

export default function Blog() {
  return (
    <section id="research" className="py-24 px-6 relative bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text tracking-tight">
            Research & Writing
          </h2>
          <div className="h-[1px] bg-[var(--color-border)] flex-grow ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.a
              href={article.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel p-6 rounded-xl hover:border-[var(--color-primary)]/30 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="p-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg group-hover:border-[var(--color-primary)]/50 transition-colors">
                  {article.icon}
                </div>
                <ExternalLink
                  size={20}
                  className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors"
                />
              </div>

              <h3 className="text-xl font-bold gradient-text mb-3 group-hover:opacity-80 transition-opacity leading-tight">
                {article.title}
              </h3>

              <p className="text-sm text-[var(--color-text-muted)] mb-6 flex-grow leading-relaxed">
                {article.description}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-border)] font-mono text-xs text-[var(--color-text-muted)]">
                <span>{article.platform}</span>
                <span>{article.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
