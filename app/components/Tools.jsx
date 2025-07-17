"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";

const Tools = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  const [video1Playing, setVideo1Playing] = useState(false);
  const [video2Playing, setVideo2Playing] = useState(false);
  const [video3Playing, setVideo3Playing] = useState(false);

  const handlePlay = (videoRef, isPlaying, setIsPlaying) => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="text-black justify-center flex text-center mt-30 flex-col">
      <h1 className="text-4xl font-bold">
        All the tools you need
        <br />
        to host, all in one app
      </h1>
      <div className="flex gap-10 p-10 mx-auto">
        <div className="relative">
          <video
            ref={videoRef1}
            width={340}
            height={360}
            className="mx-auto mt-10"
          >
            <source src="/tool1.mp4" type="video/mp4" />
          </video>
          <button
            className="absolute bottom-20 left-10 cursor-pointer"
            onClick={() =>
              handlePlay(videoRef1, video1Playing, setVideo1Playing)
            }
          >
            {video1Playing ? (
              <Image src="/pause-button.png" width={30} height={30} />
            ) : (
              <Image src="/play-button.png" width={30} height={30} />
            )}
          </button>
          <h2 className="mt-4">Listing editor</h2>
          <p className="text-gray-500 text-sm">
            Showcase every detail of your home
          </p>
        </div>

        <div className="relative">
          <video
            ref={videoRef2}
            width={340}
            height={360}
            className="mx-auto mt-10"
          >
            <source src="/tool2.mp4" type="video/mp4" />
          </video>
          <button
            className="absolute bottom-20 left-10 cursor-pointer"
            onClick={() =>
              handlePlay(videoRef2, video2Playing, setVideo2Playing)
            }
          >
            {video2Playing ? (
              <Image src="/pause-button.png" width={30} height={30} />
            ) : (
              <Image src="/play-button.png" width={30} height={30} />
            )}
          </button>
          <h2 className="mt-4">Calendar</h2>
          <p className="text-gray-500 text-sm">
            Manage your availability and pricing
          </p>
        </div>
        <div className="relative">
          <video
            ref={videoRef3}
            width={340}
            height={360}
            className="mx-auto mt-10"
          >
            <source src="/tool3.mp4" type="video/mp4" />
          </video>
          <button
            className="absolute bottom-20 left-10 cursor-pointer"
            onClick={() =>
              handlePlay(videoRef3, video3Playing, setVideo3Playing)
            }
          >
            {video3Playing ? (
              <Image src="/pause-button.png" width={30} height={30} />
            ) : (
              <Image src="/play-button.png" width={30} height={30} />
            )}
          </button>
          <h2 className="mt-4">Messages</h2>
          <p className="text-gray-500 text-sm">
            Quickly message guests and support
          </p>
        </div>
      </div>
      <div className="w-[90%] mx-auto p-10 mt-10 border-t border-gray-300 flex flex-row items-center justify-center">
        <Image
          src="/house.png"
          width={300}
          height={100}
          className="object-contain rounded-lg"
        />
        <div>
          <div className="ml-10">
            <h2 className="text-left text-2xl font-semibold">
              Hosting isn’t only for homeowners
            </h2>
            <p className="text-left text-gray-500 mt-5">
              Airbnb-friendly apartments make it easy for you to rent, host, and
              earn extra income when you’re away.
            </p>
          </div>
          <button className="flex ml-9 mt-5 p-1 rounded-sm underline cursor-pointer hover:bg-gray-200">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tools;
