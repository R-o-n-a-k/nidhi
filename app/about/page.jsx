import React from "react";
import { aboutPage } from "@/_components/Data.jsx";

const about = () => {
  return (
    <div className="page">
      <h1 className="heading">About Me</h1>
      <div className="about-description flex flex-col gap-y-4 leading-normal text-justify text-sm md:text-base ">
        <p>{aboutPage.aboutFirstpara}</p>
        <p>{aboutPage.aboutSecondpara}</p>
      </div>
      <h1 className="heading mt-6">Skills</h1>
      <div className="about-skills">All the skills</div>

      <h1 className="heading mt-6">Certifications</h1>
      <div className="about-skills">Certificate Collection</div>
    </div>
  );
};

export default about;
