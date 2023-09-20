import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] rounded-lg m-4">
      <div className="">
        <Image
          src="/images/hogwarts_express.jpg"
          alt="Hogwarts Express"
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
          className="rounded-lg"
          quality={100}
          priority
        />
        <div className="border border-secondary rounded-lg absolute inset-0 flex flex-col items-center justify-center z-10 bg-gray-700 bg-opacity-30 h-full mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Harry Potter DB</h1>
          <h2 className="text-lg md:text-2xl text-white mt-2">
            An API with Data from the Harry Potter Universe.
          </h2>
        </div>
      </div>
    </section>
  );
}
