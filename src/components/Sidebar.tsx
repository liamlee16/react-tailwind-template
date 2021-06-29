import React from "react";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="relative bg-white sm:block hidden">
      <div className="flex flex-col sm:flex-row sm:justify-around">
        <div className="w-72 h-screen overflow-y-auto">
          <nav className="mt-10 px-6">
            <NavLink
              className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
              to="/"
              activeClassName="text-gray-800 bg-gray-100"
              exact={true}
            >
              <MdDashboard />
              <span className="mx-4 text-md font-normal">Dashboard</span>
            </NavLink>
            <div>
              <p className="text-gray-500 ml-2 w-full border-b-2 pb-2 border-gray-200 mb-4 text-md font-normal">
                Elements
              </p>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/elements/buttons"
                activeClassName="text-gray-800 bg-gray-100"
                exact={true}
              >
                <span className="mx-4 text-md font-normal">Buttons</span>
              </NavLink>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/elements/badges"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Badges</span>
              </NavLink>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/elements/avatars"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Avatars</span>
              </NavLink>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/elements/menu-list"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Menu list</span>
              </NavLink>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/elements/alerts"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Alerts</span>
              </NavLink>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/elements/dashboards"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Dashboards</span>
              </NavLink>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/elements/progress-bars"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Progess bars</span>
              </NavLink>
            </div>
            <div>
              <p className="text-gray-500 ml-2 w-full border-b-2 pb-2 border-gray-200 mb-4 text-md font-normal">
                Forms
              </p>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/forms/inputs"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Inputs</span>
              </NavLink>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/forms/selects"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Selects</span>
              </NavLink>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/forms/toggles"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Toggles</span>
              </NavLink>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/forms/layouts"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Layouts</span>
              </NavLink>
            </div>

            <div>
              <p className="text-gray-500 ml-2 w-full border-b-2 pb-2 border-gray-200 mb-4 text-md font-normal">
                Commerce
              </p>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Pricing cards</span>
              </NavLink>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Shopping cards</span>
              </NavLink>
            </div>

            <div>
              <p className="text-gray-500 ml-2 w-full border-b-2 pb-2 border-gray-200 mb-4 text-md font-normal">
                Navigation
              </p>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/navigation/headers"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Headers</span>
              </NavLink>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/navigation/footers"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Footers</span>
              </NavLink>
              <NavLink
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                to="/navigation/sidebars"
                activeClassName="text-gray-800 bg-gray-100"
              >
                <span className="mx-4 text-md font-normal">Sidebars</span>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
