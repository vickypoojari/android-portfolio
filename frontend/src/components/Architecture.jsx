import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { architecture } from '../data/mock';

const LayerCard = ({ layer, index, isInView }) => {
  return (
    <motion.div
      className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-8 hover:border-white transition-colors duration-300"
      initial={{ opacity: 0, y: 40, z: -layer.depth }}
      animate={isInView ? { opacity: 1, y: 0, z: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
      style={{
        transform: `translateZ(${layer.depth}px)`,
        transformStyle: 'preserve-3d'
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      <h3
        className="text-2xl font-bold text-white mb-4 tracking-tight"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
      >
        {layer.name}
      </h3>
      <p
        className="text-[#a0a0a0] mb-6 leading-relaxed"
        style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
      >
        {layer.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {layer.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-[#0a0a0a] border border-[#2a2a2a] rounded text-sm text-[#f5f5f5]"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Architecture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          ref={ref}
          className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {architecture.title}
        </motion.h2>

        <motion.p
          className="text-xl text-[#a0a0a0] mb-16 max-w-3xl"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {architecture.description}
        </motion.p>

        {/* Exploded Layers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {architecture.layers.map((layer, index) => (
            <LayerCard key={index} layer={layer} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Principles */}
        <motion.div
          className="bg-[#141414] border border-[#2a2a2a] rounded-lg p-8"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <h3
            className="text-xl font-semibold text-white mb-6"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            Engineering Principles
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {architecture.principles.map((principle, index) => (
              <div key={index} className="flex items-start">
                <span className="text-white mr-3">•</span>
                <span
                  className="text-[#f5f5f5]"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {principle}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Architecture;
