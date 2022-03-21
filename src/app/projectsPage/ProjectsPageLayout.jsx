import React from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

import HeaderLayout from "../../components/home/header/HeaderLayout";
import NavLayout from "../common/navigation/NavLayout";
import placeHolder from "../../assets/images/placeholder.png";
import FooterLayout from "../../components/footer/FooterLayout";
import ProjectCard from "./projects/ProjectCard";

export default function ProjectsPageLayout({
  isMenuActive,
  handleToggleMenuActive,
}) {
  isMenuActive ? disableBodyScroll(document) : enableBodyScroll(document);

  const HEADER_STYLES = {
    menuButtonColor: "text-zinc-700",
    logoTextColor: "text-zinc-50",
    burgerLineColor: "bg-zinc-700",
  };

  return (
    <div className="relative text-zinc-700">
      <NavLayout
        isMenuActive={isMenuActive}
        toggleMenuActive={handleToggleMenuActive}
      />
      <div className="mx-6 md:mx-10 pt-6 lg:pb-44">
        <HeaderLayout
          toggleMenuActive={handleToggleMenuActive}
          headerStyles={HEADER_STYLES}
        />

        <div className="mb-96 mt-36 mx-12">
          <div className="flex flex-col border-b-2 justify-center items-center mb-28 mx-36 pb-6">
            <h3 className="border-b-2 border-yellow-500 py-2 text-2xl md:text-4xl lg:text-3xl xl:text-4xl uppercase tracking-wide">
              My work
            </h3>
            <h4 className="py-10 text-xl text-zinc-600 font-semibold tracking-wide">
              A Selection of my Most Recent Projects
            </h4>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <ProjectCard />
            <ProjectCard />

            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />


       
          </div>
        </div>
      </div>

      <FooterLayout />
    </div>
  );
}
