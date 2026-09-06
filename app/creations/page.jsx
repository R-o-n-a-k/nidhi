import CreationSection from "@/_components/CreationSection";
import SocialMedia from "@/_components/SocialMedia";
import Blogs from "@/_components/Blogs";

const creations = () => {
  return (
    <div className="page">
      <CreationSection social={<SocialMedia />} blogs={<Blogs />} />
    </div>
  );
};

export default creations;
