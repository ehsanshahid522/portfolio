import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index = 0, isServicePage = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="card p-6 sm:p-7 flex flex-col justify-between space-y-5 group border border-white/8 hover:border-primary/40 bg-slate-900/70 backdrop-blur-xl rounded-3xl"
  >
    <div className="space-y-4">
      <div className="flex items-center gap-3 border-b border-white/8 pb-4">
        <span className="text-3xl p-2.5 rounded-2xl bg-slate-950/80 border border-white/10">{service.icon}</span>
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-[11px] text-primary font-medium">{service.shortDesc}</p>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
        {service.description}
      </p>

      <div className="space-y-2 pt-1">
        {service.features.map((f, i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
            <FaCheckCircle className="text-primary size-3 flex-shrink-0" />
            <span>{f}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="pt-2">
      {isServicePage ? (
        <a
          href={`https://wa.me/923457124397?text=Hi%20Ehsan,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
          target="_blank"
          rel="noreferrer"
          className="btn-primary text-xs py-3 px-6 w-full justify-center gap-2 shadow-lg font-bold"
        >
          <FaWhatsapp size={15} /> {service.ctaText}
        </a>
      ) : (
        <Link
          to="/contact"
          className="btn-outline text-xs py-2.5 px-5 w-full justify-center group-hover:bg-primary group-hover:text-slate-950 group-hover:border-primary transition-all font-semibold"
        >
          {service.ctaText}
        </Link>
      )}
    </div>
  </motion.div>
);

export default ServiceCard;
