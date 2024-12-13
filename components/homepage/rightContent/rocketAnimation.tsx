"use client";
import { useInView } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

export default function RocketAnimation() {
  const roketRef = useRef(null);
  const isInView2 = useInView(roketRef, {
    once: false,
    margin: "-50px",
  });
  return (
    <motion.div
      ref={roketRef}
      animate={{
        rotate: isInView2 ? [0, 100, 0, 100, 0] : 0, // Nilai default: 0
        x: isInView2 ? [0, 250, 0] : 0, // Nilai default: 0
        y: isInView2 ? [0, -20, -40, -30, -10, 0, 10, 30, 40, 20, 0] : 0, // Nilai default: 0
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
      }}
      style={{ position: "relative" }}
    >
      🚀
    </motion.div>
  );
}
