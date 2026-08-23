import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaGithub, FaInstagram, FaLinkedin, 
  FaReact, FaNodeJs, FaPython, FaBrain,
  FaMobileAlt, FaWhatsapp, FaCheckCircle
} from 'react-icons/fa';
import GitHubOverview from '../components/GitHubOverview';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import Stats from '../components/Stats';
import WhyWorkWithMe from '../components/WhyWorkWithMe';
import FreeConsultationBanner from '../components/FreeConsultationBanner';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import skillCategories from '../data/skills';
import services from '../data/services';
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion';

const spotlightCards = [
  { value: '30+', label: 'Projects Shipped', position: 'top-4 -left-3 sm:left-0' },
  { value: 'AI & MERN', label: 'Full Stack Focus', position: 'bottom-6 -right-2 sm:right-2' },
];

const Home = () => {
  return (
    <PageShell>
      {/* 1. HERO SECTION - Clean, perfectly sized font & layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-5 text-center md:text-left relative z-10"
        >
          {/* Status Badge */}
          <motion.div
            variants={fadeUp}
            custom={0.05}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-semibold text-emerald-400 shadow-md backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>🟢 Available for Freelance & Full-Time Work</span>
          </motion.div>

          {/* Name & Title */}
          <motion.div variants={fadeUp} custom={0.12} className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Ehsan Shahid
            </h1>
            <p className="text-lg sm:text-xl font-bold text-primary tracking-wide">
              Software Engineer & Full Stack Developer
            </p>
          </motion.div>

          {/* Headline - Sleek & balanced size */}
          <motion.div variants={fadeUp} custom={0.16}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-snug text-slate-200">
              Building Modern Web Applications & <span className="gradient-text">AI-Powered Solutions</span>
            </h2>
          </motion.div>

          {/* Tech Subtitle Pills */}
          <motion.div
            variants={fadeUp}
            custom={0.2}
            className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1"
          >
            <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold flex items-center gap-1.5">
              <FaReact /> Full Stack MERN
            </span>
            <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold flex items-center gap-1.5">
              <FaMobileAlt /> React Native Apps
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
              <FaBrain /> AI Integration
            </span>
          </motion.div>

          {/* Description - Adjusted text size */}
          <motion.p
            variants={fadeUp}
            custom={0.24}
            className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Software Engineering graduate specializing in React, Node.js, MERN Stack, and AI integrations. I help startups and businesses turn ideas into fast, modern, and scalable digital products.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={fadeUp}
            custom={0.28}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2"
          >
            <Link to="/projects" className="btn-primary text-xs sm:text-sm group py-3 px-6">
              View All Projects
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <FaArrowRight size={12} />
              </motion.span>
            </Link>

            <a
              href="https://wa.me/923000000000?text=Hi%20Ehsan,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-xs sm:text-sm py-3 px-5 flex items-center gap-2 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
            >
              <FaWhatsapp size={15} /> Let's Work Together
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            custom={0.32}
            className="flex items-center justify-center md:justify-start gap-3.5 pt-1"
          >
            {[
              { icon: <FaGithub size={18} />, url: 'https://github.com/ehsanshahid522', label: 'GitHub' },
              { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/chehsanshahid', label: 'LinkedIn' },
              { icon: <FaInstagram size={18} />, url: 'https://instagram.com/ehsanshahid_397/', label: 'Instagram' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -3, color: '#818cf8' }}
                whileTap={{ scale: 0.9 }}
                className="social-pill text-slate-400 transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Photo Visual */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="hero-visual relative flex-shrink-0 order-first md:order-last"
        >
          <div className="absolute -top-10 -left-10 text-cyan-400/40 text-3xl hidden lg:block animate-float-slow drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]" style={{ zIndex: 0 }}>
            <FaReact />
          </div>
          <div className="absolute top-8 -right-12 text-emerald-400/40 text-2xl hidden lg:block animate-float-medium drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]" style={{ zIndex: 0 }}>
            <FaNodeJs />
          </div>
          <div className="absolute -bottom-8 left-8 text-yellow-400/40 text-2xl hidden lg:block animate-float-medium drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]" style={{ zIndex: 0 }}>
            <FaPython />
          </div>
          <div className="absolute bottom-10 -right-8 text-pink-400/40 text-3xl hidden lg:block animate-float-slow drop-shadow-[0_0_12px_rgba(236,72,153,0.5)]" style={{ zIndex: 0 }}>
            <FaBrain />
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="hero-ring"
          />

          <motion.div
            animate={{ y: [0, -8, 0], rotate: [0, 1, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hero-photo-shell relative z-10 p-3 rounded-[28px] bg-slate-900/60 border border-white/12 shadow-2xl"
          >
            <img
              src="/ehsan.jpg"
              alt="Ehsan Shahid - Software Engineer"
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-[22px] border border-white/10 shadow-2xl"
            />
          </motion.div>

          {spotlightCards.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, index === 0 ? -8 : 8, 0] }}
              transition={{
                opacity: { delay: 0.4 + index * 0.1, duration: 0.4 },
                scale: { delay: 0.4 + index * 0.1, duration: 0.4 },
                y: { duration: 6 + index, repeat: Infinity, ease: 'easeInOut' },
              }}
              className={`floating-panel ${item.position} z-20`}
            >
              <span className="text-base font-bold text-white">{item.value}</span>
              <span className="text-[11px] text-slate-400">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 2. STATS SECTION */}
      <Stats />

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 3. WHY WORK WITH ME */}
      <WhyWorkWithMe />

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 4. CLIENT SERVICES SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <Reveal as="span" className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider">
            Solutions Offered
          </Reveal>
          <Reveal as="h2" delay={0.05} className="section-title">
            Services & Expertise
          </Reveal>
          <Reveal as="p" delay={0.1} className="section-subtitle">
            Tailored digital development services built to turn your vision into a scalable, high-converting product.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="card p-6 sm:p-8 flex flex-col justify-between space-y-6 group border border-white/8 hover:border-primary/40 bg-slate-900/70 backdrop-blur-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-white/8 pb-4">
                  <span className="text-3xl p-2.5 rounded-2xl bg-slate-950/80 border border-white/10">{srv.icon}</span>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {srv.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {srv.description}
                </p>

                <div className="space-y-2 pt-1">
                  {srv.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                      <FaCheckCircle className="text-primary size-3 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="btn-outline text-xs py-2.5 px-5 w-full justify-center group-hover:bg-primary group-hover:text-slate-950 group-hover:border-primary transition-all font-semibold"
                >
                  {srv.ctaText}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 5. TECHNICAL STACK OVERVIEW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <Reveal as="span" className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider">
            Technical Stack
          </Reveal>
          <Reveal as="h2" delay={0.05} className="section-title">
            Skills & Development Tools
          </Reveal>
          <Reveal as="p" delay={0.1} className="section-subtitle">
            Categorized technical stack applied across production web applications and software solutions.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="card p-6 sm:p-8 flex flex-col justify-between space-y-4 group border border-white/8 hover:border-primary/40 bg-slate-900/60 backdrop-blur-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-md border border-primary/20">
                    {cat.skills.length} Items
                  </span>
                </div>
                <p className="text-xs text-slate-400">{cat.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-950/80 border border-white/8 text-slate-200 flex items-center gap-2"
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 6. ACHIEVEMENTS SECTION */}
      <Achievements />

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 7. GITHUB INTEGRATION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Reveal as="h2" className="section-title">
            GitHub Activity & Code Repositories
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-subtitle">
            Live commit activity, repository metrics, and open source code repositories
          </Reveal>
        </div>
        <GitHubOverview />
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 8. CERTIFICATIONS */}
      <Certifications />

      {/* 9. FREE PROJECT CONSULTATION BANNER */}
      <FreeConsultationBanner />
    </PageShell>
  );
};

export default Home;
