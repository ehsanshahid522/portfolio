import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="border-t border-white/8 mt-16 sm:mt-20 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-5">
        {/* Name + Social — always side by side */}
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg font-bold">Ehsan<span className="dot-accent">.</span></div>
            <p className="text-sm text-[#64748b]">Software Engineer</p>
          </div>
          <div className="flex items-center gap-4">
            {[
              { icon: <FaGithub />, url: 'https://github.com/ehsanshahid522' },
              { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/chehsanshahid' },
              { icon: <FaInstagram />, url: 'https://instagram.com/ehsanshahid_397/' },
              { icon: <FaEnvelope />, url: 'mailto:ehsanshahid522@gmail.com' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.08 }}
                className="text-lg text-[#475569] hover:text-primary transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
        {/* Copyright + Scroll to top */}
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#475569]">&copy; {new Date().getFullYear()} Ehsan Shahid</p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="w-8 h-8 rounded-lg bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#64748b] hover:text-primary hover:border-primary/50 transition-colors"
          >
            <FaArrowUp size={12} />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
