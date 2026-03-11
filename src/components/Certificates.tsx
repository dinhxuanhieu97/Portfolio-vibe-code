import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Award, X, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [selectedCertIndex, setSelectedCertIndex] = useState<number | null>(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCertIndex !== null) {
      setSelectedCertIndex((selectedCertIndex + 1) % certificates.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedCertIndex !== null) {
      setSelectedCertIndex((selectedCertIndex - 1 + certificates.length) % certificates.length);
    }
  };

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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-panel rounded-xl overflow-hidden group hover:border-[var(--color-primary)]/30 transition-all duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedCertIndex(index)}
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
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors flex-shrink-0 ml-2"
                    title="Verify Certificate"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
                
                <div className="mt-auto pt-4 border-t border-[var(--color-border)] font-mono text-xs text-[var(--color-text-muted)] flex items-center justify-between">
                  <span>{cert.issuer}</span>
                  <span className="text-[var(--color-accent)]">Verified</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedCertIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedCertIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full z-[110]"
              onClick={() => setSelectedCertIndex(null)}
            >
              <X size={24} />
            </button>

            <div 
              className="relative w-full max-w-5xl flex-grow flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full z-10"
                onClick={handlePrev}
              >
                <ChevronLeft size={32} />
              </button>

              <motion.img
                key={selectedCertIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={certificates[selectedCertIndex].image}
                alt={certificates[selectedCertIndex].title}
                className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl border border-white/10"
              />
              
              <motion.div 
                key={`title-${selectedCertIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-6 text-center"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {certificates[selectedCertIndex].title}
                </h3>
                <a 
                  href={certificates[selectedCertIndex].link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] hover:text-white transition-colors"
                >
                  Verify Certificate <ExternalLink size={14} />
                </a>
              </motion.div>

              <button 
                className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-3 rounded-full z-10"
                onClick={handleNext}
              >
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Thumbnails */}
            <div 
              className="w-full max-w-4xl mt-8 pt-6 border-t border-white/10 flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x justify-start md:justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {certificates.map((cert, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCertIndex(idx)}
                  className={`relative flex-shrink-0 w-24 h-16 rounded-md overflow-hidden transition-all duration-300 snap-center ${
                    selectedCertIndex === idx 
                      ? "ring-2 ring-[var(--color-primary)] opacity-100 scale-110 z-10" 
                      : "opacity-40 hover:opacity-100"
                  }`}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
