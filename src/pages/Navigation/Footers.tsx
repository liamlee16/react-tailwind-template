import React from "react";
import ComponentLayout from "../../layouts/ComponentLayout";
import PageLayout from "../../layouts/PageLayout";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaAmazon,
} from "react-icons/fa";

function Footers() {
  return (
    <PageLayout>
      <ComponentLayout colSpan={6} title="Simple footer">
        <footer className="bg-white w-full py-8">
          <div className="max-w-screen-xl mx-auto px-4">
            <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  Configuration
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  Github
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </ComponentLayout>
      <ComponentLayout colSpan={6} title="With socials">
        <footer className="bg-white w-full py-8">
          <div className="max-w-screen-xl mx-auto px-4">
            <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  Configuration
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  Github
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaAmazon className="w-5 h-5" />
            </a>
          </div>
        </footer>
      </ComponentLayout>
      <ComponentLayout colSpan={6} title="With socials and credits">
        <footer className="bg-white w-full py-8">
          <div className="max-w-screen-xl mx-auto px-4">
            <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  Configuration
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  Github
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaAmazon className="w-5 h-5" />
            </a>
          </div>
          <div className="flex items-ceter justify-center pt-10 text-gray-400 font-light">
            Created By Thanh Liem
          </div>
        </footer>
      </ComponentLayout>

      <ComponentLayout colSpan={6} title="Full">
        <footer className="bg-white w-full py-8">
          <div className="max-w-screen-xl mx-auto px-4">
            <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  Configuration
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  Github
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
                  href="#"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              className="text-gray-400 hover:text-gray-800 transition-colors duration-200"
              href=""
            >
              <FaAmazon className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center justify-center pt-10">
            <div className="flex w-full max-w-sm space-x-3">
              <input
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base outline-none"
                placeholder="Email"
                type="text"
              />
              <button className="px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 outline-none">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex items-ceter justify-center pt-10 text-gray-400 font-light">
            Created By Thanh Liem
          </div>
        </footer>
      </ComponentLayout>
      <ComponentLayout colSpan={6} title="Multiple">
        <footer className="bg-white pt-4 pb-8 text-gray-400">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full text-center">
              <div className="text-gray-500 text-md uppercase mb-4">
                Components
              </div>
              <ul className="">
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Elements</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Forms</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Commerces</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Navigation</a>
                </li>
              </ul>
            </div>
            <div className="w-full text-center">
              <div className="text-gray-500 text-md uppercase mb-4">
                Contacts
              </div>
              <ul>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Github</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Facebook</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Twitter</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div className="w-full text-center">
              <div className="text-gray-500 text-md uppercase mb-4">
                Customization
              </div>
              <ul>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Settings</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Themes</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Plugins</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">LinkedIn </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </ComponentLayout>

      <ComponentLayout colSpan={6} title="Multiple with socials">
        <footer className="bg-white pt-4 pb-8 text-gray-400">
          <div className="grid grid-cols-3 gap-4">
            <div className="w-full text-center">
              <div className="text-gray-500 text-md uppercase mb-4">
                Components
              </div>
              <ul className="">
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Elements</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Forms</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Commerces</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Navigation</a>
                </li>
              </ul>
            </div>
            <div className="w-full text-center">
              <div className="text-gray-500 text-md uppercase mb-4">
                Contacts
              </div>
              <ul>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Github</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Facebook</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Twitter</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div className="w-full text-center">
              <div className="text-gray-500 text-md uppercase mb-4">
                Customization
              </div>
              <ul>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Settings</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Themes</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">Plugins</a>
                </li>
                <li className="mb-4 hover:text-gray-800 transition-colors duration-200">
                  <a href="#">LinkedIn </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex items-center justify-between max-w-xs mx-auto border-t border-gray-200">
            <a href="#">
              <FaFacebookF />
            </a>{" "}
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
            <a href="#">
              <FaAmazon />
            </a>
          </div>
        </footer>
      </ComponentLayout>
    </PageLayout>
  );
}

export default Footers;
