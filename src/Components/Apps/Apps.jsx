import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import Cards2 from "../Cards2/Cards2";

const Apps = () => {
  const apps = useLoaderData();
  console.log(apps);

  const [searching, setSearching] = useState("");
  const filteredItems = apps.filter((app) =>
    app.title.toLowerCase().includes(searching.trim().toLowerCase())
  );
  const handleSearching = (e) => {
    setSearching(e.target.value);
  };
  return (
    <div className="bg-[#F5F5F5] pb-7">
      <div>
        <h1 className="text-center text-2xl font-bold pt-5 pb-3">
          Our All Applications
        </h1>
        <p className="text-center text-gray-500 pb-7">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex flex-col-reverse md:flex-row justify-around items-center mb-7 ">
          <p className="text-xl font-semibold">
            ({filteredItems.length}) Apps Found
          </p>
          <input
            className="border border-gray-400 rounded-xl px-5 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            type="text"
            placeholder="Search Apps"
            value={searching}
            onChange={handleSearching}
          />
        </div>
      </div>
      {filteredItems.length === 0 ? (
        <p className="text-3xl font-bold text-gray-500 text-center">
          No Apps Found
        </p>
      ) : (
        <Cards2 apps={filteredItems}></Cards2>
      )}
    </div>
  );
};

export default Apps;
