"use client";

import React, { useState } from "react";

import { BiRightArrow } from "react-icons/bi";

export default function Accordion({ title, content }: { title: string; content: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 rounded-md mb-2 p-2">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
        <p className="text-lg font-semibold">{title}</p>
        <BiRightArrow className={`w-6 h-6 transform ${isOpen ? "rotate-90" : ""}`} />
      </div>
      {isOpen && <>{content}</>}
    </div>
  );
}
