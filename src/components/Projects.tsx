import { motion } from "motion/react";
import { ExternalLink, Github, Activity, Database, Server } from "lucide-react";

const projects = [
  {
    title: "GameLaDe",
    description: "Back-End development for a gaming news platform.",
    problem: "Need for a robust back-end to support high-traffic gaming content.",
    solution: "Developed using PHP-Wordpress, integrated with MySQL and Rest API.",
    result: "Successfully deployed and maintained the platform.",
    metrics: "Optimized for performance and scalability.",
    tech: ["PHP", "Wordpress", "MySQL", "Rest API", "HTML5", "CSS3", "Javascript", "jQuery"],
    github: "",
    demo: "https://gamelade.vn/",
    image: "/gamelade.jpg",
  },
  {
    title: "NIC SPORT",
    description: "Back-End development for a sports equipment website.",
    problem: "Need for an e-commerce solution with WooCommerce integration.",
    solution: "Built with PHP-Wordpress and WooCommerce, optimized with SASS.",
    result: "Launched a fully functional sports e-commerce site.",
    metrics: "Integrated Git for version control and optimized API performance.",
    tech: ["PHP", "Wordpress", "WooCommerce", "HTML5", "SASS", "Javascript", "jQuery", "MySQL", "Git", "Rest API"],
    github: "",
    demo: "https://nichelmets.com/",
    image: "/NIC SPORT.jpg",
  },
  {
    title: "Falcon-Helmets",
    description: "Back-End development for a helmet e-commerce store.",
    problem: "Need for a secure and scalable e-commerce platform.",
    solution: "Developed using PHP-Wordpress and WooCommerce.",
    result: "Successfully launched the e-commerce store.",
    metrics: "Optimized performance and integrated Rest API.",
    tech: ["PHP", "Wordpress", "WooCommerce", "HTML5", "SASS", "Javascript", "jQuery", "MySQL", "Git", "Rest API"],
    github: "",
    demo: "https://falcon-helmets.com/",
    image: "/Falcon-Helmets.jpg",
  },
  {
    title: "Poc-Helmet",
    description: "Web development for a helmet brand.",
    problem: "Need for a modern web presence.",
    solution: "Developed using PHP.",
    result: "Successfully launched the website.",
    metrics: "Optimized for performance.",
    tech: ["PHP", "HTML5", "CSS3", "Javascript", "jQuery", "MySQL", "Ajax"],
    github: "",
    demo: "https://poc-helmet.com/",
    image: "/poc-helmet.jpg",
  },
  {
    title: "TechScoop",
    description: "Back-End development for a tech news platform.",
    problem: "Need for a content-managed platform.",
    solution: "Developed using PHP-Wordpress.",
    result: "Successfully deployed.",
    metrics: "Optimized for performance and SEO.",
    tech: ["PHP", "Wordpress", "HTML5", "CSS3", "Javascript", "jQuery", "MySQL", "Rest API", "Ajax"],
    github: "",
    demo: "https://techscoop.vn/",
    image: "/techscoop.jpg",
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
