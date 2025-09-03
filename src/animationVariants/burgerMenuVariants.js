// Variants for the top line
export const topLineVariants = {
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
export const middleLineVariants = {
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
export const bottomLineVariants = {
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
