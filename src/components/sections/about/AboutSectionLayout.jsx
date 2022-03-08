import React from "react";

export default function AwardsLayout() {
  return (
    <section className="bg-zinc-50 py-56">
      <div className="max-w-xl lg:max-w-2xl m-auto text-zinc-600">
        <div className="flex flex-col justify-center items-center px-8">
          <div className="bg-yellow-500 rounded-full p-6 mb-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-32 w-32"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h4 className="pb-2 uppercase text-xl md:text-2xl text-zinc-600 tracking-wider border-b-2 border-yellow-500 opacity-90">
            Quote About Me
          </h4>
          <p className="mt-4 lg:mt-6 italic text-md md:text-lg text-center font-medium lg:font-normal leading-relaxed lg:leading-relaxed">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            deleniti? Aperiam reprehenderit, enim tradus capitom redunalasious
            maiores exercitationem ut totam minus quo quaerat aut quis
            perspiciatis nihil!"
          </p>
        </div>
      </div>
    </section>
  );
}
