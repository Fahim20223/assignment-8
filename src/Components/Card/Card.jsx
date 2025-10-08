import React from "react";
import ratings from "../../assets/icon-ratings.png";
import downloadsIcon from "../../assets/icon-downloads.png";

const Card = ({ card }) => {
  const { image, title, ratingAvg, downloads } = card;
  return (
    <div>
      <div className="card bg-base-100  shadow-md p-3">
        <figure className="">
          <img
            className=" h-[280px] w-70 object-cover rounded-3xl"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-between">
            <button className="text-green-400 btn ">
              <img className="w-3" src={downloadsIcon} alt="download icon" />{" "}
              {downloads}
            </button>
            <button className="bg-orange-100 text-orange-400 btn border-0">
              <img className="w-4" src={ratings} alt="rating star" />{" "}
              {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
