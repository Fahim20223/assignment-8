import React from "react";
import logoImg from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Header = () => {
  const links = (
    <>
      <Link to="/">
        <li className="m-2">Home</li>
      </Link>
      <li className="m-2">About</li>
      <li className="m-2">Installation</li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex gap-1">
          <img className="w-7" src={logoImg} alt="" />
          <a
            className="text-xl text-purple-600
"
          >
            HERO.IO
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
          <span className="text-white ">
            {" "}
            <FaGithub />
          </span>
          <span className="text-white">Contribute</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
