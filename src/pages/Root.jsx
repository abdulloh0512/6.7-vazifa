import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import Sidebar from "./Sitebar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Navbar />
      <Main className="flex ">
        <Sidebar />
        <Outlet />
      </Main>
    </>
  );
}

export default Root;