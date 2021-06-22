import React from "react";
import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="relative bg-white">
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
              <a
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                href="#"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-normal">Inputs</span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                href="#"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-normal">Selects</span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                href="#"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-normal">Toggles</span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                href="#"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-normal">Layouts</span>
              </a>
            </div>

            <div>
              <p className="text-gray-500 ml-2 w-full border-b-2 pb-2 border-gray-200 mb-4 text-md font-normal">
                Commerce
              </p>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                href="#"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-normal">Pricing cards</span>
              </a>
              <a
                className="hover:text-gray-800 font-thin text-gray-500 hover:bg-gray-100 flex items-center p-2 my-4 transition-colors duration-200 justify-start"
                href="#"
              >
                <span className="text-left">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#5e72e4"
                      d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"
                    ></path>
                  </svg>
                </span>
                <span className="mx-4 text-md font-normal">Shopping cards</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
