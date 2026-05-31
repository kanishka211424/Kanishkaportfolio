import React from 'react';
import { ActivityIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-light py-12 mt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-blue/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-background border border-accent-blue/50 flex items-center justify-center">
                <ActivityIcon className="w-5 h-5 text-accent-blue" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-text-primary">
                KANISHKA
              </span>
            </Link>
            <p className="text-text-secondary text-sm max-w-sm mb-6">
              Engineering smarter supply chains and optimizing operational
              networks for maximum efficiency and measurable impact.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/kanishka-ekanayaka-8571783b0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-surface-light flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-all">
                
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:ekanayakakanishka1@gmail.com"
                className="w-10 h-10 rounded-full bg-background border border-surface-light flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-all">
                
                <MailIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/kanishka211424"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background border border-surface-light flex items-center justify-center text-text-secondary hover:text-accent-blue hover:border-accent-blue transition-all">
                
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs text-accent-teal mb-4 uppercase tracking-widest">
              Network Nodes
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#about"
                  className="text-sm text-text-secondary hover:text-white transition-colors">
                  
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/#skills"
                  className="text-sm text-text-secondary hover:text-white transition-colors">
                  
                  Educataion
                </Link>
              </li>
              <li>
                <Link
                  to="/#projects"
                  className="text-sm text-text-secondary hover:text-white transition-colors">
                  
                  Project Network
                </Link>
              </li>
              <li>
                <Link
                  to="/#experience"
                  className="text-sm text-text-secondary hover:text-white transition-colors">
                  
                  Work Experience
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-accent-teal mb-4 uppercase tracking-widest">
              System Status
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-text-secondary">
                  Available for new projects
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent-blue"></div>
                <span className="text-sm text-text-secondary">
                  Based in Global Logistics Hub
                </span>
              </div>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="text-sm font-mono text-accent-blue hover:underline flex items-center gap-1">
                  
                  Connect to Network <ActivityIcon className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-surface-light mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary font-mono">
            © {new Date().getFullYear()} . All systems operational.
          </p>
          <p className="text-xs text-text-secondary font-mono flex items-center gap-1">
            Designed for{' '}
            <span className="text-accent-blue">Optimal Performance</span>
          </p>
        </div>
      </div>
    </footer>);

}