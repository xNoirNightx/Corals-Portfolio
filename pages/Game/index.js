import React from "react";
import { motion } from "framer-motion";

const Game = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -20 }} 
        transition={{ duration: 0.5 }} 
      >
        <h2 className="text-7xl font-bold text-accent">Coming Soon...</h2>
      </motion.div>
    </div>
  );
};

export default Game;

