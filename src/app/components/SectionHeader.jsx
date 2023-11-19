"use client";

// importing the motion library from react
import { motion } from "framer-motion";

// impoting the motion component from variant.js
import { fadeIn } from "../../../variant";

// Passing (pretitle, title) as an argument to the function
const SectionHeader = ({ pretitle, title }) => {
  return (
    <header>
      <motion.h3
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pretitle text-center"
      >
        {pretitle}
      </motion.h3>
      <motion.h2
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center h2 mb-8"
      >
        {title}
      </motion.h2>
    </header>
  );
};

export default SectionHeader;
