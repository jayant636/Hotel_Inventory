import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" pl-14 pt-8 pb-12">
      <div>
        <nav>
          <ul>
            <li className="pt-8">
              <NavLink to="/dashboard">
                <span>Home</span>
              </NavLink>
            </li>
            <li className="pt-8">
              <NavLink to="/booking">
                <span>Bookings</span>
              </NavLink>
            </li>
            <li className="pt-8">
              <NavLink to="/cabins">
                <span>Cabins</span>
              </NavLink>
            </li>
            <li className="pt-8">
              <NavLink to="/users">
                <span>Users</span>
              </NavLink>
            </li>
            <li className="pt-8">
              <NavLink to="/settings">
                <span>Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
