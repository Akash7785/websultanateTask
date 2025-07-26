import React, { useEffect, useState } from "react";
import LiveCard from "./LiveCard";

const LiveDrop = () => {
  const [liveData, setLiveData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data/live.json");
      const data = await res.json();
      setLiveData(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#16161B] px-4 py-3 rounded-lg">
      <div className="flex items-center gap-2 mb-3">
        <div className="relative w-4 h-4">
          <span className="absolute inset-0 rounded-full bg-[#B1FF62] opacity-20 animate-ping"></span>
          <span className="absolute inset-1 rounded-full bg-[#B1FF62] opacity-70"></span>
        </div>
        <h2 className="text-white text-sm font-semibold">Live drops</h2>
      </div>

      <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
        {liveData.map((item, index) => (
          <LiveCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default LiveDrop;
