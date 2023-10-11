const HeroSkeleton = () => {
  return (
    <>
      <div
        role="status"
        className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
      >
        <div className="flex items-center justify-center w-full h-[550px] bg-gray-300 rounded sm:w-full dark:bg-gray-700"></div>

        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default HeroSkeleton;
