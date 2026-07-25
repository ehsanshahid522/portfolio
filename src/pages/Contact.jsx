import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPaperPlane, 
  FaPhoneAlt, FaMapMarkerAlt, FaDownload, FaCopy, FaCheckCircle, FaUserCheck 
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
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <Reveal as="h1" className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            Get In <span className="gradient-text">Touch</span>
          </Reveal>
          <Reveal as="p" delay={0.08} className="section-subtitle text-base sm:text-lg">
            Looking for a Software Engineer, Full Stack MERN, or React Native Developer? Let's discuss your product goals.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column: Contact Cards & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Primary Details Card */}
            <div className="card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Contact Information</h3>
                  <p className="text-xs text-slate-400">Reach out directly via email or call</p>
                </div>
                <span className="text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">
                  Available
                </span>
              </div>

              <div className="space-y-4">
                {/* Email with copy button */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/8 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-primary flex-shrink-0">
                      <FaEnvelope size={18} />
                    </div>
                    <div className="truncate">
                      <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Email Address</span>
                      <a href={`mailto:${emailAddress}`} className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-primary transition-colors truncate block">
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-primary/40 text-xs font-semibold text-slate-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer flex-shrink-0"
                  >
                    {copied ? <><FaCheckCircle className="text-emerald-400" /> Copied!</> : <><FaCopy /> Copy</>}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <FaPhoneAlt size={16} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Phone / WhatsApp</span>
                    <a href="tel:+923094658397" className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-primary transition-colors">
                      +92 309 4658397
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-white/8 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      Lahore, Pakistan (Open to Remote / On-site)
                    </span>
                  </div>
                </div>
              </div>

              {/* Resume Download Box */}
              <div className="pt-2">
                <a
                  href="/Ehsan_Shahid_Software_Engineer_Resume.pdf"
                  download="Ehsan_Shahid_Software_Engineer_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  <FaDownload size={14} /> Download Resume PDF
                </a>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex gap-4">
              {[
                { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/chehsanshahid', label: 'LinkedIn' },
                { icon: <FaGithub size={18} />, url: 'https://github.com/ehsanshahid522', label: 'GitHub' },
                { icon: <FaInstagram size={18} />, url: 'https://instagram.com/ehsanshahid_397/', label: 'Instagram' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-pill text-slate-400 hover:text-primary transition-colors flex-1"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card p-6 sm:p-8 space-y-5"
          >
            <h3 className="text-xl font-bold text-white">Send Me A Message</h3>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <FaCheckCircle className="text-emerald-400 text-4xl mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. I will respond to your message shortly.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 block">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 block">Message</label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-field resize-none"
                    placeholder="Describe your project, role, or inquiry..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="btn-primary w-full justify-center text-sm py-3"
                >
                  Send Message <FaPaperPlane size={12} />
                </motion.button>
              </>
            )}
          </motion.form>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
