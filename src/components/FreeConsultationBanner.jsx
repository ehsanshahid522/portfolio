import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight, FaCalendarCheck } from 'react-icons/fa';

const FreeConsultationBanner = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card p-8 sm:p-12 space-y-6 relative overflow-hidden bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-950/90 border border-primary/40 shadow-2xl"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Free Project Consultation & Strategy Call</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Have an Idea? <br />
          <span className="gradient-text">Let's Discuss It For Free.</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Whether you need a modern business website, custom web application, or AI integration, let's map out your project requirements together with zero commitment.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="https://wa.me/923457124397?text=Hi%20Ehsan,%20I'd%20like%20to%20book%20a%20free%20consultation%20for%20my%20project."
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm sm:text-base px-8 py-3.5 flex items-center gap-2 group shadow-xl"
          >
            <FaWhatsapp size={18} className="text-emerald-400 group-hover:scale-110 transition-transform" />
            <span>Book Free Consultation on WhatsApp</span>
            <FaArrowRight size={13} />
          </a>

          <a
            href="/contact"
            className="btn-outline text-sm sm:text-base px-7 py-3.5 flex items-center gap-2"
          >
            <FaCalendarCheck size={14} className="text-primary" />
            <span>Start a Project</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FreeConsultationBanner;
