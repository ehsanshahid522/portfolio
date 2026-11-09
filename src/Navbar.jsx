import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaDownload, FaBriefcase } from 'react-icons/fa';
import ThemeSelector from './ThemeSelector';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-[#030712]/85 backdrop-blur-2xl border-b border-white/8"
    >
      {/* Scroll indicator bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary origin-left z-50"
        style={{ scaleX }}
      />
      <div className="nav-glow" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 relative z-10">
          <Link to="/" className="text-xl font-extrabold tracking-tight flex items-center gap-1">
            <span className="gradient-text">Ehsan</span>
            <span className="text-primary">Shahid</span>
            <span className="dot-accent">.</span>
          </Link>
          <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-semibold text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for Work</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6 relative z-10">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors relative py-1 ${isActive ? 'text-primary' : 'text-[#94a3b8] hover:text-white'}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Theme & Action CTAs */}
        <div className="hidden md:flex items-center gap-3 relative z-10">
          <ThemeSelector />
          <a
            href="/Ehsan_Shahid_Software_Engineer_Resume.pdf"
            download="Ehsan_Shahid_Software_Engineer_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-outline text-xs px-3.5 py-2 rounded-xl flex items-center gap-1.5 font-semibold"
          >
            <FaDownload size={11} className="text-primary" /> Resume
          </a>
          <Link to="/contact" className="btn-primary text-xs px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-1.5">
            <FaBriefcase size={11} /> Hire Me
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2 relative z-10">
          <ThemeSelector />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#94a3b8] hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-b border-[#334155] bg-[#030712] px-4 pt-3 pb-5 space-y-3"
        >
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-base font-semibold py-2 px-3 rounded-lg ${isActive ? 'bg-[#1e293b] text-primary' : 'text-[#94a3b8]'}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-[#334155] flex flex-col gap-2">
            <a
              href="/Ehsan_Shahid_Software_Engineer_Resume.pdf"
              download="Ehsan_Shahid_Software_Engineer_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-sm py-2.5 justify-center flex items-center gap-2"
            >
              <FaDownload size={12} className="text-primary" /> Download Resume
            </a>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-sm py-2.5 justify-center font-bold"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
