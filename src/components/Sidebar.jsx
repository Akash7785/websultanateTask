import React, { useState } from "react";
import gift from "../assets/sideIcons/00.png";
import home from "../assets/sideIcons/1.png";
import archive from "../assets/sideIcons/2.png";
import sword from "../assets/sideIcons/3.png";
import crown from "../assets/sideIcons/4.png";
import friends from "../assets/sideIcons/5.png";
import bullhorn from "../assets/sideIcons/6.png";
import mail from "../assets/sideIcons/7.png";
import chat from "../assets/sideIcons/8.png";
import receipt from "../assets/sideIcons/9.png";
import twitter from "../assets/sideIcons/10.png";
import instagram from "../assets/sideIcons/11.png";
import tiktok from "../assets/sideIcons/12.png";
import youtube from "../assets/sideIcons/13.png";

const mainTabs = [
  { id: "gift", icon: gift, label: "Gift" },
  { id: "home", icon: home, label: "Home" },
  { id: "archive", icon: archive, label: "Archive" },
  { id: "sword", icon: sword, label: "Sword" },
  { id: "crown", icon: crown, label: "Crown" },
  { id: "friends", icon: friends, label: "Friends" },
];
const secondaryTabs = [
  { id: "bullhorn", icon: bullhorn, label: "Bullhorn" },
  { id: "mail", icon: mail, label: "Mail" },
  { id: "chat", icon: chat, label: "Chat" },
  { id: "receipt", icon: receipt, label: "Receipt" },
];
const socialTabs = [
  { id: "twitter", icon: twitter, label: "Twitter" },
  { id: "instagram", icon: instagram, label: "Instagram" },
  { id: "tiktok", icon: tiktok, label: "TikTok" },
  { id: "youtube", icon: youtube, label: "YouTube" },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("gift");
  const tabClass = (active) =>
    `flex items-center justify-center w-full h-14 mb-2 cursor-pointer relative rounded-md border-t-1 ${
      active
        ? "border-blue-400 sm:p-[1px] rounded-lg bg-gradient-to-t from-[#735CFF]/95 to-[#3E337E00] "
        : "border-transparent"
    } transition`;

  const iconClass = (active, tabId) =>
    `${
      active ? "opacity-100" : "opacity-60"
    } transition relative flex justify-center items-center`;

  return (
    <div className="w-20 p-2 h-[1100px] bg-[#17171c] flex flex-col justify-between items-center py-2">
      <div className="w-full">
        {mainTabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={tabClass(activeTab === tab.id)}
            style={{ position: "relative" }}
          >
            <span className={iconClass(activeTab === tab.id, tab.id)}>
              <img
                src={tab.icon}
                alt={tab.label}
                className={"w-5 h-5"}
                draggable={false}
              />
              {tab.id === "gift" && (
                <span className="absolute -top-2 -right-2 bg-[#14f195] -mx-4 my-7 text-[#101014] text-[10px] px-1.5 py-0.5 rounded-md font-bold z-10 shadow">
                  Free
                </span>
              )}
            </span>
          </div>
        ))}
        <div className="border-b border-[#22222a] mx-2 my-2"></div>
      </div>
      <div>
        {secondaryTabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={tabClass(activeTab === tab.id)}
          >
            <span className={iconClass(activeTab === tab.id, tab.id)}>
              <img
                src={tab.icon}
                alt={tab.label}
                className="w-5 h-5"
                draggable={false}
              />
            </span>
          </div>
        ))}
        <div className="flex flex-col gap-2 pb-2">
          {socialTabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={tabClass(activeTab === tab.id)}
            >
              <span className={iconClass(activeTab === tab.id, tab.id)}>
                <img
                  src={tab.icon}
                  alt={tab.label}
                  className="w-5 h-5"
                  draggable={false}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
