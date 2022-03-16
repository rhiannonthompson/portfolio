import React from "react";
import { useInView } from "react-intersection-observer";
import placeholder from "../../../assets/images/placeholder.png";

export default function ProjectsSectionLayout() {
  
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  
  return (
    <section className="py-10 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between mr-2">
        <div className="w-fit flex-grow md:flex-shrink-0 opacity-90 mb-12 lg:mb-0 mx-6 lg:mx-12">
          <h3 className="text-zinc-600 border-b-2 border-yellow-500 opacity-90 py-2 text-2xl md:text-4xl lg:text-3xl uppercase tracking-wide">
            My work
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mx-6 md:mx-0" ref={ref}>
          <img className={`${inView && "opacity-100"} rounded-md transition-all duration-1000 ease-in opacity-0`} alt="placeholder" src={placeholder} />

          <img className={`${inView && "opacity-100"} rounded-md transition-all duration-1000 delay-1000 ease-in opacity-0`} alt="placeholder" src={placeholder} />

          <img className={`${inView && "opacity-100"} rounded-md transition-all duration-1000 delay-2000 ease-in opacity-0`} alt="placeholder" src={placeholder} />
        </div>
      </div>
      <div className="flex items-center justify-center mt-20">
        <button className="uppercase text-zinc-600 tracking-wide font-semibold lg:text-xl py-3 px-4 rounded-md bg-yellow-500">All Projects</button>
      </div>
    </section>
  );
}

