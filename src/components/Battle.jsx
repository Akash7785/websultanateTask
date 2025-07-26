import React, { useState, useEffect } from "react";
import icon from "../assets/battle.png";
import BattleCard from "./BattleCard";

const Battle = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/battel.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 min-w-[160px]">
          <img src={icon} alt="Battle Icon" />
          <h2 className="font-semibold text-lg">Latest Battles</h2>
          <button className="bg-[#363640] cursor-pointer   px-3 py-2 mx-3 text-[#CBCBDD] text-xs rounded-md font-semibold">
            View All
          </button>
        </div>
      </div>

      {data.map((row, rowIndex) => (
        <BattleCard key={rowIndex} avatars={row.avatars} boxes={row.boxes} />
      ))}
    </>
  );
};

export default Battle;
