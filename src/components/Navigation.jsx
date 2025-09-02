/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";

// Define animation variants outside the component
// to prevent them from being recreated on every render.
const navVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8, // Slightly faster for a snappier feel
      ease: "easeInOut",
    },
  },
  closed: {
    x: "100%", // Use percentage for better responsiveness
    opacity: 0.8,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

function Navigation({ isOpen }) {
  return (
    <motion.div
      variants={navVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="fixed top-[80px] right-0 bg-zinc-950 w-full max-w-[500px] h-full"
    >
      <p className="text-gray-50 text-2xl p-10">Nav Items</p>
    </motion.div>
  );
}

export default Navigation;
