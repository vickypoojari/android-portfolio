import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { projects } from '../data/mock';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="border-t border-[#2a2a2a] py-16 md:py-24"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className={`grid md:grid-cols-2 gap-12 items-start ${!isEven ? 'md:grid-flow-dense' : ''}`}>
        {/* Content */}
        <div className={isEven ? '' : 'md:col-start-2'}>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span
              className="text-sm text-[#a0a0a0] uppercase tracking-wider"
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              {project.company}
            </span>
          </motion.div>

          <motion.h3
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
            initial={{ opacity: 0, x: isEven ? -20 : 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {project.name}
          </motion.h3>

          <motion.div
            className="space-y-6 mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div>
              <h4 className="text-sm text-[#a0a0a0] uppercase tracking-wider mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Problem
              </h4>
              <p className="text-[#f5f5f5] leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                {project.problem}
              </p>
            </div>

            <div>
              <h4 className="text-sm text-[#a0a0a0] uppercase tracking-wider mb-2" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                My Role
              </h4>
              <p className="text-[#f5f5f5] leading-relaxed" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                {project.role}
              </p>
            </div>

            <div>
              <h4 className="text-sm text-[#a0a0a0] uppercase tracking-wider mb-3" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[#141414] border border-[#2a2a2a] rounded text-sm text-[#f5f5f5]"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm text-[#a0a0a0] uppercase tracking-wider mb-3" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                Solutions Delivered
              </h4>
              <ul className="space-y-2">
                {project.solutions.map((solution, i) => (
                  <li key={i} className="text-[#f5f5f5] leading-relaxed flex items-start" style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}>
                    <span className="text-white mr-3">•</span>
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Impact Metrics */}
        <motion.div
          className={`bg-[#141414] border border-[#2a2a2a] rounded-lg p-8 ${!isEven ? 'md:col-start-1 md:row-start-1' : ''}`}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
        >
          <h4
            className="text-sm text-[#a0a0a0] uppercase tracking-wider mb-8"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            Impact
          </h4>
          <div className="space-y-8">
            {project.impact.map((item, i) => (
              <div key={i}>
                <div
                  className="text-5xl font-bold text-white mb-2"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {item.metric}
                </div>
                <div
                  className="text-sm text-[#a0a0a0]"
                  style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          ref={ref}
          className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        
        <motion.p
          className="text-xl text-[#a0a0a0] mb-16 max-w-3xl"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Real-world projects solving complex problems through thoughtful engineering and clean architecture.
        </motion.p>

        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
