import React from "react";
import errorMassage from "../../assets/error-404.png";

const Error = () => {
  return (
    <div className="mt-45">
      <img className="mx-auto" src={errorMassage} alt="" />
      <h1 className="text-center text-2xl font-bold pt-5">
        Oops, page not found!
      </h1>
      <p className="text-center text-gray-500 pt-3">
        The Page you are looking for is not available
      </p>
    </div>
  );
};

export default Error;
