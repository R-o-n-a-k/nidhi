import React from "react";

const Loader = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-full ">
        {["L", "O", "A", "D", "I", "N", "G"].map((letter, index) => (
          <div
            key={index}
            className="inline-block mx-[5px] text-[40px] font-medium text-primary animate-rotate-x"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </div>
        ))}
      </div>
    </>
  );
};

export default Loader;
