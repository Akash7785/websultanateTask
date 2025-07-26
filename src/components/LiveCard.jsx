import React, { useMemo } from "react";

const LiveCard = ({ data }) => {
  // Random color generator with useMemo so color doesn't change on re-renders
  const randomColor = useMemo(() => {
    const colors = [
      "#39FF88",
      "#FF8C00",
      "#FF4B91",
      "#62D2FF",
      "#A259FF",
      "#FFCF48",
      "#00FFC6",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  return (
    <div className="">
      <div
        className={`p-[1px] rounded-lg border-l-2 min-w-[200px] flex-shrink-0`}
        style={{
          borderColor: randomColor,
          background: `linear-gradient(to right, ${randomColor}59, transparent)`, // '59' for ~35% opacity
        }}
      >
        <div className="flex items-center">
          <img
            src={data.image}
            alt="avtar"
            className="w-16 h-16 p-2 rounded-md object-cover"
          />
          <div className="ml-4 flex flex-col justify-center h-16">
            <p className="text-sm font-semibold text-white ">{data.price}</p>
            <div className="flex items-center mt-1">
              <img
                className="w-5 h-5 rounded-md object-cover"
                src={data.avtar}
                alt=""
              />
              <p className="text-xs text-[#676778] font-semibold ml-1">
                {data.user}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCard;
