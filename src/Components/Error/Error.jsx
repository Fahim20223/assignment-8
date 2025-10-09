import React from "react";
import errorMassage from "../../assets/error-404.png";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="mt-45">
      <img className="mx-auto" src={errorMassage} alt="" />
      <h1 className="text-center text-2xl font-bold pt-5">
        Oops, page not found!
      </h1>
      <p className="text-center text-gray-500 pt-3">
        The Page you are looking for is not available
      </p>
      <button
        onClick={handleNavigate}
        className="mt-5 btn block mx-auto text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
      >
        Go Back
      </button>
    </div>
  );
};

export default Error;
