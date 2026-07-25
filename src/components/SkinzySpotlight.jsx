import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBrain, FaExternalLinkAlt, FaGithub, FaServer, FaShieldAlt, 
  FaLaptopCode, FaDatabase, FaMobileAlt, FaLayerGroup, FaCheckCircle, 
  FaLightbulb, FaRocket, FaCogs, FaProjectDiagram
} from 'react-icons/fa';
import { fadeUp, scaleIn, staggerContainer } from '../lib/motion';

const SkinzySpotlight = () => {
  const [activeTab, setActiveTab] = useState('architecture');

  const architectureNodes = [
    {
      step: '01',
      title: 'Client Web/Mobile App',
      tech: 'React 18 / Next.js',
      desc: 'Users snap or upload skin condition photo with instant image pre-validation & bounding box alignment.',
      icon: <FaLaptopCode className="text-cyan-400 text-2xl" />
    },
    {
      step: '02',
      title: 'FastAPI Gateway',
      tech: 'Python FastAPI Microservice',
      desc: 'Asynchronous API endpoint validates auth tokens, handles image multipart upload, and formats tensor inputs.',
      icon: <FaServer className="text-emerald-400 text-2xl" />
    },
    {
      step: '03',
      title: 'PyTorch AI Engine',
      tech: 'Deep CNN Classifier',
      desc: 'Deep learning neural network predicts condition class, confidence score, and calculates severity levels.',
      icon: <FaBrain className="text-pink-400 text-2xl" />
    },
    {
      step: '04',
      title: 'Medical Remedy System',
      tech: 'MongoDB / JSON Engine',
      desc: 'Matches AI diagnosis with verified healthcare guidelines, remedies, and safe skincare products.',
      icon: <FaDatabase className="text-amber-400 text-2xl" />
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative" id="skinzy-spotlight">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-primary/10 via-pink-500/10 to-accent/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Header Tag */}
      <div className="text-center space-y-4 mb-12 sm:mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/20 via-pink-500/20 to-accent/20 border border-primary/30 text-xs font-bold uppercase tracking-wider text-primary shadow-lg"
        >
          <FaBrain className="animate-pulse text-pink-400" /> Featured Engineering Flagship
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white"
        >
          Skinzy — <span className="gradient-text">AI Telemedicine System</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base sm:text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed"
        >
          An end-to-end deep learning healthcare platform combining a custom PyTorch Convolutional Neural Network (CNN) with a FastAPI backend and a sleek Next.js medical interface.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="https://skinzy-beta.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm px-6 py-3 shadow-xl"
          >
            Launch Skinzy Live <FaExternalLinkAlt size={12} />
          </a>
          <a
            href="https://github.com/HassanHashmi39/Skinzy"
            target="_blank"
            rel="noreferrer"
            className="btn-outline text-sm px-6 py-3"
          >
            View Code Repository <FaGithub size={14} />
          </a>
        </motion.div>
      </div>

      {/* Main Spotlight Showcase Card */}
      <div className="card p-6 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
        {/* Top Accent Neon Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-primary to-pink-500" />

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 pb-8 border-b border-white/10 mb-8">
          {[
            { id: 'architecture', label: 'System Architecture', icon: <FaProjectDiagram /> },
            { id: 'aipipeline', label: 'AI & ML Pipeline', icon: <FaBrain /> },
            { id: 'challenges', label: 'Engineering Challenges', icon: <FaCogs /> },
            { id: 'futurescope', label: 'Future Roadmap', icon: <FaRocket /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/20 scale-105'
                  : 'bg-slate-900/60 border border-white/8 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Panes */}
        <AnimatePresence mode="wait">
          {activeTab === 'architecture' && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-xl font-bold text-slate-100">End-to-End System Workflow</h3>
                <p className="text-sm text-slate-400">
                  How user requests travel from client upload down to PyTorch neural inferencing and clinical remedy lookup.
                </p>
              </div>

              {/* Workflow Step Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {architectureNodes.map((node, index) => (
                  <motion.div
                    key={node.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-5 rounded-2xl bg-slate-950/70 border border-white/8 hover:border-primary/40 transition-all group relative"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                        {node.icon}
                      </div>
                      <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-md border border-primary/20">
                        {node.step}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-100 mb-1">{node.title}</h4>
                    <span className="inline-block text-[11px] font-semibold text-primary/90 mb-2">{node.tech}</span>
                    <p className="text-xs text-slate-400 leading-relaxed">{node.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Architecture Flow Diagram Box */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-primary/20 space-y-4 shadow-inner">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" /> System Data Pipeline
                  </span>
                  <span className="text-xs text-slate-500 font-mono">Status: Production Ready</span>
                </div>
                <div className="font-mono text-xs sm:text-sm text-slate-300 space-y-2 overflow-x-auto py-2">
                  <div className="text-cyan-400">[Client React UI] ➔ POST /api/v1/analyze ➔ [FastAPI Gateway]</div>
                  <div className="text-emerald-400">               ➔ [PyTorch CNN Classifier Model] ➔ Softmax Probability Score</div>
                  <div className="text-pink-400">               ➔ [Condition Identification & Remedies Database Match]</div>
                  <div className="text-amber-400">               ➔ Return Clean Diagnostic UI Report & Doctor Consultation Link</div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'aipipeline' && (
            <motion.div
              key="aipipeline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="space-y-5">
                <h3 className="text-2xl font-bold text-slate-100">Deep Learning CNN Classifier</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Skinzy's core intelligence relies on a fine-tuned Convolutional Neural Network trained on dermatological datasets to detect acne, eczema, psoriasis, and melanoma with high classification accuracy.
                </p>

                <div className="space-y-3">
                  {[
                    { title: "PyTorch CNN Architecture", desc: "Custom Conv2D layers with BatchNorm & Dropout to prevent overfitting." },
                    { title: "Image Preprocessing Pipeline", desc: "Resizing, normalization, noise filtering, and data augmentation." },
                    { title: "FastAPI Async Inference", desc: "Sub-500ms processing speed using serverless microservices." },
                    { title: "Medical Risk Matrix", desc: "Maps confidence probabilities to low, moderate, or high risk alerts." },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                      <FaCheckCircle className="text-primary text-base flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold text-slate-200">{item.title}</h4>
                        <p className="text-xs text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Spec Stats Box */}
              <div className="card p-6 sm:p-8 bg-slate-950/80 border border-pink-500/20 space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <FaBrain className="text-pink-400 text-3xl" />
                  <div>
                    <h4 className="text-lg font-bold text-white">AI Model Specs</h4>
                    <span className="text-xs text-slate-400">PyTorch Deep Learning Engine</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                    <span className="block text-2xl font-bold text-cyan-400">94.2%</span>
                    <span className="text-xs text-slate-400">Test Accuracy</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                    <span className="block text-2xl font-bold text-emerald-400">&lt;450ms</span>
                    <span className="text-xs text-slate-400">Inference Speed</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                    <span className="block text-2xl font-bold text-amber-400">12+</span>
                    <span className="text-xs text-slate-400">Condition Classes</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                    <span className="block text-2xl font-bold text-pink-400">FastAPI</span>
                    <span className="text-xs text-slate-400">REST Microservice</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'challenges' && (
            <motion.div
              key="challenges"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-xl font-bold text-slate-100">Engineering Challenges & Solutions</h3>
                <p className="text-sm text-slate-400">Real-world problem solving implemented during development.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    problem: "Heavy Model Payload Overhead",
                    challenge: "Initial PyTorch model weights exceeded 300MB, causing cold-start timeouts on serverless deployments.",
                    solution: "Applied model quantization and weight pruning to compress model size down to 42MB without sacrificing accuracy."
                  },
                  {
                    problem: "Low Quality User Photo Uploads",
                    challenge: "Users uploaded blurred or low-light images leading to uncertain AI classification confidence.",
                    solution: "Integrated client-side image sharpness & lighting validation checks before sending frames to the API."
                  },
                  {
                    problem: "Medical Remedy Correlation",
                    challenge: "Ensuring AI predictions map cleanly to medically safe recommendations and certified product catalogs.",
                    solution: "Structured a strict JSON schema database cross-referencing dermatological guidelines with verified OTC remedies."
                  },
                  {
                    problem: "Cross-Platform Responsiveness",
                    challenge: "Designing a UI that feels responsive across mobile devices and desktop doctor dashboards.",
                    solution: "Utilized Tailwind CSS grid systems, Framer Motion transitions, and glassmorphic card layouts."
                  }
                ].map((c, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-950/70 border border-white/8 space-y-3">
                    <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">Challenge #{i + 1}</span>
                    <h4 className="text-base font-bold text-white">{c.problem}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed"><strong className="text-slate-300">Problem:</strong> {c.challenge}</p>
                    <p className="text-xs text-emerald-400/90 leading-relaxed"><strong className="text-emerald-400">Solution:</strong> {c.solution}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'futurescope' && (
            <motion.div
              key="futurescope"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <h3 className="text-xl font-bold text-slate-100">Future Product Roadmap</h3>
                <p className="text-sm text-slate-400">Planned features and architectural enhancements for Skinzy.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    phase: "Phase 1: React Native App",
                    desc: "Deploying dedicated React Native & Expo mobile apps for iOS and Android with camera integration.",
                    icon: <FaMobileAlt className="text-cyan-400 text-3xl mb-3" />
                  },
                  {
                    phase: "Phase 2: Live Doctor Teleconsult",
                    desc: "Integrating WebRTC video consultations allowing patients to connect live with certified dermatologists.",
                    icon: <FaShieldAlt className="text-emerald-400 text-3xl mb-3" />
                  },
                  {
                    phase: "Phase 3: Multi-Modal AI",
                    desc: "Combining patient symptom history text prompts with image classification for holistic AI diagnostics.",
                    icon: <FaLightbulb className="text-amber-400 text-3xl mb-3" />
                  }
                ].map((p, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-slate-950/70 border border-white/8 text-center space-y-2">
                    <div className="flex justify-center">{p.icon}</div>
                    <h4 className="text-base font-bold text-slate-100">{p.phase}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkinzySpotlight;
