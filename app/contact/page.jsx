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
        {contactInfo.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.name} className="flex items-center gap-2">
              {item.link ? (
                <>
                  <div
                    data-aos="zoom-in"
                    data-aos-offset="5"
                    className="p-2 bg-primary rounded-full text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="icon-size fill-white"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1c-29.19 0-52.79-23.6-52.79-52.8C1 26.11 24.6 2.5 53.79 2.5s52.8 23.61 52.8 52.8c0 29.2-23.6 52.8-52.8 52.8zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.9-43.7 31.3-2.3 5.6-2.9 13.5-2.9 21.4V448h-92.4s1.2-270.8 0-299.1h92.4v42.4c12.3-19 34.4-46.1 83.7-46.1 61.2 0 107.2 39.9 107.2 125.4V448z" />
                    </svg>
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="italic text-content font-medium tracking-wide text-sm leading-normal md:text-lg underline hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </>
              ) : (
                <>
                  <div
                    data-aos="zoom-in"
                    data-aos-offset="5"
                    className="p-2 bg-primary rounded-full text-white"
                  >
                    <Icon className="icon-size" />
                  </div>
                  <p className="text-content font-medium tracking-wide text-sm leading-normal md:text-lg">
                    {item.name}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
      <p className="text-teal-600 my-14 md:my-22 font-semibold text-xs md:text-lg animate-slowping text-center">
        Click on "Email me" to see some magic
      </p>
      <Envelope />
    </div>
  );
};

export default contact;
