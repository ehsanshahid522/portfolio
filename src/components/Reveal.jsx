import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../lib/motion';

const Reveal = ({
  children,
  className,
  delay = 0,
  amount = 0.25,
  as = 'div',
  y = 30,
}) => {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, scale: 0.94, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
