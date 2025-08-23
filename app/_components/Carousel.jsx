"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ children: certificates }) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? certificates.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === certificates.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative overflow-hidden max-w-[90%] md:max-w-lg shadow-lg dark:[box-shadow:_3px_3px_10px_#008080] mx-auto rounded-lg">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {certificates}
      </div>
      <div className="flex flex-col absolute right-0 bottom-0">
        <button onClick={prev} className="carousel-btn rounded-tl-lg">
          <ChevronLeft />
        </button>
        <button onClick={next} className="carousel-btn">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
