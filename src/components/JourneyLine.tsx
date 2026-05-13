import React from 'react';
import { motion } from 'framer-motion';
interface JourneyLineProps {
  height?: string;
  className?: string;
  animated?: boolean;
}
export function JourneyLine({
  height = '100px',
  className = '',
  animated = true
}: JourneyLineProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center w-full ${className}`}
      style={{
        height
      }}>
      
      <div className="w-4 h-4 rounded-full border-2 border-accent-blue bg-background z-10 glow-blue"></div>
      <div className="relative w-0.5 flex-grow bg-surface-light overflow-hidden">
        {animated &&
        <motion.div
          className="absolute top-0 left-0 w-full bg-accent-blue glow-blue"
          initial={{
            height: '0%',
            top: '0%'
          }}
          animate={{
            height: ['0%', '30%', '0%'],
            top: ['0%', '70%', '100%']
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'linear'
          }} />

        }
      </div>
      <div className="w-4 h-4 rounded-full border-2 border-accent-teal bg-background z-10 glow-teal"></div>
    </div>);

}
export function HorizontalJourneyLine({
  width = '100%',
  className = '',
  animated = true




}: {width?: string;className?: string;animated?: boolean;}) {
  return (
    <div
      className={`flex items-center w-full ${className}`}
      style={{
        width
      }}>
      
      <div className="w-3 h-3 rounded-full border-2 border-accent-blue bg-background z-10"></div>
      <div className="relative h-0.5 flex-grow bg-surface-light overflow-hidden">
        {animated &&
        <motion.div
          className="absolute top-0 left-0 h-full bg-accent-blue glow-blue"
          initial={{
            width: '0%',
            left: '0%'
          }}
          animate={{
            width: ['0%', '30%', '0%'],
            left: ['0%', '70%', '100%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear'
          }} />

        }
      </div>
      <div className="w-3 h-3 rounded-full border-2 border-accent-teal bg-background z-10"></div>
    </div>);

}