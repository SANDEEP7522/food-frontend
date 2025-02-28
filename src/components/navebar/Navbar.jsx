import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
                  <Link to="/" className="text-gray-700 hover:text-red-500">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/menu" className="text-gray-700 hover:text-red-500">
                    Menu
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-red-500"
                  >
                    About
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center" >
        <Button variant="link">Login</Button>
        </div>

        <div className="flex items-center space-x-4 ">
          <Avatar className="ml-4 w-10 h-10 ">
            <AvatarImage
            className="w-10 h-10 rounded-full"
            src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

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
            to="/menu"
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
