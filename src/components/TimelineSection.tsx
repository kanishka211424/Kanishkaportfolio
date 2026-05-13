import React from 'react';
import { motion } from 'framer-motion';
export function TimelineSection() {
  const experiences = [
  {
    role: 'Logistics Intern',
    company: 'City Cycle Industries Manufacturing (Pvt) Ltd',
    period: 'Dec 2024 To June 2025',
    description:
    'I completed these projects during my internship period.Warehouse Layout OptimizationERP System Implementation (Odoo) Route Planning & Delivery Optimization Production Efficiency Improvement (Time Study) Export Production Analysis (Cavet Ebikes Project) Data Management & Master Data Development'
  },
  {
    role: 'Project Supervisor',
    company: 'Road Development Authority (RDA), Nuwara Eliya',
    period: '2020 - 2021',
    description:
    'Supervised an 18 km rural road construction project in Pussellawa under the National Program to Develop 100,000 km of Rural Roads, ensuring work quality, safety compliance, and on-time progress.',
  }];

  return (
    <section id="experience" className="py-20 relative bg-surface/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-surface-light flex-grow"></div>
          <div className="font-mono text-sm text-accent-blue tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-blue"></span>
            Node 04 // WORK EXPERIENCE
          </div>
          <div className="h-px bg-surface-light flex-grow"></div>
        </div>

        <div className="relative border-l-2 border-surface-light ml-4 md:ml-0 md:border-l-0">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-surface-light -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true,
                    margin: '-50px'
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-background border-4 border-surface rounded-full flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-accent-blue rounded-full glow-blue"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                    
                    <div className="bg-surface border border-surface-light p-6 rounded-lg hover:border-accent-blue transition-colors">
                      <div className="font-mono text-xs text-accent-teal mb-2">
                        {exp.period}
                      </div>
                      <h4 className="text-lg font-display font-bold text-white">
                        {exp.role}
                      </h4>
                      <div className="text-sm text-text-primary font-medium mb-3">
                        {exp.company}
                      </div>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}