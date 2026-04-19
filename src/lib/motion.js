export const easeOutExpo = [0.22, 1, 0.36, 1];

export const pageVariants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: easeOutExpo,
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    filter: 'blur(8px)',
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: easeOutExpo,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.65,
      delay,
      ease: easeOutExpo,
    },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: easeOutExpo,
    },
  }),
};
