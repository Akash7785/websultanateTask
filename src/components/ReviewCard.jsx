import React from "react";
import { FaStar } from "react-icons/fa";
import avatar from "../assets/avtar/avt15.png";

const ReviewCard = ({ data }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-hidden">
      <div className="flex sm:hidden gap-4 overflow-x-auto w-full px-1">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#141518] text-white p-4 rounded-lg shadow-md flex-shrink-0 w-[280px]"
          >
            <CardContent item={item} />
          </div>
        ))}
      </div>

      {data.map((item, index) => (
        <div
          key={index}
          className="hidden sm:block bg-[#1A1A20] text-white p-4 rounded-lg shadow-md"
        >
          <CardContent item={item} />
        </div>
      ))}
    </div>
  );
};

const CardContent = ({ item }) => (
  <>
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center gap-2">
        <img
          src={avatar}
          alt="avatar"
          className="w-8 h-8 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm">{item.username}</p>
          <p className="text-xs text-gray-400">{item.handle}</p>
        </div>
      </div>
      <p className="text-xs text-gray-400">{item.time}</p>
    </div>

    <h3 className="font-bold text-sm mb-1">{item.review_title}</h3>
    <p className="text-xs text-gray-300 mb-3">
      {item.review_text.split(item.mentioned_user)[0]}
      <span className="text-[#8c8cff]">{item.mentioned_user}</span>
      {item.review_text.split(item.mentioned_user)[1]}
    </p>

    <div className="flex justify-center gap-2 mb-3">
      {item.images.map((img, i) => (
        <img
          key={i}
          src={img.review}
          alt={`review-${i}`}
          className="w-[70px] h-[70px] object-cover rounded-md border border-gray-700"
        />
      ))}
    </div>

    <div className="flex gap-1">
      {[...Array(item.rating)].map((_, i) => (
        <FaStar key={i} className="text-[#00ff91]" />
      ))}
    </div>
  </>
);

export default ReviewCard;
