import React from "react";

const Quote = () => {
  return (
    <div className="relative about h-screen w-full bg-[#f6e7ec] flex items-center justify-center overflow-hidden">
      {/* Text container */}
      <div className="text-center max-w-6xl px-6 z-10">
        <h1 className=" text-4xl mb-6 ">
          <span className="font-semibold">PLAY-TIME</span> is a team of
          architects with broad experience in the photography, graphic design
          and audiovisual fields.
        </h1>
        <h1 className="text-4xl  ">
          «
          <span className="font-semibold">
            Light, shadow, texture <span className="font-normal">and</span>
            color
          </span>
          are the tools that we combine to communicate the values of
          architecture through an image.»
        </h1>
      </div>
    </div>
  );
};

export default Quote;