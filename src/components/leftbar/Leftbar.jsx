import React from "react";
import { StyledLeftbar } from "./Leftbar.styled";
import { GoHome } from "react-icons/go";
import { BsFillBookmarkFill, BsFillHeartFill } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";

function Leftbar() {
  const location = useLocation();
  return (
    <StyledLeftbar>
      <ul>
        <li>
          <NavLink
            to={location.pathname === "/anonymous" ? "/login" : "/"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <GoHome />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={location.pathname === "/anonymous" ? "/login" : "/bookmarks"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <BsFillBookmarkFill />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={location.pathname === "/anonymous" ? "/login" : "/messenger"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <BiMessageSquareDetail />
          </NavLink>
        </li>
        <li>
          <NavLink
            to={location.pathname === "/anonymous" ? "/login" : "/all-users"}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <FaUserFriends />
          </NavLink>
        </li>

        {/* <li>
          <NavLink
            to="/logout"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <FiLogOut />
          </NavLink>
        </li> */}
      </ul>
    </StyledLeftbar>
  );
}

export default Leftbar;
