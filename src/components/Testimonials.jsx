import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import testimonials from '../data/testimonials';
import Reveal from './Reveal';

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Reveal as="h2" className="section-title">
          Testimonials & References
        </Reveal>
        <Reveal as="p" delay={0.08} className="section-subtitle">
          What professors, team leads, and product owners say about my engineering output
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="card p-6 flex flex-col justify-between space-y-6 relative group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <FaQuoteLeft className="text-primary/40 text-2xl" />
                <div className="flex text-amber-400 gap-1 text-xs">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                "{item.content}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/8">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-11 h-11 rounded-full object-cover border border-white/10"
              />
              <div>
                <h4 className="text-sm font-bold text-white">{item.name}</h4>
                <span className="text-xs text-primary font-medium block">{item.role}</span>
                <span className="text-[10px] text-slate-400">{item.organization}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
