import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

const Contact = () => {
  return (
    <PageShell>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Reveal as="h1" className="section-title">
          Contact
        </Reveal>
        <Reveal as="p" delay={0.08} className="section-subtitle">
          Let's work together
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="card p-6 sm:p-8 space-y-4">
            <h3 className="text-lg font-bold">Get in touch</h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <a href="mailto:ehsanshahid522@gmail.com" className="flex items-center gap-3 text-primary hover:text-accent transition-colors font-medium text-sm sm:text-base break-all">
              <FaEnvelope className="flex-shrink-0" /> ehsanshahid522@gmail.com
            </a>
          </div>
          <div className="flex gap-4">
            {[
              { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/chehsanshahid' },
              { icon: <FaGithub size={18} />, url: 'https://github.com/ehsanshahid522' },
              { icon: <FaInstagram size={18} />, url: 'https://instagram.com/ehsanshahid_397/' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="social-pill text-[#64748b] hover:text-primary transition-colors"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card p-6 sm:p-8 space-y-5"
        >
          <div>
            <label className="text-sm text-[#94a3b8] mb-1.5 block">Name</label>
            <input type="text" className="input-field" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm text-[#94a3b8] mb-1.5 block">Email</label>
            <input type="email" className="input-field" placeholder="your@email.com" />
          </div>
          <div>
            <label className="text-sm text-[#94a3b8] mb-1.5 block">Message</label>
            <textarea rows="5" className="input-field resize-none" placeholder="Your message..." />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="btn-primary w-full justify-center"
          >
            Send Message <FaPaperPlane size={12} />
          </motion.button>
        </motion.form>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
