const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.6,
    },
  },
};

const staggerTextContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const staggerAccordionContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
      type: "tween",
    },
  },
};

const staggerFooterContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 0.3,
    },
  },
};

const boyAnim = {
  initial: { x: -150, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 4 },
  },
};

const girlAnim = {
  initial: { x: 900, opacity: 0 },
  animate: {
    x: 700,
    opacity: 1,
    transition: { type: "spring", duration: 3 },
  },
};

const heroTruckAnim = {
  initial: { x: -700 },
  animate: {
    x: 0,
    transition: { type: "spring", duration: 3 },
  },
};

const footerTruckAnim = {
  initial: { x: -700 },
  animate: {
    x: 0,
    transition: { type: "spring", duration: 2 },
  },
};

const fadeInDown = {
  initial: {
    y: -70,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

const fadeInUp = {
  initial: {
    y: 70,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

const fadeInLeft = {
  initial: {
    x: 70,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

const fadeInRight = {
  initial: {
    x: -70,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 1.1 },
  },
};

export {
  staggerContainer,
  staggerTextContainer,
  staggerAccordionContainer,
  staggerFooterContainer,
  boyAnim,
  girlAnim,
  fadeInRight,
  fadeInLeft,
  fadeInUp,
  fadeInDown,
  footerTruckAnim,
  heroTruckAnim,
};
