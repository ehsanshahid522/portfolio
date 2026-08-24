import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaAndroid, FaGitAlt, FaGithub, FaCode, FaComments, FaTasks,
  FaBriefcase, FaGraduationCap, FaLaptopCode, FaStar, FaPython,
  FaServer, FaBrain, FaMicrochip, FaChartLine, FaTerminal, FaMobileAlt, FaBullseye
} from 'react-icons/fa';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/common/SectionHeader';
import { fadeUp } from '../lib/motion';

const skillsData = [
  { name: 'React 18', category: 'Frontend', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', category: 'Frontend', icon: <FaLaptopCode className="text-slate-200" /> },
  { name: 'JavaScript (ES6+)', category: 'Frontend', icon: <FaJs className="text-yellow-400" /> },
  { name: 'HTML5', category: 'Frontend', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', category: 'Frontend', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Tailwind CSS', category: 'Frontend', icon: <FaCss3Alt className="text-sky-400" /> },
  { name: 'Redux Toolkit', category: 'Frontend', icon: <FaTasks className="text-purple-500" /> },
  { name: 'Node.js', category: 'Backend', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', category: 'Backend', icon: <FaServer className="text-slate-400" /> },
  { name: 'JWT Auth', category: 'Backend', icon: <FaCode className="text-red-400" /> },
  { name: 'REST APIs', category: 'Backend', icon: <FaServer className="text-sky-400" /> },
  { name: 'Socket.io', category: 'Backend', icon: <FaComments className="text-blue-400" /> },
  { name: 'FastAPI', category: 'Backend', icon: <FaServer className="text-emerald-400" /> },
  { name: 'MongoDB', category: 'Database', icon: <FaDatabase className="text-green-600" /> },
  { name: 'Mongoose ODM', category: 'Database', icon: <FaCode className="text-orange-400" /> },
  { name: 'MySQL', category: 'Database', icon: <FaDatabase className="text-blue-600" /> },
  { name: 'Firebase', category: 'Database', icon: <FaCode className="text-amber-500" /> },
  { name: 'React Native', category: 'Mobile', icon: <FaMobileAlt className="text-cyan-400" /> },
  { name: 'Expo SDK', category: 'Mobile', icon: <FaMobileAlt className="text-slate-200" /> },
  { name: 'Android Java', category: 'Mobile', icon: <FaAndroid className="text-green-400" /> },
  { name: 'Python', category: 'AI & ML', icon: <FaPython className="text-blue-500" /> },
  { name: 'PyTorch (CNN)', category: 'AI & ML', icon: <FaBrain className="text-orange-500" /> },
  { name: 'OpenCV / YOLOv8', category: 'AI & ML', icon: <FaMicrochip className="text-emerald-400" /> },
  { name: 'Scikit-Learn', category: 'AI & ML', icon: <FaChartLine className="text-amber-400" /> },
  { name: 'Git', category: 'Tools', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'GitHub', category: 'Tools', icon: <FaGithub className="text-white" /> },
  { name: 'Postman', category: 'Tools', icon: <FaTerminal className="text-orange-500" /> },
  { name: 'VS Code', category: 'Tools', icon: <FaCode className="text-blue-500" /> },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Mobile', 'AI & ML', 'Tools'];

// Requested Credible Journey Timeline (Priority 10)
const timelineNodes = [
  {
    year: '2024',
    title: 'Started Software Engineering',
    subtitle: 'University of Central Punjab (UCP)',
    desc: 'Began deep dive into core computer science, software architecture, object-oriented programming, and database systems.',
    icon: <FaGraduationCap className="text-cyan-400" />,
    badge: 'Foundation'
  },
  {
    year: '2025',
    title: 'Built Full Stack Projects',
    subtitle: 'MERN Stack Web Engineering',
    desc: 'Engineered production-level full-stack applications like Snapstrom with role-based auth, REST APIs, and MongoDB indexing.',
    icon: <FaLaptopCode className="text-emerald-400" />,
    badge: 'Full Stack'
  },
  {
    year: '2026',
    title: 'Expanded into AI & Full Stack Development',
    subtitle: 'AI Telemedicine & SaaS Analytics',
    desc: 'Engineered Skinzy PyTorch CNN classification engine, FastAPI microservices, and specialized in AI integrations.',
    icon: <FaBrain className="text-pink-400" />,
    badge: 'AI & MERN'
  },
  {
    year: 'Now',
    title: 'Available for Freelance & Collaboration',
    subtitle: 'Full Stack & AI Developer',
    desc: 'Helping startups and businesses build modern websites, scalable web applications, and AI-powered digital products.',
    icon: <FaBriefcase className="text-amber-400" />,
    badge: 'Open for Work'
  }
];

const About = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <PageShell>
      {/* 1. STORYTELLING INTRO SECTION (Priority 8) */}
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
            About Me
          </motion.span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
            Full Stack MERN & <span className="gradient-text">AI Developer</span>
          </h1>

          {/* Requested Storytelling Copy (Priority 8) */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
            I'm a Full Stack Developer who enjoys turning ideas into real, functional products. From modern business websites to complex MERN applications and AI-powered features, I focus on building solutions that are fast, user-friendly and scalable.
          </p>

          {/* Requested Core Focus Pills (Priority 8) */}
          <div className="space-y-2 pt-2 text-left">
            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">My Core Focus:</span>
            <div className="flex flex-wrap gap-2.5">
              {['Web Development', 'Full Stack Applications', 'AI Integration'].map((focus) => (
                <span key={focus} className="text-xs font-bold px-4 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary flex items-center gap-2">
                  <FaBullseye className="text-primary" /> {focus}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 2. CREDIBLE JOURNEY TIMELINE (Priority 10) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeader
          tag="My Progression"
          title="My Journey"
          subtitle="How I evolved from foundational software engineering into full-stack MERN & AI development."
        />

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
              <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950 border border-primary/40 flex items-center justify-center text-primary text-base shadow-xl">
                {node.icon}
              </div>

              <div className="card p-6 space-y-3 border border-white/10 hover:border-primary/40 bg-slate-900/80 backdrop-blur-xl">
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

      <div className="section-divider max-w-6xl mx-auto" />

      {/* 3. VISUALLY ORGANIZED SKILLS SHOWCASE (Priority 9) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <SectionHeader
          tag="Technical Stack"
          title="Skills & Technologies"
          subtitle="Categorized technical capabilities applied across production web applications."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
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
                className="card p-4 flex items-center gap-3 cursor-default border border-white/8"
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
    </PageShell>
  );
};

export default About;
