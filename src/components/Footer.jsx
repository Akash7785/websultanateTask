import React from "react";
import star from "../assets/star.png";
import { FaTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const links = [
  "AML Policy",
  "Cookie Policy",
  "Contact",
  "Terms Of Service",
  "Blog",
  "FAQ",
  "Privacy Statement",
  "Provably Fair",
];

const Footer = () => {
  return (
    <footer className="bg-[#1A1A20] text-gray-400 py-4 px-6 text-sm">
      <div className="flex flex-col gap-4 sm:hidden">
        <div className="flex justify-between items-center">
          <div className="flex gap-[2px]">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={star} alt="star" className="w-4 h-4" />
            ))}
          </div>

          <div className="flex gap-2">
            <button className="bg-[#29292F] p-2 rounded-md">
              <FaTwitter className="text-[#4B4B58] text-sm" />
            </button>
            <button className="bg-[#29292F] p-2 rounded-md">
              <FaInstagram className="text-[#4B4B58] text-sm" />
            </button>
            <button className="bg-[#29292F] p-2 rounded-md">
              <FaTiktok className="text-[#4B4B58] text-sm" />
            </button>
            <button className="bg-[#29292F] p-2 rounded-md">
              <FaYoutube className="text-[#4B4B58] text-sm" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-2 gap-x-4">
          {links.map((link, index) => (
            <div key={index} className="flex items-center gap-2 text-[13px]">
              <span className="text-[#666] text-base leading-none">•</span>
              <span className="hover:text-white cursor-pointer">{link}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden sm:flex flex-row justify-between items-center">
        <div className="flex items-center gap-[2px]">
          {[...Array(5)].map((_, i) => (
            <img key={i} src={star} alt="star" className="w-4 h-4" />
          ))}
        </div>

        <ul className="flex flex-wrap items-center gap-2 text-xs text-gray-400">
          {links.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="hover:text-white cursor-pointer">{item}</span>
              {index !== links.length - 1 && (
                <span className="text-gray-600">•</span>
              )}
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <button className="bg-[#29292F] p-2 rounded-md hover:bg-[#2a2a2e] cursor-pointer">
            <FaTwitter className="text-[#4B4B58] text-sm" />
          </button>
          <button className="bg-[#29292F] p-2 rounded-md hover:bg-[#2a2a2e] cursor-pointer">
            <FaInstagram className="text-[#4B4B58] text-sm" />
          </button>
          <button className="bg-[#29292F] p-2 rounded-md hover:bg-[#2a2a2e] cursor-pointer">
            <FaTiktok className="text-[#4B4B58] text-sm" />
          </button>
          <button className="bg-[#29292F] p-2 rounded-md hover:bg-[#2a2a2e] cursor-pointer">
            <FaYoutube className="text-[#4B4B58] text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
