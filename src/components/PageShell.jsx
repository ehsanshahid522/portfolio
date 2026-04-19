import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../lib/motion';

const PageShell = ({ children, className = '' }) => {
  return (
    <motion.main
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`page-shell ${className}`}
    >
      <div className="page-orb page-orb-1" />
      <div className="page-orb page-orb-2" />
      <div className="page-grid" />
      <div className="relative z-10">{children}</div>
    </motion.main>
  );
};

export default PageShell;
