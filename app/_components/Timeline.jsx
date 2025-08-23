const Timeline = ({ data, heading = "Timeline" }) => {
  return (
    <>
      <h1 className="heading">{heading}</h1>
      <div className="overflow-hidden">
        <div className="py-2 pl-5 md:pl-6">
          <ol className="relative border-l border-[#D4D4D4] dark:border-[#3f3f3f] w-fit ">
            {data.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="mb-10 ml-6 md:ml-8">
                  <span className="absolute flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full -left-4 md:-left-5 ring-4 ring-background text-white">
                    {/* {item.icon} */}
                    <Icon className="icon-size" />
                  </span>

                  <time className="block mb-0.5 text-xs md:text-sm font-normal text-neutral-500">
                    {item.date}
                  </time>

                  <h2 className="md:text-lg text-base font-medium text-title-color">
                    {item.title} @ {item.company}
                  </h2>

                  <p className="text-xs md:text-sm text-neutral-400 mb-2">
                    {item.location}
                  </p>

                  {Array.isArray(item.description) ? (
                    <ul className="list-none space-y-1.5 md:space-y-1.5 w-full text-justify text-sm md:text-base text-content px-2 md:pl-4 relative">
                      {item.description.map((point, i) => (
                        <li
                          key={i}
                          className="relative before:content-['-'] before:absolute before:-left-4"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Timeline;
