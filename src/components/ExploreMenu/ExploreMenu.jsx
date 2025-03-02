import React from "react";

const menuItems = [
  {
    id: 1,
    name: "Cheesy🍕",
    image:
      "https://media.istockphoto.com/id/1829241109/photo/enjoying-a-brunch-together.jpg?s=612x612&w=0&k=20&c=9awLLRMBLeiYsrXrkgzkoscVU_3RoVwl_HA-OT-srjQ=",
  },
  {
    id: 2,
    name: "Burger 🍔",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 3,
    name: "Chicken 🍗",
    image:
      "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg",
  },
  {
    id: 4,
    name: "Sushi 🍣",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GcKireqtZsvYX5Cg7Tn6XDOowmad2j2TFw&s",
  },
  {
    id: 5,
    name: "Tacos 🌮",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_ROmL5a06BsmF1Q4YylA8w6xM7sP42WQhQ&s",
  },
  {
    id: 6,
    name: "Pasta 🍝",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ZJMkpJoYOJPyV728KwCNcxw3x6MNR3qg2w&s",
  },
];

function ExploreMenu({ categories, setCategories }) {
  return (
    <div className=" bg-gray-100 p-6">
      <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
        🍽️ Explore Our Menu
      </h2>
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {menuItems.map((item) => (
          <div
            onClick={() =>
              setCategories((prev) => (prev === item.name ? "All" : item.name))
            }
            key={item.id}
            className="bg-white p-6 rounded-full shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
          >
            <img
              onClick={() =>
                setCategories((prev) =>
                  prev === item.name ? "All" : item.name
                )
              }
              src={item.image}
              alt={item.name}
              className="w-14 h-14 object-cover rounded-full border-2 border-gray-300 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 "
            />
            <h3 className="text-lg font-semibold text-gray-800 mt-4 text-center">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreMenu;
