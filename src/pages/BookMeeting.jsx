import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const BookMeeting = () => {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="section-title"
      >
        Book a Meeting
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="section-subtitle"
      >
        Schedule a time to discuss your project
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="card p-8 space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-[#94a3b8] mb-1.5 block">Name</label>
            <input type="text" className="input-field" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm text-[#94a3b8] mb-1.5 block">Email</label>
            <input type="email" className="input-field" placeholder="your@email.com" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-[#94a3b8] mb-1.5 block">Date</label>
            <input type="date" className="input-field" />
          </div>
          <div>
            <label className="text-sm text-[#94a3b8] mb-1.5 block">Time</label>
            <input type="time" className="input-field" />
          </div>
        </div>
        <div>
          <label className="text-sm text-[#94a3b8] mb-1.5 block">Details</label>
          <textarea rows="4" className="input-field resize-none" placeholder="What would you like to discuss?" />
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="btn-primary w-full justify-center"
        >
          Schedule Meeting <FaCalendarAlt />
        </motion.button>
      </motion.form>
    </main>
  );
};

export default BookMeeting;
