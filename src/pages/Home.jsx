import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaGithub, FaInstagram, FaLinkedin, 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaBrain,
  FaMobileAlt, FaWhatsapp, FaExternalLinkAlt, FaCheckCircle,
  FaExclamationTriangle, FaLightbulb, FaLayerGroup
} from 'react-icons/fa';
import GitHubOverview from '../components/GitHubOverview';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import Stats from '../components/Stats';
import WhyWorkWithMe from '../components/WhyWorkWithMe';
import FreeConsultationBanner from '../components/FreeConsultationBanner';
import ProjectCaseStudyModal from '../components/ProjectCaseStudyModal';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import skillCategories from '../data/skills';
import services from '../data/services';
import projects from '../data/projects';
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion';

const spotlightCards = [
  { value: '30+', label: 'Projects Shipped', position: 'top-6 -left-4 sm:left-0' },
  { value: 'AI & MERN', label: 'Full Stack Focus', position: 'bottom-8 -right-2 sm:right-2' },
];

const Home = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <PageShell>
      {/* 1. HERO SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-28 flex flex-col md:flex-row items-center gap-10 md:gap-14 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-6 text-center md:text-left relative z-10"
        >
          {/* Status Badge */}
          <motion.div
            variants={fadeUp}
            custom={0.05}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-semibold text-emerald-400 shadow-lg backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>🟢 Available for Freelance Projects & Full-time Roles</span>
          </motion.div>

          {/* Client-Focused Headline */}
          <motion.div variants={fadeUp} custom={0.12} className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              I Build Modern Websites & Web Applications That <span className="gradient-text">Help Businesses Grow</span>
            </h1>
          </motion.div>

          {/* Subtitle Badges */}
          <motion.div
            variants={fadeUp}
            custom={0.18}
            className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-1"
          >
            <span className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5">
              <FaReact /> Full Stack MERN Developer
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5">
              <FaMobileAlt /> React Native Apps
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5">
              <FaBrain /> AI Integration Specialist
            </span>
          </motion.div>

          {/* Client-Focused Bio Description */}
          <motion.p
            variants={fadeUp}
            custom={0.24}
            className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            I'm <strong>Ehsan Shahid</strong>, a Full Stack & AI Developer specializing in React, Node.js, MERN Stack, and AI integrations. I help startups and businesses turn their ideas into fast, modern, and scalable digital products.
          </motion.p>

          {/* 2 Main Action CTAs */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-3"
          >
            <Link to="/projects" className="btn-primary text-sm sm:text-base group py-3.5 px-8">
              View My Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <FaArrowRight size={13} />
              </motion.span>
            </Link>

            <a
              href="https://wa.me/923000000000?text=Hi%20Ehsan,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-sm sm:text-base py-3.5 px-7 flex items-center gap-2 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
            >
              <FaWhatsapp size={16} /> Let's Work Together
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            custom={0.36}
            className="flex items-center justify-center md:justify-start gap-4 pt-2"
          >
            {[
              { icon: <FaGithub size={20} />, url: 'https://github.com/ehsanshahid522', label: 'GitHub' },
              { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/chehsanshahid', label: 'LinkedIn' },
              { icon: <FaInstagram size={20} />, url: 'https://instagram.com/ehsanshahid_397/', label: 'Instagram' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -4, color: '#818cf8' }}
                whileTap={{ scale: 0.9 }}
                className="social-pill text-slate-400 transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Visual Photo Shell */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="hero-visual relative flex-shrink-0 order-first md:order-last"
        >
          <div className="absolute -top-12 -left-12 text-cyan-400/40 text-4xl hidden lg:block animate-float-slow drop-shadow-[0_0_12px_rgba(34,211,238,0.5)]" style={{ zIndex: 0 }}>
            <FaReact />
          </div>
          <div className="absolute top-10 -right-14 text-emerald-400/40 text-3xl hidden lg:block animate-float-medium drop-shadow-[0_0_12px_rgba(16,185,129,0.5)]" style={{ zIndex: 0 }}>
            <FaNodeJs />
          </div>
          <div className="absolute -bottom-10 left-10 text-yellow-400/40 text-3xl hidden lg:block animate-float-medium drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]" style={{ zIndex: 0 }}>
            <FaPython />
          </div>
          <div className="absolute bottom-12 -right-10 text-pink-400/40 text-4xl hidden lg:block animate-float-slow drop-shadow-[0_0_12px_rgba(236,72,153,0.5)]" style={{ zIndex: 0 }}>
            <FaBrain />
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="hero-ring"
          />

          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hero-photo-shell relative z-10 p-3 sm:p-4 rounded-[32px] bg-slate-900/60 border border-white/12 shadow-2xl"
          >
            <img
              src="/ehsan.jpg"
              alt="Ehsan Shahid - Full Stack & AI Developer"
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover rounded-[26px] border border-white/10 shadow-2xl"
            />
          </motion.div>

          {spotlightCards.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, index === 0 ? -10 : 10, 0] }}
              transition={{
                opacity: { delay: 0.45 + index * 0.1, duration: 0.45 },
                scale: { delay: 0.45 + index * 0.1, duration: 0.45 },
                y: { duration: 6 + index, repeat: Infinity, ease: 'easeInOut' },
              }}
              className={`floating-panel ${item.position} z-20`}
            >
              <span className="text-lg font-bold text-white">{item.value}</span>
              <span className="text-xs text-slate-400">{item.label}</span>
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
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
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="card p-6 sm:p-8 flex flex-col justify-between space-y-6 group border border-white/8 hover:border-primary/40 bg-slate-900/70 backdrop-blur-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/8 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2.5 rounded-2xl bg-slate-950/80 border border-white/10">{srv.icon}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {srv.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {srv.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 pt-2">
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

      {/* 5. FEATURED CLIENT-CONVERTING PROJECTS */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Reveal as="span" className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider">
            Proven Track Record
          </Reveal>
          <Reveal as="h2" delay={0.05} className="section-title">
            Featured Projects & Case Studies
          </Reveal>
          <Reveal as="p" delay={0.1} className="section-subtitle">
            Detailed problem-solution breakdowns demonstrating real technical impact and business value.
          </Reveal>
        </div>

        <div className="space-y-12">
          {projects.filter(p => p.featured).map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="card p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 hover:border-primary/40 bg-slate-900/80 backdrop-blur-2xl"
            >
              {/* Left Column: Image Preview */}
              <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-56 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-slate-900/90 border border-primary/30 text-primary backdrop-blur-md">
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Right Column: Problem -> Solution -> Features */}
              <div className="lg:col-span-7 space-y-5">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    {proj.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-medium">
                    {proj.tagline}
                  </p>
                </div>

                {/* Problem Box */}
                <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs sm:text-sm text-slate-300 space-y-1">
                  <span className="font-bold text-rose-400 flex items-center gap-1.5">
                    <FaExclamationTriangle /> The Problem:
                  </span>
                  <p>{proj.problem}</p>
                </div>

                {/* Solution Box */}
                <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs sm:text-sm text-slate-300 space-y-1">
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <FaLightbulb /> The Solution:
                  </span>
                  <p>{proj.solution}</p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {proj.technologies.map(tech => (
                    <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-950/80 border border-white/8 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedCaseStudy(proj)}
                    className="btn-primary text-xs py-2.5 px-5"
                  >
                    📸 View Case Study
                  </button>

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline text-xs py-2.5 px-4"
                    >
                      🌐 Live Demo <FaExternalLinkAlt size={10} />
                    </a>
                  )}

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline text-xs py-2.5 px-4"
                    >
                      <FaGithub size={13} /> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-10">
          <Link to="/projects" className="btn-outline text-sm py-3 px-8 inline-flex items-center gap-2">
            View All Projects & Code <FaArrowRight size={12} />
          </Link>
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 6. CATEGORIZED SKILLS OVERVIEW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Reveal as="span" className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider">
            Technical Stack
          </Reveal>
          <Reveal as="h2" delay={0.05} className="section-title">
            Skills & Development Tools
          </Reveal>
          <Reveal as="p" delay={0.1} className="section-subtitle">
            Categorized technical stack applied across production applications and software solutions.
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
              whileHover={{ y: -6 }}
              className="card p-6 sm:p-8 flex flex-col justify-between space-y-4 group border border-white/8 hover:border-primary/40 bg-slate-900/60 backdrop-blur-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-md border border-primary/20">
                    {cat.skills.length} Items
                  </span>
                </div>
                <p className="text-xs text-slate-400">{cat.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
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

      {/* 7. ACHIEVEMENTS SECTION */}
      <Achievements />

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 8. GITHUB INTEGRATION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
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

      {/* 9. CERTIFICATIONS */}
      <Certifications />

      {/* 10. FREE PROJECT CONSULTATION BANNER */}
      <FreeConsultationBanner />

      {/* CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <ProjectCaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}
    </PageShell>
  );
};

export default Home;
