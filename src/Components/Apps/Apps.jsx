import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import Cards2 from "../Cards2/Cards2";

const Apps = () => {
  const apps = useLoaderData();
  console.log(apps);
  return (
    <div className="bg-[#F5F5F5] pb-7">
      <div>
        <h1 className="text-center text-2xl font-bold pt-5 pb-3">
          Our All Applications
        </h1>
        <p className="text-center text-gray-500 pb-7">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <Cards2 apps={apps}></Cards2>
    </div>
  );
};

export default Apps;
