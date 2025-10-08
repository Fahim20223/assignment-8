import React from "react";
import heroImg from "../../assets/hero.png";

const Mobile = () => {
  return (
    <div className="mb-15">
      <div>
        <img className="mx-auto" src={heroImg} alt="" />
      </div>
      <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] p-15">
        <h1 className="text-center text-white text-3xl font-semibold">
          Trusted by Millions, Built for You
        </h1>
        <div className="text-white flex  mt-8 justify-center gap-17">
          <div className="text-center">
            <p>Total Downloads</p>
            <h3 className="text-4xl font-bold my-2">29.6M</h3>
            <p className="">21% more than last month</p>
          </div>
          <div className="text-center">
            <p>Total Reviews</p>
            <h3 className="text-4xl font-bold my-2">906K</h3>
            <p>46% more than last month</p>
          </div>
          <div className="text-center">
            <p className="text-white-100">Active Apps</p>
            <h3 className="text-4xl font-bold my-2">132+</h3>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
