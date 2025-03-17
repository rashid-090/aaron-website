import React from "react";
import { motion } from "framer-motion";


const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
    <motion.div
      className="w-16 h-16 border-4 border-mainbtn border-t-transparent rounded-full animate-spin"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    ></motion.div>
  </div>
  );
};

export default Loading;
