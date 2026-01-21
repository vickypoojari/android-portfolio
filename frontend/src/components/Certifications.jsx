import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { certifications, education } from '../data/mock';
import { GraduationCap, Award } from 'lucide-react';

const Certifications = () => {
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
          Certifications & Education
        </motion.h2>

        {/* Certifications Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3
            className="text-2xl font-semibold text-white mb-8"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-6 hover:border-white transition-colors duration-300"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <Award className="text-white mb-4" size={24} />
                <h4
                  className="text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {cert.title}
                </h4>
                <p
                  className="text-sm text-[#a0a0a0] mb-1"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {cert.issuer}
                </p>
                <p
                  className="text-xs text-[#a0a0a0]"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {cert.date}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3
            className="text-2xl font-semibold text-white mb-8"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            Education
          </h3>
          <motion.div
            className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-8 hover:border-white transition-colors duration-300"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="flex items-start gap-4 mb-4">
              <GraduationCap className="text-white mt-1" size={32} />
              <div>
                <h4
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {education.degree}
                </h4>
                <p
                  className="text-lg text-[#f5f5f5] mb-1"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {education.college}
                </p>
                <p
                  className="text-sm text-[#a0a0a0] mb-1"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {education.university}
                </p>
                <p
                  className="text-sm text-[#a0a0a0] mb-4"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {education.duration} • Grade: {education.grade}
                </p>
                <div>
                  <p
                    className="text-sm text-[#a0a0a0] mb-2"
                    style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                  >
                    Key Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-[#0a0a0a] border border-[#2a2a2a] rounded text-sm text-[#f5f5f5]"
                        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
