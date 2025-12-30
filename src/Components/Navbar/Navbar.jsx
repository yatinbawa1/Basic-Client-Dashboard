import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/Logo.svg";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { SearchOutlined } from "@mui/icons-material";
import PrimaryButton from "../Button/PrimaryButton";

function Navbar({ ready, searchState }) {
  return (
    <div className="flex w-full items-center gap-4 bg-white p-4 text-2xl shadow-md transition-all">
      <div className="logo hidden md:block">
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {ready && (
        <div className="flex flex-1 gap-4">
          <div className="text-secondary flex flex-1 items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-3xl transition-all focus-within:shadow-md sm:text-3xl md:text-4xl lg:text-5xl">
            <SearchOutlined />
            <input
              type="text"
              value={searchState[0]}
              onChange={(e) => searchState[1](e.target.value)}
              placeholder="Search..."
              className="placeholder:text-secondary w-full bg-transparent text-xl focus:outline-none sm:text-xl lg:text-2xl"
            />
          </div>
          <PrimaryButton
            Icon={PersonAddOutlinedIcon}
            text="Add User"
            onClick={() => {}}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
