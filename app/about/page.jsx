import React from "react";
import { aboutPage } from "@/_components/Data.jsx";

const about = () => {
  return (
    <div className="page">
      <p>{aboutPage.aboutFirstpara}</p>
      <br />
      <p>{aboutPage.aboutSecondpara}</p>
    </div>
  );
};

export default about;
