import React from 'react';

export const CollectionSkeleton = () => {
  return (
    <div className="min-h-screen w-full mt-16 flex flex-col lg:flex-row">
      <h1 className="text-5xl font-cinzel text-center">Our Collection</h1>
      <div className="grid w-[90%] self-center mt-8 grid-cols-1 gap-10 grid-rows-[1000px_500px] mb-8">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`${
              index === 0 ? "row-span-2" : "row-span-1"
            } bg-gray-700 rounded animate-pulse`}
          ></div>
        ))}
      </div>
    </div>
  );
};
