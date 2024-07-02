"use client"

import Image from "next/image";
import { useState } from "react";

const CarouselItem = ({ moviePoster }: { moviePoster: string }) => {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = "/MyDisneyLogo.svg";
  return (
    <div className="mr-2 drop-shadow-xl min-w-40 h-24 md:min-w-80 md:h-48 rounded-md transition ease-in-out duration-300 hover:ring-2 hover:ring-blue-300 hover:scale-110">
      <Image src={imageError ? fallbackImage : moviePoster} alt="Movie Poster" fill className="p-1" onError={() => setImageError(true)} />
    </div>
  );
};

export default CarouselItem;