import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { timeline } from '../data/mock';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          ref={ref}
          className="text-5xl md:text-6xl font-bold text-white mb-16 tracking-tight"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white via-[#2a2a2a] to-transparent"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transformOrigin: 'top' }}
          />

          <div className="space-y-16">
            {timeline.map((job, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  className={`relative grid md:grid-cols-2 gap-8 ${isEven ? '' : 'md:grid-flow-dense'}`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-0 md:left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1.5 md:-translate-x-2 top-8"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
                  />

                  {/* Content Card */}
                  <motion.div
                    className={`ml-8 md:ml-0 bg-[#141414] border border-[#2a2a2a] rounded-lg p-8 hover:border-white transition-colors duration-300 ${
                      isEven ? '' : 'md:col-start-2'
                    }`}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <div className="mb-4">
                      <h3
                        className="text-2xl font-bold text-white mb-2"
                        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                      >
                        {job.role}
                      </h3>
                      <div
                        className="text-lg text-[#f5f5f5] mb-2"
                        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                      >
                        {job.company}
                      </div>
                      <div
                        className="text-sm text-[#a0a0a0]"
                        style={{ fontFamily: 'JetBrains Mono, monospace' }}
                      >
                        {job.duration} • {job.location}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {job.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start">
                          <span className="text-white mr-3 mt-1">•</span>
                          <span
                            className="text-[#a0a0a0] leading-relaxed"
                            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                          >
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
