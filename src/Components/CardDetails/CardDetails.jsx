import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../../assets/icon-downloads.png";
import ratingImg from "../../assets/icon-ratings.png";
import reviewImg from "../../assets/icon-review.png";
import { toast } from "react-toastify";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { addTOStoredDB, getStoredApps } from "../Utilities/addTODB";

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
    ratings,
  } = singleApp;

  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const installedApps = getStoredApps();
    if (installedApps.includes(id)) {
      setShowBtn(true);
    }
  }, []);

  const handleBtn = (id) => {
    if (showBtn) {
      return;
    }
    toast.success(`Yahoo⚡!! ${title} Installed Successfully`);
    setShowBtn(!showBtn);
    addTOStoredDB(id);
    setShowBtn(true);
  };

  return (
    <div className="bg-[#F5F5F5]">
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
              <h1 className="text-xl font-bold">{downloads}B</h1>
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
          <button
            onClick={() => handleBtn(id)}
            className="mt-7 btn block mx-auto bg-[#00d390] text-white"
          >
            {showBtn ? " Installed" : "Install Now (291 MB)"}
          </button>
        </div>
      </div>
      <p className="divider w-[75%] px-7"></p>
      <div className="p-5">
        <h1 className="text-2xl font-bold p-10">Ratings</h1>
        <div style={{ width: "100%", height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={[...ratings].reverse()}
              layout="vertical"
              margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
            >
              <XAxis dataKey="count" type="number" />
              <YAxis dataKey="name" type="category" axisLine={false} />
              <Tooltip />
              <Bar dataKey="count" fill="#ff8811" barSize={27} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold pl-15">Description</h2>
        <p className="pl-15 text-gray-500 md:w-[75%] lg:w-[50%] pb-7">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
