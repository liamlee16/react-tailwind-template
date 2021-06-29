import React from "react";
import { FaUpload, FaStar } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import { AiOutlineReload } from "react-icons/ai";

function Buttons() {
  return (
    <div className="w-full grid grid-cols-6 gap-4">
      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Button
        </div>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-base text-center font-semibold focus:outline-none transition ease-in duration-200">
          Valider
        </button>
      </div>
      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Button with Icon
        </div>
        <button className="flex justify-between items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-base text-center font-semibold focus:outline-none transition ease-in duration-200">
          <FaUpload className="mr-2" /> Valider
        </button>
      </div>
      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Icon Button
        </div>
        <button className="px-4 py-2 w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-base text-center font-semibold focus:outline-none transition ease-in duration-200">
          <FaUpload />
        </button>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Loading Button (SVG)
        </div>
        <button className="px-4 py-2 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base text-center font-semibold focus:outline-none transition ease-in duration-200">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="mr-2 animate-spin"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
          </svg>
          loading
        </button>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Loading Button (Icons FiLoader)
        </div>
        <button className="px-4 py-2 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base text-center font-semibold focus:outline-none transition ease-in duration-200">
          <FiLoader className="animate-spin mr-2" />
          loading
        </button>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Loading Button (Icons AiOutlineReload)
        </div>
        <button className="px-4 py-2 flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-base text-center font-semibold focus:outline-none transition ease-in duration-200">
          <AiOutlineReload className="animate-spin mr-2 text-xl" />
          loading
        </button>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Disbaled Button
        </div>
        <button
          disabled={true}
          className="px-4 py-2 cursor-not-allowed flex justify-center items-center bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg text-base text-center font-semibold focus:outline-none transition ease-in duration-200"
        >
          Upload
        </button>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Rounded Button
        </div>
        <button
          disabled={true}
          className="px-4 py-2 cursor-not-allowed flex justify-center items-center bg-pink-600 hover:bg-pink-700 text-white rounded-full text-base text-center font-semibold focus:outline-none transition ease-in duration-200"
        >
          Follow
        </button>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Rounded Button and icon
        </div>
        <button
          disabled={true}
          className="px-4 py-2 cursor-not-allowed flex justify-center items-center bg-pink-600 hover:bg-pink-700 text-white rounded-full text-base text-center font-semibold focus:outline-none transition ease-in duration-200"
        >
          <FaUpload className="mr-2" />
          Follow
        </button>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Rounded fat Button
        </div>
        <button className="px-6 py-4 flex justify-center items-center bg-green-600 hover:bg-green-700 text-white rounded-full text-base text-center font-semibold focus:outline-none transition ease-in duration-200">
          Follow
        </button>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Rounded with information
        </div>
        <div className="flex items-center border rounded-md">
          <button className="w-full flex items-center px-4 py-2 border-r hover:bg-gray-100">
            <FaStar className="mr-2" /> Star
          </button>
          <button className="w-full px-4 py-2 hover:bg-gray-100">654</button>
        </div>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg col-span-2">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Multiple buttons
        </div>
        <div className="flex items-center border rounded-md">
          <button className="w-full px-4 py-2 hover:bg-gray-100 border-r">
            Left
          </button>
          <button className="w-full px-4 py-2 hover:bg-gray-100 border-r">
            Center
          </button>
          <button className="w-full px-4 py-2 hover:bg-gray-100">Right</button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
