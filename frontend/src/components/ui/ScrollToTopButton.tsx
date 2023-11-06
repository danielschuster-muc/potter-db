"use client";

import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`bg-secondary hover:opacity-100 opacity-90 hover:scale-105 text-white rounded-full w-10 h-10 flex items-center justify-center fixed bottom-4 right-4 ${
        isVisible ? "flex" : "hidden"
      }`}
      aria-label="Scroll to top"
      onClick={handleClick}>
      <IoIosArrowUp className="text-xl" />
    </button>
  );
}

export default ScrollToTopButton;
