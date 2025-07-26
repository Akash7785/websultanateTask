import React, { useEffect, useState } from "react";
import icon from "../assets/freshDeliveries.png";
import ReviewCard from "./ReviewCard";

const Deliveries = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/deliveries.json");
        const json = await response.json();
        setReviews(json);
      } catch (error) {
        console.error("Error loading review data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between my-5">
        <div className="flex items-center gap-2 min-w-[160px] mb-2 md:mb-0">
          <img src={icon} alt="icon" />
          <h2 className="font-semibold text-lg">Fresh Deliveries</h2>
        </div>
        <div className="text-xs text-[#676778] max-w-md float-right">
          Check out some of the hottest unboxings from our community!
          <span>tag us on Twitter when your item arrives.</span>
        </div>
      </div>

      <ReviewCard data={reviews} />
    </div>
  );
};

export default Deliveries;
