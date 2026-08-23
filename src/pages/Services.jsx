import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import services from '../data/services';
import FreeConsultationBanner from '../components/FreeConsultationBanner';

const Services = () => {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Reveal as="span" className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider">
            Solutions Offered
          </Reveal>
          <Reveal as="h1" className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Client Services & <span className="gradient-text">Solutions</span>
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-subtitle text-base sm:text-lg">
            I help startups, business owners, and organizations turn ideas into fast, modern, and high-converting digital products.
          </Reveal>
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="card p-8 flex flex-col justify-between space-y-6 group border border-white/10 hover:border-primary/40 bg-slate-900/80 backdrop-blur-xl"
            >
              <div className="space-y-5">
                <div className="flex items-center gap-4 border-b border-white/8 pb-4">
                  <span className="text-4xl p-3 rounded-2xl bg-slate-950/80 border border-white/10">{srv.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-primary font-medium">{srv.shortDesc}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {srv.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Key Deliverables:</span>
                  {srv.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <FaCheckCircle className="text-emerald-400 size-3.5 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/8">
                <a
                  href={`https://wa.me/923000000000?text=Hi%20Ehsan,%20I'm%20interested%20in%20your%20${encodeURIComponent(srv.title)}%20service.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary text-xs py-3 px-6 w-full justify-center gap-2 shadow-lg"
                >
                  <FaWhatsapp size={15} /> {srv.ctaText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FREE CONSULTATION BANNER */}
      <FreeConsultationBanner />
    </PageShell>
  );
};

export default Services;
