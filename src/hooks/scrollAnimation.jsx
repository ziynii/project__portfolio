import React from 'react';
import { motion } from 'framer-motion';

function AnimatedComponent({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
        y: { duration: 0.5 },
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedComponent;
