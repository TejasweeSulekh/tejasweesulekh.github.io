import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ParticlesComponent from './components/ParticlesComponent';

import { useVisibilityTracker } from './hooks/useVisibilityTracker';

// 2. Lazy load the "Below the Fold" components
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const PixelLandscapeDivider = lazy(() => import('./components/PixelLandscapeDivider'));

function App() {
  // Initialize the passive tracker. It will automatically watch the whole app.
  useVisibilityTracker();

  return (
    <>
      <ParticlesComponent />
      <div style={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
        <Header />
        <main>
          <Home />
          {/* 3. Wrap lazy components in Suspense with a fallback */}
          <Suspense fallback={<div style={{ height: '100vh', backgroundColor: 'transparent' }} />}>
            <Experience />
            <PixelLandscapeDivider variant={1} />
            <Projects />
            <PixelLandscapeDivider variant={2} />
            <Achievements />
            <PixelLandscapeDivider variant={3} />
            <Skills />
            <PixelLandscapeDivider variant={4} />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;