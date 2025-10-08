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
      <div class="footer sm:footer-horizontal text-neutral-content">
        <nav>
          <h6 class="footer-title">Services</h6>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 class="footer-title">Company</h6>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 class="footer-title">Legal</h6>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
