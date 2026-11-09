import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export const socialData = [
  { icon: <FaGithub size={18} />, url: 'https://github.com/ehsanshahid522', label: 'GitHub' },
  { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/chehsanshahid', label: 'LinkedIn' },
  { icon: <FaInstagram size={18} />, url: 'https://instagram.com/ehsanshahid_397/', label: 'Instagram' },
  { icon: <FaWhatsapp size={18} />, url: 'https://wa.me/923457124397', label: 'WhatsApp' },
];

const SocialLinks = ({ className = "flex items-center justify-center md:justify-start gap-3.5 pt-1", itemClass = "social-pill text-slate-400 transition-colors" }) => (
  <div className={className}>
    {socialData.map((s) => (
      <motion.a
        key={s.label}
        href={s.url}
        target="_blank"
        rel="noreferrer"
        aria-label={s.label}
        whileHover={{ scale: 1.15, y: -3, color: '#818cf8' }}
        whileTap={{ scale: 0.9 }}
        className={itemClass}
      >
        {s.icon}
      </motion.a>
    ))}
  </div>
);

export default SocialLinks;
