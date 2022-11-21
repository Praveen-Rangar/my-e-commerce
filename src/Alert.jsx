import React from "react";
import { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgDanger } from "react-icons/cg";
import { withAlert } from "./WithProvider";

const themeMap = {
  success: {
    color: "bg-primary-300",
    Icon: AiOutlineCheckCircle,
  },
  error: {
    color: "bg-primary-700",
    Icon: CgDanger,
  },
};

function Alert({ alert, removeAlert }) {
  useEffect(
    function () {
      if (alert) {
        const dismissTimer = setTimeout(removeAlert, 3 * 1000);
        return function () {
          clearTimeout(dismissTimer);
        };
      }
    },
    [alert]
  );
  if (!alert) {
    return <></>;
  }

  const { message, type } = alert;
  const { color, Icon } = themeMap[type];

  return (
    <>
      <div className="flex items-center justify-center px-4">
        <div
          role="alert"
          id="alert"
          className="flex flex-col items-center justify-between w-full py-4 mx-auto transition duration-150 ease-in-out bg-white rounded shadow lg:w-11/12 dark:bg-gray-800 md:py-0 md:flex-row"
        >
          <div className="flex flex-col items-center md:flex-row">
            <div
              className={
                "p-4 mr-3 text-white rounded bg-primary-300 md:rounded-tr-none md:rounded-br-none " +
                color
              }
            >
              <Icon />
            </div>
            <p className="mt-2 mr-2 text-base font-bold text-gray-800 dark:text-gray-100 md:my-0">
              {type}
            </p>
            <div className="hidden w-1 h-1 mr-2 bg-gray-300 rounded-full dark:bg-gray-500 xl:block"></div>
            <p className="mb-2 text-sm text-center text-gray-600 lg:text-base dark:text-gray-400 lg:pt-1 xl:pt-0 sm:mb-0 sm:text-left">
              {message}
            </p>
          </div>
          <div className="flex justify-center pr-4 xl:items-center lg:items-center sm:justify-end">
            <button
              className="text-sm text-gray-600 cursor-pointer focus:outline-none focus:text-gray-400 hover:text-gray-400 dark:text-gray-400"
              onClick={removeAlert}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default withAlert(Alert);
