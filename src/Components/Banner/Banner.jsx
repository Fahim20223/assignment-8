import React from "react";
import playStore from "../../assets/fi_16076057.png";
import appStore from "../../assets/fi_5977575.png";

const Banner = () => {
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-bold pt-6">
          We Build <br className="hidden md:block" />
          <span className="text-purple-500">Productive</span> Apps
        </h1>
        <p className="text-center text-gray-500 my-4">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.{" "}
          <br className="hidden md:block" /> Our goal is to turn your ideas into
          digital experiences that truly make an impact.
        </p>
      </div>
      <div className="text-center my-6">
        <a href="https://play.google.com/store/games?hl=en">
          <button className="btn mr-5">
            <img className="w-5" src={playStore} alt="" /> Google Play
          </button>
        </a>
        <a href="https://www.apple.com/app-store/">
          <button className="btn ">
            {" "}
            <img className="w-5" src={appStore} alt="" /> App Store
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
