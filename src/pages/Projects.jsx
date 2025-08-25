import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects-page"
      className="min-h-screen pt-24 pb-16 px-4 sm:px-8 bg-[#f3f4f6] dark:bg-[#000000] text-[#000000] dark:text-white transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-3">Projects</h1>
        <p className="text-center text-[#374151] dark:text-[#9ca3af] mb-10">
          Projects will be published here soon. In the meantime, visit my GitHub or reach out directly.
        </p>

        <div className="bg-white dark:bg-[#1f1f1f] rounded-2xl shadow p-6">
          <div className="text-center">
            <a
              href="https://github.com/ehsanshahid522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#000000] text-white font-medium px-6 py-3 rounded-xl shadow hover:opacity-90"
            >
              View GitHub Profile
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/contact"
              className="bg-[#facc15] hover:bg-yellow-400 text-black font-medium px-4 py-2 rounded-lg shadow"
            >
              Contact Me
            </a>
            <a
              href="mailto:ehsanshahid522@gmail.com"
              className="bg-[#000000] hover:bg-gray-900 text-white font-medium px-4 py-2 rounded-lg shadow"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;



