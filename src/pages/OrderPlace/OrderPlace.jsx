import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OrderPlace() {
  const { getTotalAllAmount, token, food_list, cardItems, BASE_URL } =
    useContext(StoreContext);

  const navigate = useNavigate();

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let ordrItems = [];
    food_list.map((item) => {
      if (cardItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cardItems[item._id];
        ordrItems.push(itemInfo);
      }
    });
    // console.log("ordrItems", ordrItems);
    let orderData = {
      items: ordrItems,
      amount: getTotalAllAmount() + 2,
      address: data,
    };
    let response = await axios.post(BASE_URL + "/api/order/place", orderData, {
      headers: {
        Authorization: `Bearer ${token}`, // ✅ Ensure correct format
        "Content-Type": "application/json",
      },
    });
    console.log("response Order Place", response);

    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error Placing Order");
    }
  };

  // useEffect(() => {
  //   if (token) {
  //     navigate("/cart");
  //   } else if (!token) {
  //     navigate("/cart");
  //   }
  // }, [token]);

  return (
    <motion.form
      className="max-w-3xl mx-auto p-6 mt-5 bg-gray-200 shadow-lg rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onSubmit={placeOrder}
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          🚚 Delivery Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="firstName"
            value={data.firstName}
            onChange={onChangeHandler}
            type="text"
            placeholder="First name"
            className="p-3 border-gray-400 "
            required
          />
          <Input
            name="lastName"
            value={data.lastName}
            onChange={onChangeHandler}
            type="text"
            placeholder="Last name"
            className="p-3 border-gray-400 "
            required
          />
        </div>
        <Input
          name="email"
          value={data.email}
          onChange={onChangeHandler}
          type="email"
          placeholder="📧 Email address"
          className="p-3 border-gray-400 "
          required
        />
        <Input
          name="street"
          value={data.street}
          onChange={onChangeHandler}
          type="text"
          placeholder="🏠 Street"
          className="p-3 border-gray-400 "
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="city"
            value={data.city}
            onChange={onChangeHandler}
            type="text"
            placeholder="🏙️ City"
            className="p-3 border-gray-400 "
            required
          />
          <Input
            name="state"
            value={data.state}
            onChange={onChangeHandler}
            type="text"
            placeholder="🌍 State"
            className="p-3 border-gray-400 "
            required
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            name="pincode"
            value={data.pincode}
            onChange={onChangeHandler}
            type="text"
            placeholder="📮 PinCode"
            className="p-3 border-gray-400 "
            required
          />
          <Input
            name="country"
            value={data.country}
            onChange={onChangeHandler}
            type="text"
            placeholder="🌎 Country"
            className="p-3 border-gray-400 "
            required
          />
        </div>
        <Input
          name="phone"
          value={data.phone}
          onChange={onChangeHandler}
          type="text"
          placeholder="📞 Phone number"
          className="p-3 border-gray-400 "
          required
        />
      </div>

      <motion.div
        className="mt-8 p-6 bg-gray-300 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h2 className="text-xl font-bold mb-4 flex items-center ">
          🛒 Cart Total
        </h2>
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
          <Button
            type="submit"
            className="w-full bg-blue-600 text-white text-lg py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            🛍️ Pay Now
          </Button>
        </motion.div>
      </motion.div>
    </motion.form>
  );
}

export default OrderPlace;
