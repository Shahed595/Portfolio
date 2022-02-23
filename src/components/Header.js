import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa";

const Header = () => {
  const [showMenu, setshowMenu] = useState("md:hidden");

  const menuItems = [
    {
      title: "Home",
      key: "/",
    },
    {
      title: "Projects",
      key: "/projects",
    },
    {
      title: "Contact",
      key: "/contact",
    },
  ];

  const path=window.location.pathname;

  return (
    <div className="text-white font-mont fixed top-0 left-0 right-0 z-30">
      <div className={`flex bg-theme justify-between items-center p-3 shadow-lg ${showMenu!=='md:hidden' && 'flex-col'}`}>
        <div className="flex justify-between items-center w-full">
          <h1 className="text-5xl font-semibold">S A</h1>
          <FaBars
          onClick={() => {
            if(showMenu==='md:hidden'){
                setshowMenu(" ");
            }
            else{
                setshowMenu('md:hidden');
            }
        }}
        className="lg:hidden xl:hidden, 2xl:hidden md:flex cursor-pointer"
          />
        </div>
        <div className="flex md:hidden">
          {menuItems.map((menuItem) => {
            return (
              <li className={`list-none mx-5 p-1 ${menuItem.key===path && 'bg-white text-black rounded-md'}`}>
                <Link to={`${menuItem.key}`}>{menuItem.title}</Link>
              </li>
            );
          })}
        </div>
        <div className={` mt-5 md:flex items-start justify-start w-full flex-col lg:hidden 2xl:hidden xl:hidden ${showMenu}`}>
          {menuItems.map((menuItem) => {
            return (
              <li className={`list-none p-1 ${menuItem.key===path && 'bg-white text-black rounded-md'}`}>
                <Link to={`${menuItem.key}`}>{menuItem.title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
