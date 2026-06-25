import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Setup spring config for smooth hardware-accelerated trailing
  const springConfig = { damping: 50, stiffness: 280, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half of glow width (400px / 2 = 200px)
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden hidden md:block"
      style={{
        mixBlendMode: 'screen',
      }}
    >
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[90px] transition-opacity duration-300"
        style={{
          x: glowX,
          y: glowY,
          background: 'radial-gradient(circle, rgba(var(--primary-rgb), 0.3) 0%, rgba(var(--accent-rgb), 0.15) 50%, transparent 100%)',
        }}
      />
    </motion.div>
  );
};

export default MouseGlow;
