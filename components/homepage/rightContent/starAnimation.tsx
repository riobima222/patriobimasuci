"use client";
import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

export default function StarAnimation() {
  const starRef = useRef(null);
  const isInView = useInView(starRef, {
    once: false,
    margin: "-50px",
  });

  return (
    <motion.div
      ref={starRef}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isInView ? [0.8, 1.2, 0.8] : 0.8,
        opacity: isInView ? [0.7, 1, 0.7] : 0.7,
        rotate: isInView ? [0, 360, 0] : 0,
        y: isInView ? [0, -20, 0] : 0,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      whileHover={{
        scale: 1.3,
        rotate: 180,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.9 }}
      style={{
        fontSize: "3rem",
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      🌟
    </motion.div>
  );
}
