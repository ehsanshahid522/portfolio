import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGithub, FaInstagram, FaLinkedin, FaStar } from 'react-icons/fa';
import GitHubOverview from '../components/GitHubOverview';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion';

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Machine Learning', level: 70 },
];

const spotlightCards = [
  { value: '30+', label: 'Projects shipped', position: 'top-6 -left-4 sm:left-0' },
  { value: 'AI', label: 'Automation focus', position: 'bottom-8 -right-2 sm:right-2' },
];

const Home = () => {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 flex flex-col md:flex-row items-center gap-10 md:gap-14">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-5 sm:space-y-6 text-center md:text-left"
        >
          <motion.span
            variants={fadeUp}
            custom={0.05}
            className="badge badge-premium inline-flex items-center gap-2"
          >
            <FaStar size={10} />
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
                whileHover={{ scale: 1.15, y: -4, color: '#8b5cf6' }}
                whileTap={{ scale: 0.9 }}
                className="social-pill text-[#64748b] transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="hero-visual relative flex-shrink-0 order-first md:order-last"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            className="hero-ring"
          />
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hero-photo-shell"
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
              className={`floating-panel ${item.position}`}
            >
              <span className="text-lg font-bold text-white">{item.value}</span>
              <span className="text-xs text-[#94a3b8]">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Stats */}
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
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(56, 189, 248, 0.12)' }}
              className="card stat-card p-4 sm:p-6 text-center cursor-default"
            >
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs sm:text-sm text-[#94a3b8]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <Reveal as="h2" className="section-title">
          Skills
        </Reveal>
        <Reveal as="p" delay={0.08} className="section-subtitle">
          Technologies I work with
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 sm:gap-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-[#e2e8f0]">{skill.name}</span>
                <span className="text-sm text-[#64748b]">{skill.level}%</span>
              </div>
              <div className="h-2.5 bg-[#1e293b] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full skill-bar"
                  style={{ background: 'linear-gradient(90deg, #6366f1, #a78bfa)' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="section-divider max-w-6xl mx-auto" />

      {/* GitHub */}
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
