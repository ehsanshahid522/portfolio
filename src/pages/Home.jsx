import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import GitHubOverview from "../components/GitHubOverview";

const skills = [
  {
    title: "Frontend",
    items: ["React.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "XML", "React Native", "Bootstrap Css"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Java", "Python", "SQL", "Kotlin", "Dart"],
  },
  {
    title: "Design",
    items: ["Figma", "Photoshop", "Brand Identity", "UI/UX"," Social Media Posts ", "Logo Design"],
  },
  {
    title: "Tools",
    items: ["VS Code", "Cursor", "Android Studio", "GitHub", "MongoDB", "AI Tools"],
  },
];

const stats = [
  { label: "Projects Completed", value: "30+" },
  { label: "Clients Served", value: "20+" },
  { label: "Years of Experience", value: "2+" },
  { label: "Technologies Used", value: "15+" },
  { label: "Happy Clients", value: "25+" },
  { label: "Courses Taught", value: "5+" },
  { label: "Social Media Followers", value: "2000+" }
];

const projects = [];



const HomePage = () => {
  return (
    <main className="bg-[#f3f4f6] dark:bg-[#000000] text-[#000000] dark:text-white transition-colors duration-300">
      <section
        id="home"
        className="min-h-[85vh] flex items-center justify-center px-6 py-16"
      >
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            👋 Hey, I'm{" "}
            <span className="text-[#facc15]">Ehsan Shahid</span>
          </h1>

          <p className="text-lg md:text-xl text-[#374151] dark:text-[#9ca3af] mb-6">
            I offer <span className="font-semibold">Web Development</span>,{" "}
            <span className="font-semibold">App Development</span>,{" "}
            <span className="font-semibold">Graphic Designing</span>, and{" "}
            <span className="font-semibold">Programming Tutoring</span>. Let’s
            build something amazing together!
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="#services"
            className="bg-[#facc15] text-black font-medium px-6 py-3 rounded-xl shadow hover:scale-105 transition"
          >
            Explore Services
          </a>

          <a
            href="mailto:ehsanshahid522@gmail.com"
            className="bg-[#000000] text-white font-medium px-6 py-3 rounded-xl shadow hover:scale-105 transition"
          >
            Book a Meeting
          </a>
        </div>

          {/* Socials */}
          <div className="flex justify-center gap-6 mt-8 text-2xl">
            <a
              href="https://www.linkedin.com/in/chehsanshahid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] dark:text-white hover:text-[#facc15] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ehsanshahid522"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] dark:text-white hover:text-[#facc15] transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/ehsanshahid_397/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#000000] dark:text-white hover:text-[#facc15] transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="px-6 py-16 bg-white dark:bg-[#111111] transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            🔧 Skills Highlights
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((block, i) => (
              <div
                key={i}
                className="bg-[#f3f4f6] dark:bg-[#1f1f1f] rounded-xl p-6 shadow"
              >
                <h3 className="text-xl font-semibold mb-4">{block.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {block.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1 rounded-full bg-white dark:bg-[#2b2b2b] text-[#000000] dark:text-white shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stats"
        className="px-6 py-16 bg-[#f3f4f6] dark:bg-[#000000] transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            📈 Quick Stats
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white dark:bg-[#1f1f1f] rounded-xl p-6 text-center shadow"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[#facc15]">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-[#374151] dark:text-[#9ca3af]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      

      {/* ============== GITHUB OVERVIEW (BOTTOM) ============== */}
      <GitHubOverview />
    </main>
  );
};

export default HomePage;


