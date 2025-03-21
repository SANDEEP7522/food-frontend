import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const images = [
  "https://cdn3.vox-cdn.com/uploads/chorus_asset/file/704658/tumblr_m6oolzvXsJ1qfvx4yo1_500.0.gif",
  "https://plus.unsplash.com/premium_photo-1663040013321-1d34c76ae902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1651326770902-5360f70acc7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8",
  "https://img95.lovepik.com/photo/40108/1576.gif_wh300.gif",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
];

function Header() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w4-xl mx-auto mt-6 relative">
      <div className="absolute w-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <motion.h4
          className="text-2xl font-bold mb-2 text-red-800"
          initial={{ opacity: 0, x: -50 }} // Start position (hidden, moved left)
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible state
          viewport={{ once: true }} // Ensures it animates only once
          transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
        >
          🍽️ Enjoy Fresh, Delicious, & Flavorful!
        </motion.h4>

        <Button className="bg-slate-400 px-6 py-3 rounded-md shadow-lg hover:bg-slate-500 transition-all">
          View Menu
        </Button>
      </div>
      <Carousel>
        <CarouselContent
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <CarouselItem className="relative min-w-full" key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md text-lg">
                {`Delicious Food #${index + 1}`}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Header;
