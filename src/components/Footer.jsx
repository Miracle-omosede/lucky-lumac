import React from 'react'
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer p-10 md:p-28 md:text-lg bg-base-200 text-base-content font-semibold font-monserrat text-sm">
      <div className="flex flex-col -mt-10">
        <img className="w-32 m-0 p-0" src={logo} alt="logo-image" />
        <p>
          LUCKY LUMACS LTD
          <br />
          <span href="/Contact" className="link text-blue-600 font-semibold">Contact us</span> for efficient energy solutions.
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
        <a className="link link-hover">PH: +234-806-757-8779</a>
        <a className="link link-hover">PH: +234-708-947-7842</a>
        <a href="mailto:info@luckylumac.com" className="link link-hover">
          info@luckylumac.com
        </a>
      </div>
    </footer>
  );
}

export default Footer