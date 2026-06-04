import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DownloadIcon, MailIcon } from 'lucide-react';
const cvPdfUrl = '/Kanishka Geethan_Resume.pdf';
export function ContactCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-accent-blue/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent-blue/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-surface-light mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
            Final Node // Delivery
          </span>
        </div>

        <motion.h2
          className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}>
          
          Ready to optimize your operations and deliver{' '}
          <span className="text-gradient">measurable impact?</span>
        </motion.h2>

        <motion.p
          className="text-lg text-text-secondary mb-10 max-w-2xl mx-auto"
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.1
          }}>
          
          Whether you need to untangle a complex supply chain, implement a new
          ERP, or redesign a warehouse layout, I bring the engineering rigor
          needed to solve it.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.2
          }}>
          
          <Link
            to="/contact"
            className="px-8 py-4 bg-accent-blue text-white font-mono text-sm rounded hover:bg-blue-600 transition-all glow-blue flex items-center gap-2 w-full sm:w-auto justify-center">
            
            <MailIcon className="w-4 h-4" /> INITIATE CONTACT
          </Link>
          <a
            href={cvPdfUrl}
            download="Kanishka Geethan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-surface border border-surface-light text-text-primary font-mono text-sm rounded hover:border-accent-teal transition-all flex items-center gap-2 w-full sm:w-auto justify-center group">
            
            <DownloadIcon className="w-4 h-4 text-accent-teal group-hover:-translate-y-1 transition-transform" />{' '}
            DOWNLOAD CV
          </a>
        </motion.div>
      </div>
    </section>);

}