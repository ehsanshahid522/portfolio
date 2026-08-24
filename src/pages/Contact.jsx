import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, FaGithub, FaInstagram, FaLinkedin, 
  FaWhatsapp, FaCopy, FaCheckCircle 
} from 'react-icons/fa';
import PageShell from '../components/PageShell';
import SectionHeader from '../components/common/SectionHeader';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "ehsanshahid522@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-12">
        <SectionHeader
          tag="Open For New Projects & Roles"
          title={<>Have a Project in Mind? <br /><span className="gradient-text">Let's Build It. 🚀</span></>}
          subtitle="Tell me about your idea, and let's discuss how we can turn it into a fast, user-friendly and scalable digital product."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Communication Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white">
                Get In Touch Directly
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Reach out directly via WhatsApp for instant responses, or send an email to discuss your project requirements, scope, and budget.
              </p>
            </div>

            {/* WhatsApp Card (Priority 6) */}
            <a
              href="https://wa.me/923457124397?text=Hi%20Ehsan,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="card p-5 flex items-center justify-between group border border-emerald-500/30 hover:border-emerald-500/60 bg-slate-900/80 backdrop-blur-xl transition-all rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                  <FaWhatsapp size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    💬 WhatsApp Me
                  </h3>
                  <p className="text-xs text-slate-300 font-mono">+92 345 7124397 (0345-7124397)</p>
                </div>
              </div>
              <span className="btn-primary text-xs py-2 px-4 bg-emerald-500 border-emerald-500 text-slate-950 hover:bg-emerald-400 font-bold">
                Chat Now →
              </span>
            </a>

            {/* Email Card (Priority 6) */}
            <div className="card p-5 flex items-center justify-between group border border-white/10 hover:border-primary/40 bg-slate-900/80 backdrop-blur-xl rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">📧 Send an Email</h3>
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

            {/* Social Profiles */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Social & Code Profiles:</span>
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

          {/* Right Column: High-Converting Contact Form (Priority 7) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
