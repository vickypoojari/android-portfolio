import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { profileData } from '../data/mock';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-xl text-[#a0a0a0] mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Open to new opportunities and collaborations. Feel free to reach out!
        </motion.p>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href={`mailto:${profileData.email}`}
            className="text-3xl md:text-4xl font-semibold text-white hover:text-[#a0a0a0] transition-colors duration-300"
            style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          >
            {profileData.email}
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-6 text-base"
            asChild
          >
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-6 text-base"
            asChild
          >
            <a href={profileData.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-6 py-6 text-base"
            asChild
          >
            <a href={profileData.website} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Website
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="text-sm text-[#a0a0a0]"
          style={{ fontFamily: 'IBM Plex Sans, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>{profileData.location} • Remote-friendly</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
