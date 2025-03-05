import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

function OrderPlace() {
  const { getTotalAllAmount } = useContext(StoreContext);

  return (
    <motion.form 
      className="max-w-3xl mx-auto p-6 mt-5 bg-gray-200 shadow-lg rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">🚚 Delivery Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input type="text" placeholder="First name" className="p-3 border-gray-400 " />
          <Input type="text" placeholder="Last name" className="p-3 border-gray-400 " />
        </div>
        <Input type="email" placeholder="📧 Email address" className="p-3 border-gray-400 " />
        <Input type="text" placeholder="🏠 Street" className="p-3 border-gray-400 " />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input type="text" placeholder="🏙️ City" className="p-3 border-gray-400 " />
          <Input type="text" placeholder="🌍 State" className="p-3 border-gray-400 " />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input type="text" placeholder="📮 PinCode" className="p-3 border-gray-400 " />
          <Input type="text" placeholder="🌎 Country" className="p-3 border-gray-400 " />
        </div>
        <Input type="text" placeholder="📞 Phone number" className="p-3 border-gray-400 " />
      </div>

      <motion.div
        className="mt-8 p-6 bg-gray-300 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-xl font-bold mb-4 flex items-center ">🛒 Cart Total</h2>
        <div className="space-y-3">
          <div className="flex justify-between text-gray-700 text-lg">
            <p>Subtotal:</p>
            <p>${getTotalAllAmount()}</p>
          </div>
          <div className="flex justify-between text-gray-700 text-lg">
            <p>🚚 Delivery Fee:</p>
            <p>${getTotalAllAmount() === 0 ? 0 : 2}</p>
          </div>
          <div className="flex justify-between text-gray-900 text-xl font-semibold border-t pt-2">
            <p>💰 Total:</p>
            <p>${getTotalAllAmount() === 0 ? 0 : getTotalAllAmount() + 2}</p>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4"
        >
          <Button className="w-full bg-blue-600 text-white text-lg py-3 rounded-lg shadow-md hover:bg-blue-700 transition">
            🛍️ Pay Now
          </Button>
        </motion.div>
      </motion.div>
    </motion.form>
  );
}

export default OrderPlace;
