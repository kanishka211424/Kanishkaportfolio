import React, { Children } from 'react';
import { motion } from 'framer-motion';
export function EducationSection() {
  const education = [
    {
      institution: 'University of Moratuwa',
      degree: 'B.Sc Engineering Honours',
      name: '',
      specialization: 'Transport Management and Logistics Engineering',
      gpa: '3.30 out of 4.0',
      grade: 'Second Class Upper Division',
      deansList: 'Semester 6',
      thesis: 'Impact of Cultural Challenges on Operational Performance in Implementing Digital Transformation in Small and Medium Textile Enterprises',
      period: 'Ongoing'
    },
    {
      institution: 'Ceylon-German Technical Training Institute',
      degree: 'Certificate in Auto Electrical',
      description: 'Gained hands-on expertise in automotive electrical systems, including wiring, diagnostics, installation, and repair of vehicle components using modern testing and diagnostic tools.',
      period: '2021-2022'
    },
    {
      institution: 'Poramadulla Central College',
      degree: 'G.C.E. Advanced Level',
      stream: 'Physical Science Stream',
      ol: 'G.C.E. Ordinary Level',
      grades: "",
      period: '2015'
    }
  ];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <section id="skills" className="py-20 relative bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-surface-light flex-grow"></div>
          <div className="font-mono text-sm text-accent-blue tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-blue"></span>
            Node 02 // Education
          </div>
          <div className="h-px bg-surface-light flex-grow"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}>
          
          {education.map((edu, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            className="group bg-surface border border-surface-light p-6 rounded-lg hover:border-accent-blue transition-all duration-300 hover:-translate-y-1 hover:glow-blue relative overflow-hidden">
            
              {/* Top corner accent */}
              <div
              className="absolute top-0 right-0 w-16 h-16 bg-accent-blue/5 rounded-bl-full -z-10 group-hover:bg-accent-blue/10 transition-colors">
            </div>

              <div className="font-mono text-xs text-accent-teal mb-2">
                {edu.period}
              </div>

              <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
                {edu.institution}
              </h3>

              <p className="text-sm text-text-primary font-medium mb-2">
                {edu.degree}
              </p>

              {edu.name && <p className="text-sm text-text-secondary mb-2">{edu.name}</p>}
              {edu.specialization && <p className="text-sm text-text-secondary mb-2">Specialization: {edu.specialization}</p>}
              {edu.gpa && <p className="text-sm text-text-secondary mb-2">GPA: {edu.gpa}</p>}
              {edu.grade && <p className="text-sm text-text-secondary mb-2">Grade: {edu.grade}</p>}
              {edu.deansList && <p className="text-sm text-text-secondary mb-2">Dean's List: {edu.deansList}</p>}
              {edu.thesis && <p className="text-sm text-text-secondary mb-2">Thesis: {edu.thesis}</p>}
              {edu.stream && <p className="text-sm text-text-secondary mb-2">Stream: {edu.stream}</p>}
              {edu.ol && <p className="text-sm text-text-secondary mb-2">{edu.ol}</p>}
              {edu.grades && <p className="text-sm text-text-secondary mb-2">Grades: {edu.grades}</p>}
              {edu.description && <p className="text-sm text-text-secondary leading-relaxed">{edu.description}</p>}

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent-blue group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}