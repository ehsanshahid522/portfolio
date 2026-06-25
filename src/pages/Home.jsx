import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaGithub, FaInstagram, FaLinkedin, FaStar, 
  FaReact, FaNodeJs, FaPython, FaDatabase, FaTerminal, FaBrain 
} from 'react-icons/fa';
import GitHubOverview from '../components/GitHubOverview';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion';

const coreSkills = [
  { 
    name: 'React.js & Next.js', 
    level: '90%', 
    badge: 'Expert',
    icon: <FaReact className="text-cyan-400 animate-spin-slow" />, 
    desc: 'Developing lightning-fast client interfaces, custom hooks, and Server-Side Rendered (SSR) SaaS portals.',
    cardClass: 'skill-card-react'
  },
  { 
    name: 'Node.js & Express', 
    level: '85%', 
    badge: 'Advanced',
    icon: <FaNodeJs className="text-green-500 animate-pulse-subtle" />, 
    desc: 'Architecting secure RESTful microservices, JWT authentication, and low-latency socket structures.',
    cardClass: 'skill-card-node'
  },
  { 
    name: 'Python Systems', 
    level: '80%', 
    badge: 'Advanced',
    icon: <FaPython className="text-blue-500" />, 
    desc: 'Structuring automated scraping scripts, ML data piping, and OpenCV real-time stream layers.',
    cardClass: 'skill-card-python'
  },
  { 
    name: 'MongoDB / SQL', 
    level: '75%', 
    badge: 'Proficient',
    icon: <FaDatabase className="text-green-600" />, 
    desc: 'Designing relational relational tables, Mongoose schemas, and writing highly optimized queries.',
    cardClass: 'skill-card-mongodb'
  },
  { 
    name: 'Tailwind CSS', 
    level: '90%', 
    badge: 'Expert',
    icon: <FaTerminal className="text-cyan-500" />, 
    desc: 'Crafting premium responsive layouts using Utility classes, fluid grids, and custom styling systems.',
    cardClass: 'skill-card-tailwind'
  },
  { 
    name: 'Machine Learning & AI', 
    level: '70%', 
    badge: 'Specialist',
    icon: <FaBrain className="text-pink-500" />, 
    desc: 'Deploying deep learning CNN classifiers, Scikit models, and interactive Gradio cloud applications.',
    cardClass: 'skill-card-ml'
  },
];

const spotlightCards = [
  { value: '30+', label: 'Projects shipped', position: 'top-6 -left-4 sm:left-0' },
  { value: 'AI', label: 'Automation focus', position: 'bottom-8 -right-2 sm:right-2' },
];

const Home = () => {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 flex flex-col md:flex-row items-center gap-10 md:gap-14 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-5 sm:space-y-6 text-center md:text-left relative z-10"
        >
          <motion.span
            variants={fadeUp}
            custom={0.05}
            className="badge badge-premium inline-flex items-center gap-2"
          >
            <FaStar size={10} className="animate-pulse" />
            Available for work
          </motion.span>
          <motion.h1
            variants={fadeUp}
            custom={0.12}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            Hi, I'm <span className="gradient-text">Ehsan Shahid</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-base sm:text-lg text-[#94a3b8] max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            Software Engineer specializing in modern web applications, AI-powered tools, and full-stack solutions with a strong focus on elegant user experiences.
          </motion.p>
          <motion.div
            variants={fadeUp}
            custom={0.28}
            className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4"
          >
            <Link to="/projects" className="btn-primary text-sm sm:text-base group">
              View Projects 
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <FaArrowRight size={12} />
              </motion.span>
            </Link>
            <Link to="/contact" className="btn-outline text-sm sm:text-base">
              Contact Me
            </Link>
          </motion.div>
          
          <motion.div
            variants={fadeUp}
            custom={0.36}
            className="flex items-center justify-center md:justify-start gap-5 pt-4"
          >
            {[
              { icon: <FaGithub size={20} />, url: 'https://github.com/ehsanshahid522' },
              { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/chehsanshahid' },
              { icon: <FaInstagram size={20} />, url: 'https://instagram.com/ehsanshahid_397/' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -4, color: '#818cf8' }}
                whileTap={{ scale: 0.9 }}
                className="social-pill text-[#64748b] transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Visual Area with Floating Icons */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="hero-visual relative flex-shrink-0 order-first md:order-last"
        >
          {/* Floating tech background shapes */}
          <motion.div
            className="absolute -top-10 -left-10 text-cyan-400/25 text-4xl hidden lg:block animate-float-slow"
            style={{ zIndex: 0 }}
          >
            <FaReact />
          </motion.div>
          <motion.div
            className="absolute top-16 -right-12 text-green-500/20 text-3xl hidden lg:block animate-float-medium"
            style={{ zIndex: 0 }}
          >
            <FaNodeJs />
          </motion.div>
          <motion.div
            className="absolute -bottom-8 left-14 text-yellow-500/25 text-3xl hidden lg:block animate-float-medium"
            style={{ zIndex: 0 }}
          >
            <FaPython />
          </motion.div>
          <motion.div
            className="absolute bottom-16 right-0 text-pink-500/20 text-4xl hidden lg:block animate-float-slow"
            style={{ zIndex: 0 }}
          >
            <FaBrain />
          </motion.div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="hero-ring"
          />
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hero-photo-shell relative z-10"
          >
            <img
              src="/ehsan.jpg"
              alt="Ehsan Shahid"
              className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-80 md:h-80 object-cover rounded-[28px] border border-white/10 shadow-2xl"
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
              <span className="text-xs text-[#94a3b8]">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats Section with Top-Border Glowing Neon Accent */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { value: '30+', label: 'Projects' },
            { value: '20+', label: 'Clients' },
            { value: '2+', label: 'Years Exp.' },
            { value: '100%', label: 'Delivery' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="card stat-card p-4 sm:p-6 text-center cursor-default group relative overflow-hidden"
            >
              {/* Glowing Top Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-80 group-hover:opacity-100 group-hover:scale-x-110 transition-all duration-300" />
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 transition-all duration-300 group-hover:scale-105">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[#94a3b8]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* Skills Section - Redesigned Interactive Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Reveal as="h2" className="section-title">
          Skills & Stack
        </Reveal>
        <Reveal as="p" delay={0.08} className="section-subtitle">
          Core technologies I specialize in and apply to projects
        </Reveal>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`card p-6 sm:p-7 flex flex-col justify-between cursor-default transition-all duration-300 relative overflow-hidden group ${skill.cardClass}`}
            >
              {/* Glowing Top Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/10 to-transparent group-hover:via-primary/50 transition-all duration-300" />
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-3xl w-12 h-12 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-primary/20 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-[#1e293b] text-[#94a3b8] group-hover:bg-primary group-hover:text-white px-2.5 py-1 rounded-md border border-white/5 transition-colors duration-300">
                    {skill.badge} ({skill.level})
                  </span>
                </div>
                
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed mt-2">
                    {skill.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* GitHub section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <Reveal as="h2" className="section-title">
          GitHub
        </Reveal>
        <Reveal as="p" delay={0.08} className="section-subtitle">
          My open source activity
        </Reveal>
        <GitHubOverview />
      </section>
    </PageShell>
  );
};

export default Home;
