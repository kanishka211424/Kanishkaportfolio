import React, { useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { EducationSection } from '../components/EducationSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { TimelineSection } from '../components/TimelineSection';
import { AchievementsSection } from '../components/AchievementsSection';
import { ContactCTA } from '../components/ContactCTA';
import { JourneyLine } from '../components/JourneyLine';
import { useLocation } from 'react-router-dom';
import { CVSection } from '../components/CVSection';
export function Home() {
  const location = useLocation();
  useEffect(() => {
    // Handle hash routing on mount or location change
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <JourneyLine height="120px" />
      <AboutSection />
      <JourneyLine height="120px" />
      <EducationSection />
      <JourneyLine height="120px" />
      <ProjectsSection />
      <JourneyLine height="120px" />
      <TimelineSection />
      <JourneyLine height="80px" />
      <AchievementsSection />
      <JourneyLine height="120px" />
      <CVSection />
      <JourneyLine height="120px" />
      <ContactCTA />
    </main>);

}