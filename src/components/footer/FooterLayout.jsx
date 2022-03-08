import React from "react";
import ContactDetails from "./contactDetails/ContactDetails";
import ContactFormLayout from "./contactForm/ContactFormLayout";
import CopyRight from "./copyRight/CopyRight";
import SocialLinks from "./socialLinks/SocialLinks";

export default function FooterLayout() {
  return (
    <footer className="bg-zinc-800 text-zinc-300">
      <div className="px-10 pt-12">
        <div className="flex md:justify-center item-center border-b-2 border-yellow-500">
          <h3 className="py-6 text-zinc-300 text-center text-xl md:text-3xl uppercase tracking-wide">
            contact me
          </h3>
        </div>

        <div className="md:flex lg:mx-36 my-12 text-xl">
          <ContactDetails />
          <ContactFormLayout />
        </div>
      </div>

      <div className="bg-zinc-900">
        <div className="max-w-5xl m-auto py-8">
          <SocialLinks />
        </div>
      </div>
      <div className="bg-zinc-900 flex justify-center items-center">
        <CopyRight />
      </div>
    </footer>
  );
}
