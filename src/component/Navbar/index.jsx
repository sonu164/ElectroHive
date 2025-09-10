import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navimg from "../../assets/Navimg.png";

const Navbar = () => {
  const [Nav, setNavbar] = useState(false);
  const [tab, setTab] = useState("Home");

  return (
    <div className="bg-slate-800 h-16 flex items-center  px-4 w-full ">
      <div className="flex justify-between w-full ">
        <div className="text-white flex w-15 h-15 justify-evenly text-center items-center">
          <img src={Navimg} alt="" />
          <h1 className="md:text-2xl text-xl font-bold text-center ">
            ElectroHive
          </h1>
        </div>
        <div className="hidden  md:flex justify-evenly w-1/2 items-center">
          <div className="mt-2">
            <ul className="flex gap-6  text-white font-extrabold">
              <li
                onClick={() => setTab("Home")}
                className={tab === "Home" ? "text-blue-300" : ""}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                onClick={() => setTab("Card")}
                className={tab === "Card" ? "text-blue-300" : ""}
              >
                <Link to="/card">Card</Link>
              </li>
              <li
                onClick={() => setTab("About")}
                className={tab === "About" ? "text-blue-300" : ""}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                onClick={() => setTab("History")}
                className={tab === "History" ? "text-blue-300" : ""}
              >
                <Link to="/History">History</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center gap-3 mt-2 font-extrabold items-center">
            <button className="text-white px-4 py-2 rounded ">Login</button>
            <button className=" text-white px-4 py-2 rounded ">
              Registration
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden text-white">
        {Nav ? (
          <X
            className="w-7 h-7 cursor-pointer "
            onClick={() => setNavbar(false)}
          />
        ) : (
          <Menu
            className="w-7 h-7 cursor-pointer"
            onClick={() => setNavbar(true)}
          />
        )}
      </div>
      <div>
        {Nav && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-slate-600 h-32 flex flex-col items-center justify-evenly">
            <div className="mt-2">
              <ul className="flex gap-6  text-white font-extrabold">
                <li
                  onClick={() => setTab("Home")}
                  className={tab === "Home" ? "text-blue-300" : ""}
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  onClick={() => setTab("Card")}
                  className={tab === "Card" ? "text-blue-300" : ""}
                >
                  <Link to="/card">Card</Link>
                </li>
                <li
                  onClick={() => setTab("About")}
                  className={tab === "About" ? "text-blue-300" : ""}
                >
                  <Link to="/about">About</Link>
                </li>
                <li
                  onClick={() => setTab("History")}
                  className={tab === "History" ? "text-blue-300" : ""}
                >
                  <Link to="/History">History</Link>
                </li>
              </ul>
            </div>
            <div className="font-extrabold">
              <button className="text-white px-4 py-2 rounded ">Login</button>
              <button className=" text-white px-4 py-2 rounded ">
                Registration
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
