import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, NetworkIcon } from 'lucide-react';
export function HeroSection() {
  // Generate random nodes for the background network
  const nodes = Array.from({
    length: 20
  }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2
  }));
  // Generate connections between nodes
  const connections = Array.from({
    length: 30
  }).map((_, i) => {
    const source = nodes[Math.floor(Math.random() * nodes.length)];
    const target = nodes[Math.floor(Math.random() * nodes.length)];
    return {
      id: i,
      source,
      target
    };
  });
  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Network Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <svg className="w-full h-full">
          {connections.map((conn) =>
          <motion.line
            key={`conn-${conn.id}`}
            x1={`${conn.source.x}%`}
            y1={`${conn.source.y}%`}
            x2={`${conn.target.x}%`}
            y2={`${conn.target.y}%`}
            stroke="#3b82f6"
            strokeWidth="1"
            strokeDasharray="4 4"
            initial={{
              strokeDashoffset: 0
            }}
            animate={{
              strokeDashoffset: -20
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: 'linear'
            }} />

          )}
          {nodes.map((node) =>
          <circle
            key={`node-${node.id}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill={node.id % 3 === 0 ? '#14b8a6' : '#3b82f6'}
            className="animate-pulse" />

          )}
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-surface-light mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse"></span>
            <span className="text-xs font-mono text-text-secondary uppercase tracking-wider">
              System Online
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 leading-tight">
             Engineering Undergraduate <br />
          </h1>

          <p className="text-xl text-text-secondary mb-2 font-light">
            Transport Management & Logistics Engineer
          </p>


          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button
              onClick={handleScrollDown}
              className="px-8 py-4 bg-accent-blue text-white font-mono text-sm rounded hover:bg-blue-600 transition-all glow-blue flex items-center gap-2 w-full sm:w-auto justify-center">
              
              START JOURNEY <ArrowDownIcon className="w-4 h-4" />
            </button>
            <a
              href="/contact"
              className="px-8 py-4 bg-surface border border-surface-light text-text-primary font-mono text-sm rounded hover:border-accent-teal transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
              
              <NetworkIcon className="w-4 h-4 text-accent-teal" /> VIEW NETWORK
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border border-surface-light animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-accent-blue/30 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 rounded-full border border-accent-teal/20 border-dashed animate-[spin_10s_linear_infinite]"></div>

            {/* Headshot container */}
            <div className="absolute inset-12 rounded-full overflow-hidden border-2 border-accent-blue glow-blue bg-surface flex items-center justify-center">
              <img
                src="/src/assets/images/hero-img1.png"
                alt="Engineer Portrait"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
              
              <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay"></div>
            </div>

            {/* Floating metric cards */}
            <motion.div
              className="absolute -right-4 top-10 glass-panel p-3 rounded border border-surface-light shadow-lg"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}>
              
              <p className="text-[10px] font-mono text-text-secondary uppercase">
                Efficiency
              </p>
              <p className="text-lg font-display text-accent-teal font-bold">
                +35%
              </p>
            </motion.div>

            <motion.div
              className="absolute -left-8 bottom-20 glass-panel p-3 rounded border border-surface-light shadow-lg"
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}>
              
              <p className="text-[10px] font-mono text-text-secondary uppercase">
                Projects
              </p>
              <p className="text-lg font-display text-accent-blue font-bold">
                9+
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>);

}