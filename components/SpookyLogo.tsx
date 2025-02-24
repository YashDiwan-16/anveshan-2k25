"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const SpookyLogo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src="/logo.png"
        alt="TechFest 2025 Spooky Logo"
        width={300}
        height={300}
        className="drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]"
      />
    </motion.div>
  );
};

export default SpookyLogo;
