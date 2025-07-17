import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 text-gray-500 pt-15">
      <div className="w-[90%] mx-auto">
        <p>
          Hosts on the Co‑Host Network typically have high ratings, low
          cancellation rates, and established Airbnb hosting experience. Ratings
          are based on guest reviews for listings they host or co‑host and may
          not represent the co‑host’s unique services.
        </p>
        <p className="mt-4">
          Co‑Host Network is powered by Airbnb Global Services Limited, Airbnb
          Living LLC, and Airbnb Plataforma Digital Ltda. Available in select
          locations only.
        </p>
        <p className="underline font-semibold">Learn more.</p>
      </div>
      <div className="mt-10 w-[95%]  p-8 text-black">
        <ul className="grid grid-cols-3">
          <li className="gap-5 flex flex-col">
            <p className="font-semibold">Support</p>
            <p>Help Center</p>
            <p>AirCover</p>
            <p>Anti-discrimination</p>
            <p>Disability support</p>
            <p>Cancellation options</p>
            <p>Report neighborhood concern</p>
          </li>
          <li className="gap-5 flex flex-col">
            <p className="font-semibold">Hosting</p>
            <p>Airbnb your home</p>
            <p>Airbnb your experience</p>
            <p>Airbnb your service</p>
            <p>AirCover for Hosts</p>
            <p>Hosting resources</p>
            <p>Community forum</p>
            <p>Hosting responsibly</p>
            <p>Airbnb-friendly apartments</p>
            <p>Join a free Hosting class</p>
            <p>Find a co‑host</p>
          </li>
          <li className="gap-5 flex flex-col">
            <p className="font-semibold">Airbnb</p>
            <p>2025 Summer Release</p>
            <p>Newsroom</p>
            <p>Careers</p>
            <p>Investors</p>
            <p>Gift cards</p>
            <p>Airbnb.org emergency stays</p>
          </li>
        </ul>
      </div>
      <div className="mt-7 border-t border-gray-300  pt-10 px-5 flex justify-between text-black">
        <div className="flex gap-1">
          <Image
            src="/internet.png"
            width={20}
            height={20}
            className="object-contain"
          />
          <span>English US</span>
          <span className="ml-10">RM MYR</span>
        </div>

        <div className="flex gap-4">
          <Image
            src="/facebook.png"
            width={20}
            height={20}
            className="object-contain"
          />
          <Image
            src="/twitter.png"
            width={20}
            height={20}
            className="object-contain"
          />
          <Image
            src="/instagram.png"
            width={20}
            height={20}
            className="object-contain"
          />
        </div>
      </div>
      <div className="mx-auto px-5 flex gap-2 p-5">
        <Image
          src="/copyright.png"
          width={12}
          height={12}
          className="object-contain"
        />
        <span className=" text-sm">
          2025 Airbnb, Inc. · Privacy · Terms · Sitemap
        </span>
      </div>
    </div>
  );
};

export default Footer;
