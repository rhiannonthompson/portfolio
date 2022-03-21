import React from "react";
import HeaderLayout from "./header/HeaderLayout";
import HeroText from "./hero/HeroText";

export default function HeaderSectionLayout({ toggleMenuActive, scrollToElement}) {
  
  const HEADER_STYLES = {
    menuButtonColor: "text-zinc-50",
    logoTextColor: "text-zinc-600",
    burgerLineColor: "bg-zinc-50",
  }
  
  
  return (
    <section className="bg-zinc-600 text-zinc-50">
      <div className="mx-6 md:mx-10 pt-6 lg:pb-44 lg:min-h-screen">
        <HeaderLayout
          toggleMenuActive={toggleMenuActive}
          headerStyles={HEADER_STYLES}
        />
        <div className="pt-44 xl:pt-60 2xl:pt-68 pb-24">
          <HeroText />
          <div className="flex flex-row w-fit items-top">
            <button className="text-2xl md:text-4xl mr-2 text-yellow-500 cursor-pointer focus:outline-none"
              onClick={scrollToElement}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-10 animate-slow-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
            </button>
            <button className="h-fit px-2 py-1 text-md md:text-xl hover:text-yellow-500 focus:outline-none"
              onClick={scrollToElement}
            >
              My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
