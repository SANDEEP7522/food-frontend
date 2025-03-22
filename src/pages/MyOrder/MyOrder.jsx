import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";

import axios from "axios";

const MyOrder = () => {
  const { BASE_URL, token } = useContext(StoreContext);

  const [data, setData] = useState([]);

  const fetchedOrders = async () => {
    console.log("🚀 Fetching orders with token:", token);
  
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("🚨 No token found in LocalStorage!");
        return;
      }
  
      const response = await axios.post(
        BASE_URL + "/api/order/userorders",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("✅ Full API Response:", response.data);

      setData(Array.isArray(response.data.orders) ? response.data.orders : []);
    } catch (error) {
      console.error("❌ API Error:", error.response?.data || error.message);
      setData([]); 
    }
  };
  
  useEffect(() => {
    console.log("🔍 Token in MyOrder:", token);
    if (token) {
      fetchedOrders();
    }
  }, [token]); 
  return (
    <div className="container mx-auto px-4 py-6">
  <h2 className="text-4xl font-bold text-gray-800 text-center">
    Your orders
  </h2>

  {data.length > 0 ? (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((order) => (
        <div
          key={order._id}
          className="border rounded-lg shadow-md bg-white p-5 transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900">
            Order ID: <span className="text-blue-600">{order._id}</span>
          </h3>
          <p className="text-gray-700">
            <strong>Amount:</strong> ${order.amount}
          </p>
          <p className="text-gray-700">
            <strong>Status:</strong> 
            <span className={`ml-2 font-medium ${order.status === "Delivered" ? "text-green-600" : "text-orange-600"}`}>
              {order.status}
            </span>
          </p>
          <p className="text-gray-700">
            <strong>Payment:</strong> {order.payment ? "✅ Paid" : "❌ Not Paid"}
          </p>

          <h4 className="mt-3 font-semibold text-gray-800">Items:</h4>
          <ul className="mt-2 space-y-2">
            {order.items.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border p-2 rounded-md bg-gray-50 text-gray-800"
              >
                {item.name}
                <span className="font-semibold text-blue-600">${item.price}</span>
              </li>
            ))}
          </ul>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            Track Order
          </button>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-600 mt-6">
      You don't have any orders yet.
    </p>
  )}
</div>

  );
};

export default MyOrder;
