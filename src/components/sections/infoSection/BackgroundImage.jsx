import React from "react";
import bgImage from "../../../assets/images/background-light.jpg";

export default function BackgroundImage() {
  return (
    <div className="col-span-4 col-start-2 -mt-10 lg:-mt-14">
      <img
        className="h-96 sm:h-102 lg:h-132 w-full object-cover"
        alt="background"
        src={bgImage}
      />
    </div>
  );
}
