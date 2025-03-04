import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { motion } from "framer-motion";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Card() {
  const { cardItems, food_list, removeFromCard, getTotalAllAmount } = useContext(StoreContext);

  return (
    <div className="flex flex-col items-center p-4 min-h-screen bg-gray-300">
      <motion.div
        className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hidden md:grid grid-cols-6 font-semibold text-gray-700 p-3 border-b">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {food_list.map((item) => {
          const quantity = cardItems[item.id] || 0;
          if (quantity > 0) {
            return (
              <motion.div
                key={item.id}
                className="grid grid-cols-2 md:grid-cols-6 items-center p-3 border-b text-gray-800 gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />

                <p className="text-sm md:text-base font-medium">{item.name}</p>

                <p className="text-sm md:text-base">${item.price}</p>

                <p className="text-sm md:text-base">{quantity}</p>

                <p className="text-sm md:text-base font-semibold">
                  ${item.price * quantity}
                </p>

                <motion.button
                  onClick={() => removeFromCard(item.id)}
                  className="p-2 text-red-500 hover:text-red-700 transition duration-200"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.8, opacity: 0.5 }}
                  aria-label="Remove item"
                >
                  <Trash size={20} />
                </motion.button>
              </motion.div>
            );
          }
          return null;
        })}
      </motion.div>

      {/* card total section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-4xl mt-4">
        <motion.div
          className="flex-1 p-4 border-r border-gray-300 mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-xl font-bold mb-4 flex items-center">
            🛒 Cart Total
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between text-gray-700 text-lg">
              <p>Subtotal:</p>
              <p>${getTotalAllAmount()}</p>
            </div>
            <div className="flex justify-between text-gray-700 text-lg">
              <p>🚚 Delivery Fee:</p>
              <p>${2}</p>
            </div>
            <div className="flex justify-between text-gray-900 text-xl font-semibold border-t pt-2">
              <p>💰 Total:</p>
              <p>${getTotalAllAmount() + 2}</p>
            </div>
          </div>
          <Button className="w-full mt-4 text-lg py-2">🛍️ Checkout</Button>
        </motion.div>

       
        <motion.div
          className="flex-1 p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        >
          <p className="text-gray-700 mb-2">
            🎟️ Have a promo code? Enter it here:
          </p>
          <div className="flex items-center gap-2">
            <Input type="text" placeholder="Promo Code" className="flex-1" />
            <Button className="text-lg py-2">✔️ Apply</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Card;
