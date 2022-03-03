import React from "react";
import placeholder from "../../../../assets/images/placeholder.png";

export default function ProjectCardLayout() {
  return (
    <div className="flex justify-center mb-8 md:mr-4 relative">
    
        <img
          className="border-2 h-96 w-96 md:h-full md:w-full sm:object-cover"
          alt="placeholder"
          src={placeholder}
      />
      <div className="absolute border-2 md:w-full md:h-full" >Hello</div>
      </div>

  );
}
