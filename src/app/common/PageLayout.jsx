import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import NavLayout from "./navigation/NavLayout";
import HeaderSectionLayout from "../../components/home/HeaderSectionLayout";
import InfoSectionLayout from "../../components/sections/infoSection/InfoSectionLayout";
import ProjectsSectionLayout from "../../components/sections/projects/ProjectsSectionLayout";
import AboutSectionLayout from "../../components/sections/about/AboutSectionLayout";
import FooterLayout from "../../components/footer/FooterLayout";

export default function PageLayout() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  function handleToggleMenuActive() {
    setIsMenuActive(!isMenuActive);
  }

  isMenuActive ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <div>
      <div className="relative">
        <NavLayout
          isMenuActive={isMenuActive}
          toggleMenuActive={handleToggleMenuActive}
        />

        <HeaderSectionLayout toggleMenuActive={handleToggleMenuActive} />
      </div>

      <div className={`${isMenuActive && "lg:hidden"}`}>
        <InfoSectionLayout />
      </div>

      <div className={`${isMenuActive && "hidden"}`}>
        <ProjectsSectionLayout />
        <AboutSectionLayout />
        <FooterLayout />
      </div>
    </div>
  );
}
