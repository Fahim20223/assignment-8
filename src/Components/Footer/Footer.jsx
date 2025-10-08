import React from "react";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#001931] p-10">
      <div className="flex gap-1 mb-7">
        <img className="w-7" src={logoImg} alt="" />
        <a
          className="text-xl text-white
"
        >
          HERO.IO
        </a>
      </div>
      <div className="footer sm:footer-horizontal text-neutral-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>Name
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
