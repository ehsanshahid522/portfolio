import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-[#1e293b] mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-lg font-bold">Ehsan<span className="dot-accent">.</span></div>
          <p className="text-sm text-[#64748b]">Software Engineer</p>
        </div>
        <div className="flex items-center gap-5">
          {[
            { icon: <FaGithub />, url: 'https://github.com/ehsanshahid522' },
            { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/chehsanshahid' },
            { icon: <FaInstagram />, url: 'https://instagram.com/ehsanshahid_397/' },
            { icon: <FaEnvelope />, url: 'mailto:ehsanshahid522@gmail.com' },
          ].map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noreferrer" className="text-lg text-[#475569] hover:text-primary transition-colors">
              {s.icon}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-[#475569]">&copy; {new Date().getFullYear()} Ehsan Shahid</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8 h-8 rounded-lg bg-[#1e293b] border border-[#334155] flex items-center justify-center text-[#64748b] hover:text-primary hover:border-primary/50 transition-colors"
          >
            <FaArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
