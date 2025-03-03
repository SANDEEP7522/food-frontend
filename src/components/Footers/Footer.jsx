import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gray-900 text-gray-300 pt-10"
    >
      {/* Main Footer Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Categories</h3>
          <ul className="space-y-2">
            <li className="hover:text-white transition">📱 Mobiles</li>
            <li className="hover:text-white transition">💻 Electronics</li>
            <li className="hover:text-white transition">👕 Fashion</li>
            <li className="hover:text-white transition">🏠 Home & Furniture</li>
            <li className="hover:text-white transition">⚡ Appliances</li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Customer Support
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-white transition">🔄 Returns</li>
            <li className="hover:text-white transition">🚚 Shipping</li>
            <li className="hover:text-white transition">❓ FAQs</li>
            <li className="flex hover:text-white transition">  <FaWhatsapp size={22} />📞 Help Center</li>

            <p>+ 91 9999999999</p>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Policies</h3>
          <ul className="space-y-2">
            <li className="hover:text-white transition">📜 Terms of Use</li>
            <li className="hover:text-white transition">🔐 Privacy Policy</li>
            <li className="hover:text-white transition">
              🚫 Cancellation & Returns
            </li>
            <li className="hover:text-white transition">🛡️ Security</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Follow Me</h3>
          <div className="flex space-x-4">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebookF size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaTwitter size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.instagram.com/sandeep11.2__143__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition"
            >
              <FaInstagram size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.instagram.com/sandeep11.2__143__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-600 transition"
            >
              <FaYoutube size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/SANDEEP7522"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition"
            >
              <FaGithub size={22} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/sandeep-kumar-sahu-ab9a73303/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 transition"
            >
              <FaLinkedin size={22} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center py-4 border-t border-gray-700 mt-6">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Your Ecommerce. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
