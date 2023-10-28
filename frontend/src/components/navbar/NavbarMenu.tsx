"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

type MenuItem = {
  label: string;
  url: string;
};

const menuItems: MenuItem[] = [
  {
    label: "Books",
    url: "/books",
  },
  {
    label: "Characters",
    url: "/characters",
  },
  {
    label: "Movies",
    url: "/movies",
  },
  {
    label: "Potions",
    url: "/potions",
  },
  {
    label: "Spells",
    url: "/spells",
  },
];

const helpItems: MenuItem[] = [
  {
    label: "Docs",
    url: "https://docs.potterdb.com/",
  },
  {
    label: "Status",
    url: "https://status.potterdb.com/",
  },
];

const NavbarMenu = () => {
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  return (
    <>
      <div
        className={`w-screen h-screen bg-transparent fixed top-0 left-0 z-[20] ${
          !showMenu ? "hidden" : ""
        }`}
        onClick={() => setShowMenu(false)}
      />
      <div className="flex flex-row">
        <div className="flex-row items-center text-lg gap-3 mr-3 hidden sm:flex">
          {helpItems.map((item) => {
            return (
              <Link
                key={item.label}
                href={item.url}
                target="_blank"
                className="block rounded hover:bg-transparent text-gray-300 hover:text-white">
                {item.label}
              </Link>
            );
          })}
        </div>
        <button
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg focus:outline-none hover:ring-2 focus:ring-2 text-secondary hover:ring-secondary focus:ring-secondary"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <FiMenu className="w-6 h-6 text-lg stroke-current" />
        </button>
      </div>
      <div
        className={`${showMenu ? "" : "hidden"} w-auto absolute top-16 right-3 z-[21]`}
        id="navbar-default">
        <ul className="font-medium text-lg flex flex-col p-4 mt-4 border border-gray-700 rounded-lg bg-background">
          {helpItems.map((item) => {
            return (
              <li key={item.label}>
                <Link
                  href={item.url}
                  className="block rounded border-0 text-gray-300 hover:text-white sm:hidden">
                  {item.label}
                </Link>
              </li>
            );
          })}
          <div className="flex-grow border-t border-gray-300 my-2 sm:hidden"></div>
          {menuItems.map((item) => {
            return (
              <li key={item.label}>
                <Link
                  href={item.url}
                  className="block rounded border-0 text-gray-300 hover:text-white">
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
