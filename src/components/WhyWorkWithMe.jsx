import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaMobileAlt, FaComments, FaRocket, FaBullseye } from 'react-icons/fa';
import SectionHeader from './common/SectionHeader';

const valuePoints = [
  {
    icon: <FaBolt className="text-amber-400 size-6" />,
    title: '⚡ Modern Technology',
    description: 'Latest frameworks, ultra-fast tools, and scalable MERN & AI architectures built for speed.'
  },
  {
    icon: <FaMobileAlt className="text-cyan-400 size-6" />,
    title: '📱 Fully Responsive',
    description: 'Works perfectly across smartphones, tablets, laptops, and wide desktop displays.'
  },
  {
    icon: <FaComments className="text-purple-400 size-6" />,
    title: '💬 Clear Communication',
    description: 'Regular project updates, transparent milestone tracking, and quick response times.'
  },
  {
    icon: <FaRocket className="text-emerald-400 size-6" />,
    title: '🚀 Clean & Scalable Code',
    description: 'Built for high performance, maintainability, clean structure, and future business growth.'
  },
  {
    icon: <FaBullseye className="text-rose-400 size-6" />,
    title: '🎯 Business-Focused Solutions',
    description: 'I focus on solving real business problems and delivering results, not just writing code.'
  }
];

const WhyWorkWithMe = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 relative">
      <SectionHeader
        tag="Client Value Guarantee"
        title="Why Work With Me?"
        subtitle="I don't just write code — I build digital products designed to solve real problems and drive growth."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {valuePoints.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className={`card p-6 sm:p-7 space-y-4 group relative border border-white/8 hover:border-primary/40 bg-slate-900/60 backdrop-blur-xl ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
