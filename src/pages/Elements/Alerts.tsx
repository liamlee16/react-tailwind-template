import React from "react";
import ComponentLayout from "../../layouts/ComponentLayout";
import PageLayout from "../../layouts/PageLayout";

function Alerts() {
  return (
    <PageLayout>
      <ComponentLayout colSpan={3} title="Simple alert text">
        <div className="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4">
          <p className="font-bold">Danger</p>
          <p>Battery is low, your phone can't take a photo</p>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={3} title="Simple alert success">
        <div className="bg-green-200 border-green-600 text-green-600 border-l-4 p-4">
          <p className="font-bold">Success</p>
          <p>Congratulations, you are the best player.</p>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={3} title="Simple text danger">
        <div className="bg-red-200 border-red-600 text-red-600 border-l-4 p-4">
          <p className="font-bold">Be Warned</p>
          <p>Something not ideal might be happening.</p>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={3} title="Simple text info">
        <div className="bg-blue-200 border-blue-600 text-blue-600 border-l-4 p-4">
          <p className="font-bold">Info</p>
          <p>You can use this code for next project.</p>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={6} title="Closable long alert">
        <div className="container bg-blue-500 flex items-center text-white text-sm font-bold px-4 py-3 relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="w-4 h-4 mr-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z"></path>
          </svg>
          <p> Something not ideal might be happening.</p>
          <button className="absolute top-0 bottom-0 right-0 px-4 py-3 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="h-6 w-6 text-white"
              viewBox="0 0 1792 1792"
            >
              <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path>
            </svg>
          </button>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={6} title="Cookies alert">
        <div className="bg-pink-600">
          <div className="max-w-7xl mx-auto py-3 px-3">
            <div className="flex items-center justify-between flex-wrap">
              <div className="w-0 flex-1 flex items-center">
                <span className="flex p-2 rounded-lg bg-pink-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"></path>
                  </svg>
                </span>
                <p className="ml-3 text-white font-medium truncate">
                  <span className="md:hidden">This site use cookies</span>
                  <span className="hidden md:inline">
                    We use cookies! Something not ideal might be happening.
                  </span>
                </p>
              </div>
              <div>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-pink-600 bg-white hover:bg-pink-50"
                >
                  Learn more
                </a>
              </div>
              <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                <button className="flex p-2 rounded-md hover:bg-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="h-6 w-6 text-white"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={6} title="Line alert">
        <div className="rounded-md flex items-center justify-between px-4 py-5 border border-blue-500 text-blue-500">
          <div className="w-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className=" w-6 h-6 mr-2"
              viewBox="0 0 1792 1792"
            >
              <path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z"></path>
            </svg>
            <p>We use cookies! Something not ideal might be happening.</p>
          </div>
          <button className="p-2 flex-shrink-0 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="h-6 w-6 text-blue-500"
              viewBox="0 0 1792 1792"
            >
              <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"></path>
            </svg>
          </button>
        </div>
      </ComponentLayout>
    </PageLayout>
  );
}

export default Alerts;
