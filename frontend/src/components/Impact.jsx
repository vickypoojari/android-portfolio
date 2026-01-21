import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { achievements, awards } from '../data/mock';
import { Award } from 'lucide-react';

const Impact = () => {
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
          Impact & Recognition
        </motion.h2>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-8 text-center hover:border-white transition-colors duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div
                className="text-5xl font-bold text-white mb-3"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {achievement.metric}
              </div>
              <div
                className="text-sm text-[#a0a0a0]"
                style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
              >
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3
            className="text-3xl font-bold text-white mb-8"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            Awards & Honors
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-6 hover:border-white transition-colors duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Award className="text-white mb-4" size={32} />
                <h4
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {award.title}
                </h4>
                <p
                  className="text-sm text-[#a0a0a0]"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {award.company} • {award.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;
