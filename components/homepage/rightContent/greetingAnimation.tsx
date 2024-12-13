"use client";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

export default function GreetingAnimation() {
  const handRef = useRef(null);
  const isInView3 = useInView(handRef, {
    once: false,
    margin: "-50px",
  });

  return (
    <motion.div
      ref={handRef}
      className="text-5xl"
      style={{ transformOrigin: "bottom right" }}
      animate={{
        rotate: isInView3 ? [0, 20, -20, 20, 0] : 0,
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
      }}
    >
      👋
    </motion.div>
  );
}
