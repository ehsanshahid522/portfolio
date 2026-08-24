import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaReact, FaNodeJs, FaPython, FaBrain,
  FaMobileAlt, FaWhatsapp, FaCheckCircle, FaExclamationTriangle, FaLightbulb, FaExternalLinkAlt, FaGithub
} from 'react-icons/fa';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/common/SectionHeader';
import SocialLinks from '../components/common/SocialLinks';
import DevelopmentProcess from '../components/DevelopmentProcess';
import WhyWorkWithMe from '../components/WhyWorkWithMe';
import FreeConsultationBanner from '../components/FreeConsultationBanner';
import ContactForm from '../components/ContactForm';
import ProjectCaseStudyModal from '../components/ProjectCaseStudyModal';
import GitHubOverview from '../components/GitHubOverview';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import Stats from '../components/Stats';
import skillCategories from '../data/skills';
import services from '../data/services';
import projects from '../data/projects';
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion';

const spotlightCards = [
  { value: '30+', label: 'Projects Shipped', position: 'top-4 -left-3 sm:left-0' },
  { value: 'AI & MERN', label: 'Full Stack Focus', position: 'bottom-6 -right-2 sm:right-2' },
];

const Home = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <PageShell>
      {/* 1. HERO SECTION - Killer Client Conversion Headline */}
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-semibold text-emerald-400 shadow-md backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>🟢 Available for Freelance Projects</span>
          </motion.div>

          {/* Greeting & Name */}
          <motion.div variants={fadeUp} custom={0.12} className="space-y-1.5">
            <p className="text-lg sm:text-xl font-bold text-primary tracking-wide">
              👋 Hi, I'm Ehsan Shahid
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              I Build Modern Web Applications & <span className="gradient-text">AI-Powered Solutions</span>
            </h1>
          </motion.div>

          {/* Tech Subtitle Badges */}
          <motion.div
            variants={fadeUp}
            custom={0.18}
            className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1"
          >
            <span className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold flex items-center gap-1.5">
              <FaReact /> MERN Stack Specialist
            </span>
            <span className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold flex items-center gap-1.5">
              <FaMobileAlt /> React Native Apps
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
              <FaBrain /> AI Integration Specialist
            </span>
          </motion.div>

          {/* Client Description */}
          <motion.p
            variants={fadeUp}
            custom={0.24}
            className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Full Stack Developer specializing in MERN Stack. I help startups and businesses turn ideas into fast, scalable and user-friendly digital products.
          </motion.p>

          {/* 2 Main Action CTAs */}
          <motion.div
            variants={fadeUp}
            custom={0.28}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3.5 pt-2"
          >
            <Link to="/projects" className="btn-primary text-xs sm:text-sm group py-3.5 px-7 shadow-xl">
              View My Work
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <FaArrowRight size={12} />
              </motion.span>
            </Link>

            <a
              href="https://wa.me/923457124397?text=Hi%20Ehsan,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="btn-outline text-xs sm:text-sm py-3.5 px-6 flex items-center gap-2 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 font-bold"
            >
              <FaWhatsapp size={16} /> Let's Work Together
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeUp} custom={0.32}>
            <SocialLinks />
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
              alt="Ehsan Shahid - Full Stack Developer"
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

      {/* 3. CLIENT SERVICES SECTION (Priority 2) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <SectionHeader
          tag="Solutions Offered"
          title="What I Can Build For You"
          subtitle="Tailored digital development services built to turn your vision into a scalable, high-converting product."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="card p-6 sm:p-7 flex flex-col justify-between space-y-5 group border border-white/8 hover:border-primary/40 bg-slate-900/70 backdrop-blur-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 border-b border-white/8 pb-4">
                  <span className="text-3xl p-2.5 rounded-2xl bg-slate-950/80 border border-white/10">{srv.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-[11px] text-primary font-medium">{srv.shortDesc}</p>
                  </div>
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

      {/* 4. FEATURED PROJECTS SHOWCASE WITH CASE STUDY MODAL (Priority 3 & 4) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <SectionHeader
          tag="Proven Track Record"
          title="Featured Projects & Case Studies"
          subtitle="Real-world applications with visual feature badges and detailed engineering case studies."
        />

        <div className="space-y-10">
          {projects.filter(p => p.featured).map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="card p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 hover:border-primary/40 bg-slate-900/80 backdrop-blur-2xl"
            >
              {/* Image Preview */}
              <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-52 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-slate-900/90 border border-primary/30 text-primary backdrop-blur-md">
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    {proj.tagline}
                  </p>
                </div>

                {/* Requested Visual Feature Badges (Priority 3) */}
                <div className="flex flex-wrap gap-2 py-1">
                  {proj.featureBadges?.map(badge => (
                    <span key={badge} className="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-950/90 border border-cyan-500/25 text-cyan-300">
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs text-slate-300 space-y-0.5">
                    <span className="font-bold text-rose-400 flex items-center gap-1">
                      <FaExclamationTriangle size={11} /> Problem:
                    </span>
                    <p>{proj.problem}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-slate-300 space-y-0.5">
                    <span className="font-bold text-emerald-400 flex items-center gap-1">
                      <FaLightbulb size={11} /> Solution:
                    </span>
                    <p>{proj.solution}</p>
                  </div>
                </div>

                {/* Action Buttons (Priority 3) */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setSelectedCaseStudy(proj)}
                    className="btn-primary text-xs py-2.5 px-5 shadow-lg"
                  >
                    Case Study →
                  </button>

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline text-xs py-2.5 px-4"
                    >
                      Live Demo →
                    </a>
                  )}

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline text-xs py-2.5 px-4"
                    >
                      <FaGithub size={13} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link to="/projects" className="btn-outline text-xs sm:text-sm py-3 px-8 inline-flex items-center gap-2">
            View All Projects & Code <FaArrowRight size={12} />
          </Link>
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 5. DEVELOPMENT PROCESS SECTION (Priority 13) */}
      <DevelopmentProcess />

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 6. WHY WORK WITH ME (Priority 5) */}
      <WhyWorkWithMe />

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 7. TECHNICAL STACK OVERVIEW (Priority 9) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <SectionHeader
          tag="Technical Stack"
          title="Skills & Technologies"
          subtitle="Categorized technical stack applied across production web applications and software solutions."
        />

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

      {/* 8. ACHIEVEMENTS & MILESTONES */}
      <Achievements />

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 9. GITHUB INTEGRATION (Priority 11) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
        <SectionHeader
          title="GitHub Activity & Repositories"
          subtitle="Live commit activity, repository metrics, and open source code repositories"
          className="mb-8"
        />
        <GitHubOverview />
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 10. CERTIFICATIONS */}
      <Certifications />

      {/* 11. FINAL CTA BANNER (Priority 6) */}
      <FreeConsultationBanner />

      {/* 12. CONTACT FORM SECTION WITH BUDGET FILTER (Priority 7) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <ContactForm />
      </section>

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
