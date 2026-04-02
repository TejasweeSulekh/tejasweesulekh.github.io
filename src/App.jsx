import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ParticlesComponent from './components/ParticlesComponent';

// 2. Lazy load the "Below the Fold" components
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievements'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <>
      <ParticlesComponent />
      <div style={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
        <Header />
        <main>
          <Home />
          {/* 3. Wrap lazy components in Suspense with a fallback */}
          <Suspense fallback={<div style={{ height: '100vh', backgroundColor: '#0d0d0d' }} />}>
            <Experience />
            <Projects />
            <Achievements />
            <Skills />
            <Contact />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;