import { motion, AnimatePresence } from "motion/react";
import { X, Download, Briefcase, GraduationCap, Code } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--color-border)] bg-[var(--color-surface)] z-10">
              <h3 className="text-lg font-bold text-[var(--color-text)]">Resume Preview</h3>
              <div className="flex items-center gap-2">
                <a 
                  href="/resume.pdf" 
                  download 
                  className="p-2 hover:bg-[var(--color-surface-hover)] rounded-lg transition-colors text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                  title="Download PDF"
                >
                  <Download size={20} />
                </a>
                <button 
                  onClick={onClose} 
                  className="p-2 hover:bg-[var(--color-surface-hover)] rounded-lg transition-colors text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-4 md:p-8 overflow-y-auto flex-1 bg-[var(--color-bg)]">
              <div className="max-w-3xl mx-auto bg-[var(--color-surface)] p-8 md:p-12 rounded-xl shadow-sm border border-[var(--color-border)]">
                {/* Header */}
                <div className="mb-10 text-center md:text-left border-b border-[var(--color-border)] pb-8">
                  <h1 className="text-4xl font-bold gradient-text mb-2">Dinh Hieu</h1>
                  <p className="text-lg text-[var(--color-primary)] font-medium mb-4">Senior Frontend Developer</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-[var(--color-text-muted)]">
                    <span>dxhieu97@gmail.com</span>
                    <span className="hidden md:inline">•</span>
                    <span>+84 345 995 727</span>
                    <span className="hidden md:inline">•</span>
                    <span>Ho Chi Minh City, Vietnam</span>
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-6 text-[var(--color-text)]">
                    <Briefcase className="text-[var(--color-primary)]" size={24} />
                    <h2 className="text-2xl font-bold gradient-text">Experience</h2>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="relative pl-6 border-l-2 border-[var(--color-border)]">
                      <div className="absolute w-3 h-3 bg-[var(--color-primary)] rounded-full -left-[7px] top-1.5" />
                      <h3 className="text-xl font-semibold text-[var(--color-text)]">Senior Frontend Developer</h3>
                      <p className="text-[var(--color-text-muted)] mb-3">Tech Solutions Inc. | 2021 - Present</p>
                      <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2">
                        <li>Architected and developed scalable React applications serving 100k+ MAU.</li>
                        <li>Mentored junior developers and established frontend best practices.</li>
                        <li>Reduced bundle size by 40% through code splitting and lazy loading.</li>
                      </ul>
                    </div>

                    <div className="relative pl-6 border-l-2 border-[var(--color-border)]">
                      <div className="absolute w-3 h-3 bg-[var(--color-border)] rounded-full -left-[7px] top-1.5" />
                      <h3 className="text-xl font-semibold text-[var(--color-text)]">Frontend Developer</h3>
                      <p className="text-[var(--color-text-muted)] mb-3">Creative Agency | 2018 - 2021</p>
                      <ul className="list-disc list-inside text-[var(--color-text-muted)] space-y-2">
                        <li>Built responsive, pixel-perfect UI components using React and Tailwind CSS.</li>
                        <li>Collaborated closely with designers to implement complex animations.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-10">
                  <div className="flex items-center gap-2 mb-6 text-[var(--color-text)]">
                    <Code className="text-[var(--color-accent)]" size={24} />
                    <h2 className="text-2xl font-bold gradient-text">Core Skills</h2>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "GraphQL", "Framer Motion", "Jest"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-[var(--color-surface-hover)] border border-[var(--color-border)] rounded-full text-sm text-[var(--color-text)]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-6 text-[var(--color-text)]">
                    <GraduationCap className="text-[var(--color-primary)]" size={24} />
                    <h2 className="text-2xl font-bold gradient-text">Education</h2>
                  </div>
                  <div className="relative pl-6 border-l-2 border-[var(--color-border)]">
                    <div className="absolute w-3 h-3 bg-[var(--color-primary)] rounded-full -left-[7px] top-1.5" />
                    <h3 className="text-xl font-semibold text-[var(--color-text)]">B.S. Computer Science</h3>
                    <p className="text-[var(--color-text-muted)]">University of Technology | 2014 - 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
