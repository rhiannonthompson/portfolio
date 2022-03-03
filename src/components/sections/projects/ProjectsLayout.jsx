import React from "react";
import ProjectCardLayout from "./project/ProjectCardLayout";

export default function ProjectsLayout() {
  return (
    <section className="bg-zinc-50 mt-24 mb-40 md:mt-40 lg:mt-64 lg:mb-80">
      <div className="bg-zinc-600 h-180 md:h-108 xl:h-132 skew-y-20 sm:skew-y-17 lg:skew-y-12">
        <div className="max-w-8xl h-full m-auto -skew-y-20 sm:-skew-y-17 lg:-skew-y-12">
          <div className="mx-6 md:mx-12 lg:mx-16 relative">
            <div className="flex w-full opacity-90 bg-yellow-500 mb-8 lg:absolute -top-32">
              <h3 className="text-zinc-600 py-2 px-4 text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase tracking-wide">
                My work
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <ProjectCardLayout />
              <ProjectCardLayout />
              <ProjectCardLayout />
            </div>
          </div>
          <div className="flex justify-center lg:mt-12">
            <div className="py-2 px-4 md:py-3 md:px-5 bg-yellow-500 border-2 border-yellow-500">
              <button className="uppercase md:text-xl text-zinc-600 tracking-wider hover:text-zinc-50">
                All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
