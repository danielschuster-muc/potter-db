"use client";
import React, { useState } from "react";

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
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                className="block rounded hover:bg-transparent hover:text-secondary text-white">
                {item.label}
              </a>
            );
          })}
        </div>
        <button
          data-collapse-toggle="navbar-default"
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg focus:outline-none hover:ring-2 focus:ring-2 text-secondary hover:ring-secondary focus:ring-secondary"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        className={`${showMenu ? "" : "hidden"} w-auto absolute top-16 right-3 z-[21]`}
        id="navbar-default">
        <ul className="font-medium text-lg flex flex-col p-4 mt-4 border border-gray-700 rounded-lg bg-background">
          {helpItems.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.url}
                  className="block rounded border-0 hover:text-secondary text-white sm:hidden">
                  {item.label}
                </a>
              </li>
            );
          })}
          <div className="flex-grow border-t border-gray-300 my-2 sm:hidden"></div>
          {menuItems.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.url}
                  className="block rounded border-0 hover:text-secondary text-white">
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavbarMenu;
