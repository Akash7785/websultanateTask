import React, { useState, useEffect } from "react";
import icon from "../assets/featured.png";
import Card from "./Card";

const FeaturedBox = () => {
  const [activeTab, setActiveTab] = useState("Featured");
  const tabs = ["Featured", "New Boxes", "Top Boxes"];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/featuredData.json");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error loading review data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-[#0f0f11] py-4 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0 px-4">
          <div className="flex items-center gap-2 min-w-[160px] md:order-1">
            <img src={icon} alt="Featured" />
            <h2 className="font-semibold text-lg">Featured Boxes</h2>
          </div>

          <div className="flex items-center bg-[#1c1c1f] rounded-md p-1 text-sm min-w-[300px] justify-center md:order-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab
                    ? "bg-[#7848FF] text-white font-semibold cursor-pointer"
                    : "text-gray-400 hover:text-white cursor-pointer"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center text-sm text-gray-400 min-w-[160px] justify-end md:order-3">
            <span className="mr-1">Sort by:</span>
            <select className="bg-[#1c1c1f] rounded-md p-1 text-white font-semibold focus:outline-none">
              <option value="price">Price</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-[#0f0f11] py-4 text-white px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {data.map((box) => (
            <Card
              key={box.id}
              title={box.name}
              tags={box.category}
              price={box.price}
              image={box.image}
              labels={box.label}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedBox;
