import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#111111] text-[#111827] dark:text-[#e5e7eb] border-t border-gray-200 dark:border-gray-800 mt-8">
      <div className="max-w-7xl mx-auto px-4 py-4 md:px-6 md:py-6 flex items-center justify-between md:grid md:place-items-center gap-4 md:gap-6 md:grid-cols-3 md:text-center">
        <div className="flex flex-col items-start md:items-center gap-1 md:gap-2">
          <div className="flex items-center gap-2">
            <img
              src="/ehsan.jpg"
              alt="Ehsan Shahid"
              className="w-8 h-8 rounded-full object-cover border border-gray-300 dark:border-gray-700"
            />
            <h3 className="text-lg md:text-xl font-bold">Ehsan Shahid</h3>
          </div>
          <p className="text-[11px] md:text-xs text-[#374151] dark:text-[#9ca3af]">
            Web & App Developer • Designer
          </p>
        </div>

        <div className="hidden md:block">
          <h4 className="font-semibold mb-2 tracking-wide text-sm">Contact</h4>
          <ul className="space-y-1 text-xs">
            <li>
              <a href="mailto:ehsanshahid522@gmail.com" className="inline-flex items-center gap-2 hover:text-[#facc15] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#facc15] rounded">
                <FaEnvelope /> ehsanshahid522@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+923457124397" className="inline-flex items-center gap-2 hover:text-[#facc15] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#facc15] rounded">
                <FaPhone /> +92 345 7124397
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center md:block">
          <h4 className="hidden md:block font-semibold mb-1 md:mb-2 tracking-wide text-xs md:text-sm">Social</h4>
          <div className="flex items-center gap-2 md:gap-3 text-base md:text-lg">
            <a
              href="https://www.linkedin.com/in/chehsanshahid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#facc15] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#facc15] rounded"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ehsanshahid522"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#facc15] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#facc15] rounded"
            >
              <FaGithub />
            </a>
            <a
              href="https://instagram.com/ehsanshahid_397/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#facc15] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#facc15] rounded"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 md:py-3 text-[11px] md:text-xs text-center text-[#6b7280] dark:text-[#9ca3af]">
          © {new Date().getFullYear()} Ehsan Shahid. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



