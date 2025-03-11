import { createContext, useEffect, useState } from "react";
import food_list from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cardItems, setCardItems] = useState({});

  const BASE_URL = "http://localhost:4000";
  const [token, setToken] = useState("");

  const addToCard = (itemId) => {
    if (!cardItems[itemId]) {
      setCardItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
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
  const getTotalAllAmount = () => {
    return Object.entries(cardItems).reduce((total, [itemId, count]) => {
      const itemInfo = food_list.find(
        (product) => product.id === parseInt(itemId)
      );
      if (itemInfo && count > 0) {
        total += itemInfo.price * count;
      }
      return total;
    }, 0);
  };

  const contextValue = {
    food_list,
    cardItems,
    setCardItems,
    addToCard,
    removeFromCard,
    getTotalAllAmount,
    BASE_URL,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
