"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Location = () => {
  const [value, setValue] = useState(15);
  const [moving, setMoving] = useState(false);
  const [total, setTotal] = useState(0);
  const calculation = () => {
    setTotal(value * 199);
  };
  useEffect(() => {
    calculation();
  }, [value]);
  return (
    <div className="mt-50 text-black justify-center flex text-center mt-10 flex-col">
      <h1 className="text-6xl font-bold">
        Your home could <br />
        make ${total} <br />
        on Airbnb
      </h1>
      <div className="h-20">
        {moving ? (
          <span className="text-xl mt-10 flex justify-center bg-black w-30 mx-auto text-white py-3 flex-row rounded-full">
            {value} nights
          </span>
        ) : (
          <>
            <div className="flex flex-row mt-3 justify-center gap-1">
              <p className="underline ">{value} nights </p>
              <p>· $199/night</p>
            </div>
            <div className="flex flex-row mt-3 justify-center gap-1 text-gray-500 text-sm">
              <p>Learn how we </p>
              <p className="underline "> estimate earnings</p>
            </div>
          </>
        )}
      </div>
      <div>
        <input
          type="range"
          min="1"
          max="30"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setMoving(true);
          }}
          onMouseUp={() => setMoving(false)}
          className="w-64 accent-pink-600 flex justify-center mx-auto mt-10"
        />
      </div>
      <div className="px-5 py-7 cursor-pointer h-10 mx-auto mt-10 flex border border-gray-300 rounded-full w-100 items-center">
        <Image
          src="/search-icon.png"
          width={20}
          height={20}
          className="object-contain"
        />
        <div className="flex gap-1">
          <p className="ml-5 font-semibold">Petaling Jaya </p>
          <p className="text-gray-500">· Entire place</p>
          <p className="text-gray-500">· 3 bedrooms</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
