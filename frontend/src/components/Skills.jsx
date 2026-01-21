import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { skills } from '../data/mock';

const SkillCard = ({ title, items, index, scrollYProgress }) => {
  const y = useTransform(scrollYProgress, [0, 1], [index * 20, -index * 10]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-8 hover:border-white transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <h3
        className="text-xl font-semibold text-white mb-6 tracking-wide"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded text-sm text-[#f5f5f5] hover:border-white transition-colors duration-300"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const skillCategories = [
    { title: "Languages", items: skills.languages },
    { title: "Android Core", items: skills.androidCore },
    { title: "Architecture", items: skills.architecture },
    { title: "UI Frameworks", items: skills.ui },
    { title: "Networking & Data", items: skills.networkingData },
    { title: "Tooling & DevOps", items: skills.tooling }
  ];

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold text-white mb-16 tracking-tight"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              items={category.items}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
