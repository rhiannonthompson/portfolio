import React from 'react'
import bgImage from "../../../assets/images/background-light.jpg"

export default function InfoSectionLayout() {
  return (
    <section className="h-102 sm:h-120 md:h-132 bg-zinc-50">
    <div className="h-full relative">
      <div className="h-full w-full absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-16 flex items-center pl-6 md:pl-16 lg:pl-52 overflow-hidden">
        <div className="h-full absolute w-full pl-12 md:pl-24 lg:pl-64 z-10">
          <img
            className="h-full w-full object-fill"
            alt="background"
            src={bgImage}
          />
        </div>
        <div className="bg-zinc-50 absolute h-2/3 w-5/6 md:w-4/6 lg:w-3/6 flex items-center z-20">
          <h2 className="px-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-zinc-600 leading-relaxed md:leading-relaxed lg:leading-relaxed">
            I Love to Make Beautiful Websites
          </h2>
        </div>
      </div>
    </div>
  </section>
  )
}
