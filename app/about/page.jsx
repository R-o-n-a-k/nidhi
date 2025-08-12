import {
  aboutPage,
  certifications,
  certificatesDetail,
} from "@/_components/Data.jsx";
import Carousel from "@/_components/Carousel";

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
      <h1 className="heading mt-6">Skills</h1>
      <div className="">All the skills</div>

      {/* ----------------------------- Certifications Section -----------------------------  */}

      <h1 className="heading mt-6">Certifications</h1>
      <div className="flex md:flex-row flex-col-reverse mb-12 justify-between gap-6 text-sm md:text-base">
        <div className="max-w-full md:max-w-[390px] text-justify">
          <p>{certifications.firstPara}</p>
          <br />
          <p>{certifications.secondPara}</p>
        </div>
        <div className="mt-8 md:-mt-1 relative before:w-[90%] md:before:w-full before:h-full before:absolute before:content-[''] before:border-[6px] before:border-primary before:-top-6 before:-left-[4px] md:before:-top-6 md:before:-left-6 before:rounded-lg">
          <Carousel>
            {certificatesDetail.map((certificate) => {
              return (
                <div
                  key={certificate.id}
                  className="relative w-full h-[240px] md:h-[340px] group flex-shrink-0"
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-fill"
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
