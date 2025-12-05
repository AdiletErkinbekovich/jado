import React from 'react';
import Image from 'next/image';
export default function Navbar() {
  return (
    <header className="mt-8 grid grid-cols-[1fr_2fr_1fr] gap-3 justify-between items-center ">
      <Image width={115} height={35} src="/img/logotype.svg" alt="Logo" />

      <nav className="flex justify-between items-center pt-1 ">
        <ul className="flex justify-between items-center space-x-35 ">
          <li>
            <a href="#" className="text-black font-googlesans  font-medium ">
              Destination
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-googlesans  font-medium ">
              Hotels
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-googlesans   font-medium ">
              Flights
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-googlesans   font-medium ">
              Bookings
            </a>
          </li>
        </ul>
      </nav>
      <div className="user flex items-center space-x-10">
        <button className="login cursor-pointer font-googlesans  font-medium   text-black  ">
          Login
        </button>
        <button className="signUp cursor-pointer font-googlesans  font-medium  px-4 py-1 text-black border-1 rounded-2xl  ">
          Sign Up
        </button>

        <button className="language cursor-pointer text-black font-googlesans  font-medium flex items-center  hover:underline  ">
          EN{' '}
          <Image className="ml-2" width={10} height={5} src="/img/language-arrow.svg" alt="arrow" />
        </button>
      </div>
    </header>
  );
}
