import { motion } from "motion/react";
import { ExternalLink, Award } from "lucide-react";

const certificates = [
  {
    title: "AI Fundamentals",
    issuer: "Google",
    link: "https://coursera.org/verify/MZHOBPZ6COE8",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~MZHOBPZ6COE8/CERTIFICATE_LANDING_PAGE~MZHOBPZ6COE8.jpeg",
  },
  {
    title: "AI for Brainstorming and Planning",
    issuer: "Google",
    link: "https://coursera.org/verify/RXF1XUBNMWQ0",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~RXF1XUBNMWQ0/CERTIFICATE_LANDING_PAGE~RXF1XUBNMWQ0.jpeg",
  },
  {
    title: "AI for Research and Insights",
    issuer: "Google",
    link: "https://coursera.org/verify/JCA3ITQ1EYDN",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~JCA3ITQ1EYDN/CERTIFICATE_LANDING_PAGE~JCA3ITQ1EYDN.jpeg",
  },
  {
    title: "AI for Writing and Communicating",
    issuer: "Google",
    link: "https://coursera.org/verify/RQYBBBRACI2X",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~RQYBBBRACI2X/CERTIFICATE_LANDING_PAGE~RQYBBBRACI2X.jpeg",
  },
  {
    title: "AI for Content Creation",
    issuer: "Google",
    link: "https://coursera.org/verify/L21KM1T5PY84",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~L21KM1T5PY84/CERTIFICATE_LANDING_PAGE~L21KM1T5PY84.jpeg",
  },
  {
    title: "AI for Data Analysis",
    issuer: "Google",
    link: "https://coursera.org/verify/CBPXUTRLD9C2",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~CBPXUTRLD9C2/CERTIFICATE_LANDING_PAGE~CBPXUTRLD9C2.jpeg",
  },
  {
    title: "AI for App Building",
    issuer: "Google",
    link: "https://coursera.org/verify/HJO7SPU3KZ9Q",
    image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~HJO7SPU3KZ9Q/CERTIFICATE_LANDING_PAGE~HJO7SPU3KZ9Q.jpeg",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 relative bg-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text tracking-tight">
            Certifications
          </h2>
          <div className="h-[1px] bg-[var(--color-border)] flex-grow ml-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel rounded-xl overflow-hidden group hover:border-[var(--color-primary)]/30 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-[var(--color-primary)]/20 mix-blend-multiply group-hover:bg-transparent transition-all duration-500 z-10"></div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 z-20 p-2 bg-[var(--color-surface)]/80 backdrop-blur-md rounded-full text-[var(--color-text)]">
                  <Award size={20} className="text-[var(--color-primary)]" />
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold gradient-text group-hover:opacity-80 transition-opacity leading-tight">
                    {cert.title}
                  </h3>
                  <ExternalLink
                    size={18}
                    className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors flex-shrink-0 ml-2"
                  />
                </div>
                
                <div className="mt-auto pt-4 border-t border-[var(--color-border)] font-mono text-xs text-[var(--color-text-muted)] flex items-center justify-between">
                  <span>{cert.issuer}</span>
                  <span className="text-[var(--color-accent)]">Verified</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
