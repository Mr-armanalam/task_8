import React from "react";
import {FaFacebook, FaFacebookF, FaGithub, FaInstagram, FaXTwitter} from 'react-icons/fa6'

function Footer() {
  return (
    <footer className="w-screen flex flex-col bg-gray-950 justify-center">
      <div className=" flex flex-row text-white font-sans  my-20 ml-12 mr-18 justify-between flex-wrap w-auto">
        <div className=" pl-4 my-4 w-72">
          <p className=" font-semibold text-2xl">Primary Pages</p>
          <div>
            <ul className="list-none p-0 m-0 pt-4.1">
              <li className="leading-10 text-lg font-medium text-stone-300">
                Home
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                About Us
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Services
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Pricing
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div className="pl-4 my-4 w-72">
          <p className=" font-semibold text-2xl">Learn</p>
          <div>
            <ul className="list-none p-0 m-0 pt-4.1">
              <li className="leading-10 text-lg font-medium text-stone-300">
                Masco Blog
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Cold Email Masterclass
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Prospecting Podcast
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Follow-Up Strategy
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Email Analyzer
              </li>
            </ul>
          </div>
        </div>
        <div className="pl-4 my-4 w-72">
          <p className=" font-semibold text-2xl">Utility Pages</p>
          <div>
            <ul className="list-none p-0 m-0 pt-4.1">
              <li className="leading-10 text-lg font-medium text-stone-300">
                Signup
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Login
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                404 Not Found
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Password Reset
              </li>
            </ul>
          </div>
        </div>
        <div className="pl-4 my-4 w-72">
          <p className=" font-semibold text-2xl">Resources</p>
          <div>
            <ul className="list-none p-0 m-0 pt-4.1">
              <li className="leading-10 text-lg font-medium text-stone-300">
                Support
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Privacy Policy
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Terms & Conditions
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Strategic Finance
              </li>
              <li className="leading-10 text-lg font-medium text-stone-300">
                Video Guide
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright_container flex flex-row flex-wrap justify-between py-4 mx-10 border-t border-slate-400">
        <div>
          <img src="assets/image/logo-blue-light.png" alt="logo" />
        </div>
        <p className=" font-sans text-medium font-medium text-stone-300">
          © Copyright 2024, All Rights Reserved by PixcelsThemes
        </p>
        <div className="text-white flex flex-row">
          <a
            href="#"
            className="block mr-4 text-center w-8 h-8 rounded-full relative bg-gray-500"
          >
            <span className=" absolute text-base top-2 right-2">
              <FaXTwitter />
            </span>
          </a>
          <a
            href="#"
            className="block mr-4 text-center w-8 h-8 rounded-full relative bg-gray-500"
          >
            <span className=" absolute text-base top-2 right-2">
              <FaFacebookF />
            </span>
          </a>
          <a
            href="#"
            className="block mr-4 text-center w-8 h-8 rounded-full relative bg-gray-500"
          >
            <span className=" absolute text-base top-2 right-2">
              <FaInstagram />
            </span>
          </a>
          <a
            href="#"
            className="block mr-4 text-center w-8 h-8 rounded-full relative bg-gray-500"
          >
            <span className=" absolute text-base top-2 right-2">
              <FaGithub />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
