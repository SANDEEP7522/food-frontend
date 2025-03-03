import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-400">
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-red-700 mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        🍕 **TastyBites – Taste The Best, Anytime, Anywhere!** 🚀
      </motion.h2>

      <motion.h3
        className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-4"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        🍔 **Fresh, Fast & Flavorful!** Every Bite, A Delight! 🌟
      </motion.h3>

      <motion.p
        className="text-gray-700 text-center max-w-3xl text-lg sm:text-xl leading-relaxed"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        🔥 **Welcome to TastyBites**, where **flavors meet convenience**! 🛵
        **Lightning-fast delivery** so your food stays **hot & fresh**! 🏆
        **Top-rated restaurants & chefs** serve you the best meals in town! 🌿
        **100% fresh ingredients** and **hygienic packaging** for your health &
        safety! 📍 **Real-time order tracking**, because waiting for food
        shouldn't be a mystery!
      </motion.p>

      <motion.p
        className="mt-4 text-lg sm:text-xl italic text-gray-600 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        🥂 "Life’s too short for bad food, so we deliver only the best!" 😍
      </motion.p>

      <motion.button
        className="mt-6 bg-red-600 text-white px-6 py-3 text-lg font-semibold rounded-md shadow-lg hover:bg-red-700 transition-all"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Order Now 🚀
      </motion.button>
    </div>
  );
}

export default About;
