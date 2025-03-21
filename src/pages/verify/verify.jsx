import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { motion } from "framer-motion";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { Button } from "@/components/ui/button";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { BASE_URL } = useContext(StoreContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleVerify = async () => {
    if (!orderId || success === null) {
      console.error("Missing required parameters");
      navigate("/");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/api/order/verify`, {
        success,
        orderId,
      });
      console.log("response handleVerify", response);

      if (response.data.success) {
        navigate("/myorders");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error verifying order:", error);
      navigate("/");
    }
  };

  useEffect(() => {
    const verifyPayment = async () => {
      await handleVerify();
      setLoading(false);
    };

    verifyPayment();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen px-4 bg-gray-100">
      {loading ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-16 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
          <p className="mt-4 text-lg text-blue-600 font-semibold">
            Verifying Payment...
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 bg-white shadow-xl rounded-lg text-center max-w-md"
        >
          {success === "true" ? (
            <div className="flex flex-col items-center">
              <AiOutlineCheckCircle className="text-green-500 text-6xl" />
              <h2 className="text-green-600 text-xl font-bold mt-2">
                Payment Successful!
              </h2>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <AiOutlineCloseCircle className="text-red-500 text-6xl" />
              <h2 className="text-red-600 text-xl font-bold mt-2">
                Payment Failed!
              </h2>
            </div>
          )}
          <p className="mt-2 text-gray-700 text-sm">
            Order ID: <span className="font-semibold">{orderId}</span>
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default Verify;
