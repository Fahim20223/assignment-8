import React from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";

const CardDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id === appId);
  console.log(singleApp);
  const {
    image,
    title,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
  } = singleApp;
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-15 p-10 ">
        <div className="">
          <img
            className="md:w-[400px] rounded-xl md:h-[400px] object-cover"
            src={image}
            alt=""
          />
        </div>
        <div>
          <div>
            <h1 className="text-2xl font-bold ">{title}</h1>
            <p className="text-gray-500">
              Developed by{" "}
              <span className="text-purple-600">{companyName}</span>
            </p>
          </div>
          <p className="divider"></p>
          <div className="flex gap-15 items-center">
            <div>
              <img src={downloadImg} alt="" />
              <p className="text-gray-500">Downloads</p>
              <h1 className="text-xl font-bold">{downloads}</h1>
            </div>
            <div>
              <img src={ratingImg} alt="" />
              <p className="text-gray-500">Average Ratings</p>
              <h2 className="text-xl font-bold">{ratingAvg}</h2>
            </div>
            <div>
              <img src={reviewImg} alt="" />
              <p>Total Reviews</p>
              <h2 className="text-xl font-bold">{reviews}</h2>
            </div>
          </div>
        </div>
      </div>
      <p className="divider w-[75%] px-7"></p>
    </div>
  );
};

export default CardDetails;
