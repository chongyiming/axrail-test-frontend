import Image from "next/image";
import React from "react";

const Setup = () => {
  const lists = [
    {
      icon: "/home-icon.png",
      description: "Create a listing for your place in just a few steps",
    },
    {
      icon: "/timer-icon.png",
      description: "Go at your own pace, and make changes whenever",
    },
    {
      icon: "/chat.png",
      description: "Get 1:1 support from experienced hosts at any time",
    },
  ];
  return (
    <div className="text-black justify-center flex text-center mt-10 flex-col">
      <h1 className="text-4xl font-bold">
        It’s easy to list your <br />
        home on Airbnb
      </h1>

      <video width="340" height="360" autoPlay muted className="mx-auto mt-10">
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="px-10 sm:px-[10rem] md:px-[15rem] lg:px-[20rem] flex mt-10 justify-around">
        {lists.map((list, index) => {
          return (
            <div key={index} className="flex flex-col w-50 items-center">
              <div className="w-10 bg-gray-200 h-10 p-2 rounded-lg">
                <Image src={list.icon} width={30} height={30} />
              </div>
              <p className="mt-5 text-sm">{list.description}</p>
            </div>
          );
        })}
      </div>
      <button className="mt-10 w-60 bg-black px-5 py-3 rounded-full mx-auto text-white">
        Airbnb Setup
      </button>
    </div>
  );
};

export default Setup;
