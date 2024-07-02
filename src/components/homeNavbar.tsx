"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Home, Plus, Film, Tv, Star } from "lucide-react";
import { EllipsisVertical } from "lucide-react";

const HomeNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex justify-between items-center h-16 py-2 z-30 fixed w-full transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      {/* Mobile View */}
      <div className="flex items-center justify-between w-full px-4 pt-2 md:hidden">
        <Link href="/home">
          <Image
            src="/DisneyLogo.svg"
            width={64}
            height={40}
            alt="Disney Button"
            className="md:w-[48px]"
          />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/home">
            <Home width={20} height={20} />
          </Link>
          <Link href="/search">
            <Search width={20} height={20} />
          </Link>
          <button>
            <Plus width={20} height={20} />
          </button>
          <button>
            <EllipsisVertical width={20} height={20} />
          </button>
        </div>

        {/* Account Dropdown */}
        <div className="group relative">
          <button className="flex items-center gap-2">
            <p className="text-md bg-blue-500 w-fit h-fit py-2 px-4 rounded-full">
              E
            </p>
          </button>
          <div className="absolute right-0 mt-2 w-48 bg-[#131313] rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
            <button className="block px-4 py-2 text-sm text-[#cacaca]">
              Edit Profiles
            </button>
            <button className="block px-4 py-2 text-sm text-[#cacaca]">
              App Settings
            </button>
            <button className="block px-4 py-2 text-sm text-[#cacaca]">
              Account
            </button>
            <button className="block px-4 py-2 text-sm text-[#cacaca]">
              Help
            </button>
            <button className="block px-4 py-2 text-sm text-[#cacaca]">
              Log Out
            </button>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <ul className="hidden md:flex gap-8 items-center w-fit">
        <li>
          <Link href="/home">
            <Image
              src="/DisneyLogo.svg"
              width={80}
              height={80}
              alt="Disney Button"
              className="mx-6 min-h-[65px]"
            />
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2" href="/home">
            <Home width={20} height={40} />
            <span className="text-[15px] pt-1 tracking-wider border-b-2 border-transparent hover:border-white hidden xl:block">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link className="flex items-center gap-2" href="/search">
            <Search width={20} height={40} />
            <span className="text-[15px] pt-1 tracking-wider border-b-2 border-transparent hover:border-white hidden xl:block">
              Search
            </span>
          </Link>
        </li>
        <li>
          <button className="flex items-center gap-2">
            <Plus width={20} height={40} />
            <span className="text-[15px] pt-1 tracking-wider border-b-2 border-transparent hover:border-white hidden xl:block">
              Watchlist
            </span>
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2">
            <Film width={20} height={40} />
            <span className="text-[15px] pt-1 tracking-wider border-b-2 border-transparent hover:border-white hidden xl:block">
              Movies
            </span>
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2">
            <Tv width={20} height={40} />
            <span className="text-[15px] pt-1 tracking-wider border-b-2 border-transparent hover:border-white hidden xl:block">
              Series
            </span>
          </button>
        </li>
        <li>
          <button className="flex items-center gap-2">
            <Star width={20} height={40} />
            <span className="text-[15px] pt-1 tracking-wider border-b-2 border-transparent hover:border-white hidden xl:block">
              Originals
            </span>
          </button>
        </li>
      </ul>

      {/* Account Dropdown */}
      <div className="hidden md:flex group flex-col rounded-md p-6 fixed z-10 right-0 top-0 hover:bg-[#131313] bg-transparent hover:border-b hover:border-l border-gray-400/40 h-fit w-fit hover:w-60">
        <div className="flex flex-row-reverse items-center gap-4 pb-4">
          <p className="text-xl bg-blue-500 w-fit h-fit p-2 px-4 rounded-full">
            E
          </p>
          <p className="text-sm">Erim</p>
        </div>
        <div className="hidden group-hover:flex flex-col gap-3 list-none text-[#cacaca] font-extralight text-sm tracking-wide pt-4 border-t border-gray-500/50">
          <button>Edit Profiles</button>
          <button>App Settings</button>
          <button>Account</button>
          <button>Help</button>
          <button>Log Out</button>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
