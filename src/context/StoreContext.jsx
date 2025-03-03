import { createContext, useEffect, useState } from "react";
import food_list from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cardItems, setCardItems] = useState({});

  const addToCard = (itemId) => {
   if (!cardItems[itemId]) {
    setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
   }
   else{
    setCardItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
   }
  };

  const removeFromCard = (itemId) => {
    setCardItems((prev) => {
      if (!prev[itemId]) return prev; 

      const newItems = { ...prev };
      if (newItems[itemId] > 1) {
        newItems[itemId] -= 1; 
      } else {
        delete newItems[itemId]; 
      }
      return newItems;
    });
  };

  useEffect(() => {
    console.log(cardItems);
  }, [cardItems]);

  const contextValue = {
    food_list,
    cardItems,
    setCardItems,
    addToCard,
    removeFromCard,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
