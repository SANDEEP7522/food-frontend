import React from "react";

const menuItems = [
  {
    id: 1,
    name: "Cheesy Margherita 🍕",
    image: "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
    price: "$9.99",
  },
  {
    id: 2,
    name: "Juicy Burger 🍔",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    price: "$7.49",
  },
  {
    id: 3,
    name: "Crispy Fried Chicken 🍗",
    image: "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg",
    price: "$8.99",
  },
  {
    id: 4,
    name: "Refreshing Sushi 🍣",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GcKireqtZsvYX5Cg7Tn6XDOowmad2j2TFw&s",
    price: "$12.99",
  },
  {
    id: 5,
    name: "Spicy Tacos 🌮",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_ROmL5a06BsmF1Q4YylA8w6xM7sP42WQhQ&s",
    price: "$6.99",
  },
  {
    id: 6,
    name: "Delicious Pasta 🍝",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ZJMkpJoYOJPyV728KwCNcxw3x6MNR3qg2w&s",
    price: "$10.99",
  },
];

function ExploreMenu() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
        🍽️ Explore Our Menu
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              {item.name}
            </h3>
            <p className="text-lg text-green-600 font-bold mt-2">
              {item.price}
            </p>
            <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg shadow-md hover:bg-red-600 transition-all">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMenu;
