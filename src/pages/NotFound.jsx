import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationTriangle, FaCode } from 'react-icons/fa';
import PageShell from '../components/PageShell';

const NotFound = () => {
  return (
    <PageShell>
      <section className="min-h-[70vh] max-w-3xl mx-auto px-4 sm:px-6 py-20 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card p-8 sm:p-12 space-y-6 border border-white/10 bg-slate-900/90 backdrop-blur-2xl shadow-2xl rounded-3xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/25 flex items-center justify-center text-rose-400 mx-auto text-3xl">
            <FaExclamationTriangle className="animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 uppercase tracking-wider">
              Error 404
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Page Not Found
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed pt-1">
              404 — This page seems to be lost in the codebase. The URL you visited might have been moved, renamed, or deleted.
            </p>
          </div>

          <div className="pt-4 border-t border-white/8 flex justify-center">
            <Link
              to="/"
              className="btn-primary text-sm py-3.5 px-8 flex items-center gap-2 font-bold shadow-xl"
            >
              <FaHome size={15} /> Back to Home →
            </Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
};

export default NotFound;
