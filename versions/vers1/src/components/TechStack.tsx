import { motion } from "motion/react";
import { Database, Code2, Cpu, Wrench, BrainCircuit } from "lucide-react";

const skills = [
  {
    category: "Languages",
    icon: <Code2 className="text-[var(--color-primary)]" size={24} />,
    items: ["PHP", "NodeJs", "MySQL", "JavaScript", "jQuery", "Ajax", "HTML5", "CSS3", "Python"],
  },
  {
    category: "Frameworks",
    icon: <Cpu className="text-[var(--color-accent)]" size={24} />,
    items: ["Wordpress", "Express", "Laravel", "Bootstrap", "TailWind", "ReactJs"],
  },
  {
    category: "Tools & Workflow",
    icon: <Wrench className="text-[var(--color-primary)]" size={24} />,
    items: ["GIT", "Jira", "SVN", "Trello", "Gulp/Pug", "Server Management", "Database Management"],
  },
  {
    category: "Expertise",
    icon: (
      <BrainCircuit className="text-[var(--color-accent)]" size={24} />
    ),
    items: ["WooCommerce", "E-Commerce Plugins", "Webservices", "Mobile Services", "OOP/MVC", "Customer Communication"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="py-24 px-6 relative bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text tracking-tight">
            Technical Arsenal
          </h2>
          <div className="h-[1px] bg-[var(--color-border)] flex-grow ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-panel p-6 rounded-xl hover:border-[var(--color-primary)]/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] group-hover:border-[var(--color-primary)]/50 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  {skill.category}
                </h3>
              </div>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-[var(--color-text-muted)] font-mono text-sm"
                  >
                    <span className="text-[var(--color-primary)]">▹</span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
