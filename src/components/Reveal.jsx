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
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        ...fadeUp.visible(delay).transition,
      }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
