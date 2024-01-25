import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[230px] h-[730px] bg-[#ebebeb] py-4 px-3">
      <a
        href="https://dummyjson.com/image"
        className=" cursor-pointer text-2xl text-[#000] mb-4 font-semibold"
      >Placeholder Image</a>
      <div className="flex gap-3 flex-col ">
        <h1 className="text-[#000] text-2xl font-bold mt-4">Intro</h1>
        <NavLink className={"link"} to={"test"}>
          Test
        </NavLink>
        <NavLink className={"link"} to={"limiting"}>
          Limiting Resources
        </NavLink>
        <NavLink className={"link"} to={"responses"}>
        Delay Responses
        </NavLink>
        <NavLink className={"link"} to={"user"}>
        Resources as Auth User
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;