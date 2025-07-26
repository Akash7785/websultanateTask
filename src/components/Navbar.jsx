import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.svg";
import H from "../assets/word/Vector-1.svg";
import E from "../assets/word/Vector-2.svg";
import A from "../assets/word/Vector-3.svg";
import T from "../assets/word/Vector-4.svg";
import D from "../assets/word/Vector-5.svg";
import R from "../assets/word/Vector-6.svg";
import O from "../assets/word/Vector-7.svg";
import P from "../assets/word/Vector.svg";
import Home from "../assets/navicons/Home.svg";
import Boxes from "../assets/navicons/Boxes.svg";
import Battles from "../assets/navicons/Battles.svg";
import Vip from "../assets/navicons/Vip.svg";
import Affiliates from "../assets/navicons/Affiliates.svg";
import flag from "../assets/navicons/flag.svg";
import downArrow from "../assets/navicons/chevron-down.svg";
import chatIcon from "../assets/navicons/Chat.svg";
import coin from "../assets/navicons/Coin.svg";

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [langSelected, setLangSelected] = useState("EN");

  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [currencySelected, setCurrencySelected] = useState({
    code: "USD",
    symbol: "$",
  });

  const langRef = useRef(null);
  const currencyRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setCurrencyOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const languages = [
    { code: "EN", label: "English" },
    { code: "IN", label: "India" },
    { code: "RS", label: "Russia" },
  ];

  const currencies = [
    { code: "USD", symbol: "$", label: "US Dollar" },
    { code: "EUR", symbol: "€", label: "Euro" },
    { code: "INR", symbol: "₹", label: "Indian Rupee" },
  ];

  return (
    <nav className="bg-[#16161B] h-17 w-full relative z-50">
      <div className="flex justify-between items-center h-full px-4 md:px-6">
        <div className="flex justify-between items-center w-full gap-3 sm:gap-6">
          <div className="flex items-center gap-6">
            <img className="w-8" src={logo} alt="Logo" />

            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-0.5">
                <img src={D} alt="D" />
                <img src={R} alt="R" />
                <img src={O} alt="O" />
                <img src={P} alt="P" />
                <img src={H} alt="H" />
                <img src={E} alt="E" />
                <img src={A} alt="A" />
                <img src={T} alt="T" />
              </div>

              <div className="flex text-[#A3A3B7] gap-8 items-center">
                <div className="flex gap-2 items-center cursor-pointer hover:text-white transition">
                  <img src={Home} alt="Home" />
                  <h1>Home</h1>
                </div>
                <div className="flex gap-2 items-center cursor-pointer hover:text-white transition">
                  <img src={Boxes} alt="Boxes" />
                  <h1>Boxes</h1>
                </div>
                <div className="flex gap-2 items-center cursor-pointer hover:text-white transition">
                  <img src={Battles} alt="Battles" />
                  <h1>Battles</h1>
                </div>
                <div className="flex gap-2 items-center cursor-pointer hover:text-white transition">
                  <img src={Vip} alt="VIP" />
                  <h1>VIP Members</h1>
                </div>
                <div className="flex gap-2 items-center cursor-pointer hover:text-white transition">
                  <img src={Affiliates} alt="Affiliates" />
                  <h1>Affiliates</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Language dropdown toggle */}
            <div
              ref={langRef}
              className="relative bg-[#1A1A20] px-2.5 py-2 rounded-lg border border-slate-800 flex items-center gap-1 cursor-pointer select-none"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen((prev) => !prev);
              }}
            >
              <img className="w-4" src={flag} alt={langSelected} />
              <p className="text-white text-xs md:text-sm">{langSelected}</p>
              <img className="w-3" src={downArrow} alt="downArrow" />

              {langOpen && (
                <ul className="absolute top-full right-0 mt-1 bg-[#29292F] border border-slate-800 rounded-md shadow-lg w-20 z-50">
                  {languages.map(({ code, label }) => (
                    <li
                      key={code}
                      className={`cursor-pointer px-3 py-2 text-xs text-white transition ${
                        code === langSelected ? "bg-[#6C4CFF]" : ""
                      }`}
                      onClick={(event) => {
                        event.stopPropagation();
                        setLangSelected(code);
                        setLangOpen(false);
                      }}
                    >
                      {code}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div
              ref={currencyRef}
              className="relative bg-[#1A1A20] px-2.5 py-2 rounded-lg border border-slate-800 flex items-center gap-1 cursor-pointer select-none"
              onClick={(e) => {
                e.stopPropagation();
                setCurrencyOpen((prev) => !prev);
              }}
            >
              <div className="flex items-center gap-1">
                <img className="w-4" src={coin} alt={currencySelected.code} />
                <p className="text-white text-xs md:text-sm">
                  {currencySelected.code}
                </p>
              </div>
              <img className="w-3" src={downArrow} alt="downArrow" />

              {currencyOpen && (
                <ul className="absolute top-full right-0 mt-1 bg-[#29292F] border border-slate-800 rounded-md shadow-lg w-28 z-50">
                  {currencies.map(({ code, symbol, label }) => (
                    <li
                      key={code}
                      className={`cursor-pointer flex justify-between px-3 py-2 text-xs text-white transition ${
                        code === currencySelected.code ? "bg-[#6C4CFF]" : ""
                      }`}
                      onClick={(event) => {
                        event.stopPropagation();
                        setCurrencySelected({ code, symbol });
                        setCurrencyOpen(false);
                      }}
                    >
                      <span>{code}</span>
                      <span>{symbol}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button className="py-2 px-3 md:px-6 bg-[#7848FF] rounded-lg text-white text-xs md:text-sm whitespace-nowrap hover:bg-[#6139D9] transition">
              Authorization
            </button>

            <div className="bg-[#1A1A20] p-2 rounded-lg border border-slate-800 flex items-center cursor-pointer hover:border-[#6C4CFF] transition">
              <img className="w-5" src={chatIcon} alt="chat" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
