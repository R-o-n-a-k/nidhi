import {introduction} from "@/_components/Data.jsx";
import Image from 'next/image'
import ParticlesBackground from "./_components/ParticlesBackground";
import WordRotate from "./_animations/WordRotate"; 
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Snow background */}
      <ParticlesBackground/>
          
      {/* Main Page */}
      <div className="w-full relative p-4 md:p-6 overflow-hidden min-h-[82vh] md:min-h-[90vh]
      ">
        {/* Semi Circle Doom */}
        <div className="-z-9 absolute top-35 left-1/2 -translate-x-1/2 w-[250vw] aspect-square rounded-full p-[1px] bg-background shadow-xl"/>
        
        {/* Main Content */}
        <div className="w-full md:w-[65%] mx-auto">
          
          {/* Hero Image */}
          <div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] shadow-lg animate-morph mx-auto flex items-center justify-center overflow-hidden border-4 border-teal-700 dark:border-teal-800 shadow-teal-900/50 dark:shadow-teal-700/50 ">
            <Image
              src={introduction.image}
              width={250}
              height={250}
              alt={introduction.name}
              className="w-full h-full object-cover"
              placeholder="blur"
              blurDataURL=" "
              priority={true}
              />
          </div>

            {/* Content */}
          <div className="text-center mt-6 md:mt-8">
        
             <h1 className="uppercase text-[2.7rem] md:text-5xl font-bold text-primary tracking-widest leading-relaxed shadow-3d">
              {introduction.name}
              </h1>
          
              <WordRotate 
                words={introduction.designation}
                duration={1500} 
                className="home-introduction"
               />

              <a
                href={introduction.resume} // <-- Update with your actual file path
                download
                className="cursor-pointer relative inline-flex items-center gap-2 py-2 px-6 text-white text-base font-medium overflow-hidden bg-primary border-2 border-primary rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-primary hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-background before:to-background before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
              >
                Download CV
                 <FaAngleDoubleDown className="animate-bounce font-bold" />
              </a>

          </div>
        </div>
      </div>
    </>
  );
}
