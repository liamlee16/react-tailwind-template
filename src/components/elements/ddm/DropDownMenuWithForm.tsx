import React, { useState } from "react";

interface Props {
  //boolean to always open ddm (for presentation)
  forceOpen?: boolean;
  label?: string;
  icon?: string;
}

const DropDownMenuWithForm = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500`}
          id="options-menu"
        >
          {props.label}

          {props.icon || (
            <svg
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z" />
            </svg>
          )}
        </button>
      </div>

      {(props.forceOpen || isOpen) && (
        <div className="origin-top-right border border-gray-300 absolute left-0 mt-2 w-56 rounded-md bg-white dark:bg-gray-800">
          <div
            className="p-4"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-base text-center font-semibold focus:outline-none transition ease-in duration-200">
                Valider
              </button>
            </div>
            <div>
              <div className="text-md text-gray-500 w-full text-center my-3">
                Or
              </div>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-base text-center font-semibold focus:outline-none transition ease-in duration-200">
                Valider
              </button>
            </div>
            <div className="flex items-center mt-3">
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-base text-center font-semibold focus:outline-none transition ease-in duration-200">
                Valider
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DropDownMenuWithForm;
