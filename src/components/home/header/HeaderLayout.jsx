import React, {useState} from "react";

export default function HeaderLayout({toggleMenuActive, headerStyles}) {
  
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `${headerStyles.burgerLineColor} h-0.5 w-6 my-1 rounded-full transition ease transform duration-300`;
  
  return (
    <header className={`flex justify-between items-center tracking-tight`}>
      <div className="bg-yellow-500 rounded-full py-4 px-2 md:py-8 md:px-5">
        <p className={`${headerStyles.logoTextColor} uppercase font-bold md:text-xl`}>logo</p>
      </div>
      <div className="flex group hover:text-yellow-500"
        onMouseLeave={() => setIsOpen(false)}
        onMouseEnter={() => setIsOpen(true)}
      >
        <button
          className={`${headerStyles.menuButtonTextColor} px-2 uppercase text-md md:text-xl hover:text-yellow-500 tracking-wider`}
          onClick={toggleMenuActive}
        >
          Menu
        </button>
        <button
          className={`flex flex-col h-12 w-12 justify-center items-center`}
          onClick={toggleMenuActive}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-2.5 group-hover:bg-yellow-500"
                : "group-hover:bg-yellow-500"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "group-hover:bg-yellow-500"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-2.5 group-hover:bg-yellow-500"
                : "group-hover:bg-yellow-500"
            }`}
          />
        </button>
      </div>
    </header>
  );
}
