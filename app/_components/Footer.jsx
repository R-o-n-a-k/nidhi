import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="bg-muted-bg font-medium text-center p-4 md:text-xs text-[10px] flex justify-center items-center gap-1 flex-wrap">
      <span className="underline">Nidhi Patel</span>{" "}
      <FaCopyright className="inline w-3 h-3" />
      <p>{currentYear}</p>
      <p>| All rights reserved.</p>
    </div>
  );
};

export default Footer;
