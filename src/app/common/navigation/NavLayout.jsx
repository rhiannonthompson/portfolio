import React, {useState} from "react";

export default function NavLayout({ isMenuActive, toggleMenuActive }) {
  
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-0.5 w-6 my-1 rounded-full bg-zinc-50 transition ease transform duration-300`;
    
  return (
    <nav
      className={`
      ${!isMenuActive && "-translate-y-full"} 
      transition duration-1000 absolute h-screen z-40 bg-zinc-800 text-zinc-50 w-full`}
    >
      <div className="flex flex-col h-full w-full">
        <div className="flex justify-end w-full h-fit pt-10 pr-8">
        <div className="flex group hover:text-yellow-500"
        onMouseLeave={() => setIsOpen(false)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <button
          className={`px-2 uppercase text-md md:text-xl hover:text-yellow-500 tracking-wider`}
          onClick={toggleMenuActive}
        >
          close
        </button>
        <button
          className={`flex flex-col h-12 w-12 justify-center items-center`}
          onClick={toggleMenuActive}
        >
          <div
            className={`${genericHamburgerLine} ${
              !isOpen
                ? "rotate-45 translate-y-2.5 group-hover:bg-yellow-500"
                : "group-hover:bg-yellow-500"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              !isOpen ? "opacity-0" : "group-hover:bg-yellow-500"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              !isOpen
                ? "-rotate-45 -translate-y-2.5 group-hover:bg-yellow-500"
                : "group-hover:bg-yellow-500"
            }`}
          />
        </button>
      </div>
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
