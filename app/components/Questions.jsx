"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";

const Questions = () => {
  const menuRef1 = useRef(null);
  const menuRef2 = useRef(null);
  const menuRef3 = useRef(null);
  const menuRef4 = useRef(null);

  const [menu1Open, setMenu1Opening] = useState(false);
  const [menu2Open, setMenu2Opening] = useState(false);
  const [menu3Open, setMenu3Opening] = useState(false);
  const [menu4Open, setMenu4Opening] = useState(false);

  const handleOpen = (menuRef, isOpening, setIsOpening) => {
    if (menuRef.current) {
      setIsOpening(!isOpening);
    }
  };

  return (
    <div className="w-full bg-gray-100">
      <div className="text-black justify-center flex text-center flex-col">
        <h1 className="text-4xl font-bold mt-30">
          Your questions, <br />
          answered
        </h1>
        <ul className="mt-10">
          <li
            className={`${
              menu1Open
                ? "border-b border-gray-300  mt-5 py-5"
                : "border-b border-gray-300 mt-3 py-5"
            } items-center border-gray-300 w-[50%] mx-auto`}
            ref={menuRef1}
            onClick={() => handleOpen(menuRef1, menu1Open, setMenu1Opening)}
          >
            <div className="flex justify-between">
              <p>Top questions</p>
              <Image
                src="/arrow-down.png"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            {menu1Open ? (
              <div className="text-left mt-5">
                <p className="font-semibold">Is my place right for Airbnb?</p>
                <p className="text-gray-500 mt-1">
                  Airbnb guests are interested in all kinds of places––spare
                  rooms, apartments, houses, vacation homes, even treehouses.
                </p>
                <p className="font-semibold mt-5">
                  Do I have to host all the time?
                </p>
                <p className="text-gray-500 mt-1">
                  Nope—you control your calendar. You can host once a year, a
                  few nights a month, or more often.
                </p>
                <p className="font-semibold mt-5">What are Airbnb’s fees?</p>
                <p className="text-gray-500 mt-1">
                  It’s free to create a listing, and Airbnb typically collects a
                  service fee of 3% of the reservation subtotal once you get
                  paid. In many areas, Airbnb automatically collects and pays
                  sales and tourism taxes on your behalf.{" "}
                  <span className="font-semibold underline ">
                    Learn more about fees.
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
          </li>
          <li
            className={`${
              menu2Open
                ? "border-b border-gray-300  mt-5 py-5"
                : "border-b border-gray-300 mt-3 py-5"
            } items-center border-gray-300 w-[50%] mx-auto`}
            ref={menuRef2}
            onClick={() => handleOpen(menuRef2, menu2Open, setMenu2Opening)}
          >
            <div className="flex justify-between">
              <p>Hosting basics</p>
              <Image
                src="/arrow-down.png"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            {menu2Open ? (
              <div className="text-left mt-5">
                <p className="font-semibold">How do I get started?</p>
                <p className="text-gray-500 mt-1">
                  You can create a listing in just a few steps, all at your own
                  pace. Start by telling us about your home, take some photos,
                  and add details about what makes it unique.{" "}
                  <span className="font-semibold underline">
                    Start your listing.
                  </span>
                </p>
                <p className="font-semibold mt-5">
                  How do I get my home ready for guests?
                </p>
                <p className="text-gray-500 mt-1">
                  Make sure your home is clean, clutter-free, and that
                  everything is working properly. Items like fresh linens and
                  stocked toiletries help create a comfortable and inviting
                  place to stay.{" "}
                  <span className="font-semibold underline">
                    Check out our guide to getting your home ready.
                  </span>
                </p>
                <p className="font-semibold mt-5">
                  How am I protected when I host?
                </p>
                <p className="text-gray-500 mt-1">
                  AirCover for Hosts provides top-to-bottom protection every
                  time you host your home on Airbnb.{" "}
                  <span className="font-semibold underline ">
                    Learn more about AirCover for Hosts and what’s included.
                  </span>
                </p>
                <p className="font-semibold mt-5">
                  Any tips on being a great host?
                </p>
                <p className="text-gray-500 mt-1">
                  From sharing a list of your favorite local places to
                  responding quickly to guest messages, there are lots of ways
                  to be an excellent host.{" "}
                  <span className="font-semibold underline ">
                    Get more hosting tips.
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
          </li>
          <li
            className={`${
              menu3Open
                ? "border-b border-gray-300  mt-5 py-5"
                : "border-b border-gray-300 mt-3 py-5"
            } items-center border-gray-300 w-[50%] mx-auto`}
            ref={menuRef3}
            onClick={() => handleOpen(menuRef3, menu3Open, setMenu3Opening)}
          >
            <div className="flex justify-between">
              <p>Policy & regulations</p>
              <Image
                src="/arrow-down.png"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            {menu3Open ? (
              <div className="text-left mt-5">
                <p className="font-semibold">
                  Are there any regulations that apply in my city?
                </p>
                <p className="text-gray-500 mt-1">
                  Some areas have laws and regulations for hosting your home.
                  It’s important to familiarize yourself with any laws that may
                  apply to your location. Also, depending on where you live, you
                  may need to check with your HOA, read your lease agreement, or
                  notify your landlord or neighbors about your plans to host on
                  Airbnb.{" "}
                  <span className="font-semibold underline">
                    Learn more about responsible hosting.
                  </span>
                </p>
                <p className="font-semibold mt-5">
                  What if I have other questions?
                </p>
                <p className="text-gray-500 mt-1">
                  Local hosts are a great source for information and insights.
                  We can connect you with an experienced Airbnb host in your
                  area who may be able to answer additional questions.{" "}
                  <span className="font-semibold underline">Ask a host. </span>
                </p>
              </div>
            ) : (
              ""
            )}
          </li>
          <li
            className={`${
              menu4Open
                ? "border-b border-gray-300  mt-5 py-5"
                : "border-b border-gray-300 mt-3 py-5"
            } items-center border-gray-300 w-[50%] mx-auto`}
            ref={menuRef4}
            onClick={() => handleOpen(menuRef4, menu4Open, setMenu4Opening)}
          >
            <div className="flex justify-between">
              <p>Co-hosts</p>
              <Image
                src="/arrow-down.png"
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            {menu4Open ? (
              <div className="text-left mt-5">
                <p className="font-semibold">What can co‑hosts help with?</p>
                <p className="text-gray-500 mt-1">
                  You can{" "}
                  <span className="font-semibold underline">
                    hire a co‑host{" "}
                  </span>
                  <span>
                    to do one thing or everything. While each co‑host offers
                    different services, they can help with things like setting
                    up your Airbnb listing, getting your home ready, managing
                    reservations and messages, cleaning and maintenance, and
                    assisting with onsite requests your guests may have.
                  </span>
                </p>
                <p className="font-semibold mt-5">
                  Can I find a co‑host on Airbnb?
                </p>
                <p className="text-gray-500 mt-1">
                  Airbnb makes it easy to find and hire a high‑quality, local
                  co‑host in the Airbnb app. Review, message, and choose the
                  co‑host that best fits your needs.{" "}
                  <span className="font-semibold underline">
                    Learn about the Co‑Host Network.{" "}
                  </span>
                </p>
                <p className="font-semibold mt-5">How do I pay my co‑host?</p>
                <p className="text-gray-500 mt-1">
                  You and your co‑host should agree on payment terms before they
                  start helping you. You have the option to share a part of each
                  booking’s payout with your co‑host directly through Airbnb.
                  Some limitations may apply, depending on your location as well
                  as the location of your listing and co‑host.{" "}
                  <span className="font-semibold underline">
                    Learn how co-host payouts work.
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
          </li>
        </ul>
        <h1 className="text-3xl font-bold mt-10">Still have questions?</h1>
        <div className="flex flex-row mt-3 justify-center text-gray-500">
          <div>
            <p>Get answers from an experienced local host.</p>
          </div>
        </div>
        <button className="mt-10 w-60 bg-black px-5 py-3 rounded-full mx-auto text-white">
          Ask a host
        </button>
      </div>
    </div>
  );
};

export default Questions;
