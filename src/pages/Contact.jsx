import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPaperPlane, 
  FaWhatsapp, FaMapMarkerAlt, FaCopy, FaCheckCircle, FaCalendarCheck 
} from 'react-icons/fa';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const emailAddress = "ehsanshahid522@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Reveal as="span" className="text-xs font-mono font-bold px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 uppercase tracking-wider">
            🟢 Open For New Projects & Roles
          </Reveal>
          <Reveal as="h1" className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Have a Project in Mind? <br />
            <span className="gradient-text">Let's Discuss How I Can Help.</span>
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-subtitle text-base sm:text-lg">
            Whether you need a modern website, custom web application, or AI-powered solution, let's turn your vision into a scalable digital product.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column: Direct Action Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white">
                Start a Conversation
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Reach out directly via WhatsApp for quick responses, or send an email to discuss project requirements, timelines, and milestones.
              </p>
            </div>

            {/* WhatsApp Quick Connect Card */}
            <a
              href="https://wa.me/923457124397?text=Hi%20Ehsan,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="card p-5 flex items-center justify-between group border border-emerald-500/30 hover:border-emerald-500/60 bg-slate-900/80 backdrop-blur-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                  <FaWhatsapp size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Instant WhatsApp Chat
                  </h3>
                  <p className="text-xs text-slate-300 font-mono">+92 345 7124397 (0345-7124397)</p>
                </div>
              </div>
              <span className="btn-primary text-xs py-2 px-4 bg-emerald-500 border-emerald-500 text-slate-950 hover:bg-emerald-400">
                Chat Now →
              </span>
            </a>

            {/* Email Card */}
            <div className="card p-5 flex items-center justify-between group border border-white/10 hover:border-primary/40 bg-slate-900/80 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Direct Email</h3>
                  <p className="text-xs text-slate-300 font-mono">{emailAddress}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="btn-outline text-xs py-2 px-3 flex items-center gap-1.5"
              >
                {copied ? <><FaCheckCircle className="text-emerald-400" /> Copied</> : <><FaCopy /> Copy</>}
              </button>
            </div>

            {/* Social Connect Pills */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Social & Professional Profiles:</span>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'LinkedIn', icon: <FaLinkedin size={16} />, url: 'https://www.linkedin.com/in/chehsanshahid' },
                  { label: 'GitHub', icon: <FaGithub size={16} />, url: 'https://github.com/ehsanshahid522' },
                  { label: 'Instagram', icon: <FaInstagram size={16} />, url: 'https://instagram.com/ehsanshahid_397/' }
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline text-xs px-4 py-2.5 flex items-center gap-2 rounded-xl"
                  >
                    {s.icon} <span>{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card p-6 sm:p-8 space-y-6 border border-white/10 bg-slate-900/90 backdrop-blur-2xl shadow-2xl"
          >
            <div className="space-y-2 border-b border-white/8 pb-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FaPaperPlane className="text-primary size-4" /> Send Me a Direct Message
              </h2>
              <p className="text-xs text-slate-400">
                Fill out the form below and I will get back to you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                <FaCheckCircle className="text-emerald-400 text-4xl mx-auto" />
                <h3 className="text-lg font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. I have received your message and will reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Project Details / Message</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, and requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary text-sm py-3.5 px-7 w-full justify-center gap-2 shadow-xl"
                >
                  <FaPaperPlane size={13} /> Send Message →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
