import {introduction,about} from "@/_components/Data.jsx";
import Image from 'next/image'
 
export default function Home() {
  return (
    <>
      <div className="section">
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

      <h1> {introduction.name}</h1>
      <h2>Hi There!</h2>
      <p>
      {about.aboutFirstpara}
      </p>
      <br/>
      <p>
      {about.aboutSecondpara}
      </p>
      </div>
    </>
  );
}
