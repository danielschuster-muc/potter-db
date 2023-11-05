import Link from "next/link";
import React from "react";

export default function InfoSection() {
  return (
    <div className="w-full md:w-3/4 justify-center grid lg:grid-cols-3 gap-5">
      <div className="mt-5 p-5 border-2 border-gray-200 rounded-lg">
        <h2 className="text-2xl mb-3 font-bold">What is Potter DB?</h2>
        <p className="text-lg">
          Potter DB is an unofficial database dedicated to the magical world of Harry Potter. Our
          platform offers a vast collection of information about the characters, spells, books,
          movies, potions, and more. With a seamless and user-friendly interface, combined with an
          extensive data repository, Potter DB stands as the quintessential haven for both dedicated
          Potterheads and curious enthusiasts. Join us on a spellbinding journey through the
          intricate tapestry of J.K. Rowling&apos;s timeless world.
        </p>
      </div>

      <div className="mt-5 p-5 border-2 border-gray-200 rounded-lg">
        <h2 className="text-2xl mb-3 font-bold">Potter DB: Website</h2>
        <p className="text-lg">
          Our intuitive and robust website search feature empowers all users, whether or not they
          are developers or familiar with APIs, to swiftly access information about their beloved
          characters, spells, or any other specific elements within the enchanting realm of the
          Harry Potter Universe. With its user-friendly design and accessibility, our search feature
          ensures that everyone can effortlessly explore and uncover the magic woven within the
          intricate details of the Harry Potter Universe.
        </p>
      </div>

      <div className="mt-5 p-5 border-2 border-gray-200 rounded-lg">
        <h2 className="text-2xl mb-3 font-bold">Potter DB: API</h2>
        <p className="text-lg">
          The Potter DB: API serves as a powerful tool for developers and enthusiasts to access the
          rich data from the Harry Potter Universe. Whether you prefer to use GraphQL or REST, our
          API provides seamless integration for retrieving detailed information about characters,
          spells, and other elements from the magical world. Explore the endless possibilities of
          integrating Potter DB&apos;s data into your own projects, applications, or websites. Have
          a look at our{" "}
          <Link
            className="text-gray-300 hover:text-white underline"
            href="https://docs.potterdb.com">
            API documentation
          </Link>{" "}
          to get started.
        </p>
      </div>
    </div>
  );
}
