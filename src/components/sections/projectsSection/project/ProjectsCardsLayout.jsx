import React from "react";
import placeholder from "../../../../assets/images/placeholder.png";

export default function ProjectsCardsLayout() {
  return (
    <section className="bg-zinc-100 py-12 md:py-44 flex flex-col items-center md:flex md:flex-row md:items-start">
      <div className="shrink-0 mx-6 md:mx-12">
        <div className="w-fit opacity-90 mb-12 md:mb-0">
          <h3 className="text-zinc-600 border-yellow-500 opacity-90 border-b-2 py-2 text-2xl md:text-xl lg:text-2xl uppercase tracking-wide">
            My work
          </h3>
        </div>
      </div>
      <div className="m-auto grid md:grid-cols-3 gap-2 mx-6 md:mx-0">
        <img alt="placeholder" src={placeholder} />

        <img alt="placeholder" src={placeholder} />

        <img alt="placeholder" src={placeholder} />
      </div>
    </section>
  );
}
