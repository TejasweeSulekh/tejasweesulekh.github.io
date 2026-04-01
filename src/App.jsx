import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesComponent from './components/ParticlesComponent';

function App() {
  return (
    <>
      <ParticlesComponent />

      <div style={{ position: 'relative', zIndex: 1, backgroundColor: 'transparent' }}>
        <Header />
        <main>
          <Home />
          <Experience />
          <Projects />
          <Achievements />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

