import React, { useState } from "react";

import FooterLayout2 from "./footer/FooterLayout2";
import HeaderLayout from "./home/header/HeaderLayout";
import HeroText from "./home/hero/HeroText";
import AwardsLayout from "./sections/awards/AwardsLayout";
import InfoSectionLayout from "./sections/infoSection/InfoSectionLayout";
import ProjectsCardsLayout from "./sections/projects/project/ProjectsCardsLayout";

export default function PageLayout() {
  const [isMenuActive, setIsMenuActive] = useState(true);

  function handleToggleClickMenu() {
    setIsMenuActive(!isMenuActive);
  }

  return (
    <div className="bg-zinc-50 ">
      <div className="bg-zinc-600 text-zinc-50 pb-24 lg:pb-44 lg:min-h-screen">
        <div className="mx-6 md:mx-12 lg:mx-16 flex flex-col content-between">
          <HeaderLayout
            handleToggleMenu={handleToggleClickMenu}
            isMenuOpen={isMenuActive}
          />
          <HeroText />
          <div className="flex flex-row w-fit items-top">
            <div className="text-2xl md:text-4xl lg:text-5xl mr-2 text-yellow-500">
              |
            </div>
            <button className="h-fit px-2 py-1 text-xl hover:text-yellow-500">
              My Work
            </button>
          </div>
        </div>
      </div>
      <InfoSectionLayout />
      <ProjectsCardsLayout />
      <AwardsLayout />
      <FooterLayout2 />
    </div>
  );
}


