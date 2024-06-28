import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    backgroundColor: "#ffdb58",
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

function Button({ link, text }) {
  return (
    <motion.button
      className="w-32 h-10 rounded-lg text-custom-full-black text-lg bg-custom-yellow1 opacity-95 sm:w-28 sm:h-9 sm:text-base"
      variants={buttonVariants}
      whileHover="hover"
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div>{text}</div>
      </a>
    </motion.button>
  );
}

export default Button;
