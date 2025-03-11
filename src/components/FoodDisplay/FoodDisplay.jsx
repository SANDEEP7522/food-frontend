import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay({ categories }) {
  const { food_list } = useContext(StoreContext);

  // Function to decrease quantity

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        🍽 Top Food Selections
      </h2>

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {food_list.map((item, index) => {
          // {console.log(categories, item.categories);
          // }
          if (categories === "All" || categories === item.categories) {
            return (
              <FoodItem
                key={index}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                description={item.description}
                categories={item.categories}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
