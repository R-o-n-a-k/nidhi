"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function WordRotate({ words, duration = 2500, className }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words.length, duration]);

  return (
    <div style={{ overflow: "hidden" }}>
      <motion.h2
        key={index}
        className={className}
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.8 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        {words[index]}
      </motion.h2>
    </div>
  );
}
