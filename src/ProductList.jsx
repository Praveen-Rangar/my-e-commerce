import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { range } from "lodash";
import { FaBackward, FaForward } from "react-icons/fa";

function ProductList({ products, productDataMeta, page, params }) {
  console.log("current page", productDataMeta.current_page);
  let backButton;
  let forwardButton;

  if (productDataMeta.current_page === 1) {
    backButton = "hidden";
  }
  if (productDataMeta.current_page === 5) {
    forwardButton = "hidden";
  }

  return (
    <div className="flex flex-col px-3 pb-4 md:px-5 ">
      <div className="flex flex-wrap items-stretch justify-center max-w-full max-h-full grid-cols-3 md:grid md:gap-4">
        {products.map(function (item) {
          return <Product key={item.id} {...item} />;
        })}
      </div>
      <div className="flex mt-16 space-x-1 ">
        <Link
          to={
            "?" +
            new URLSearchParams({
              ...params,
              page: productDataMeta.current_page - 1,
            })
          }
          className={
            "flex items-center justify-center w-12 h-10 border rounded text-primary-500 hover:text-white hover:bg-primary-500 border-primary-500 " +
            backButton
          }
        >
          <FaBackward />
        </Link>

        {range(1, productDataMeta.last_page + 1).map((pageNo) => (
          <Link
            key={pageNo}
            to={"?" + new URLSearchParams({ ...params, page: pageNo })}
            className={
              "flex items-center justify-center w-12 h-10 border rounded text-primary-500 hover:text-white hover:bg-primary-500 border-primary-500 " +
              (pageNo === page ? "bg-primary-500 text-gray-50" : "bg-white")
            }
          >
            {" "}
            {pageNo}
          </Link>
        ))}
        <Link
          to={
            "?" +
            new URLSearchParams({
              ...params,
              page: productDataMeta.current_page + 1,
            })
          }
          className={
            "flex items-center justify-center w-12 h-10 border rounded text-primary-500 hover:text-white hover:bg-primary-500 border-primary-500 " +
            forwardButton
          }
        >
          <FaForward />
        </Link>
      </div>
    </div>
  );
}

export default ProductList;
