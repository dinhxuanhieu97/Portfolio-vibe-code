import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Mona Media - The Mona",
    role: "Back-End Developer (Senior Developer)",
    period: "MAR 2023 - SEP 2024",
    description: [
      "Convert page templates into finished websites, responsible for completing products for customers.",
      "Optimize pagespeed, standardize SEO structure.",
      "Get feedback and customer support.",
      "Research technical web solutions for the team."
    ],
  },
  {
    company: "Van Xuan Group",
    role: "Web Developer (Junior Developer)",
    period: "JUN 2021 - JAN 2023",
    description: [
      "Design landing page and be responsible for system maintenance.",
      "Resolve technical issues and ensure quality of design/source code.",
      "Analyze data, website performance and troubleshoot errors.",
      "Plan website promotion and write technical web documents."
    ],
  },
  {
    company: "Diva Luxury - Diva Group",
    role: "Front-End Developer (Fresher Developer)",
    period: "NOV 2018 - APR 2020",
    description: [
      "Participated in developing web applications for beauty salon of Diva using various technologies: HTML5, CSS(SASS), Jquery, JavaScript, Ajax, PHP, MySQL.",
      "Work closely with the Leader to do project estimation, analyze requirements, contribute ideas and resource planning."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text tracking-tight">
            Work Experience
          </h2>
          <div className="h-[1px] bg-[var(--color-border)] flex-grow ml-4"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-8 rounded-xl border border-[var(--color-border)]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text)]">{exp.role}</h3>
                  <p className="text-[var(--color-primary)] font-medium">{exp.company}</p>
                </div>
                <span className="font-mono text-sm text-[var(--color-text-muted)] mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-[var(--color-text-muted)] text-sm md:text-base">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
