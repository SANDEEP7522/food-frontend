import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react"; // Importing the cross icon from Lucide
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

function Login({ setShowLogin }) {
  const { BASE_URL, token, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign In"); // Default state set to "Sign In"
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const onlogin = async (event) => {
    event.preventDefault();
    let newUrl = BASE_URL;

    if (currState === "Sign Up") {
      newUrl += "/api/user/register"; // Corrected API endpoint
    } else {
      newUrl += "/api/user/login"; // Corrected API endpoint
    }

    console.log("Final API URL:", newUrl);
    console.log("Sending Data:", data);

    try {
      const response = await axios.post(newUrl, data);
      console.log("API Response:", response.data);

      if (response.data.success) {
        const newToken = response.data?.data?.token;
        console.log("Token from API:", newToken);

        if (newToken) {
          localStorage.setItem("token", newToken);
          console.log(
            "Token stored in localStorage:",
            localStorage.getItem("token")
          );
        } else {
          console.error("Token is missing in API response");
        }

        setToken(newToken);
        setShowLogin(false);
      } else {
        alert(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error.response?.data?.message || error.message);
      alert(error.response?.data?.message || "Invalid request");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        className="bg-white shadow-xl p-8 rounded-lg w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <form action="" onSubmit={onlogin}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              {currState} {currState === "Sign Up" ? "🚀" : "🔑"}
            </h2>
            <button
              onClick={() => setShowLogin(false)}
              className="text-gray-500 hover:text-gray-800"
            >
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4">
            {currState === "Sign Up" && (
              <Input
                name="name"
                value={data.name}
                onChange={onChangeHandler}
                type="text"
                placeholder="👤 Enter Username"
                required
              />
            )}

            <Input
              name="email"
              value={data.email}
              onChange={onChangeHandler}
              type="email"
              placeholder="📧 Enter Email"
              required
            />

            <Input
              name="password"
              value={data.password}
              onChange={onChangeHandler}
              type="password"
              placeholder="🔒 Enter Password"
              required
            />
          </div>

          <div className="flex items-center mt-4 text-sm">
            <input type="checkbox" className="mr-2" />
            <p>
              I agree to the{" "}
              <span className="text-blue-600 cursor-pointer">
                terms and conditions
              </span>{" "}
              ✅
            </p>
          </div>

          <Button type="submit" className="w-full mt-4">
            {currState === "Sign Up" ? "🎉 Create Account" : "🚀 Sign In"}
          </Button>

          <p className="text-sm text-center mt-4">
            {currState === "Sign Up" ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setCurrState("Sign In")}
                  className="text-blue-600 cursor-pointer"
                >
                  Login here 🔑
                </span>
              </>
            ) : (
              <>
                New user?{" "}
                <span
                  onClick={() => setCurrState("Sign Up")}
                  className="text-blue-600 cursor-pointer"
                >
                  Create an account 🎉
                </span>
              </>
            )}
          </p>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
