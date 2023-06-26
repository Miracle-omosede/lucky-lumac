import React from 'react'
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer p-10 md:p-28 md:text-lg bg-base-200 text-base-content font-semibold font-monserrat text-sm">
      <div className="flex flex-col -mt-10">
        <img className="w-32 m-0 p-0" src={logo} alt="logo-image" />
        <p>
          LUCKY LUMAC LTD
          <br />
          <span href="/Contact" className="link text-blue-600 font-semibold">
            Contact us
          </span>{" "}
          for efficient energy solutions.
          <br />
        </p>
      </div>
      <div className="uppercase">
        <span className="footer-title">Explore</span>
        <a href="/About" className="link link-hover">
          Who we are
        </a>
        <a href="/Services" className="link link-hover">
          Services
        </a>
        <a className="link link-hover">
          faq<span className="lowercase">s</span>
        </a>
      </div>
      <div className="uppercase">
        <span className="footer-title">Company</span>
        <a href="/Projects" className="link link-hover">
          Projects
        </a>
        <a href="/Contact" className="link link-hover">
          Contact
        </a>
        <a className="link link-hover">Customer support</a>
      </div>
      <div className="uppercase">
        <span className="footer-title uppercase">reach out</span>
        <a className="link link-hover">PH: +234-814-320-9741</a>
        <a className="lowercase link link-hover">
          19, Philip Shuaibu street Wuye, FCT Abuja.
        </a>
        <a href="mailto:info@luckylumac.com" className="text-blue-900 underline link link-hover">
          info@luckylumac.com
        </a>
      </div>
    </footer>
  );
}

export default Footer