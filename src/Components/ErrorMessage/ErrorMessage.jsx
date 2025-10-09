import React from "react";
import appErrorImg from "../../assets/App-Error.png";
import { useNavigate } from "react-router";

const ErrorMessage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div className="space-y-10 pb-8">
      <img className="mx-auto pt-8" src={appErrorImg} alt="" />
      <h1 className="text-center text-3xl font-semibold">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="text-center text-gray-500">
        The App you are requesting is not found on our system. Please try
        another apps.
      </p>
      <button
        onClick={handleNavigate}
        className="btn block mx-auto text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
      >
        Get Back
      </button>
    </div>
  );
};

export default ErrorMessage;
