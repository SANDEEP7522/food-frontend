import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const images = [
  "https://cdn3.vox-cdn.com/uploads/chorus_asset/file/704658/tumblr_m6oolzvXsJ1qfvx4yo1_500.0.gif",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWPAEPGPYYD7IfP4Tdk4oqi5Ik7KmBJAnTtg&s",
  "https://img95.lovepik.com/photo/40104/9102.gif_wh860.gif",
  "https://img95.lovepik.com/photo/40108/1576.gif_wh300.gif",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuHjN5UTHbHcd15ISDA4LGGFe8uxd98ZvfeQ&s",
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
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
        <h4 className="text-2xl font-bold mb-2 text-red-800">
          🍽️ Enjoy Fresh, Delicious, & Flavorful!
        </h4>
        <p className="text-clip font-medium leading-relaxed">
          🍕 **Food made with the finest ingredients** to bring you a rich &
          satisfying taste. 🌿 **Every dish is crafted to perfection**, ensuring
          each bite is a burst of flavor. 😋 Experience the **joy of eating**
          with our mouthwatering meals, prepared with ❤️ love & care just for
          you!
        </p>
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
