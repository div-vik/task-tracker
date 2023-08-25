"use client";

import { navbar } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div
        className={`px-7 py-5  h-20 w-full ${
          isClicked === false ? "shadow-xl" : "border-b"
        }`}
      >
        <div className="flex h-full justify-between lg:justify-around items-center">
          <Link href="/">
            <Image
              src="https://newtral.io/images/newtralLogo.svg"
              alt="logo"
              width={150}
              height={150}
            />
          </Link>

          <div className="lg:hidden">
            {isClicked === false ? (
              <div
                className="cursor-pointer"
                onClick={() => setIsClicked(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </div>
            ) : (
              <div onClick={() => setIsClicked(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className="max-md:hidden text-[#606A95] font-medium flex gap-7">
            {navbar.map((link) => (
              <div className="flex" key={link.id}>
                {link.title}
              </div>
            ))}
          </div>

          <div className="max-md:hidden cursor-pointer text-[#090593] font-medium bg-white text-center rounded-lg ring-1 w-fit border-[#3834F8] hover:bg-[#3834F8] hover:text-white hover:ring-0 px-7 py-2">
            <Link href="/login">Login</Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        {isClicked && (
          <div className="px-9 py-7 w-full shadow-xl h-80">
            <div className="mt-8">
              <ul className="mb-9 text-[#606A95] font-medium">
                {navbar.map((link) => (
                  <li key={link.id} className="mb-5 cursor-pointer">
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>

              <div className="bg-white cursor-pointer text-[#090593] font-medium text-center rounded-lg ring-1 w-full border-[#3834F8] px-7 py-2">
                <Link href="/login">Login</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
