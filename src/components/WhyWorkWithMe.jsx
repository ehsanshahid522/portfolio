import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaMobileAlt, FaComments, FaRocket } from 'react-icons/fa';
import Reveal from './Reveal';

const valuePoints = [
  {
    icon: <FaBolt className="text-amber-400 size-6" />,
    title: '⚡ Fast & Modern Development',
    description: 'Clean, high-performance web applications built using cutting-edge frameworks like React, Next.js, and Vite for sub-second load times.'
  },
  {
    icon: <FaMobileAlt className="text-cyan-400 size-6" />,
    title: '📱 100% Mobile Responsive',
    description: 'Pixel-perfect, fluid user experience engineered seamlessly across smartphones, tablets, and desktop displays.'
  },
  {
    icon: <FaComments className="text-purple-400 size-6" />,
    title: '💬 Clear & Proactive Communication',
    description: 'Regular project updates, transparent milestone tracking, quick response times, and clear technical alignment.'
  },
  {
    icon: <FaRocket className="text-emerald-400 size-6" />,
    title: '🚀 Scalable & Production-Ready',
    description: 'Enterprise-grade MERN architecture built with clean code practices, security standards, and seamless cloud deployments.'
  }
];

const WhyWorkWithMe = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
        <Reveal as="span" className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider">
          Client Value Guarantee
        </Reveal>
        <Reveal as="h2" delay={0.05} className="section-title">
          Why Work With Me?
        </Reveal>
        <Reveal as="p" delay={0.1} className="section-subtitle">
          I don't just write code — I build digital products designed to solve problems and drive business growth.
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {valuePoints.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="card p-6 sm:p-8 space-y-4 group relative border border-white/8 hover:border-primary/40 bg-slate-900/60 backdrop-blur-xl"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
