/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";
import { navVariants } from "../animationVariants/navigationVariants";

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
