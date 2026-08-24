import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaCheckCircle, FaDollarSign } from 'react-icons/fa';

const budgetOptions = [
  '$100 – $500',
  '$500 – $1,000',
  '$1,000 – $5,000',
  '$5,000+'
];

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$500 – $1,000',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', company: '', budget: '$500 – $1,000', message: '' });
    }, 4000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card p-6 sm:p-8 space-y-6 border border-white/10 bg-slate-900/90 backdrop-blur-2xl shadow-2xl rounded-3xl"
    >
      <div className="space-y-2 border-b border-white/8 pb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <FaPaperPlane className="text-primary size-5" /> Start Your Project
        </h3>
        <p className="text-xs sm:text-sm text-slate-400">
          Fill out the details below to receive a project quote and free consultation strategy within 24 hours.
        </p>
      </div>

      {submitted ? (
        <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
          <FaCheckCircle className="text-emerald-400 text-5xl mx-auto animate-bounce" />
          <h4 className="text-xl font-bold text-white">Project Inquiry Received!</h4>
          <p className="text-xs sm:text-sm text-slate-300">
            Thank you for reaching out. I have received your project proposal and will respond via email/WhatsApp shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Your Name *</label>
              <input
                type="text"
                required
                placeholder="E.g. Alex Johnson"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Your Email *</label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Company / Organization (Optional)</label>
              <input
                type="text"
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                <FaDollarSign className="text-emerald-400" /> Estimated Budget
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer"
              >
                {budgetOptions.map(opt => (
                  <option key={opt} value={opt} className="bg-slate-900 text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-300">Project Description *</label>
            <textarea
              required
              rows={4}
              placeholder="Tell me about your idea, required features, timeline, and goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="btn-primary text-sm py-3.5 px-7 w-full justify-center gap-2 shadow-xl font-bold"
          >
            <FaPaperPlane size={14} /> Send Project Proposal →
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
