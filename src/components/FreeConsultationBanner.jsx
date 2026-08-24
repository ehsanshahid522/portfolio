import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight, FaEnvelope } from 'react-icons/fa';

const FreeConsultationBanner = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card p-8 sm:p-12 space-y-6 relative overflow-hidden bg-gradient-to-b from-slate-900/95 via-slate-950/95 to-slate-950/90 border border-primary/40 shadow-2xl rounded-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Free Project Consultation & Strategy Call</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Have a Project in Mind? <br />
          <span className="gradient-text">Let's Build It. 🚀</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tell me about your idea, and let's discuss how we can turn it into a real, fast, and scalable product.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="https://wa.me/923457124397?text=Hi%20Ehsan,%20I'd%20like%20to%20discuss%20my%20project%20idea."
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm sm:text-base px-8 py-3.5 flex items-center gap-2 group shadow-xl bg-emerald-500 border-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold"
          >
            <FaWhatsapp size={18} className="group-hover:scale-110 transition-transform" />
            <span>💬 WhatsApp Me</span>
          </a>

          <a
            href="mailto:ehsanshahid522@gmail.com?subject=Project%20Inquiry"
            className="btn-outline text-sm sm:text-base px-7 py-3.5 flex items-center gap-2"
          >
            <FaEnvelope size={15} className="text-primary" />
            <span>📧 Send an Email</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FreeConsultationBanner;
