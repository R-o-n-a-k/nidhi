import {
  aboutPage,
  skills,
  certifications,
  certificatesDetail,
} from "@/_components/Data.jsx";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const about = () => {
  return (
    <div className="page">
      {/* ----------------------------- About Section -----------------------------  */}
      <h1 className="heading">About Me</h1>
      <div className="about-description flex flex-col gap-y-4 leading-normal text-justify text-sm md:text-base">
        <p>{aboutPage.aboutFirstpara}</p>
        <p>{aboutPage.aboutSecondpara}</p>
      </div>
      {/* ----------------------------- Skills Section -----------------------------  */}
      <h1 className="heading mt-10">Skills</h1>

      <div className="grid grid-cols-3 md:grid-cols-4">
        {skills.map((skill, i) => {
          const isMobileCol = (i + 1) % 3 === 0; // last col in 3-col grid
          const isDesktopCol = (i + 1) % 4 === 0; // last col in 4-col grid
          const isLastRowMobile = i >= 9; // last 3 items (row 4 of 3x4)
          const isLastRowDesktop = i >= 8; // last 4 items (row 3 of 4x3)
          const Icon = skill.icon;
          return (
            <div
              key={skill.id}
              className={`flex items-center md:justify-center py-2 md:py-4 px-2 border-neutral-300 dark:border-neutral-800
          ${!isMobileCol ? "border-r md:border-0" : ""}
          ${!isDesktopCol ? "md:border-r" : ""}
          ${!isLastRowMobile ? "border-b md:border-0" : ""}
          ${!isLastRowDesktop ? "md:border-b" : ""}`}
            >
              <span className="text-base md:text-lg mr-2 md:mr-4 text-primary">
                {/* {skill.icon} */}
                <Icon className="icon-size" />
              </span>
              <h2 className="text-[10px] md:text-sm font-medium text-content">
                {skill.name}
              </h2>
            </div>
          );
        })}
      </div>

      {/* ----------------------------- Certifications Section -----------------------------  */}

      <h1 className="heading mt-10">Certifications</h1>
      <div className="flex md:flex-row mb-12 justify-between gap-6 md:text-base">
        <div className="hidden md:block md:max-w-[390px] text-justify">
          <p>{certifications.firstPara}</p>
          <br />
          <p>{certifications.secondPara}</p>
        </div>
        <Carousel className="w-full max-w-[90%] md:max-w-lg mx-auto">
          <CarouselContent>
            {certificatesDetail.map((certificate) => (
              <CarouselItem key={certificate.id}>
                <div className="relative w-full h-[240px] md:h-[340px] group ">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={250}
                    height={250}
                    className="w-full h-full object-fill rounded-lg"
                    placeholder="blur"
                    blurDataURL=" "
                  />

                  <div
                    className="rounded-lg absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="uppercase text-white text-xs md:text-lg font-bold tracking-[2px] md:tracking-[4px]">
                      {certificate.title}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Buttons at bottom */}
          <div className="flex justify-end gap-2 mt-3">
            <CarouselPrevious className="static translate-y-0 cursor-pointer" />
            <CarouselNext className="static translate-y-0 cursor-pointer" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default about;
