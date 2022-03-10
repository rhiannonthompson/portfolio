import React from "react";
import placeholder from "../../../assets/images/placeholder.png";

export default function ProjectsSectionLayout() {
  return (
    <section className="bg-zinc-100 pt-12 pb-20 md:py-24 lg:py-44">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center lg:justify-between mr-2">
        <div className="w-fit flex-grow md:flex-shrink-0 opacity-90 mb-12 md:mb-0 mx-6 md:mx-12">
          <h3 className="text-zinc-600 border-b-2 border-yellow-500 opacity-90 py-2 text-3xl md:text-xl lg:text-3xl uppercase tracking-wide">
            My work
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mx-6 md:mx-0">
          <img className="rounded-sm" alt="placeholder" src={placeholder} />

          <img className="rounded-sm" alt="placeholder" src={placeholder} />

          <img className="rounded-sm" alt="placeholder" src={placeholder} />
        </div>
      </div>
      <div className="flex items-center justify-center mt-20">
        <button className="uppercase text-zinc-600 tracking-wide font-semibold lg:text-xl py-2 px-4 rounded-sm bg-yellow-500">All Projects</button>
      </div>
    </section>
  );
}

<section className="bg-zinc-100 pb-44 pt-12 md:py-44 flex flex-col items-center md:flex md:flex-row md:items-start">
  <div className="shrink-0 mx-6 md:mx-12">
    <div className="w-fit opacity-90 mb-12 md:mb-0">
      <h3 className="text-zinc-600 border-yellow-500 opacity-90 border-b-2 py-2 text-3xl md:text-xl lg:text-2xl uppercase tracking-wide">
        My work
      </h3>
    </div>
  </div>
  <div className="m-auto grid md:grid-cols-3 gap-6 mx-6 md:mx-0">
    <img alt="placeholder" src={placeholder} />

    <img alt="placeholder" src={placeholder} />

    <img alt="placeholder" src={placeholder} />
  </div>
  <button>More</button>
</section>;
