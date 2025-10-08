import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <div className="p-5 shadow-md">
        <Header></Header>
      </div>{" "}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
