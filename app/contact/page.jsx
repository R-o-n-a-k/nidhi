import Envelope from "@/_components/Envelope";
import { contactInfo } from "@/_components/Data";

const contact = () => {
  return (
    <div className="page overflow-hidden">
      <h1 className="heading">Contact Me</h1>
      <p className="text-sm md:text-base text-content font-normal tracking-wide">
        Your audience is searching, scrolling, and clicking, so let’s make sure
        they find and remember you.
      </p>

      <div className="flex flex-col gap-4 my-4 items-start md:flex-row md:gap-0 md:my-8 md:items-center md:justify-between">
        {contactInfo.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div
              data-aos="zoom-in"
              data-aos-offset="5"
              className="p-3 bg-primary rounded-full text-white"
            >
              {item.icon}
            </div>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="italic text-content font-medium tracking-wide text-sm leading-normal md:text-lg underline hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ) : (
              <p className="text-content font-medium tracking-wide text-sm leading-normal md:text-lg">
                {item.name}
              </p>
            )}
          </div>
        ))}
      </div>
      <p className="text-teal-600 my-14 md:my-22 font-semibold text-xs md:text-lg animate-slowping text-center">
        Click on "Email me" to see some magic
      </p>
      <Envelope />
    </div>
  );
};

export default contact;
