import Image from "next/image";

const project = () => {
  return (
    <div className="page">
      <h1 className="heading">Projects</h1>
      {/* --------------------------- Under Construction --------------------------- */}
      <>
        <div className="mt-10 md:mt-6 text-center">
          <Image
            src="/images/underConstruction.svg"
            alt="Under Construction"
            width={400}
            height={400}
            className="w-full md:w-[50%] mx-auto object-cover animate-pulse mb-6"
            placeholder="blur"
            blurDataURL=" "
          />

          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black dark:text-white">
            🚧 Page Under Construction
          </h1>

          <p className="text-sm md:text-lg text-content mb-6">
            Assembling pieces of my passion. Stay tuned!
          </p>
        </div>
      </>
    </div>
  );
};

export default project;
