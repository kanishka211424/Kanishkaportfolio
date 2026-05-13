import React from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,Mails,
  ClockIcon,Phone,
  GraduationCapIcon, 
  MailsIcon} from
'lucide-react';
export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px bg-surface-light flex-grow"></div>
          <div className="font-mono text-sm text-accent-teal tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-teal"></span>
          Node 01 // ABOUT ME
          </div>
          <div className="h-px bg-surface-light flex-grow"></div>
        </div>

        <motion.div
          className="glass-panel rounded-xl overflow-hidden relative"
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.6
          }}>
          
          {/* Top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-accent-blue to-accent-teal"></div>

          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-3xl font-display font-bold text-white">
                ABOUT ME {' '}
              </h2>

              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  Final-year undergraduate in Transport Management and Logistics Engineering 
                  at the University of Moratuwa, with hands-on corporate experience in
                  operational coordination, logistics planning, and process management 
                  within a manufacturing environment.
                </p>
                <p>
                  Demonstrates strong analytical thinking and problem-solving skills, 
                  with the ability to evaluate situations, identify inefficiencies, 
                  and implement practical improvements. Adaptable to new environments 
                  and challenges, with a strong commitment to accuracy, responsibility, 
                  and delivering results on time. Also capable of working both independently 
                  and as part of a team, while maintaining a continuous focus 
                  on learning and professional development.:{' '}
                </p>
                
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-background rounded-lg p-5 border border-surface-light">
                <h3 className="font-mono text-xs text-text-secondary uppercase tracking-wider mb-4 border-b border-surface-light pb-2">
                  Contact info
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Location
                      </p>
                      <p className="text-xs text-text-secondary font-mono mt-1">
                        Katubedda
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mails className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Gmail
                      </p>
                      <a
                        href="mailto:ekanayakakanishka1@gmail.com"
                        className="text-xs text-accent-blue font-mono mt-1 inline-block hover:underline"
                      >
                        ekanayakakanishka1@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone  className="w-5 h-5 text-accent-teal shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        Contact Number
                      </p>
                      <p className="text-xs text-text-secondary font-mono mt-1">
                        0710893083
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <GraduationCapIcon className="w-5 h-5 text-accent-blue shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-white">
                        LinkedIn
                      </p>
                      <a
                        href="https://www.linkedin.com/in/kanishka-ekanayaka-8571783b0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-accent-blue font-mono mt-1 inline-block hover:underline"
                      >
                        kanishka-ekanayaka-8571783b0
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Decorative grid background */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none z-[-1]"></div>
        </motion.div>
      </div>
    </section>);

}