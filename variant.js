// Creating a function and setting up the properties of the motion object to be exported as a prop in the EventBox component.
export const fadeIn = (direction, delay) => {
  // The function takes 2 arguments (direction, delay)
  return {
    // when hidden,
    hidden: {
      // If direction argument is either 'up' or 'down,
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      // If direction argument is either 'left' or 'right,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: "1.5",
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    // If showing
    show: {
      y: 0,
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: "1.4",
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
