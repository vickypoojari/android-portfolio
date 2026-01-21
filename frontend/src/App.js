import React from "react";
import "./App.css";
import ScrollContainer from "./components/ScrollContainer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Architecture from "./components/Architecture";
import Impact from "./components/Impact";
import Timeline from "./components/Timeline";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App bg-[#0a0a0a] min-h-screen">
      <ScrollContainer>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Architecture />
        <Impact />
        <Timeline />
        <Certifications />
        <Contact />
        
        {/* Footer */}
        <footer className="py-12 border-t border-[#2a2a2a] bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-sm text-[#a0a0a0]" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
              &copy; {new Date().getFullYear()} Vicky Manju Poojari. Built with React, Framer Motion & Three.js.
            </p>
          </div>
        </footer>
      </ScrollContainer>
    </div>
  );
}

export default App;
