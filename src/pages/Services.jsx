import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaMobileAlt, FaPalette, FaChartLine } from 'react-icons/fa';

const services = [
  { title: 'Web Development', desc: 'Building fast, responsive web apps with React, Next.js, and modern tooling.', icon: <FaLaptopCode /> },
  { title: 'Mobile Apps', desc: 'Creating cross-platform mobile experiences for iOS and Android.', icon: <FaMobileAlt /> },
  { title: 'UI/UX Design', desc: 'Designing clean, user-friendly interfaces that are a joy to use.', icon: <FaPalette /> },
  { title: 'AI & Data', desc: 'Integrating machine learning models and data analytics into products.', icon: <FaChartLine /> },
];

const Services = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        Services
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="section-subtitle"
      >
        What I can do for you
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="card p-6 sm:p-8 space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 rounded-xl bg-primary/10 text-primary text-xl flex items-center justify-center"
            >
              {s.icon}
            </motion.div>
            <h3 className="text-lg sm:text-xl font-bold">{s.title}</h3>
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
};

export default Services;
