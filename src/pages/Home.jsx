import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import GitHubOverview from '../components/GitHubOverview';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  }),
};

const skills = [
  { name: 'React.js', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'MongoDB', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Machine Learning', level: 70 },
];

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-5 sm:space-y-6 text-center md:text-left">
          <motion.span
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="badge inline-block"
          >
            Available for work
          </motion.span>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Hi, I'm <span className="gradient-text">Ehsan Shahid</span>
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-base sm:text-lg text-[#94a3b8] max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Software Engineer specializing in modern web applications, AI-powered tools, and full-stack solutions.
          </motion.p>
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 pt-2"
          >
            <a href="/projects" className="btn-primary text-sm sm:text-base">View Projects</a>
            <a href="/contact" className="btn-outline text-sm sm:text-base">Contact Me</a>
          </motion.div>
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
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
                whileHover={{ scale: 1.2, color: '#6366f1' }}
                whileTap={{ scale: 0.9 }}
                className="text-[#64748b] transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-shrink-0 order-first md:order-last"
        >
          <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl animate-pulse" />
          <img
            src="/ehsan.jpg"
            alt="Ehsan Shahid"
            className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-2xl border border-[#334155] shadow-xl"
          />
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
              whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(99, 102, 241, 0.15)' }}
              className="card p-4 sm:p-6 text-center cursor-default"
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
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Technologies I work with
        </motion.p>
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
                  className="h-full rounded-full"
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
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          GitHub
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          My open source activity
        </motion.p>
        <GitHubOverview />
      </section>
    </main>
  );
};

export default Home;
