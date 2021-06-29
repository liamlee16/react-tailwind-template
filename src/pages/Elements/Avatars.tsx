import React, { Component } from "react";
import ComponentLayout from "../../layouts/ComponentLayout";
import PageLayout from "../../layouts/PageLayout";

function Avatars() {
  return (
    <PageLayout>
      <ComponentLayout colSpan={2} title={"Simple full rounded avatar"}>
        <a href="#" className="block relative">
          <img
            alt="profil"
            src="https://www.tailwind-kit.com/images/person/1.jpg"
            className="mx-auto object-cover rounded-full h-16 w-16 "
          />
        </a>
      </ComponentLayout>
      <ComponentLayout colSpan={2} title={"Small full rounded avatar"}>
        <div className="relative">
          <img
            src="https://www.tailwind-kit.com/images/person/1.jpg"
            alt=""
            className="mx-auto object-cover rounded-full h-10 w-10"
          />
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={2} title={"Big full rounded avatar"}>
        <div className="relative">
          <img
            src="https://www.tailwind-kit.com/images/person/1.jpg"
            alt=""
            className="mx-auto object-cover rounded-full h-20 w-20"
          />
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={2} title={"Round avatar"}>
        <div className="relative">
          <img
            src="https://www.tailwind-kit.com/images/person/1.jpg"
            alt=""
            className="mx-auto object-cover rounded-lg h-16 w-16"
          />
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={2} title={"Square avatar"}>
        <div className="relative">
          <img
            src="https://www.tailwind-kit.com/images/person/1.jpg"
            alt=""
            className="mx-auto object-cover h-16 w-16"
          />
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={2} title={"Avatar with badge"}>
        <div className="relative">
          <img
            src="https://www.tailwind-kit.com/images/person/1.jpg"
            alt=""
            className="mx-auto object-cover rounded-full h-16 w-16"
          />
          <span className="absolute w-3 h-3 border-2 border-white bg-green-500 left-1/2 transform -translate-x-1/2 -bottom-2 rounded-full"></span>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={2} title="Multiple avatar">
        <div className="flex -space-x-2 justify-center">
          <a href="#">
            <img
              className="w-16 h-16 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/1.jpg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-16 h-16 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/2.jpeg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-16 h-16 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/3.jpg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-16 h-16 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/4.jpg"
              alt=""
            />
          </a>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={2} title="Multiple small avatar">
        <div className="flex -space-x-2 justify-center">
          <a href="#">
            <img
              className="w-10 h-10 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/1.jpg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-10 h-10 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/2.jpeg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-10 h-10 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/3.jpg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-10 h-10 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/4.jpg"
              alt=""
            />
          </a>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={2} title="Multiple small avatar">
        <div className="flex -space-x-2 justify-center">
          <a href="#">
            <img
              className="w-24 h-24 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/1.jpg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-24 h-24 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/2.jpeg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-24 h-24 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/3.jpg"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="w-24 h-24 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/4.jpg"
              alt=""
            />
          </a>
        </div>
      </ComponentLayout>
      <ComponentLayout colSpan={3} title="With hover effect">
        <div className="flex -space-x-2 justify-center">
          <a
            className="hover:scale-150 hover:z-10 transition duration-500 ease-in-out transform"
            href="#"
          >
            <img
              className="w-20 h-20 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/1.jpg"
              alt=""
            />
          </a>
          <a
            className="hover:scale-150 hover:z-10 transition duration-500 ease-in-out transform"
            href="#"
          >
            <img
              className="w-20 h-20 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/2.jpeg"
              alt=""
            />
          </a>
          <a
            className="hover:scale-150 hover:z-10 transition duration-500 ease-in-out transform"
            href="#"
          >
            <img
              className="w-20 h-20 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/3.jpg"
              alt=""
            />
          </a>
          <a
            className="hover:scale-150 hover:z-10 transition duration-500 ease-in-out transform"
            href="#"
          >
            <img
              className="w-20 h-20 rounded-full inline-block ring-2 ring-white object-cover"
              src="https://www.tailwind-kit.com/images/person/4.jpg"
              alt=""
            />
          </a>
        </div>
      </ComponentLayout>
    </PageLayout>
  );
}

export default Avatars;
