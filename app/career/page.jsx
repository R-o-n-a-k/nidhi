import React from "react";
import { workData, educationData } from "@/_components/Data.jsx";
import Timeline from "@/_components/Timeline";

const career = () => {
  return (
    <div className="page">
      <Timeline data={workData} heading="Work Experience" />
      <Timeline data={educationData} heading="Education" />
    </div>
  );
};

export default career;
