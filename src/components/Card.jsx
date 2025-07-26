import React from "react";

const Card = ({ title, tags = [], price, image, labels = [] }) => {
  const labelColors = {
    New: "bg-[#39FF88]",
    Hot: "bg-[#FB3529] bg-[linear-gradient(358deg,rgba(251,53,41,1)_0%,rgba(255,121,63,1)_100%)]",
    Popular: "bg-[#3FA1FC]",
  };

  return (
    <div className="bg-[#1a1a1a] text-white rounded-xl p-4 w-full max-w-xs mx-auto shadow-md relative bg-radial-[at_50%_40%] from-slate-600 to-[#1A1A20]  to-50%">
      <div className="absolute top-3 left-3 flex gap-2">
        {labels.map((label) => (
          <span
            key={label}
            className={`text-xs  text-white px-2 py-1 rounded ${
              labelColors[label] || "bg-gray-500"
            }`}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="mt-8 mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-contain mx-auto"
        />
      </div>

      <h2 className="text-sm font-bold mb-2">{title}</h2>

      <div className="flex gap-2 mb-3 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#2a2a2a] text-xs text-gray-300 px-2 py-0.5 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="sm:text-lg sm:font-semibold mb-4">${price.toFixed(2)}</p>

      <div className="flex gap-2">
        <button className="bg-[#6C4CFF] text-xs cursor-pointer text-white font-semibold rounded-md flex-1 hover:bg-[#5839e0] transition">
          Open case
        </button>
        <button className="text-xs bg-[#363640] cursor-pointer font-semibold text-white px-4 py-2 rounded-md hover:bg-[#3a3a3a] transition">
          Info
        </button>
      </div>
    </div>
  );
};

export default Card;
