import React from 'react';
import { motion } from 'framer-motion';
import { FaHammer, FaReact, FaBrain, FaRocket, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CurrentlyBuilding = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card p-6 sm:p-8 relative overflow-hidden border border-amber-500/30 bg-slate-900/80 backdrop-blur-xl rounded-3xl"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
              <FaHammer className="animate-bounce" />
              <span>🚧 Currently Building</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Exploring AI-Powered Applications & Next.js 15 Server Systems
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Currently engineering AI microservice pipelines with FastAPI, optimizing real-time MERN state caching, and building production-grade SaaS templates.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-950/80 border border-white/8 text-cyan-300 flex items-center gap-1.5">
                <FaReact /> Next.js 15
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-950/80 border border-white/8 text-emerald-300 flex items-center gap-1.5">
                <FaBrain /> AI Agents & FastAPI
              </span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-slate-950/80 border border-white/8 text-purple-300 flex items-center gap-1.5">
                <FaRocket /> Scalable MERN Architecture
              </span>
            </div>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <Link
              to="/projects"
              className="btn-outline text-xs sm:text-sm py-3 px-6 w-full md:w-auto justify-center border-amber-500/40 text-amber-400 hover:bg-amber-500/10 flex items-center gap-2 font-semibold"
            >
              <span>Explore All Shipped Projects</span>
              <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CurrentlyBuilding;
