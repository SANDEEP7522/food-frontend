import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react"; // Importing the cross icon from Lucide

function Login({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.div
        className="bg-white shadow-xl p-8 rounded-lg w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <form action="">
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
              <Input type="text" placeholder="👤 Enter Username" required />
            )}
            <Input type="email" placeholder="📧 Enter Email" required />
            <Input type="password" placeholder="🔒 Enter Password" required />
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

          <Button className="w-full mt-4">
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
