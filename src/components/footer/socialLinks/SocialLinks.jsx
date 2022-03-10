import React from "react";
import GithubSVG from "../../../app/common/svgs/GithubSVG";
import InstagramSVG from "../../../app/common/svgs/InstagramSVG";
import LinkedInSVG from "../../../app/common/svgs/LinkedInSVG";

export default function SocialLinks() {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="mr-14 cursor-pointer hover:fill-yellow-500">
        <GithubSVG />
      </div>
      <div className="mr-14 cursor-pointer">
        <LinkedInSVG />
      </div>
      <div className="cursor-pointer">
        <InstagramSVG />
      </div>
    </div>
  );
}
