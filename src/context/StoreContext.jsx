import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cardItems, setCardItems] = useState({});
  const [food_list, setFoodList] = useState([]);
  const BASE_URL = "http://localhost:4000";
  const [token, setToken] = useState("");

  const addToCard = (itemId) => {
    setCardItems((prev) => {
      console.log("Previous Items:", prev);
      const updatedItems = { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
      console.log("Updated Items:", updatedItems);
      return updatedItems;
    });
  };

  const removeFromCard = (itemId) => {
    setCardItems((prev) => {
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
    if (!cardItems || Object.keys(cardItems).length === 0) {
      console.log("Cart is empty!");
      return 0;
    }

    console.log("Card Items:", cardItems);
    console.log(
      "Food List IDs:",
      food_list.map((f) => String(f._id))
    );

    return Object.entries(cardItems).reduce((total, [itemId, count]) => {
      console.log(
        "Checking itemId:",
        itemId,
        "with count:",
        count,
        "and total:",
        total
      );

      if (!count || count <= 0) {
        console.log("Skipping item with count 0:", itemId);
        return total;
      }

      const itemInfo = food_list.find(
        (product) => String(product._id) === String(itemId)
      );

      if (!itemInfo) {
        console.log("❌ Item not found in food_list:", itemId);
        return total;
      }

      console.log(
        "✅ Adding:",
        itemInfo.price,
        "*",
        count,
        "=",
        itemInfo.price * count
      );
      return total + itemInfo.price * count;
    }, 0);
  };

  const fetchFoodList = async () => {
    try {
      const response = await axios.get(BASE_URL + "/api/food/list");
      console.log("response", response);

      setFoodList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
      }
    }
    loadData();
  }, []);

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
