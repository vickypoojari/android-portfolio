import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import DeveloperFigure from './DeveloperFigure';

const Scene3D = ({ scrollProgress, sectionIndex }) => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    // Check for mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Set ready after a short delay to ensure DOM is ready
    const timer = setTimeout(() => setIsReady(true), 100);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);
  
  // Don't render 3D on mobile or if reduced motion is preferred
  if (isMobile || isReducedMotion || !isReady) {
    return null;
  }
  
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        onCreated={(state) => {
          state.gl.setClearColor('#0a0a0a', 0);
        }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
        
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={0.8}
          castShadow
        />
        <directionalLight
          position={[-5, 3, -5]}
          intensity={0.3}
        />
        <pointLight position={[0, 2, 2]} intensity={0.5} color="#ffffff" />
        
        {/* Developer Figure */}
        <Suspense fallback={null}>
          <DeveloperFigure 
            scrollProgress={scrollProgress} 
            sectionIndex={sectionIndex}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
