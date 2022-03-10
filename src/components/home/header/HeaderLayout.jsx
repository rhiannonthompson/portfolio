import React from "react";

export default function HeaderLayout({toggleMenuActive}) {
  return (
    <header className="flex justify-between items-center tracking-tight ">
      <div className="bg-yellow-500 rounded-full py-4 px-2 md:py-6 md:px-4">
        <p className="text-zinc-600 uppercase font-bold md:text-lg">logo</p>
      </div>
      <div className="flex">
        <button
          className={`px-2 uppercase text-md md:text-xl hover:text-yellow-500 tracking-wider`}
          onClick={toggleMenuActive}
        >
          Menu
        </button>
      </div>
    </header>
  );
}
