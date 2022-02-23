import React from "react";
import HeaderLayout from "./home/header/HeaderLayout";
import HeroText from "./home/hero/HeroText";
import InfoSectionLayout from "./sections/infoSection/InfoSectionLayout";
import ProjectsLayout from "./sections/projects/ProjectsLayout";

export default function PageLayout() {
  return (
    <div className="bg-zinc-50">
      <div className="bg-zinc-600 text-zinc-50 pb-24 lg:pb-44 lg:min-h-screen">
        <div className="mx-6 md:mx-12 lg:mx-16 flex flex-col content-between">
          <HeaderLayout />
          <HeroText/>
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
      <ProjectsLayout />
      <section className="bg-zinc-50 mt-20 md:mt-52 mb-52 md:mb-64 lg:mt-20 lg:mb-72">
        <div className="max-w-xl lg:max-w-2xl m-auto text-zinc-600">
          <div className="flex flex-col justify-center items-center px-8">
            <div className="border-b-2 border-zinc-600">
              <h4 className="py-3 px-4 uppercase text-2xl md:text-3xl lg:text-5xl font-thin tracking-wider ">
                Quote About Me
              </h4>
            </div>
            <p className="mt-4 lg:mt-6 italic text-md md:text-lg lg:text-2xl text-center font-medium lg:font-normal leading-relaxed lg:leading-relaxed">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, deleniti? Aperiam reprehenderit, enim tradus capitom
              redunalasious maiores exercitationem ut totam minus quo quaerat
              aut quis perspiciatis nihil!"
            </p>
          </div>
        </div>
      </section>
      <div className="h-36 bg-zinc-600"></div>
      <section className="h-screen bg-red-500"></section>
    </div>
  );
}
