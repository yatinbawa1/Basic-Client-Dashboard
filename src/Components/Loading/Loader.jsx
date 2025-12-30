import React from "react";

function Loader() {
  return (
    <div className="flex h-full w-full items-center justify-center p-10">
      <div className="border-primary border-t-secondary border-b-secondary h-12 w-12 animate-spin rounded-full border-4" />
    </div>
  );
}

export default Loader;
