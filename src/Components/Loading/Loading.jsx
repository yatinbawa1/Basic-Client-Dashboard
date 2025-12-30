import Skeleton from "../Skeleton/Skeleton";
import React from "react";

function Loading() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Array.from({ length: 20 }, (_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  );
}

export default Loading;
