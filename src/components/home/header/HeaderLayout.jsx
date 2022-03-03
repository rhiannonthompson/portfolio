import React from "react";

export default function HeaderLayout({handleToggleMenu}) {
  return (
    <header className="mt-10 flex justify-between items-center tracking-tight ">
      <div className="bg-yellow-500 rounded-full py-4 px-2 md:py-8 md:px-5">
        <p className="text-zinc-600 uppercase font-bold md:text-xl">logo</p>
      </div>
      <div className="flex">
        <button
          className={`px-2 uppercase text-md md:text-xl hover:text-yellow-500 tracking-wider`}
          onClick={handleToggleMenu}
        >
          Menu
        </button>
      </div>
    </header>
  );
}
