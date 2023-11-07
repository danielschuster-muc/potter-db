import React from "react";
import Image from "next/image";

import hogwartsExpress from "../../public/images/hogwarts_express.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] rounded-lg">
      <Image
        src={hogwartsExpress}
        alt="Hogwarts Express"
        fill
        className="rounded-lg object-left-top object-cover"
        quality={30}
        priority
      />
      <div className="text-white border border-secondary rounded-lg absolute inset-0 flex flex-col items-center justify-center z-10 bg-gray-700 bg-opacity-30 h-full mx-auto px-3 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Potter DB</h1>
        <h2 className="text-lg md:text-2xl mt-2">
          A Harry Potter database for all your wizarding needs.
        </h2>
      </div>
    </section>
  );
}
