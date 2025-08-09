import {introduction} from "@/_components/Data.jsx";
import Image from 'next/image'
import ParticlesBackground from "./_components/ParticlesBackground";
import WordRotate from "./_animations/WordRotate"; 

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
              alt="Nidhi Patel"
              className="w-full h-full object-cover"
              priority
              />
          </div>

            {/* Content */}
            <div className="text-center mt-6 md:mt-8">
              <h1 className="text-[2.7rem] md:text-6xl font-bold text-primary font-intro-name tracking-widest leading-relaxed text-shadow-lg">
                {introduction.name}
              </h1>
            
              {/* <h2 className="mb-12 italic text-lg md:text-2xl font-semibold text-content tracking-widest leading-tight text-shadow-lg">{introduction.designation}</h2> */}
              
                <WordRotate 
                      words={introduction.designation}
                      duration={1500} 
                      className="home-introduction"
                    />

              <a
                href={introduction.resume} // <-- Update with your actual file path
                download
                className="cursor-pointer relative inline-block py-2 px-8 text-white text-base font-medium overflow-hidden bg-primary border-2 border-primary rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-primary hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-background before:to-background before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
              >
                Download CV
              </a>

            </div>
            </div>
      </div>
    </>
  );
}
