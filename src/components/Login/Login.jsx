import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white shadow-xl p-8 rounded-lg w-96"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          🔐 Login to Your Account
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="email">📧 Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="password">🔑 Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            🚀 Login
          </Button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-600">
          <p>
            Forgot your password?{" "}
            <a href="#" className="text-blue-500">
              Reset it
            </a>
          </p>
          <p>
            New here?{" "}
            <a href="#" className="text-blue-500">
              Sign up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
