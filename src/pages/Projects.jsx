import React, { useState } from 'react';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/common/SectionHeader';
import ProjectCard from '../components/common/ProjectCard';
import projects from '../data/projects';
import ProjectCaseStudyModal from '../components/ProjectCaseStudyModal';
import FreeConsultationBanner from '../components/FreeConsultationBanner';

const categories = ['All', 'Web Apps', 'Mobile Apps', 'AI Projects'];

const filterMapping = {
  'All': () => true,
  'Web Apps': (p) => p.category.includes('Full Stack') || p.category.includes('Web Application'),
  'Mobile Apps': (p) => p.category.includes('Mobile') || p.technologies.includes('React Native'),
  'AI Projects': (p) => p.category.includes('AI') || p.technologies.includes('PyTorch') || p.technologies.includes('YOLOv8')
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const filteredProjects = projects.filter(filterMapping[selectedCategory] || (() => true));

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-12">
        <SectionHeader
          tag="Proven Track Record"
          title={<>Projects & <span className="gradient-text">Case Studies</span></>}
          subtitle="Real-world full stack web applications, mobile software, and AI deep learning models. Each project card highlights the business problem, solution, and key engineering metrics."
          className="mb-8"
        />

        {/* Category Filters (Point 5) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer border flex items-center gap-1.5 ${
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
