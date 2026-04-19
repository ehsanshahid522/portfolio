import React from 'react';
import { motion } from 'framer-motion';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

const About = () => {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ scale: [1, 1.04, 1], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -inset-4 bg-primary/15 rounded-3xl blur-3xl"
          />
          <div className="hero-photo-shell max-w-md">
            <img src="/ehsan.jpg" alt="Ehsan Shahid" className="relative w-48 sm:w-64 md:w-full max-w-md rounded-[28px] border border-white/10 shadow-xl" />
          </div>
        </motion.div>

        <div className="space-y-5 sm:space-y-6 text-center md:text-left">
          <Reveal as="h1" className="section-title" delay={0.1}>
            About Me
          </Reveal>
          <Reveal as="p" delay={0.18} className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            I'm Ehsan Shahid, a Software Engineer with 2+ years of experience in full-stack development. I build modern web applications, AI-powered tools, and everything in between.
          </Reveal>
          <Reveal as="p" delay={0.26} className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
            I focus on writing clean code, creating great user experiences, and delivering projects on time. I've worked with 20+ clients and successfully delivered 30+ projects.
          </Reveal>
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4">
            {[
              { value: '30+', label: 'Projects' },
              { value: '20+', label: 'Clients' },
              { value: '2+', label: 'Years' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 45px rgba(99, 102, 241, 0.16)' }}
                className="card stat-card p-4 sm:p-5 text-center cursor-default"
              >
                <div className="text-xl sm:text-2xl font-bold text-primary">{s.value}</div>
                <div className="text-[10px] sm:text-xs text-[#94a3b8] mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </PageShell>
  );
};

export default About;
