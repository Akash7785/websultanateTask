import React from "react";
import globe from "../assets/banner/globe.png";
import bag from "../assets/banner/bag.png";
import rays from "../assets/banner/rays.png";
import image from "../assets/banner/image.png";

const Banner = () => (
  <>
    <div className="flex md:hidden overflow-x-auto gap-4 px-2 pb-2 scrollbar-thin">
      <div className="min-w-[90vw] bg-gradient-to-r from-[#232325] to-[#9747FF] rounded-xl relative flex flex-col justify-between overflow-hidden min-h-[340px]">
        <div className="z-10 text-white p-5 pb-28 ">
          <h2
            style={{ fontFamily: "Space Grotesk" }}
            className="text-3xl font-bold leading-tight mb-4"
          >
            Sign Up today <br />
            and claim your <br />
            <span className="text-white">FREE box</span>
          </h2>
          <p className="text-sm text-[#A1A1AA] mb-6">
            Unlock YOUR Free Box Today! Each box is a treasure trove of
            excitement waiting to be discovered. Don’t miss out – dive into the
            unknown with us!
          </p>
          <button className="bg-[#7848FF] text-white px-6 py-2 rounded-lg text-sm font-medium">
            Claim now
          </button>
        </div>
        <div className="absolute left-0 bottom-0 w-full flex justify-center items-end h-[150px] pointer-events-none">
          <img
            src={globe}
            alt="globe"
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[70%] max-w-[250px] z-10 opacity-60"
          />
          <img
            src={bag}
            alt="bag"
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[60%] max-w-[200px] z-20"
          />
          <span className="absolute left-1/2 bottom-[64px] -translate-x-1/2 mx-20 bg-green-400 text-black text-xs font-bold px-3 py-1 rounded-md z-30 shadow-md">
            Free
          </span>
        </div>
      </div>

      <div className="min-w-[90vw] bg-gradient-to-t from-[#9747FF] to-[#1A1A1F] rounded-xl relative overflow-hidden min-h-[340px] flex flex-col justify-between">
        <div className="z-10 relative p-5 pb-28">
          <h2 className="text-xl font-bold mb-2">
            Earn up to 10% on <br /> deposits from your friends
            <span className="bg-pink-500 text-xs px-2 py-0.5 ml-2 rounded-md font-semibold">
              5%
            </span>
          </h2>
          <p className="text-[#A1A1AA] text-sm mb-4">
            Give your friends a 5% bonus <br />
            added to all their cash deposits
          </p>
        </div>
        <div className="absolute left-0 bottom-0 w-full flex flex-col items-center z-10 pb-0">
          <button className="z-20 bg-green-400 text-black px-4 py-2 rounded-md text-sm font-medium mb-[10px] mt-auto">
            Refer a friend
          </button>
          <img
            src={image}
            alt="3D growth"
            className="w-[75%] max-w-[200px] z-10"
          />
        </div>
        <img
          src={rays}
          alt="rays"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] opacity-10 pointer-events-none z-0"
        />
      </div>
    </div>

    <div className="hidden md:grid grid-cols-3 gap-4">
      <div className="md:col-span-2 bg-gradient-to-r from-[#232325] to-[#9747FF] rounded-xl relative flex flex-col md:flex-row items-center overflow-hidden min-h-[340px]">
        <div className="flex-1 z-10 text-white p-6">
          <h2
            className="text-3xl font-bold leading-tight mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Sign Up today <br />
            and claim your <br />
            <span className="text-white">FREE box</span>
          </h2>

          <p className="text-sm text-[#A1A1AA] mb-6">
            Unlock YOUR Free Box Today! Each box is a treasure trove of
            excitement waiting to be discovered. Don’t miss out – dive into the
            unknown with us!
          </p>
          <button className="bg-[#7848FF] cursor-pointer text-white px-6 py-2 rounded-lg text-sm font-medium">
            Claim now
          </button>
        </div>
        <div className="flex-1 relative flex justify-center items-end h-full min-h-[270px]">
          <img
            src={globe}
            alt="globe"
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[270px] h-auto pointer-events-none"
            style={{ zIndex: 1 }}
          />
          <img
            src={bag}
            alt="bag"
            className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-[270px] h-auto object-contain z-10"
          />
          <span className="absolute left-1/2 bottom-[64px] -translate-x-1/2 bg-green-400 text-black text-xs font-bold px-3 py-1 rounded-md z-20 shadow-md">
            Free
          </span>
        </div>
      </div>

      <div className="relative bg-gradient-to-t from-[#9747FF] to-[#1A1A1F] rounded-xl p-6 overflow-hidden text-white flex flex-col justify-between min-h-[340px]">
        <div className="z-10 relative">
          <h2 className="text-xl font-bold mb-2">
            Earn up to 10% on <br /> deposits from your friends
            <span className="bg-pink-500 text-xs px-2 py-0.5 ml-2 rounded-md font-semibold">
              5%
            </span>
          </h2>
          <p className="text-[#A1A1AA] text-sm mb-4">
            Give your friends a 5% bonus <br />
            added to all their cash deposits
          </p>
        </div>
        <div className="absolute left-0 bottom-0 w-full flex flex-col items-center z-10 pb-0">
          <button className="z-20 cursor-pointer   bg-green-400 text-black px-4 py-2 rounded-md text-sm font-medium mb-[10px] mt-auto">
            Refer a friend
          </button>
          <img
            src={image}
            alt="3D growth"
            className="w-full max-w-[200px] z-10"
          />
        </div>
        <img
          src={rays}
          alt="rays"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] opacity-10 pointer-events-none z-0"
        />
      </div>
    </div>
  </>
);

export default Banner;
