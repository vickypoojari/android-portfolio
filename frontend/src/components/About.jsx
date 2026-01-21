import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { careerSummary } from '../data/mock';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-white mb-16 tracking-tight"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Narrative - 2 columns */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p
              className="text-lg text-[#a0a0a0] leading-relaxed"
              style={{ fontFamily: 'IBM Plex Sans, sans-serif', maxWidth: '70ch' }}
            >
              {careerSummary.narrative}
            </p>
          </motion.div>

          {/* Stats - 1 column */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {careerSummary.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-white pl-6"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div
                  className="text-4xl font-bold text-white mb-2"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm text-[#a0a0a0] uppercase tracking-wide"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
