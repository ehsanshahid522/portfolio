import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaStar, FaCodeBranch, FaEye, FaLayerGroup, FaCheckCircle, FaBrain, FaFilter } from 'react-icons/fa';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import projects from '../data/projects';
import ProjectModal from '../components/ProjectModal';

const categories = ['All', 'Machine Learning (AI)', 'Full Stack (MERN)', 'AI & Desktop', 'Web Application'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Reveal as="h1" className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Engineering Projects & <span className="gradient-text">Case Studies</span>
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-subtitle text-base sm:text-lg">
            Real-world full stack applications, AI deep learning classifiers, and cross-platform software. Click any project for a complete engineering case study.
          </Reveal>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border flex items-center gap-1.5 ${
                selectedCategory === cat
                  ? 'bg-primary border-primary/50 text-white shadow-lg shadow-primary/20 scale-105'
                  : 'bg-slate-900/60 border-white/8 text-slate-400 hover:border-white/20 hover:text-white'
              }`}
            >
              <FaFilter size={10} /> {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="card project-card overflow-hidden group flex flex-col justify-between"
            >
              <div className="project-card-glow" />

              {/* Image Preview Shell */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950 border-b border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3">
                  <span className="badge badge-premium shadow-md">{project.category}</span>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs text-slate-300">
                  <span className="flex items-center gap-1"><FaStar className="text-amber-400" /> {project.stars}</span>
                  <span className="flex items-center gap-1"><FaCodeBranch className="text-cyan-400" /> {project.commits}</span>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between relative z-10">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-primary">{project.tagline}</p>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Problem & Solution Snippet */}
                <div className="p-3.5 rounded-xl bg-slate-950/70 border border-white/5 space-y-1 text-xs text-slate-300">
                  <div><strong className="text-pink-400">Problem:</strong> {project.problem}</div>
                  <div><strong className="text-emerald-400">Solution:</strong> {project.solution}</div>
                </div>

                {/* Key Features Snippet */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Key Features</span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.slice(0, 3).map((feat, idx) => (
                      <span key={idx} className="text-[11px] bg-slate-900 text-slate-300 px-2.5 py-1 rounded-md border border-white/8 flex items-center gap-1">
                        <FaCheckCircle className="text-primary text-[10px]" /> {feat}
                      </span>
                    ))}
                    {project.features.length > 3 && (
                      <span className="text-[11px] bg-slate-900 text-slate-400 px-2 py-1 rounded-md border border-white/5">
                        +{project.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="text-[10px] sm:text-xs bg-slate-950 text-slate-400 px-2.5 py-1 rounded-md border border-white/8 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2.5 pt-3 border-t border-white/8">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn-outline flex-1 justify-center text-xs py-2.5 px-3 border-primary/30 hover:border-primary text-primary"
                  >
                    Case Study <FaEye size={12} />
                  </button>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary flex-1 justify-center text-xs py-2.5 px-3"
                  >
                    Live <FaExternalLinkAlt size={10} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline text-xs py-2.5 px-3"
                  >
                    <FaGithub size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Case Study Modal Popup */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </PageShell>
  );
};

export default Projects;
