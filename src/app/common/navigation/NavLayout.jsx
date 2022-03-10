import React from "react";

export default function NavLayout({ isMenuActive, toggleMenuActive }) {
  return (
    <nav
      className={`${
        !isMenuActive && "-translate-y-full"
      } transition duration-1000 absolute h-screen z-40 bg-zinc-800 w-full`}
    >
      <div className="flex flex-col h-full w-full">
        <div className="flex justify-end w-full h-fit pt-10 pr-8">
          <button
            className="text-zinc-50 p-2 uppercase tracking-wide md:text-xl border-2 border-zinc-200 rounded-sm hover:bg-yellow-500"
            onClick={toggleMenuActive}
          >
            Close
          </button>
        </div>

        <div className="flex flex-col h-2/3 text-center justify-center items-center text-zinc-50">
          <ul className="font-black">
            <li className="mb-10 lg:mb-12">
              <button className="border-b-4 pb-3 border-yellow-500 font-black text-4xl md:text-5xl tracking-wider hover:text-yellow-500">
                About
              </button>
            </li>
            <li className="mb-10 lg:mb-12">
              <button className="border-b-4 pb-3 border-yellow-500 font-black text-4xl md:text-5xl tracking-wider hover:text-yellow-500">
                My Work
              </button>
            </li>
            <li>
              <button className="border-b-4 pb-3 border-yellow-500 font-black text-4xl md:text-5xl tracking-wider hover:text-yellow-500">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
