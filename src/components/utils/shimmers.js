const Shimmers = () => {
  return (
    <div className="flex flex-wrap gap-6 px-8 py-6 justify-center">

      {Array(12).fill("").map((_, index) => (

        <div
          key={index}
          className="w-[260px] bg-white rounded-xl shadow-md overflow-hidden"
        >

          {/* image shimmer */}
          <div className="h-[170px] bg-gray-300 animate-pulse"></div>

          {/* text shimmer */}
          <div className="p-3 space-y-3">

            <div className="h-4 bg-gray-300 rounded animate-pulse"></div>

            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>

            <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>

          </div>

        </div>

      ))}

    </div>
  );
};
export default Shimmers