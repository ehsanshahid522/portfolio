import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaPalette, FaCode, FaCheckDouble, FaRocket } from 'react-icons/fa';
import SectionHeader from './common/SectionHeader';

const steps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    desc: 'Understanding your business goals, target audience, and technical requirements to define a clear project roadmap.',
    icon: <FaSearch className="text-cyan-400" />
  },
  {
    step: '02',
    title: 'Design & Architecture',
    desc: 'Designing clean, modern UI/UX wireframes and architecting a scalable full-stack database & system structure.',
    icon: <FaPalette className="text-purple-400" />
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Writing clean, production-ready code with React, Node.js, MERN stack, or AI integrations adhering to modern best practices.',
    icon: <FaCode className="text-emerald-400" />
  },
  {
    step: '04',
    title: 'Testing & QA',
    desc: 'Rigorously testing for performance, security, cross-browser compatibility, and seamless mobile responsiveness.',
    icon: <FaCheckDouble className="text-amber-400" />
  },
  {
    step: '05',
    title: 'Launch & Support',
    desc: 'Deploying your application live to cloud servers (Vercel, AWS, Hostinger) with smooth continuous deployment.',
    icon: <FaRocket className="text-rose-400" />
  }
];

const DevelopmentProcess = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <SectionHeader
        tag="My Workflow"
        title="Development Process"
        subtitle="A structured 5-step process designed to turn your idea into a high-quality, production-ready digital product."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {steps.map((item, idx) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="card p-6 flex flex-col justify-between space-y-4 group relative border border-white/8 hover:border-primary/40 bg-slate-900/70 backdrop-blur-xl"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b border-white/8 pb-3">
                <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                  {item.step}
                </span>
                <span className="text-xl p-2 rounded-xl bg-slate-950/80 border border-white/10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default DevelopmentProcess;
