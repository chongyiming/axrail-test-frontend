"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <div
      className={`flex py-3 px-8 justify-between text-white fixed top-0 w-full z-50 ${
        isScroll ? "bg-white/90 backdrop-blur-lg shadow-sm" : ""
      }`}
    >
      <Image
        src="/airbnb.png"
        width={30}
        height={30}
        className="object-contain"
      />
      <button className="bg-red-500 px-5 py-3 rounded-full">
        Airbnb Setup
      </button>
    </div>
  );
};

export default Header;
