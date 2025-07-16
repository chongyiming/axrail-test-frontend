import Image from "next/image";
import React from "react";

const Cohost = () => {
  return (
    <div className="text-black justify-center flex text-center mt-10 flex-col">
      <h1 className="text-4xl font-bold">
        A co-host can do <br />
        the hosting for you
      </h1>
      <div className="flex flex-row mt-3 justify-center text-gray-500">
        <div>
          <p>Now you can hire a high-quality, local co‑host </p>
          <p>to take care of your home and guests.</p>
        </div>
      </div>
      <h1 className="mt-5 text-2xl font-bold">Co-hosts can do it all</h1>
      <div className="grid grid-cols-2 p-8 gap-7">
        <div className="flex border-b border-gray-300 h-25 items-center">
          <Image
            src="/camera-icon.png"
            width={64}
            height={64}
            className="object-contain"
          />
          <div className="w-60 text-left ml-5">
            <h2>Set up your listing</h2>
            <p className=" text-gray-500">
              Take photos, set prices, and create an arrival guide
            </p>
          </div>
        </div>
        <div className="flex border-b border-gray-300 h-25 items-center">
          <Image
            src="/spray-icon.png"
            width={64}
            height={64}
            className="object-contain"
          />
          <div className="w-60 text-left ml-5">
            <h2>Get your home ready</h2>
            <p className=" text-gray-500">
              Prepare, clean, and maintain your home
            </p>
          </div>
        </div>
        <div className="flex h-25 items-center">
          <Image
            src="/calendar-icon.png"
            width={64}
            height={64}
            className="object-contain"
          />
          <div className="w-60 text-left ml-5">
            <h2>Manage your reservations</h2>
            <p className=" text-gray-500">
              Stay on top of your bookings and guest messages
            </p>
          </div>
        </div>
        <div className="flex h-25 items-center">
          <Image
            src="/key-icon.png"
            width={64}
            height={64}
            className="object-contain"
          />
          <div className="w-60 text-left ml-5">
            <h2>Assist your guests</h2>
            <p className=" text-gray-500">
              Handle check-ins, checkouts, and onsite requests{" "}
            </p>
          </div>
        </div>
      </div>
      <button className="mt-10 w-60 bg-black px-5 py-3 rounded-full mx-auto text-white">
        Find a co-host
      </button>
    </div>
  );
};

export default Cohost;
