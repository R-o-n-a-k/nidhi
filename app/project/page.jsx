import Image from "next/image";
import ProjectSection from "@/_components/ProjectSection";
import SocialMedia from "@/_components/SocialMedia";
import Blogs from "@/_components/Blogs";

const project = () => {
  return (
    <div className="page">
      <ProjectSection social={<SocialMedia />} blogs={<Blogs />} />
    </div>
  );
};

export default project;
