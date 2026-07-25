import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaAndroid, FaJava, FaGitAlt, FaGithub, FaCode, FaUsers,
  FaComments, FaTasks, FaLightbulb, FaBriefcase, FaGraduationCap,
  FaLaptopCode, FaCheckCircle, FaStar, FaPython, FaDocker,
  FaServer, FaBrain, FaMicrochip, FaChartBar, FaChartLine, FaTerminal,
  FaIdCard, FaMapMarkerAlt, FaDownload, FaMobileAlt, FaLayerGroup
} from 'react-icons/fa';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import { fadeUp, staggerContainer, scaleIn } from '../lib/motion';

const skillsData = [
  // Frontend
  { name: 'React 18', category: 'Frontend', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', category: 'Frontend', icon: <FaLaptopCode className="text-slate-200" /> },
  { name: 'JavaScript (ES6+)', category: 'Frontend', icon: <FaJs className="text-yellow-400" /> },
  { name: 'HTML5', category: 'Frontend', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', category: 'Frontend', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Tailwind CSS', category: 'Frontend', icon: <FaCss3Alt className="text-sky-400" /> },
  { name: 'Redux Toolkit', category: 'Frontend', icon: <FaTasks className="text-purple-500" /> },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', category: 'Backend', icon: <FaServer className="text-slate-400" /> },
  { name: 'JWT Auth', category: 'Backend', icon: <FaCode className="text-red-400" /> },
  { name: 'REST APIs', category: 'Backend', icon: <FaServer className="text-sky-400" /> },
  { name: 'Socket.io', category: 'Backend', icon: <FaComments className="text-blue-400" /> },
  { name: 'FastAPI', category: 'Backend', icon: <FaServer className="text-emerald-400" /> },

  // Database
  { name: 'MongoDB', category: 'Database', icon: <FaDatabase className="text-green-600" /> },
  { name: 'Mongoose ODM', category: 'Database', icon: <FaCode className="text-orange-400" /> },
  { name: 'MySQL', category: 'Database', icon: <FaDatabase className="text-blue-600" /> },
  { name: 'Firebase', category: 'Database', icon: <FaCode className="text-amber-500" /> },

  // Mobile
  { name: 'React Native', category: 'Mobile', icon: <FaMobileAlt className="text-cyan-400" /> },
  { name: 'Expo SDK', category: 'Mobile', icon: <FaMobileAlt className="text-slate-200" /> },
  { name: 'Android Java', category: 'Mobile', icon: <FaAndroid className="text-green-400" /> },
  { name: 'Kotlin', category: 'Mobile', icon: <FaAndroid className="text-purple-400" /> },

  // AI & ML
  { name: 'Python', category: 'AI & ML', icon: <FaPython className="text-blue-500" /> },
  { name: 'PyTorch (CNN)', category: 'AI & ML', icon: <FaBrain className="text-orange-500" /> },
  { name: 'OpenCV / YOLOv8', category: 'AI & ML', icon: <FaMicrochip className="text-emerald-400" /> },
  { name: 'Scikit-Learn', category: 'AI & ML', icon: <FaChartLine className="text-amber-400" /> },
  { name: 'Flask', category: 'AI & ML', icon: <FaServer className="text-teal-400" /> },

  // Tools
  { name: 'Git', category: 'Tools', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'GitHub', category: 'Tools', icon: <FaGithub className="text-white" /> },
  { name: 'Postman', category: 'Tools', icon: <FaTerminal className="text-orange-500" /> },
  { name: 'VS Code', category: 'Tools', icon: <FaCode className="text-blue-500" /> },
  { name: 'Android Studio', category: 'Tools', icon: <FaAndroid className="text-green-500" /> },
  { name: 'Cursor AI', category: 'Tools', icon: <FaCode className="text-cyan-500" /> },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Mobile', 'AI & ML', 'Tools'];

const timelineNodes = [
  {
    year: '2026',
    title: 'BS Software Engineering Graduate',
    subtitle: 'University of Central Punjab (UCP), Lahore',
    desc: 'Completed BS Software Engineering degree with core focus on Software Architecture, OOP, Operating Systems, Database Systems, and Applied AI.',
    icon: <FaGraduationCap className="text-cyan-400" />,
    badge: 'Education'
  },
  {
    year: 'Skinzy',
    title: 'AI Telemedicine Platform Developer',
    subtitle: 'Deep Learning & Medical Systems',
    desc: 'Engineered Skinzy AI telemedicine web app utilizing PyTorch CNN classifier, FastAPI asynchronous backend, and customized medical remedies engine.',
    icon: <FaBrain className="text-pink-400" />,
    badge: 'AI Telemedicine'
  },
  {
    year: 'Snapstrom',
    title: 'MERN Stack Web Developer',
    subtitle: 'Full Stack Web Engineering',
    desc: 'Built Snapstrom photo-sharing SaaS web application featuring JWT authentication, role-based controls, dynamic React UI, and MongoDB databases.',
    icon: <FaLaptopCode className="text-emerald-400" />,
    badge: 'MERN Stack'
  },
  {
    year: 'React Native',
    title: 'Mobile Application Developer',
    subtitle: 'Cross-Platform Mobile Apps',
    desc: 'Designed and built React Native & Expo mobile application interfaces with responsive layouts, state management, and API connections.',
    icon: <FaMobileAlt className="text-purple-400" />,
    badge: 'Mobile Engineering'
  },
  {
    year: 'Looking For Role',
    title: 'Software Engineer / MERN Developer',
    subtitle: 'Open for Full-Time Opportunities',
    desc: 'Actively interviewing for Software Engineer, Full Stack MERN, and React Native positions to build production-level scalable applications.',
    icon: <FaBriefcase className="text-amber-400" />,
    badge: 'Career Target'
  }
];

const About = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <PageShell>
      {/* 1. INTRO & PHOTO SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-shrink-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="hero-ring"
          />
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 1.2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hero-photo-shell w-full h-full p-3 sm:p-4"
          >
            <img
              src="/IMG_8341.jpg"
              alt="Ehsan Shahid"
              className="w-full h-full object-cover rounded-[28px] border border-white/10 shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-950/90 border border-primary/30 backdrop-blur-md rounded-full shadow-lg text-xs font-semibold text-primary flex items-center gap-1.5 whitespace-nowrap"
          >
            <FaStar className="animate-pulse" /> UCP Software Engineering Graduate
          </motion.div>
        </motion.div>

        <div className="flex-1 space-y-6 text-center lg:text-left">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="badge badge-premium"
          >
            About Ehsan Shahid
          </motion.span>

          <Reveal as="h1" className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white" delay={0.08}>
            Software Engineer & <span className="gradient-text">Full Stack Developer</span>
          </Reveal>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Software Engineering graduate from the University of Central Punjab (UCP), Lahore. Specialized in building production-ready web and mobile applications with clean architecture, robust security, and seamless user experiences.
          </p>

          {/* 3 MANDATORY RECRUITER STRUCTURED BLOCKS */}
          <div className="grid grid-cols-1 gap-4 pt-2 text-left">
            {/* Block 1: Who am I */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/8 space-y-1">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Who Am I</span>
              <p className="text-sm font-semibold text-slate-100">
                Software Engineering graduate from University of Central Punjab (UCP), Lahore.
              </p>
              <p className="text-xs text-slate-400">Class of 2026 | Specialized in Software Engineering & AI.</p>
            </div>

            {/* Block 2: What do I build */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/8 space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">What Do I Build</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Full Stack Web Applications', 'React Native Apps', 'REST APIs', 'AI Solutions'].map((item) => (
                  <span key={item} className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Block 3: What do I enjoy */}
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/8 space-y-1">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">What Do I Enjoy</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {['Continuous Learning', 'Complex Problem Solving', 'Clean Code Architecture', 'System Design'].map((item) => (
                  <span key={item} className="text-xs font-semibold px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300">
                    ★ {item}
                  </span>
                ))}
              </div>
            </div>
          </div>


        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 2. CATEGORIZED SKILLS SHOWCASE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal as="h2" className="section-title">
            Skills & Technical Stack
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-subtitle">
            Categorized technical capabilities and development tools
          </Reveal>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${activeCategory === cat
                  ? 'bg-primary border-primary/50 text-white shadow-lg shadow-primary/20 scale-105'
                  : 'bg-slate-900/50 border-white/8 text-slate-400 hover:border-white/20 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((s, idx) => (
              <motion.div
                key={s.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ duration: 0.25, delay: idx * 0.02 }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="card p-4 flex items-center gap-3 cursor-default"
              >
                <div className="text-2xl flex-shrink-0 w-9 h-9 rounded-xl bg-slate-900/80 border border-white/8 flex items-center justify-center shadow-inner">
                  {s.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate">{s.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 3. EXPERIENCE TIMELINE SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal as="h2" className="section-title">
            Experience & Milestone Timeline
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-subtitle">
            Academic degree progress and major production engineering projects
          </Reveal>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 pl-6 sm:pl-10 ml-4 space-y-12">
          {timelineNodes.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {/* Timeline dot icon */}
              <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950 border border-primary/40 flex items-center justify-center text-primary text-base shadow-xl">
                {node.icon}
              </div>

              {/* Node Card */}
              <div className="card p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-3 py-1 rounded-md border border-primary/20">
                    {node.year}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-white/5">
                    {node.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white">{node.title}</h3>
                <span className="inline-block text-xs font-semibold text-primary/90">{node.subtitle}</span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{node.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default About;
