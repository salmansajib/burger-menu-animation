/* eslint-disable no-unused-vars */
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  topLineVariants,
  middleLineVariants,
  bottomLineVariants,
} from "../animationVariants/burgerMenuVariants";
import { useMenu } from "../hooks/useMenu";

function BurgerMenu() {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <div onClick={toggleMenu} style={{ cursor: "pointer" }}>
      <AnimatePresence>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
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
            animate={isMenuOpen ? "open" : "closed"}
            exit="closed"
          />
          <motion.path
            d="M3 12h18"
            variants={middleLineVariants}
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            exit="closed"
          />
          <motion.path
            d="M3 19h18"
            variants={bottomLineVariants}
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            exit="closed"
          />
        </svg>
      </AnimatePresence>
    </div>
  );
}

export default BurgerMenu;
