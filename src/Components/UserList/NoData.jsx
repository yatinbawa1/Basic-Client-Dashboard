import React from "react";

function NoData() {
  return (
    <div className="col-span-full flex flex-row items-center justify-center">
      <div className="">
        <img
          src="/No Data Icon.png"
          alt="No Data"
          className="mx-auto mt-8 h-48 w-48 opacity-50 md:h-72 md:w-72 lg:h-96 lg:w-96"
        />
        <p className="text-secondary mt-4 -translate-x-2.5 text-center font-bold md:-translate-x-3.75 md:text-3xl lg:-translate-x-6 lg:text-4xl">
          No Users Available
        </p>
      </div>
    </div>
  );
}

export default NoData;
