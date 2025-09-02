/* eslint-disable no-unused-vars */
import React from "react";
import { motion, AnimatePresence } from "motion/react";

// Variants for the top line
const topLineVariants = {
  closed: {
    y: 0,
    rotate: 0,
    transition: {
      y: { duration: 0.3, delay: 0.3 }, // Move back after rotation
      rotate: { duration: 0.3 }, // Rotate back first
    },
  },
  open: {
    y: 7, // Move to middle (12 - 5 = 7 units down)
    rotate: 45, // Rotate to form half of the "X"
    transition: {
      y: { duration: 0.3 }, // Move to middle first
      rotate: { duration: 0.3, delay: 0.3 }, // Rotate after middle line fades
    },
  },
};

// Variants for the middle line
const middleLineVariants = {
  closed: {
    opacity: 1,
    transition: { duration: 0.2, delay: 0.3 }, // Fade in after lines separate
  },
  open: {
    opacity: 0,
    transition: { duration: 0.2 }, // Fade out first
  },
};

// Variants for the bottom line
const bottomLineVariants = {
  closed: {
    y: 0,
    rotate: 0,
    transition: {
      y: { duration: 0.3, delay: 0.3 }, // Move back after rotation
      rotate: { duration: 0.3 }, // Rotate back first
    },
  },
  open: {
    y: -7, // Move to middle (12 - 19 = -7 units up)
    rotate: -45, // Rotate to form other half of the "X"
    transition: {
      y: { duration: 0.3 }, // Move to middle first
      rotate: { duration: 0.3, delay: 0.3 }, // Rotate after middle line fades
    },
  },
};

function BurgerMenu({ isOpen, setIsOpen }) {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <AnimatePresence>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M3 5h18"
            variants={topLineVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
          />
          <motion.path
            d="M3 12h18"
            variants={middleLineVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
          />
          <motion.path
            d="M3 19h18"
            variants={bottomLineVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
          />
        </svg>
      </AnimatePresence>
    </div>
  );
}

export default BurgerMenu;
