import React from "react";

const LastPage = () => {
  return (
    <div className="relative h-screen w-full bg-black flex items-center justify-center overflow-hidden">
      {/* Text container */}
      <div className="text-center max-w-6xl px-6  z-10">
        <h1 className=" text-5xl text-white font-semibold mb-6 ">
          Want to see more? <br />
          Check out our{" "}
          <a className="text-blue-500 underline" href="/work">
            Work!
          </a>
        </h1>
      </div>
    </div>
  );
};

export default LastPage;
