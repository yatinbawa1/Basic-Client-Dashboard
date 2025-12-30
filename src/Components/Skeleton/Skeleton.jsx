import React from "react";

function Skeleton() {
  return (
    <div className="h-20 rounded-md bg-gray-300">
      <div className="flex items-center p-4">
        <div className="h-12 w-12 animate-pulse rounded-full bg-gray-400"></div>
        <div className="ml-4 flex-1">
          <div className="mb-2 h-4 w-3/4 animate-pulse rounded bg-gray-400"></div>
          <div className="h-4 w-1/2 animate-pulse rounded bg-gray-400"></div>
        </div>
        <div className="ml-auto h-4 w-4 animate-pulse rounded-full bg-gray-400"></div>
      </div>
    </div>
  );
}

export default Skeleton;
