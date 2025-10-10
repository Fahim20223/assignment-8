import React from "react";

const Spinner = () => {
  return (
    <div className="mx-auto mt-5 text-center min-h-[500px]">
      <span className="text-3xl font-bold">
        L
        <span className="loading loading-spinner loading-xl animate-spin items-center pt-20"></span>
        ADING...
      </span>
    </div>
  );
};

export default Spinner;
