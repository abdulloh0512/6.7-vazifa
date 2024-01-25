import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="mw-full py-4 px-6 flex justify-between items-center nav sticky top-0 bg-[#fff]">
      <img width={"130px"} height={"40px"} src="/logo.png" alt="Logo is here" />
      <div className="flex gap-3">
        <NavLink className={"link"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"link"} to={"/docs"}>
          Docs
        </NavLink>
        <NavLink className={"link"} to={"/github"}>
          GitHub
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;