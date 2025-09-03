export const navVariants = {
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
