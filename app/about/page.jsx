import {
  aboutPage,
  skills,
  certifications,
  certificatesDetail,
} from "@/_components/Data.jsx";
import Carousel from "@/_components/Carousel";
import Image from "next/image";

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
      <h1 className="heading mt-8">Skills</h1>

      <div className="grid grid-cols-3 md:grid-cols-4">
        {skills.map((skill, i) => {
          const isMobileCol = (i + 1) % 3 === 0; // last col in 3-col grid
          const isDesktopCol = (i + 1) % 4 === 0; // last col in 4-col grid
          const isLastRowMobile = i >= 9; // last 3 items (row 4 of 3x4)
          const isLastRowDesktop = i >= 8; // last 4 items (row 3 of 4x3)

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
                {skill.icon}
              </span>
              <h2 className="text-[10px] md:text-sm font-medium text-content">
                {skill.name}
              </h2>
            </div>
          );
        })}
      </div>

      {/* ----------------------------- Certifications Section -----------------------------  */}

      <h1 className="heading mt-8">Certifications</h1>
      <div className="flex md:flex-row mb-12 justify-between gap-6 md:text-base">
        <div className="hidden md:block md:max-w-[390px] text-justify">
          <p>{certifications.firstPara}</p>
          <br />
          <p>{certifications.secondPara}</p>
        </div>
        <div className="mt-8 relative before:w-[90%] md:before:w-full before:h-full before:absolute before:content-[''] before:border-[6px] before:border-primary before:-top-6 before:-left-[4px] md:before:-top-6 md:before:-left-6 before:rounded-lg">
          <Carousel>
            {certificatesDetail.map((certificate) => {
              return (
                <div
                  key={certificate.id}
                  className="relative w-full h-[240px] md:h-[340px] group flex-shrink-0"
                >
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={250}
                    height={250}
                    className="w-full h-full object-fill"
                    placeholder="blur"
                    blurDataURL=" "
                  />

                  <div
                    className="absolute flex items-center justify-center inset-0 bg-black/50 backdrop-blur-xs
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="absolute uppercase text-white text-xs md:text-lg font-bold leading-loose tracking-[2px] md:tracking-[4px] text-shadow-lg">
                      {certificate.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default about;
