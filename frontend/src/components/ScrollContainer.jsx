import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import Scene3D from './Scene3D';

const ScrollContainer = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll();
  
  // Calculate current section based on scroll position
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      // Map scroll progress to section index (0-8 for 9 sections)
      const section = Math.floor(latest * 9);
      setCurrentSection(section);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  return (
    <>
      {/* 3D Scene - Fixed Background */}
      <Scene3D 
        scrollProgress={scrollYProgress.get()} 
        sectionIndex={currentSection}
      />
      
      {/* Content - Scrollable */}
      <div className="relative" style={{ zIndex: 2 }}>
        {React.Children.map(children, (child, index) => {
          return (
            <motion.div
              className={`section-${index}`}
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {child}
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default ScrollContainer;
