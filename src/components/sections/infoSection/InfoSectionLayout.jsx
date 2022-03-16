import React from "react";
import { useInView } from "react-intersection-observer";
import bgImage from "../../../assets/images/background-light.jpg";

export default function InfoSectionLayout() {
  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  if (inView) {
    console.log(entry);
  }

  return (
    <section className="bg-zinc-50 relative">
      <div className="grid grid-cols-5 relative">
        <div className="col-span-4 col-start-2 -mt-12 lg:-mt-24">
          <img
            className={`${
              inView &&
              "opacity-100"
            } h-96 sm:h-102 md:h-120 lg:h-126 xl:h-156 w-full rounded-l-md object-cover transition-all duration-1000 ease-in opacity-0`}
            alt="background"
            src={bgImage}
          />
        </div>
        <div
          className={`${
            inView && "-translate-x-0"
          } bg-zinc-50 rounded-md py-12 sm:py-18 md:py-24 lg:py-28 pl-10 sm:pl-24 lg:pl-44 pr-2 lg:pr-16 sm:pr-6 mr-16 absolute top-16 md:top-24 xl:top-32 max-w-xs sm:max-w-lg lg:max-w-3xl xl:max-w-4xl transform duration-1000 translate-x-full ease-in`}
        >
          <h2
            className="font-thin text-xl sm:text-2xl md:3xl lg:text-4xl xl:text-5xl text-zinc-600 tracking-wide sm:leading-normal lg:leading-normal xl:leading-normal"
            ref={ref}
          >
            I love to making the world more beautiful by making beautiful
            things.
          </h2>
        </div>
      </div>
    </section>
  );
}

