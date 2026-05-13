import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ActivityIcon,
  WrenchIcon,
  CheckCircleIcon,
  LightbulbIcon } from
'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
import { projectsData } from '../data/projects';
export function ProjectDetail() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.slug === slug);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h1 className="text-2xl text-white mb-4">Project Not Found</h1>
        <button
          onClick={() => navigate('/')}
          className="text-accent-blue hover:underline">
          
          Return to Network
        </button>
      </div>);

  }
  const sectionPrefix = '//';
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        y: -20
      }}
      transition={{
        duration: 0.5
      }}
      className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      
      <Link
        to="/#projects"
        className="inline-flex items-center gap-2 text-sm font-mono text-text-secondary hover:text-accent-blue transition-colors mb-10">
        
        <ArrowLeftIcon className="w-4 h-4" /> Return to Network
      </Link>

      <div className="mb-12">
        <div className="inline-block px-3 py-1 rounded bg-accent-blue/10 border border-accent-blue/30 text-accent-blue font-mono text-xs mb-4">
          {project.category}
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
          {project.title}
        </h1>
        <p className="text-xl text-text-secondary max-w-3xl">
          {project.summary}
        </p>
      </div>

      <div className="glass-panel border border-surface-light rounded-xl p-6 md:p-8 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-sm font-mono text-text-secondary uppercase mb-1">
            Primary Impact
          </p>
          <p className="text-3xl font-display font-bold text-accent-teal flex items-center gap-3">
            <ActivityIcon className="w-8 h-8" /> {project.metric}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          {project.tags.map((tag) =>
          <span
            key={tag}
            className="px-3 py-1.5 bg-background rounded text-sm font-mono text-text-primary border border-surface-light">
            
              {tag}
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-surface-light">{sectionPrefix}</span>{' '}
              Problem Statement
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.problemStatement}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-surface-light">{sectionPrefix}</span>{' '}
              Engineering Approach
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.engineeringApproach}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-surface-light">{sectionPrefix}</span>{' '}
              Methodology
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.methodology}
            </p>
          </section>

          <section className="bg-surface border border-surface-light rounded-xl p-8">
            <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <LightbulbIcon className="w-6 h-6 text-accent-teal" /> Key
              Learnings
            </h2>
            <p className="text-text-primary italic border-l-2 border-accent-teal pl-4 py-1">
              &ldquo;{project.keyLearnings}&rdquo;
            </p>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-surface border border-surface-light rounded-xl p-6">
            <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
              <WrenchIcon className="w-5 h-5 text-accent-blue" /> Tools Used
            </h3>
            <ul className="space-y-3">
              {project.toolsUsed.map((tool, i) =>
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-text-secondary">
                
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue"></span>{' '}
                  {tool}
                </li>
              )}
            </ul>
          </div>

          <div className="bg-surface border border-surface-light rounded-xl p-6">
            <h3 className="text-lg font-display font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircleIcon className="w-5 h-5 text-green-500" /> Results
            </h3>
            <ul className="space-y-4">
              {project.results.map((result, i) =>
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                
                  <span className="text-green-500 mt-0.5">&#10003;</span>{' '}
                  {result}
                </li>
              )}
            </ul>
          </div>

          <div className="bg-surface border border-surface-light rounded-xl p-6 h-64 flex flex-col">
            <h3 className="text-sm font-mono text-text-secondary uppercase mb-4">
              Performance Metrics
            </h3>
            <div className="flex-grow w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={project.chartData}
                  margin={{
                    top: 5,
                    right: 5,
                    left: -20,
                    bottom: 5
                  }}>
                  
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#1e293b"
                    vertical={false} />
                  
                  <XAxis
                    dataKey="name"
                    stroke="#94a3b8"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false} />
                  
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false} />
                  
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#111827',
                      borderColor: '#1e293b',
                      borderRadius: '8px'
                    }}
                    itemStyle={{
                      color: '#e2e8f0'
                    }} />
                  
                  <Bar
                    dataKey="before"
                    name="Before"
                    fill="#1e293b"
                    radius={[2, 2, 0, 0]} />
                  
                  <Bar
                    dataKey="after"
                    name="After"
                    fill="#3b82f6"
                    radius={[2, 2, 0, 0]} />
                  
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </motion.div>);

}