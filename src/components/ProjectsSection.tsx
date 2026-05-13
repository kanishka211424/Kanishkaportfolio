import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ActivityIcon } from 'lucide-react';
import { projectsData } from '../data/projects';
const routeOptimizationImage = new URL('../assets/images/ChatGPT Image May 12, 2026, 03_21_10 PM.png', import.meta.url).href;
export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-surface-light flex-grow"></div>
          <div className="font-mono text-sm text-accent-teal tracking-widest uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-teal"></span>
            Node 03 // Project Network
          </div>
          <div className="h-px bg-surface-light flex-grow"></div>
        </div>

        <div className="relative">
          {/* Central connecting line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-surface-light -translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-accent-teal glow-teal"
              initial={{
                height: '0%'
              }}
              whileInView={{
                height: '100%'
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut'
              }} />
            
          </div>

          <div className="space-y-12 lg:space-y-24">
            {projectsData.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={project.id}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Content Card */}
                  <motion.div
                    className="w-full lg:w-1/2"
                    initial={{
                      opacity: 0,
                      x: isEven ? -50 : 50
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0
                    }}
                    viewport={{
                      once: true,
                      margin: '-100px'
                    }}
                    transition={{
                      duration: 0.6
                    }}>
                    
                    <Link
                      to={`/project/${project.slug}`}
                      className="block group">
                      
                      <div className="glass-panel p-8 rounded-xl border border-surface-light hover:border-accent-blue transition-all duration-300 hover:glow-blue relative overflow-hidden">
                        {/* Status indicator */}
                        <div className="absolute top-6 right-6 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          <span className="text-[10px] font-mono text-text-secondary uppercase">
                            Delivered
                          </span>
                        </div>

                        <div className="text-xs font-mono text-accent-blue mb-3">
                          {project.category}
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent-blue transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-text-secondary text-sm mb-6 line-clamp-3">
                          {project.summary}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-8">
                          {project.tags.slice(0, 3).map((tag) =>
                          <span
                            key={tag}
                            className="px-2 py-1 bg-background rounded text-xs font-mono text-text-secondary border border-surface-light">
                            
                              {tag}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between border-t border-surface-light pt-4">
                          <div className="flex items-center gap-2">
                            <ActivityIcon className="w-4 h-4 text-accent-teal" />
                            <span className="text-sm font-bold text-white">
                              {project.metric}
                            </span>
                          </div>
                          <span className="text-sm font-mono text-accent-blue flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                            View Details <ArrowRightIcon className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Center Node (Desktop only) */}
                  <div className="hidden lg:flex w-12 h-12 absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                    <div className="w-4 h-4 rounded-full bg-background border-2 border-accent-teal z-10 glow-teal"></div>
                    {/* Connecting horizontal line */}
                    <motion.div
                      className={`absolute top-1/2 -translate-y-1/2 h-px bg-accent-teal/50 w-16 ${isEven ? 'right-full' : 'left-full'}`}
                      initial={{
                        scaleX: 0
                      }}
                      whileInView={{
                        scaleX: 1
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3
                      }}
                      style={{
                        transformOrigin: isEven ? 'right' : 'left'
                      }} />
                    
                  </div>

                  {/* Visual Placeholder / Dashboard Mockup */}
                  <motion.div
                    className="w-full lg:w-1/2"
                    initial={{
                      opacity: 0,
                      scale: 0.9
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1
                    }}
                    viewport={{
                      once: true,
                      margin: '-100px'
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2
                    }}>
                    
                    <div className="aspect-video bg-surface rounded-xl border border-surface-light p-4 flex flex-col relative overflow-hidden group">
                      {/* Abstract data visualization background */}
                      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                        <svg
                          className="w-full h-full"
                          preserveAspectRatio="none">
                          
                          <path
                            d="M0,100 C20,80 40,120 60,60 C80,0 100,40 120,20 L120,120 L0,120 Z"
                            fill="url(#grad1)" />
                          
                          <defs>
                            <linearGradient
                              id="grad1"
                              x1="0%"
                              y1="0%"
                              x2="0%"
                              y2="100%">
                              
                              <stop
                                offset="0%"
                                stopColor="#3b82f6"
                                stopOpacity="0.5" />
                              
                              <stop
                                offset="100%"
                                stopColor="#0a0e1a"
                                stopOpacity="0" />
                              
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <div className="flex justify-between items-center mb-4 border-b border-surface-light pb-2 relative z-10">
                        <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                        </div>
                        <div className="text-[10px] font-mono text-text-secondary">
                          SYS_DASHBOARD_v2.4
                        </div>
                      </div>

                      <div className="flex-grow flex items-center justify-center relative z-10">
                        {project.slug === 'route-optimization-engine'
                          ? (
                            <div className="w-full h-full flex flex-col">
                              <div className="flex-1 rounded-lg overflow-hidden border border-surface-light/60">
                                <img
                                  src={routeOptimizationImage}
                                  alt="Route optimization dashboard"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="mt-3 text-center">
                                <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">
                                  Route Optimization Visualization
                                </p>
                                <p className="text-[10px] text-text-secondary/50 mt-1">
                                  Click card to view full metrics
                                </p>
                              </div>
                            </div>
                          )
                          : project.slug === 'warehouse-layout-optimization'
                            ? (
                              <div className="w-full h-full flex flex-col">
                                <div className="flex-1 rounded-lg overflow-hidden border border-surface-light/60">
                                  <img
                                    src="/src/assets/images/Screenshot 2025-07-03 133135.png"
                                    alt="Warehouse layout system visualization"
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="mt-3 text-center">
                                  <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">
                                    System Visualization
                                  </p>
                                  <p className="text-[10px] text-text-secondary/50 mt-1">
                                    Click card to view full metrics
                                  </p>
                                </div>
                              </div>
                            )
                            : project.slug === 'rural-road-infrastructure'
                              ? (
                                <div className="w-full h-full flex flex-col">
                                  <div className="flex-1 grid grid-cols-2 gap-2 rounded-lg overflow-hidden border border-surface-light/60 p-2">
                                    <img
                                      src="/src/assets/images/20210403_155059.jpg"
                                      alt="Rural road construction photo 1"
                                      className="w-full h-full object-cover rounded"
                                    />
                                    <img
                                      src="/src/assets/images/20210330_135048.jpg"
                                      alt="Rural road construction photo 2"
                                      className="w-full h-full object-cover rounded"
                                    />
                                  </div>
                                  <div className="mt-3 text-center">
                                    <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">
                                      Site Supervision
                                    </p>
                                    <p className="text-[10px] text-text-secondary/50 mt-1">
                                      Click card to view full metrics
                                    </p>
                                  </div>
                                </div>
                              )
                              : project.slug === 'smart-warehouse-automation-system'
                                ? (
                                  <div className="w-full h-full flex flex-col">
                                    <div className="flex-1 rounded-lg overflow-hidden border border-surface-light/60 relative">
                                      <video
                                        src="/src/assets/images/PutAway.mp4"
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="metadata"
                                      />
                                    </div>
                                    <div className="mt-3 text-center">
                                      <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">
                                        System Visualization
                                      </p>
                                      <p className="text-[10px] text-text-secondary/50 mt-1">
                                        Click card to view full metrics
                                      </p>
                                    </div>
                                  </div>
                                )
                                : project.slug === 'production-efficiency-improvement'
                                  ? (
                                    <div className="w-full h-full flex flex-col">
                                      <div className="flex-1 rounded-lg overflow-hidden border border-surface-light/60">
                                        <img
                                          src="/src/assets/images/production-plan.png"
                                          alt="Production efficiency plan"
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                      <div className="mt-3 text-center">
                                        <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">
                                          Production Planning System
                                        </p>
                                        <p className="text-[10px] text-text-secondary/50 mt-1">
                                          Click card to view full metrics
                                        </p>
                                      </div>
                                    </div>
                                  )
                                : (
                                  <div className="text-center">
                                    <ActivityIcon className="w-12 h-12 text-surface-light mx-auto mb-2" />
                                    <p className="text-xs font-mono text-text-secondary uppercase tracking-widest">
                                      System Visualization
                                    </p>
                                    <p className="text-[10px] text-text-secondary/50 mt-1">
                                      Click card to view full metrics
                                    </p>
                                  </div>
                                )}
                      </div>
                    </div>
                  </motion.div>
                </div>);

            })}
          </div>
        </div>
      </div>
    </section>);

}