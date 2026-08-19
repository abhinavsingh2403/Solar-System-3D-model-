import { type Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.08,
      delayChildren: 0.05
    } 
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } 
  },
};

export const pulseGlow: Variants = {
  initial: { opacity: 0.8, scale: 1 },
  animate: {
    opacity: [0.8, 1, 0.8],
    scale: [1, 1.05, 1],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
};
