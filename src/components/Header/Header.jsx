import React from "react";

const Header = () => {
  return (
    <div className="bg-black w-full h-[70px] flex items-center px-[36px]">
      <img className="w-[80px] h-[70px]" src="/public/images/logo.svg" alt="" /> {/* NavList  */}
      <ul className="flex items-center  flex-1 ml-[25px]">
        <a className="flex px-[12px] ">
          <img className="h-[20px]" src="/public/images/home-icon.svg" alt="home icon" />
          <span className="font-[13px] uppercase">Home</span>
        </a>
        <a className="flex px-[12px]">
          <img className="h-[20px]" src="/public/images/search-icon.svg" alt="home icon" />
          <span className="font-[13px] uppercase">search</span>
        </a>
        <a className="flex px-[12px]">
          <img className="h-[20px]" src="/public/images/watchlist-icon.svg" alt="home icon" />
          <span className="font-[13px] uppercase">watchlist</span>
        </a>
        <a className="flex px-[12px]">
          <img className="h-[20px]" src="/public/images/original-icon.svg" alt="home icon" />
          <span className="font-[13px] uppercase">originals</span>
        </a>
        <a className="flex px-[12px]">
          <img className="h-[20px]" src="/public/images/movie-icon.svg" alt="home icon" />
          <span className="font-[13px] uppercase">movies</span>
        </a>
        <a className="flex px-[12px]">
          <img className="h-[20px]" src="/public/images/series-icon.svg" alt="home icon" />
          <span className="font-[13px] uppercase">series</span>
        </a>
      </ul>
      {/* User Img  */}
      <img className="h-[48px] w-[48px] rounded-full cursor-pointer" src="/public/images/tanvir 1.png" alt="" />
    </div>
  );
};

export default Header;
