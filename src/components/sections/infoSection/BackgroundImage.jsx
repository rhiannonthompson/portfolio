import React from "react";
import bgImage from "../../../assets/images/background-light.jpg";


export default function BackgroundImage({inView, ref}) {
 

 
 
  return (
    <div className="col-span-4 col-start-2 -mt-12 lg:-mt-24">
      <img
        className={`${!inView && "-translate-x-full h-96 sm:h-102 md:h-120 lg:h-126 xl:h-156 w-full object-cover mb-4"} h-96 sm:h-102 md:h-120 lg:h-126 xl:h-156 w-full object-cover mb-4 transform duration-1000 translate-x-0`}
        alt="background"
        src={bgImage}
        ref={ref}
      />
    </div>
  );
}
