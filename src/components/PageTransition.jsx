import { motion } from "motion/react";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0.92,
        y: 6,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}