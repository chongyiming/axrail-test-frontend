import Image from "next/image";
import React from "react";

const Learn = () => {
  return (
    <div className="text-black justify-center flex text-center mt-30 flex-col">
      <Image
        src="/aircover.png"
        width={150}
        height={30}
        className="object-contain mx-auto"
      />
      <h1 className="text-4xl font-bold">
        However you host, <br />
        you’re protected
      </h1>
      <div className="flex flex-row mt-3 justify-center text-gray-500">
        <div>
          <p>Top-to-bottom protection, included every time</p>
          <p>you host your home on Airbnb.</p>
        </div>
      </div>
      <div className="mt-10 w-[30rem] mx-auto">
        <ul>
          <li className="flex justify-between h-15 items-center border-b border-gray-300">
            <p>Up to $3M damage protection</p>
            <Image
              className="object-contain"
              src="/greentick-icon.png"
              width={30}
              height={30}
            />
          </li>
          <li className="flex justify-between h-15 items-center border-b border-gray-300">
            <p>Up to $1M liability insurance</p>
            <Image
              className="object-contain"
              src="/greentick-icon.png"
              width={30}
              height={30}
            />
          </li>
          <li className="flex justify-between h-15 items-center">
            <p>24-hour safety line</p>
            <Image
              className="object-contain"
              src="/greentick-icon.png"
              width={30}
              height={30}
            />
          </li>
        </ul>
      </div>
      <button className="mt-10 w-60 bg-black px-5 py-3 rounded-full mx-auto text-white">
        Learn about AirCover
      </button>
      <div className="flex mt-10 text-gray-500 text-sm w-[30rem] mx-auto">
        <p>
          Host Damage Protection reimburses for certain guest damages during
          Airbnb stays. It’s not insurance and may apply if guests don’t pay.
          Liability insurance is provided by 3rd parties.
          <span className="underline ml-1 font-semibold">
            See details and exclusions.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Learn;
