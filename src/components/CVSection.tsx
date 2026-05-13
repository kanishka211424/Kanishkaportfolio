import React from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon, ExternalLinkIcon, FileTextIcon } from 'lucide-react';
const cvPdfUrl = '/Kanishka_Geethan_CV.pdf';

export function CVSection() {
  return (
    <section id="cv" className="py-20 relative bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-surface-light flex-grow"></div>
          <div className="font-mono text-sm text-accent-blue tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-blue"></span>
            Node // CV Dossier
          </div>
          <div className="h-px bg-surface-light flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Download my <span className="text-gradient">full dossier</span>
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Get the complete CV (PDF) with education, experience, skills, and contact details.
            </p>
          </motion.div>

          <motion.div
            className="bg-surface border border-surface-light rounded-xl p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/5 rounded-bl-full"></div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded bg-background border border-surface-light flex items-center justify-center">
                <FileTextIcon className="w-5 h-5 text-accent-teal" />
              </div>
              <div>
                <p className="text-xs font-mono text-text-secondary uppercase tracking-wider">
                  PDF Document
                </p>
                <p className="text-white font-medium">Kanishka Geethan — CV</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-background border border-surface-light text-text-primary font-mono text-sm rounded hover:border-accent-blue transition-all flex items-center gap-2 w-full justify-center"
              >
                <ExternalLinkIcon className="w-4 h-4 text-accent-blue" />
                VIEW CV
              </a>
              <a
                href={cvPdfUrl}
                download="Kanishka_Geethan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-accent-blue text-white font-mono text-sm rounded hover:bg-blue-600 transition-all glow-blue flex items-center gap-2 w-full justify-center group"
              >
                <DownloadIcon className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                DOWNLOAD FULL DOSSIER (CV)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

