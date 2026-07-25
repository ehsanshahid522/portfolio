import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaDownload, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/8 mt-20 relative bg-slate-950/40 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Subtitle */}
          <div className="text-center sm:text-left space-y-1">
            <div className="text-xl font-extrabold text-white">
              Ehsan<span className="text-primary">Shahid</span><span className="dot-accent">.</span>
            </div>
            <p className="text-xs text-slate-400">
              Software Engineer | Full Stack MERN | React Native | AI Applications
            </p>
          </div>

          {/* Social Pills */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FaGithub size={18} />, url: 'https://github.com/ehsanshahid522', label: 'GitHub' },
              { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/chehsanshahid', label: 'LinkedIn' },
              { icon: <FaInstagram size={18} />, url: 'https://instagram.com/ehsanshahid_397/', label: 'Instagram' },
              { icon: <FaEnvelope size={18} />, url: 'mailto:ehsanshahid522@gmail.com', label: 'Email' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/5" />

        {/* Copyright & Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center sm:text-left space-y-0.5">
            <p>Designed & Developed by <strong className="text-white">Ehsan Shahid</strong></p>
            <p>&copy; 2026 All Rights Reserved.</p>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              aria-label="Scroll to Top"
              className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/50 transition-colors cursor-pointer"
            >
              <FaArrowUp size={12} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
