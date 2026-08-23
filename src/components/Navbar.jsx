import React, { useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ThemeSelector from './ThemeSelector';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 bg-[#030712]/75 backdrop-blur-2xl border-b border-white/8"
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

        {/* Theme & Resume Action CTAs */}
        <div className="hidden md:flex items-center gap-3 relative z-10">
          <ThemeSelector />
          <a
            href="/Ehsan_Shahid_Software_Engineer_Resume.pdf"
            download="Ehsan_Shahid_Software_Engineer_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-outline text-xs px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <FaDownload size={11} className="text-primary" /> Resume
          </a>
          <Link to="/contact" className="btn-primary text-xs px-4 py-2 rounded-xl">
            Hire Me
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2 relative z-10">
          <ThemeSelector />
          <button className="text-xl text-[#94a3b8] p-2" onClick={() => setOpen(!open)} aria-label="Toggle Navigation">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/8"
          >
            <div className="px-6 py-5 flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-base font-semibold py-2.5 transition-colors ${isActive ? 'text-primary' : 'text-[#94a3b8]'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="flex flex-col gap-3 pt-3 border-t border-white/10 mt-2">
                <a
                  href="/Ehsan_Shahid_Software_Engineer_Resume.pdf"
                  download="Ehsan_Shahid_Software_Engineer_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline justify-center text-sm py-2.5 rounded-xl"
                >
                  <FaDownload size={12} className="text-primary" /> Download Resume
                </a>
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary justify-center text-sm py-2.5 rounded-xl">
                  Contact Me
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
