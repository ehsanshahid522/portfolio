import React from 'react';
import { motion } from 'framer-motion';
import achievements from '../data/achievements';
import SectionHeader from './common/SectionHeader';

const Achievements = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <SectionHeader
        title="Key Achievements & Milestones"
        subtitle="Proven impact across software engineering, AI deployment, and mobile platforms"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="card p-6 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-accent transition-all duration-300" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl p-3 rounded-2xl bg-slate-950/80 border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                  {item.tag}
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-1">{item.category}</span>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
