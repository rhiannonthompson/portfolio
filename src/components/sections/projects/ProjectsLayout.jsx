import React from "react";

export default function ProjectsLayout() {
  return (
    <section className="pt-24 pb-80 md:pt-40 md:pb-96 lg:pt-40 lg:pb-72 xl:pt-80 bg-zinc-50">
      <div className="bg-zinc-600 h-156 md:h-252 lg:h-132 xl:h-156 skew-y-20 sm:skew-y-17 lg:skew-y-15 xl:skew-y-18">
        <div className="max-w-8xl h-full m-auto -skew-y-20 sm:-skew-y-17 lg:-skew-y-15 xl:-skew-y-18">
          <div className="mx-6 md:mx-12 lg:mx-16">
            <div className="flex w-full opacity-90 bg-yellow-500">
              <h3 className="text-zinc-600 py-2 px-4 text-3xl sm:text-4xl md:text-6xl lg:text-7xl uppercase tracking-wide">
                My work
              </h3>
            </div>
            <div className="grid lg:grid-cols-3 mt-12 md:mt-20 gap-4">
              <div className="h-80 md:h-120 lg:h-108 xl:h-120 bg-zinc-50 shadow-md mb-6"></div>
              <div className="h-80 md:h-120 lg:h-108 xl:h-120 bg-zinc-50 shadow-md mb-6"></div>
              <div className="h-80 md:h-120 lg:h-108 xl:h-120 bg-zinc-50 shadow-md mb-6"></div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <div className="py-2 px-4 md:py-3 md:px-5 bg-yellow-500 border-2 border-yellow-500">
              <button className="uppercase md:text-2xl text-zinc-600 tracking-wider hover:text-zinc-50">
                All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
