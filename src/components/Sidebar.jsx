import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sideList } from "../utils/constant";
import { closeMenu } from "../redux/hamburgerSlice";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.hamburger.isMenuOpen);
  const dispatch = useDispatch();
  if (window.innerWidth < 640 && isMenuOpen) {
    dispatch(closeMenu());
  }
  if (!isMenuOpen) return null; // this paterns knows as early returns
  return (
    <div
      className={`${
        isMenuOpen ? "block" : "hidden"
      } sm:block sm:col-span-2 mx-2 fixed sm:w-64 h-screen mt-4 bg-white z-20   `}
    >
      <ul className="space-y-4 mb-3 h-full overflow-y-auto">
        {sideList.map((list, index) => (
          <Link to={list.url} key={index}>
            <li className="flex items-center space-x-4 hover:bg-gray-200 px-2  py-2 rounded-lg cursor-pointer">
              {React.createElement(list.icon, { className: "w-4 h-4" })}

              <span className=" text-sm font-medium">{list.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
