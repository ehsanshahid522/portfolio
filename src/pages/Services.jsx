import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaLaptopCode, FaMobileAlt, FaPalette } from 'react-icons/fa';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

const services = [
  { title: 'Web Development', desc: 'Building fast, responsive web apps with React, Next.js, and modern tooling.', icon: <FaLaptopCode /> },
  { title: 'Mobile Apps', desc: 'Creating cross-platform mobile experiences for iOS and Android.', icon: <FaMobileAlt /> },
  { title: 'UI/UX Design', desc: 'Designing clean, user-friendly interfaces that are a joy to use.', icon: <FaPalette /> },
  { title: 'AI & Data', desc: 'Integrating machine learning models and data analytics into products.', icon: <FaChartLine /> },
];

const Services = () => {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Reveal as="h1" className="section-title">
          Services
        </Reveal>
        <Reveal as="p" delay={0.08} className="section-subtitle">
          What I can do for you
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -12, scale: 1.02, transition: { duration: 0.3 } }}
            className="card service-card p-6 sm:p-8 space-y-4 isolation-auto"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 8 }}
              className="service-icon w-12 h-12 rounded-xl text-xl flex items-center justify-center"
            >
              {s.icon}
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold">{s.title}</h3>
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
        </div>
      </section>
    </PageShell>
  );
};

export default Services;
