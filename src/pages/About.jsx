import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaAndroid, FaJava, FaGitAlt, FaGithub, FaCode, FaUsers,
  FaComments, FaTasks, FaLightbulb, FaBriefcase, FaGraduationCap,
  FaLaptopCode, FaCheckCircle, FaStar, FaPython, FaDocker,
  FaServer, FaBrain, FaMicrochip, FaChartBar, FaChartLine, FaTerminal,
  FaIdCard, FaMapMarkerAlt
} from 'react-icons/fa';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import { fadeUp, staggerContainer, scaleIn } from '../lib/motion';

const skillsData = [
  // Frontend
  { name: 'HTML5', category: 'Frontend', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', category: 'Frontend', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', category: 'Frontend', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React 18', category: 'Frontend', icon: <FaReact className="text-cyan-400" /> },
  { name: 'Next.js', category: 'Frontend', icon: <FaLaptopCode className="text-slate-200" /> },
  { name: 'Vite', category: 'Frontend', icon: <FaTerminal className="text-purple-400" /> },
  { name: 'Tailwind CSS', category: 'Frontend', icon: <FaCss3Alt className="text-sky-400" /> },
  { name: 'Redux Toolkit', category: 'Frontend', icon: <FaTasks className="text-purple-500" /> },
  { name: 'Framer Motion', category: 'Frontend', icon: <FaReact className="text-pink-500" /> },
  { name: 'Axios / APIs', category: 'Frontend', icon: <FaCode className="text-indigo-400" /> },

  // Backend
  { name: 'Node.js', category: 'Backend', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', category: 'Backend', icon: <FaServer className="text-slate-400" /> },
  { name: 'REST APIs', category: 'Backend', icon: <FaServer className="text-sky-400" /> },
  { name: 'JWT Auth', category: 'Backend', icon: <FaCode className="text-red-400" /> },
  { name: 'Socket.io', category: 'Backend', icon: <FaComments className="text-blue-400" /> },
  { name: 'FastAPI', category: 'Backend', icon: <FaServer className="text-emerald-400" /> },

  // Database
  { name: 'MongoDB', category: 'Database', icon: <FaDatabase className="text-green-600" /> },
  { name: 'Mongoose ODM', category: 'Database', icon: <FaCode className="text-orange-400" /> },
  { name: 'MySQL', category: 'Database', icon: <FaDatabase className="text-blue-600" /> },
  { name: 'PostgreSQL', category: 'Database', icon: <FaDatabase className="text-cyan-600" /> },

  // Machine Learning
  { name: 'Python', category: 'Machine Learning', icon: <FaPython className="text-blue-500" /> },
  { name: 'Scikit-Learn', category: 'Machine Learning', icon: <FaChartLine className="text-orange-400" /> },
  { name: 'TensorFlow', category: 'Machine Learning', icon: <FaBrain className="text-orange-500" /> },
  { name: 'Pandas', category: 'Machine Learning', icon: <FaChartBar className="text-purple-400" /> },
  { name: 'NumPy', category: 'Machine Learning', icon: <FaMicrochip className="text-blue-400" /> },
  { name: 'Hugging Face', category: 'Machine Learning', icon: <FaStar className="text-yellow-400" /> },
  { name: 'Data Analysis', category: 'Machine Learning', icon: <FaChartLine className="text-teal-400" /> },

  // Mobile
  { name: 'Android Java/Kotlin', category: 'Mobile', icon: <FaAndroid className="text-green-400" /> },
  { name: 'Firebase', category: 'Mobile', icon: <FaCode className="text-amber-500" /> },

  // Programming
  { name: 'C++', category: 'Programming', icon: <FaCode className="text-blue-400" /> },
  { name: 'Java', category: 'Programming', icon: <FaJava className="text-red-500" /> },

  // Tools
  { name: 'Git', category: 'Tools', icon: <FaGitAlt className="text-orange-600" /> },
  { name: 'GitHub', category: 'Tools', icon: <FaGithub className="text-white" /> },
  { name: 'VS Code', category: 'Tools', icon: <FaCode className="text-blue-500" /> },
  { name: 'Android Studio', category: 'Tools', icon: <FaAndroid className="text-green-500" /> },
  { name: 'Postman', category: 'Tools', icon: <FaTerminal className="text-orange-500" /> },
  { name: 'Docker', category: 'Tools', icon: <FaDocker className="text-blue-400" /> },
  { name: 'Vercel', category: 'Tools', icon: <FaServer className="text-slate-200" /> },
  { name: 'Cursor', category: 'Tools', icon: <FaCode className="text-cyan-500" /> },

  // Soft Skills
  { name: 'Teamwork', category: 'Soft Skills', icon: <FaUsers className="text-indigo-400" /> },
  { name: 'Communication', category: 'Soft Skills', icon: <FaComments className="text-sky-400" /> },
  { name: 'Management', category: 'Soft Skills', icon: <FaTasks className="text-teal-400" /> },
  { name: 'Problem Solving', category: 'Soft Skills', icon: <FaLightbulb className="text-yellow-400" /> },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Machine Learning', 'Mobile', 'Programming', 'Tools', 'Soft Skills'];

const timelineData = [
  {
    type: 'edu',
    title: 'BS Software Engineering Graduate',
    location: 'University of Central Punjab (UCP), Lahore',
    desc: 'Completed BS Software Engineering degree with strong expertise in OOP, Databases, Software Architecture, and Software Construction & Development.',
    icon: <FaGraduationCap />,
    time: 'Graduation - 2026'
  },
  {
    type: 'tech',
    title: 'AI & Machine Learning Architect (Skinzy & AML Detection)',
    location: 'Deep Learning & Applied ML',
    desc: 'Led the AI/ML design of Skinzy medical web app using PyTorch CNN model for skin classification, and AML Detection AI dashboard using Scikit-Learn on Hugging Face Spaces.',
    icon: <FaBrain />,
    time: 'Applied AI Specialization'
  },
  {
    type: 'proj',
    title: 'Smart Parking ALPR Developer',
    location: 'Software Construction Semester Project',
    desc: 'Engineered an automated desktop parking system in Java Swing (FlatLaf dark theme, JDBC, MySQL) integrated with license plate recognition using YOLOv8 & OpenCV over custom Socket transactions.',
    icon: <FaMicrochip />,
    time: 'Core Project - June 2026'
  },
  {
    type: 'proj',
    title: 'MERN Stack & SaaS Developer (Snapstrom & Order Profit)',
    location: 'Full Stack Web Engineering',
    desc: 'Built Snapstrom, a MERN photo-sharing application with secure JWT auth, Mongoose relations, and dynamic layout systems, along with Order Profit AI analytics interface.',
    icon: <FaLaptopCode />,
    time: 'Web Development'
  },
  {
    type: 'exp',
    title: 'Sales & Management Specialist',
    location: 'Professional Experience & Leadership',
    desc: 'Leveraged sales management expertise to lead team project coordination, client engagement, and high-performance agile workflows.',
    icon: <FaBriefcase />,
    time: 'Management Foundations'
  }
];

const About = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <PageShell>
      {/* Intro section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
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
            animate={{ y: [0, -12, 0], rotate: [0, 1.2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hero-photo-shell w-full h-full p-2.5 sm:p-4"
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
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-950/80 border border-primary/30 backdrop-blur-md rounded-full shadow-lg text-[10px] sm:text-xs font-semibold text-primary flex items-center gap-1.5 whitespace-nowrap"
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

          <Reveal as="h1" className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" delay={0.08}>
            Hi, I'm <span className="gradient-text">Ehsan Shahid</span>
          </Reveal>

          <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            <Reveal delay={0.16}>
              <p>
                I am Ehsan Shahid, a Software Engineering Graduate from the University of Central Punjab (UCP), Lahore. As a dedicated developer, I specialize in full-stack web engineering and applied artificial intelligence, focusing on building high-performance systems and clean user interfaces.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p>
                I have a strong track record of designing and delivering software solutions, having successfully shipped over 30 projects to more than 20 clients. I focus on writing clean, modular, and highly optimized code to build reliable and scalable software.
              </p>
            </Reveal>
          </div>

          {/* Detailed Student Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 text-left">
            {[
              {
                icon: <FaGraduationCap className="text-primary text-lg" />,
                label: "Degree",
                value: "BS Software Engineering",
                sub: "8th Semester Graduate"
              },
              {
                icon: <FaIdCard className="text-primary text-lg" />,
                label: "Graduation Year",
                value: "Class of 2026",
                sub: "UCP Software Engineering"
              },
              {
                icon: <FaMapMarkerAlt className="text-primary text-lg" />,
                label: "Alma Mater",
                value: "UCP Lahore",
                sub: "University of Central Punjab"
              },
              {
                icon: <FaLaptopCode className="text-primary text-lg" />,
                label: "Focus Areas",
                value: "Full-Stack & Applied AI",
                sub: "MERN Dev & ML Engineer"
              }
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="flex items-center gap-3.5 p-4 bg-slate-900/30 border border-white/5 hover:border-primary/20 hover:bg-slate-800/10 rounded-2xl transition-all duration-300 shadow-lg shadow-black/10"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-slate-950/60 border border-white/8 hover:border-primary/30 flex items-center justify-center rounded-xl shadow-inner transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <span className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider">{item.label}</span>
                  <span className="block text-sm font-semibold text-slate-200">{item.value}</span>
                  <span className="block text-[11px] text-slate-400">{item.sub}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* Skills Showcase Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <Reveal as="h2" className="section-title">
            Skills & Stack
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-subtitle">
            Curated list of technical and professional abilities
          </Reveal>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer border ${activeCategory === cat
                  ? 'bg-primary border-primary/50 text-white shadow-lg shadow-primary/20'
                  : 'bg-slate-900/40 border-white/5 text-slate-400 hover:border-white/15 hover:text-white hover:bg-slate-800/20'
                }`}
            >
              {cat}
            </motion.button>
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
                className="card p-4 sm:p-5 flex items-center gap-3 cursor-default"
              >
                <div className="text-2xl flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900/60 border border-white/5 flex items-center justify-center shadow-inner">
                  {s.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate">{s.name}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* Timeline Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <Reveal as="h2" className="section-title">
            Timeline
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-subtitle">
            Academic, developer progress and professional milestones
          </Reveal>
        </div>

        <div className="relative border-l border-white/8 pl-6 sm:pl-10 ml-4 space-y-12">
          {timelineData.map((node, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative"
            >
              {/* Timeline dot icon */}
              <div className="absolute -left-[45px] sm:-left-[61px] top-1.5 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-950 border border-primary/30 flex items-center justify-center text-primary text-sm sm:text-base shadow-lg">
                {node.icon}
              </div>

              {/* Content Card */}
              <div className="card p-5 sm:p-6 space-y-2">
                <span className="text-[10px] font-bold text-primary tracking-wider uppercase">{node.time}</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">{node.title}</h3>
                <span className="inline-block text-xs text-slate-400 font-medium mb-2">{node.location}</span>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{node.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default About;
