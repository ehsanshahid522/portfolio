import React from 'react';

const BookMeeting = () => {
  return (
    <section className="min-h-[160vh] pt-24 pb-24 px-4 sm:px-8 bg-[#f3f4f6] dark:bg-[#000000] text-[#000000] dark:text-white transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-3">Book a Meeting</h1>
        <p className="text-center text-[#374151] dark:text-[#9ca3af] mb-10">
          Tell me about your project and preferred time. I’ll get back to you shortly.
        </p>

        <div className="bg-white dark:bg-[#1f1f1f] rounded-2xl shadow p-6">
          <form className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input type="text" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-[#f9fafb] dark:bg-[#2b2b2b] p-3" placeholder="Your name" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input type="email" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-[#f9fafb] dark:bg-[#2b2b2b] p-3" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input type="tel" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-[#f9fafb] dark:bg-[#2b2b2b] p-3" placeholder="+92..." />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Preferred Date</label>
                <input type="date" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-[#f9fafb] dark:bg-[#2b2b2b] p-3" />
              </div>
              <div>
                <label className="block text-sm mb-1">Preferred Time</label>
                <input type="time" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-[#f9fafb] dark:bg-[#2b2b2b] p-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-1">Project Details</label>
              <textarea rows="6" className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-[#f9fafb] dark:bg-[#2b2b2b] p-3" placeholder="What would you like to build?" />
            </div>
            <button type="submit" className="bg-[#000000] text-white font-medium px-6 py-3 rounded-xl shadow hover:opacity-90 w-full md:w-auto">Submit Request</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookMeeting;


