import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <>
      <div className="h-screen">
        <div className="bg-indigo-500  pt-12">
          <Header />
        </div>
        <div className="flex h-full	">
          <div className="w-1/4 ">
            <Sidebar />
          </div>

          <div className=" w-3/4 h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
