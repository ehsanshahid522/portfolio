import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaReact, FaBrain, FaMobileAlt, FaCheckCircle, FaAward } from 'react-icons/fa';
import certifications from '../data/certifications';
import Reveal from './Reveal';

const iconMap = {
  FaGraduationCap: <FaGraduationCap className="text-cyan-400" />,
  FaReact: <FaReact className="text-cyan-400" />,
  FaBrain: <FaBrain className="text-pink-400" />,
  FaMobileAlt: <FaMobileAlt className="text-emerald-400" />
};

const Certifications = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Reveal as="h2" className="section-title">
          Certifications & Degrees
        </Reveal>
        <Reveal as="p" delay={0.08} className="section-subtitle">
          Academic credentials & specialized technical certifications
        </Reveal>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {certifications.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="card p-6 flex flex-col justify-between space-y-4 group relative"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                {iconMap[item.icon] || <FaAward className="text-primary" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-primary font-bold">{item.date}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1">
                    <FaCheckCircle size={10} /> {item.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <span className="text-xs text-slate-400 font-semibold block mt-0.5">{item.issuer}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
