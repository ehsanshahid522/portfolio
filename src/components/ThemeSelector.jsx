import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaCheck } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const themes = [
  { id: 'indigo', name: 'Indigo Nebula', primary: '#818cf8', accent: '#22d3ee' },
  { id: 'emerald', name: 'Emerald Matrix', primary: '#10b981', accent: '#6ee7b7' },
  { id: 'gold', name: 'Sunset Gold', primary: '#f59e0b', accent: '#ec4899' },
  { id: 'crimson', name: 'Crimson Eclipse', primary: '#f43f5e', accent: '#fb7185' },
  { id: 'vaporwave', name: 'Vaporwave', primary: '#d946ef', accent: '#06b6d4' },
];

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentThemeObj = themes.find((t) => t.id === theme) || themes[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/60 border border-white/10 hover:border-primary/40 text-slate-300 hover:text-white transition-all text-xs font-semibold backdrop-blur-md cursor-pointer"
        aria-label="Select Theme"
      >
        <FaPalette className="text-primary animate-pulse-subtle" />
        <span className="hidden sm:inline">{currentThemeObj.name}</span>
        <div className="flex gap-1 items-center ml-1">
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentThemeObj.primary }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: currentThemeObj.accent }} />
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 mt-2.5 w-52 rounded-2xl bg-[#0a0a0a]/90 border border-white/8 p-2 shadow-2xl backdrop-blur-2xl z-50 flex flex-col gap-1"
          >
            <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold px-3 py-1.5 border-b border-white/5 mb-1">
              Select Color Palette
            </div>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-left text-xs font-semibold transition-all cursor-pointer ${
                  theme === t.id
                    ? 'bg-primary/10 text-white'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5">
                    <span className="w-3 h-3 rounded-full border border-black/30 shadow-sm" style={{ backgroundColor: t.primary }} />
                    <span className="w-3 h-3 rounded-full border border-black/30 shadow-sm -ml-1" style={{ backgroundColor: t.accent }} />
                  </div>
                  <span>{t.name}</span>
                </div>
                {theme === t.id && (
                  <motion.div
                    layoutId="activeThemeCheck"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  >
                    <FaCheck className="text-primary text-[10px]" />
                  </motion.div>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSelector;
