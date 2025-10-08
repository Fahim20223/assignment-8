import React from "react";
import Banner from "../Banner/Banner";
import Mobile from "../Mobile/Mobile";
import Cards from "../Cards/Cards";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const cards = useLoaderData();
  // console.log(cards);
  return (
    <div className="bg-[#F5F5F5] pb-7">
      <Banner></Banner>
      <Mobile></Mobile>
      <Cards cards={cards}></Cards>
      <Link to="/apps">
        <button className="block bg-gradient-to-r from-[#632ee3] to-[#9f62f2] mx-auto btn rounded-lg text-white">
          Show All
        </button>
      </Link>
    </div>
  );
};

export default Home;
