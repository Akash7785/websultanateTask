import React from "react";
import battle from "../assets/battle.png";

const BattleCard = ({ avatars, boxes }) => {
  return (
    <div
      className="
        bg-[#1A1A20] rounded-md shadow-md
        flex flex-col sm:grid
        sm:grid-cols-[2fr_8fr_2fr] sm:grid-rows-1
        gap-2 sm:gap-3
        p-3
      "
    >
      <div className="order-1 sm:order-2">
        <div className="p-[1px] rounded-lg bg-gradient-to-r from-[#39FF88] from-0% via-[#22995200] via-50% to-[#39FF88] to-100%">
          <div className="bg-[#0E0E11] rounded-lg p-2">
            <div className="grid grid-cols-8 gap-2">
              {boxes.map((box, index) => (
                <div key={box.image}>
                  <img
                    src={box.image}
                    alt={`Box ${index + 1}`}
                    className="cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="order-2 sm:hidden flex w-full mb-4">
        <div
          className="flex-1 bg-[#29292F] flex items-center justify-center rounded-md"
          style={{ margin: 0, padding: 0 }}
        >
          <img
            className="w-8 h-8 rounded-md object-cover"
            src={avatars[0].avt}
            alt="Avatar 1"
          />
          <img
            className="w-8 h-8 rounded-md object-cover -mx-3"
            src={avatars[1].avt}
            alt="Avatar 2"
          />
          <img className="w-4 mx-2" src={battle} alt="Battle Icon" />
          <img
            className="w-8 h-8 rounded-md object-cover -mx-3 z-5"
            src={avatars[2].avt}
            alt="Avatar 3"
          />
          <img
            className="w-8 h-8 rounded-md object-cover"
            src={avatars[3].avt}
            alt="Avatar 4"
          />
        </div>
        <div
          className="flex-1 flex flex-col items-center justify-center"
          style={{ margin: 0, padding: 0 }}
        >
          <h1 className="font-semibold text-xs">$390.00</h1>
          <button className="bg-[#6C4CFF] px-3 py-1 text-xs text-white font-semibold rounded-md hover:bg-[#5839e0] transition">
            Open case
          </button>
        </div>
      </div>

      <div className="hidden sm:flex justify-between items-center py-4 px-4 bg-[#29292F] rounded-md order-1">
        <div className="flex items-center">
          <img
            className="w-8 h-8 rounded-md object-cover"
            src={avatars[0].avt}
            alt="Avatar 1"
          />
          <img
            className="w-8 h-8 rounded-md object-cover -mx-3"
            src={avatars[1].avt}
            alt="Avatar 2"
          />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-4" src={battle} alt="Battle Icon" />
        </div>
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-md object-cover -mx-3 z-5"
            src={avatars[2].avt}
            alt="Avatar 3"
          />
          <img
            className="w-8 h-8 rounded-md object-cover"
            src={avatars[3].avt}
            alt="Avatar 4"
          />
        </div>
      </div>

      <div className="hidden sm:flex flex-col items-center text-center gap-2 order-3">
        <h1 className="sm:font-semibold mb-2">$390.00</h1>
        <button className="bg-[#6C4CFF] px-6 py-2 text-xs text-white font-semibold rounded-md hover:bg-[#5839e0] transition">
          Open case
        </button>
      </div>
    </div>
  );
};

export default BattleCard;
