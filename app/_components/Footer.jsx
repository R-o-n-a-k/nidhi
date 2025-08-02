import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="bg-muted-bg font-medium text-center p-4 md:text-xs text-xs flex justify-center items-center gap-1 flex-wrap">
      <span>Copyright</span>
      <FaCopyright className="inline w-3 h-3" />
      <span>{currentYear} All rights reserved.</span>
    </div>
  );
};

export default Footer;
