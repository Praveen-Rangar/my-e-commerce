import React from "react";

function NoMatching() {
  return (
    <div className="flex flex-wrap justify-center space-x-5 md:py-20">
      <div className="pr-10 space-y-5 ">
        <h1 className="pt-10 text-5xl font-semibold text-primary-500 ">
          Product Couldn't Found!{" "}
        </h1>
        <h3 className="text-3xl text-gray-500 ">
          The Product You Are Looking For Doesn't Exist
        </h3>
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
export default NoMatching;
