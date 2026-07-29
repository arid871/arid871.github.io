import { useState, useCallback } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Moments } from '../components/sections/Moments';
import { Projects } from '../components/sections/Projects';
import { AboutBlock } from '../components/sections/AboutBlock';
import { Timeline } from '../components/sections/Timeline';
import { ResumeModal } from '../components/ui/ResumeModal';

export function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const openResume = useCallback(() => setResumeOpen(true), []);
  const closeResume = useCallback(() => setResumeOpen(false), []);

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      <Navbar onOpenResume={openResume} />
      <main>
        <Hero />
        <Moments />
        <Projects />
        <AboutBlock />
        <Timeline />
      </main>
      <Footer />
      <ResumeModal isOpen={resumeOpen} onClose={closeResume} />
    </div>
  );
}
