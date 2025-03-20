import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { StoreContext } from "../../context/StoreContext";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

export default function Navbar({ setShowLogin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpens, setIsOpens] = useState(false);
  const [menu, setMenu] = useState("");
  const { getTotalAllAmount, token, setToken } = useContext(StoreContext);
  const navigation = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigation("/");
  };

  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-red-500">
          🍔 <Link to="/">Food Delivery</Link>
        </div>

        {/* serch icon */}

        <div className="hidden md:flex flex-1 mx-4">
          <Input
            type="text"
            placeholder="Search for food..."
            className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="#menu"
                    onClick={() => setMenu("menu")}
                    className={`${
                      menu === "menu" ? "text-red-500" : "text-gray-700"
                    } hover:text-red-500 font-mono text-lg`}
                  >
                    Menu
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about"
                    onClick={() => setMenu("about")}
                    className={`${
                      menu === "about" ? "text-red-500" : "text-gray-700"
                    } hover:text-red-500 font-mono text-lg`}
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="relative flex ml-3 mr-4 ">
          <Link to="/card">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-gray-700 cursor-pointer" />
          </Link>
          <div
            className={
              getTotalAllAmount() === 0
                ? " "
                : "w-2 h-2 bg-red-500 rounded-full absolute -top-1 -right-1"
            }
          ></div>
        </div>

        {!token ? (
          <div className="flex items-center">
            <Button
              onClick={() => setShowLogin(true)}
              className="hover:text-blue-500 "
              variant="link"
            >
              Login
            </Button>
          </div>
        ) : (
          <div className="relative">
            {/* Avatar acts as a dropdown trigger */}
            <div
              onClick={() => setIsOpens(!isOpens)}
              className="flex items-center space-x-4 cursor-pointer p-2 border rounded-lg hover:bg-gray-100 transition w-fit"
            >
              <Avatar className="w-10 h-10">
                <AvatarImage
                  className="w-10 h-10 rounded-full"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

            {/* Dropdown Menu */}
            {isOpens && (
              <ul className="absolute mt-2 right-0 w-40 bg-white shadow-lg border rounded-md p-2 z-50">
                <li className="flex items-center space-x-3 p-2 hover:bg-gray-100 transition cursor-pointer">
                  <FaShoppingCart size={20} className="text-gray-700" />
                  <span className="text-gray-700">Order</span>
                </li>
                <li
                  onClick={handleLogout}
                  className="flex items-center space-x-3 p-2 hover:bg-gray-100 transition cursor-pointer"
                >
                  <AiOutlineLogout size={20} className="text-gray-700" />
                  <span>Logout</span>
                </li>
              </ul>
            )}
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="md:hidden mt-3 px-4">
        <Input
          type="text"
          placeholder="Search for food..."
          className="w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col mt-4 space-y-2 text-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="#menu"
            className="text-gray-700 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
}
