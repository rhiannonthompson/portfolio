import React from "react";
import placeHolder from "../../../assets/images/placeholder.png";

export default function ProjectCard() {
  return (
    <div className="relative">
      <div >
        <img
          className="rounded-md w-full h-full object-cover"
          alt="placeholder"
          src={placeHolder}
        />
      </div>
      <div className="card w-full h-full rounded-md z-20">
        <div className="image w-full h-full overflow-hidden rounded-md">
          <img
            className="w-full transition-all duration-500"
            alt="placeHolder"
            src={placeHolder}
          />
          <div className="details rounded-md bg-yellow-500">
            <div className="flex flex-col h-full w-full justify-center items-center">
              <div className="flex flex-col w-full bg-zinc-50 justify-center items-center py-12">
                <h5 className="text-xl mb-4">Project Title</h5>
                <p className="text-center mb-10 px-8">
                  25 word dolor sit amet consectetur adipisicing elit. Cum sed
                  maxime consectetur quia rerum molestiae repudiandae obcaecati
                  rem aliquid eius!
                </p>
                <button className="w-fit uppercase border-2 py-2 px-3 rounded-md tracking-wide hover:bg-yellow-500 hover:border-yellow-500">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
