import React from "react";
import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="flex flex-col px-3 pb-4 md:px-5 ">
      <div className="flex flex-wrap items-stretch justify-center max-w-full max-h-full grid-cols-3 md:grid md:gap-4">
        {products.map(function (item) {
          return <Product key={item.id} {...item} />;
        })}
      </div>

      <div className="flex mt-16 space-x-1 ">
        <button className="w-12 h-10 text-white border rounded bg-primary-500 border-primary-500">
          1
        </button>

        <button className="w-12 h-10 border rounded text-primary-500 border-primary-500 hover:bg-primary-500 hover:text-white">
          2
        </button>

        <button className="w-12 h-10 border rounded text-primary-500 border-primary-500 hover:bg-primary-500 hover:text-white">
          3
        </button>

        <button className="w-12 h-10 border rounded text-primary-500 border-primary-500 hover:bg-primary-500 hover:text-white">
          -->
        </button>
      </div>
    </div>
  );
}

export default ProductList;
