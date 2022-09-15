import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-wrap justify-center space-x-5 md:py-20">
      <div className="pr-10 space-y-5 ">
        <h1 className="pt-10 text-5xl font-semibold text-primary-500 ">
          Page Couldn't Found!{" "}
        </h1>
        <h3 className="text-3xl text-gray-500 ">
          The Page You Are Looking For Doesn't Exist
        </h3>
        <div className="flex ">
          <Link
            to="/"
            className="px-6 py-2 font-semibold text-white bg-primary-500 rounded-2xl"
          >
            Back To Home
          </Link>{" "}
        </div>
      </div>

      <div className="">
        <img
          src="https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg"
          className="max-w-[200px] mix-blend-multiply animate-bounce"
        />{" "}
      </div>
    </div>
  );
}

export default NotFound;
