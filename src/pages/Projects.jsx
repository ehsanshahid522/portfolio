import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/common/ProjectCard';
import projects from '../data/projects';
import ProjectCaseStudyModal from '../components/ProjectCaseStudyModal';
import FreeConsultationBanner from '../components/FreeConsultationBanner';

const categories = ['All', 'AI & Machine Learning', 'Full Stack (MERN)', 'AI & Desktop', 'Web Application'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-12">
        <SectionHeader
          tag="Proven Track Record"
          title={<>Projects & <span className="gradient-text">Case Studies</span></>}
          subtitle="Real-world full stack applications, AI deep learning models, and SaaS solutions. Each project highlights the business problem, my solution, and key engineering metrics."
          className="mb-8"
        />

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
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid using Centralized ProjectCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onSelectCaseStudy={setSelectedCaseStudy}
            />
          ))}
        </div>
      </section>

      {/* FREE CONSULTATION BANNER */}
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

export default Projects;
