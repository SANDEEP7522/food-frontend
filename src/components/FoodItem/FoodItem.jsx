import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({ id, image, name, price, description }) {
     console.log(id, image, name, price, description); 
     
  const [rating, setRating] = useState(1);
  const { cardItems, addToCard, removeFromCard } = useContext(StoreContext);
  const itemCount = cardItems[id] || 0;

  const increaseCount = () => {
     console.log('clicked', id);
     
    addToCard(id);
  };

  const decreaseCount = () => {
    if (itemCount > 0) {
      removeFromCard(id);
    }
  };

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <div className="relative w-full h-40 overflow-hidden rounded-md">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        <div className="absolute bottom-1 left-0 right-0 flex justify-center items-center gap-1 bg-opacity-50">
          <button
            onClick={decreaseCount}
            className={`p-2 text-lg bg-white rounded-full shadow-md transition ${
              itemCount === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-red-500 hover:bg-red-100"
            }`}
            disabled={itemCount === 0}
          >
            <AiOutlineMinus size={10} />
          </button>
          <span
            size={10}
            className="text-sm font-semibold bg-gray-200 px-3 py-1 rounded-md shadow"
          >
            {itemCount}
          </span>
          <button
            onClick={increaseCount}
            className="p-2 text-lg bg-gray-200 text-green-800 rounded-full shadow-md hover:bg-green-100 transition"
          >
            <AiOutlinePlus size={10} />
          </button>

          {/* } */}
        </div>
      </div>

      <div className="mt-3">
        <div className="flex items-center mt-1 space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.span
              key={star}
              className={`text-2xl cursor-pointer ${
                star <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => handleRating(star)}
            >
              ★
            </motion.span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="bg-gray-300 rounded-full px-3 py-1 text-red-500 text-lg font-bold">
            ${price}
          </div>
        </div>

        <p className="text-gray-600 text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

export default FoodItem;

