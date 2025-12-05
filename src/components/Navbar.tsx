import React from 'react';

export default function Navbar() {
  return (
    <header className="mt-8 grid grid-cols-[1fr_2fr_1fr] gap-3 justify-between items-center ">
      <img className="h-10 " src="/img/logo.svg" alt="Logo" />

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
          EN <img className="ml-2" src="/img/languageArrow.svg" alt="arrow"></img>
        </button>
      </div>
    </header>
  );
}
