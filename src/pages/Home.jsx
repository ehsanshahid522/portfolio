import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaGithub, FaInstagram, FaLinkedin, FaStar, 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaBrain, FaDownload,
  FaMobileAlt, FaServer, FaCode, FaCheckCircle, FaLaptopCode
} from 'react-icons/fa';
import GitHubOverview from '../components/GitHubOverview';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import SkinzySpotlight from '../components/SkinzySpotlight';
import Stats from '../components/Stats';
import Achievements from '../components/Achievements';
import Certifications from '../components/Certifications';
import skillCategories from '../data/skills';
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion';

const spotlightCards = [
  { value: '30+', label: 'Projects Shipped', position: 'top-6 -left-4 sm:left-0' },
  { value: 'AI & MERN', label: 'Full Stack Focus', position: 'bottom-8 -right-2 sm:right-2' },
];

const Home = () => {
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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-primary/30 text-xs font-semibold text-primary shadow-lg backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>BS Software Engineering Graduate — Open for Work</span>
          </motion.div>

          {/* Name & Title */}
          <motion.div variants={fadeUp} custom={0.12} className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
              Ehsan Shahid
            </h1>
            <div className="text-xl sm:text-2xl font-bold text-primary tracking-wide">
              Software Engineer
            </div>
          </motion.div>

          {/* Subtitles Pill Badges */}
          <motion.div
            variants={fadeUp}
            custom={0.18}
            className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-1"
          >
            <span className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5">
              <FaReact /> Full Stack MERN Developer
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5">
              <FaMobileAlt /> React Native Developer
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs sm:text-sm font-semibold flex items-center gap-1.5">
              <FaBrain /> AI-Powered Application Developer
            </span>
          </motion.div>

          {/* Recruiter 2-3 Line Description */}
          <motion.p
            variants={fadeUp}
            custom={0.24}
            className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Software Engineering graduate specializing in Full Stack MERN development, React Native, and AI-powered applications. I build scalable web and mobile solutions with clean code, modern UI, and production-ready architectures.
          </motion.p>

          {/* 2 CTA Buttons */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-3"
          >
            {/* CTA 1: View Projects */}
            <Link to="/projects" className="btn-primary text-sm sm:text-base group py-3 px-7">
              View Projects 
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <FaArrowRight size={13} />
              </motion.span>
            </Link>

            {/* CTA 2: Contact Me */}
            <Link to="/contact" className="btn-outline text-sm sm:text-base py-3 px-7">
              Contact Me
            </Link>
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
          {/* Creative Floating Tech Orbit Icons */}
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
          <div className="absolute top-1/2 -left-16 -translate-y-1/2 text-purple-400/35 text-3xl hidden lg:block animate-float-fast drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]" style={{ zIndex: 0 }}>
            <FaMobileAlt />
          </div>
          <div className="absolute -top-6 right-8 text-blue-400/35 text-3xl hidden lg:block animate-float-fast drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]" style={{ zIndex: 0 }}>
            <FaDatabase />
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
              alt="Ehsan Shahid - Software Engineer"
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

      {/* 3. FEATURED SKINZY SPOTLIGHT */}
      <SkinzySpotlight />

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 4. CATEGORIZED SKILLS OVERVIEW */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Reveal as="h2" className="section-title">
            Technical Stack & Capabilities
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-subtitle">
            Categorized technical stack applied across production applications
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="card p-6 flex flex-col justify-between space-y-4 group relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-white/8 pb-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-mono font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-md border border-primary/20">
                    {cat.skills.length} Stack Items
                  </span>
                </div>
                <p className="text-xs text-slate-400">{cat.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-950/70 border border-white/8 text-slate-200 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: skill.color }} />
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

      {/* 5. ACHIEVEMENTS SECTION */}
      <Achievements />

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 6. GITHUB INTEGRATION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal as="h2" className="section-title">
            GitHub Activity & Repositories
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-subtitle">
            Live commit activity, repository metrics, and open source code repositories
          </Reveal>
        </div>
        <GitHubOverview />
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 7. CERTIFICATIONS */}
      <Certifications />

      {/* BOTTOM CTA BANNER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="card p-8 sm:p-12 space-y-6 relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-primary/30 shadow-2xl">
          <div className="text-3xl sm:text-4xl font-bold text-white">
            Ready to hire a skilled <span className="gradient-text">Software Engineer</span>?
          </div>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            I am available for full-time Software Engineer, MERN Stack Developer, and React Native opportunities. Let's discuss your product requirements.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/contact" className="btn-primary text-sm px-8 py-3.5">
              Get In Touch <FaArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Home;
