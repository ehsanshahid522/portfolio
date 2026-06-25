import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptopCode, 
  FaServer, 
  FaBrain, 
  FaDatabase, 
  FaNetworkWired, 
  FaArrowRight,
  FaTerminal
} from 'react-icons/fa';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import { fadeUp, staggerContainer } from '../lib/motion';

const services = [
  {
    title: 'Full-Stack Web Development (MERN)',
    desc: 'End-to-end web engineering building highly interactive and scale-ready SaaS products with secure JWT authentication, relational state management, and responsive layouts.',
    icon: <FaLaptopCode className="text-indigo-400" />,
    techs: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Redux Toolkit']
  },
  {
    title: 'Next.js & Modern SaaS Apps',
    desc: 'Optimized server-side rendered (SSR) web applications featuring dynamic routes, optimized search engine configurations, fast asset load, and modern styling integrations.',
    icon: <FaServer className="text-cyan-400" />,
    techs: ['Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Vercel']
  },
  {
    title: 'Applied AI & Deep Learning',
    desc: 'Designing and deploying intelligent predictive models, anomaly detection systems, and clinical/medical classification networks on cloud spaces.',
    icon: <FaBrain className="text-pink-400" />,
    techs: ['Python', 'PyTorch', 'Scikit-Learn', 'Gradio', 'Hugging Face']
  },
  {
    title: 'Computer Vision & YOLO Solutions',
    desc: 'Real-time object detection, object tracking, and Automatic License Plate Recognition (ALPR) systems integrated with camera stream processing.',
    icon: <FaTerminal className="text-amber-400" />,
    techs: ['YOLOv8', 'OpenCV', 'Python Scripting', 'Socket Streams']
  },
  {
    title: 'Desktop & Database Applications',
    desc: 'Robust desktop applications styled with premium look-and-feel themes, relational database architecture design, and secure SQL transaction queries.',
    icon: <FaDatabase className="text-emerald-400" />,
    techs: ['Java Swing', 'FlatLaf Theme', 'JDBC', 'MySQL', 'Relational DBs']
  },
  {
    title: 'Backend APIs & Sockets',
    desc: 'Building scalable microservices, secure RESTful APIs, and real-time bidirectional communication layers for instantaneous data synchronization.',
    icon: <FaNetworkWired className="text-rose-400" />,
    techs: ['FastAPI', 'Node.js APIs', 'WebSockets', 'JWT Auth', 'REST Services']
  }
];

const Services = () => {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="badge badge-premium mb-4"
          >
            My Services
          </motion.span>
          
          <Reveal as="h1" className="section-title text-4xl sm:text-5xl font-bold mt-2">
            Premium Development <span className="gradient-text">Services</span>
          </Reveal>
          
          <Reveal as="p" delay={0.08} className="section-subtitle mt-4 text-slate-400 max-w-xl mx-auto">
            Transforming complex requirements into clean, optimized, and high-performance software systems.
          </Reveal>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((s, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="card group flex flex-col justify-between p-6 sm:p-8 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top light bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-slate-950/60 border border-white/5 text-2xl shadow-inner group-hover:border-primary/20 group-hover:bg-primary/5 transition-all duration-300">
                  {s.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Technologies Chips */}
              <div className="space-y-4 pt-6 mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {s.techs.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] bg-slate-950/60 text-[#8b949e] px-2.5 py-1 rounded-md border border-[#30363d] group-hover:border-primary/10 group-hover:text-slate-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn More link */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 group-hover:text-primary transition-colors duration-300">
                  <span>Get Started</span>
                  <FaArrowRight size={10} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </PageShell>
  );
};

export default Services;
