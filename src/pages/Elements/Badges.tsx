import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebook, FaFacebookF, FaMailBulk } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";

function Badges() {
  return (
    <div className="w-full grid grid-cols-6 gap-4">
      <div className="px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Badge
        </div>
        <span className="px-4 py-2 text-base rounded-full text-white bg-indigo-500">
          Hello
        </span>
      </div>
      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Badge with remove button
        </div>
        <span className="flex items-center justify-center w-1/2 px-4 py-2 text-base rounded-full text-white bg-indigo-500">
          Hello
          <button className="ml-2">
            <AiOutlineClose />
          </button>
        </span>
      </div>
      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Badge with remove button and icon
        </div>
        <span className="flex items-center justify-center w-1/2 px-4 py-2 text-base rounded-full text-white bg-indigo-500">
          <span className="mr-2">
            <FaFacebookF />
          </span>
          Hello
          <button className="ml-2">
            <AiOutlineClose />
          </button>
        </span>
      </div>
      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Badge stroke with border
        </div>
        <span className="flex items-center justify-center w-1/2 px-4 py-2 text-base rounded-full bg-red-300 text-red-500 border-red-600 border">
          Hello
        </span>
      </div>
      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Badge line
        </div>
        <span className="flex items-center justify-center w-1/2 px-4 py-2 text-base rounded-full text-indigo-600 border-indigo-600 border">
          Hello
        </span>
      </div>
      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Stroke with icon
        </div>
        <span className="flex items-center justify-center w-2/3 px-4 py-2 text-base rounded-full bg-blue-300 text-blue-600">
          <FaFacebookF className="mr-2 text-blue-600" />
          Facebook
        </span>
      </div>
      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Line with icon
        </div>
        <span className="flex items-center justify-center w-2/3 px-4 py-2 text-base rounded-full border-blue-600 border text-blue-600">
          <FaFacebookF className="mr-2 text-blue-600" />
          Facebook
        </span>
      </div>
      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Line with icon and close button
        </div>
        <span className="inline-flex items-center justify-center px-4 py-2 text-base rounded-full border-blue-600 border text-blue-600">
          <FaFacebookF className="mr-2 text-blue-600" />
          Facebook
          <button className="ml-2">
            <AiOutlineClose />
          </button>
        </span>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg col-span-2">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          List of badges
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <span className="px-4 py-2 text-base rounded-full text-blue-600 bg-blue-200">
            default
          </span>
          <span className="px-4 py-2 text-base rounded-full text-red-600 bg-red-200">
            refused
          </span>
          <span className="px-4 py-2 text-base rounded-full text-yellow-600 bg-yellow-200">
            pending
          </span>
          <span className="px-4 py-2 text-base rounded-full text-green-600 bg-green-200">
            accepted
          </span>
        </div>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg col-span-2">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Pink badge
        </div>
        <div className="inline-flex items-center leading-none bg-white shadow p-2 rounded-full text-sm">
          <span className="bg-pink-600 text-white rounded-full py-1 px-3">
            Pink
          </span>
          <span className="px-2 text-pink-600">
            Im a sexy badge and you can use me everyday.
          </span>
        </div>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg col-span-2">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Black badge
        </div>
        <div className="inline-flex items-center leading-none bg-white shadow p-2 rounded-full text-sm">
          <span className="bg-gray-600 text-white rounded-full py-1 px-3">
            Black
          </span>
          <span className="px-2 text-gray-600">
            Im a sexy badge and you can use me everyday.
          </span>
        </div>
      </div>

      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Notification badge
        </div>
        <span className="flex items-center justify-center w-8 h-8 rounded-full text-base text-white bg-red-500">
          2
        </span>
      </div>
      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Notification badge with icon
        </div>
        <button className="inline-flex text-md relative">
          <span className="flex items-center justify-center w-4 h-4 rounded-full text-xs text-white bg-red-500 absolute right-0">
            2
          </span>
          <IoMdNotifications className="w-8 h-8" />
        </button>
      </div>
      <div className="w-full px-4 py-2 bg-white shadow-lg">
        <div className="text-lg text-center py-2 mb-4 border-gray-400 border-b">
          Line rounded badge
        </div>
        <div className="inline-flex flex-wrap items-center gap-2 leading-none">
          <span className="px-2 py-1 bg-indigo-500 text-white rounded-md">
            tag
          </span>
          <span className="px-2 py-1 bg-red-500 text-white rounded-md">
            tag 1
          </span>
          <span className="px-2 py-1 bg-blue-500 text-white rounded-md">
            tag 2
          </span>
          <span className="px-2 py-1 bg-green-500 text-white rounded-md">
            tag 3
          </span>
          <span className="px-2 py-1 bg-purple-500 text-white rounded-md">
            tag 4
          </span>
          <span className="px-2 py-1 bg-gray-500 text-white rounded-md">
            tag 5
          </span>
          <span className="px-2 py-1 bg-pink-500 text-white rounded-md">
            tag 6
          </span>
        </div>
      </div>
    </div>
  );
}

export default Badges;
