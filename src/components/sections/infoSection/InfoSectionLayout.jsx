import React from "react";
import BackgroundImage from "./BackgroundImage";
import Message from "./Message";

export default function InfoSectionLayout() {
  return (
    <section className="bg-zinc-50 pb-20 lg:pb-28 relative">
      <div className="grid grid-cols-5 relative">
        <BackgroundImage />
        <Message />
      </div>
    </section>
  );
}
