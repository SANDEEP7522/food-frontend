import React from "react";
import { motion } from "framer-motion";
import { FaGooglePlay, FaApple } from "react-icons/fa";

function AppDownload() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Animation on load
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-red-500 text-white text-center py-16 px-6"
    >
      <h2 className="text-3xl font-bold mb-4">Get the E-commerce App</h2>
      <p className="text-lg max-w-xl mx-auto mb-6">
        Discover the best food & drinks around you. Download the app now!
      </p>

      {/* Download Buttons */}
      <div className="flex justify-center gap-4">
        <motion.a
          href="https://play.google.com/store/games?hl=en&pli=1 "
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 bg-black px-6 py-3 rounded-lg shadow-lg"
        >
          <FaGooglePlay size={24} />
          <span>Google Play</span>
        </motion.a>

        <motion.a
          href="https://play.google.com/store/games?hl=en&pli=1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-2 bg-black px-6 py-3 rounded-lg shadow-lg"
        >
          <FaApple size={24} />
          <span>App Store</span>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default AppDownload;
