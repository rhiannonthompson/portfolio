import React, { useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import NavLayout from "./navigation/NavLayout";
import HeaderSectionLayout from "../../components/home/HeaderSectionLayout";
import InfoSectionLayout from "../../components/sections/infoSection/InfoSectionLayout";
import ProjectsSectionLayout from "../../components/sections/projectsSection/ProjectsSectionLayout";
import AboutSectionLayout from "../../components/sections/about/AboutSectionLayout";
import FooterLayout from "../../components/footer/FooterLayout";

export default function MainPageLayout({handleToggleMenuActive, isMenuActive}) {

  const scrollRef = useRef(null);

  const scrollToElement = () =>
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });


  isMenuActive ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <div>
      <div className="relative">
        <NavLayout
          isMenuActive={isMenuActive}
          toggleMenuActive={handleToggleMenuActive}
        />
        <HeaderSectionLayout
          toggleMenuActive={handleToggleMenuActive}
          scrollToElement={scrollToElement}
        />
      </div>

      <div className={`${isMenuActive && "lg:hidden"}`}>
        <InfoSectionLayout />
      </div>

      <div className={`${isMenuActive && "hidden"}`}>
        <div className="py-24 lg:py-44 bg-zinc-50" >
          <div ref={scrollRef}>
            <ProjectsSectionLayout />
          </div>
        </div>

        <AboutSectionLayout />
        <FooterLayout />
      </div>
    </div>
  );
}
