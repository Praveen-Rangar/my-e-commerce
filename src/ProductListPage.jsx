import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./Api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import { GoSearch } from "react-icons/go";
import { Button } from "@material-ui/core";
import { useSearchParams } from "react-router-dom";
import WithUser from "./Withuser";

function ProductListPage({ setUser }) {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);

  let [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);
  let { query, sort, page } = params;

  query = query || "";
  sort = sort || "default";

  page = +page || 1;

  useEffect(
    function () {
      let sortBy;
      let sortType;

      if (sort == "title") {
        sortBy = "title";
      } else if (sort == "low to high") {
        sortBy = "price";
      } else if (sort == "high to low") {
        sortBy = "price";
        sortType = "desc";
      }

      getProductList(sortBy, query, page, sortType).then(function (xyz) {
        setProductData(xyz);
        setLoading(false);
      });
    },
    [sort, query, page]
  );

  function handleChange(event) {
    setSearchParams(
      { ...params, query: event.target.value, page: 1 },
      { replace: false }
    );
  }

  function handleSortChange(event) {
    setSearchParams(
      { ...params, sort: event.target.value },
      {
        replace: false,
      }
    );
  }

  if (loading) {
    return <Loading />;
  }

  function handleLogOut(user) {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenSignup");

    setUser(undefined);
  }
  return (
    <div>
      <Button className="p-5 bg-primary-300" onClick={handleLogOut}>
        Logout
      </Button>
      <div className="mt-32 mx-4 my-6 mb-5 bg-white rounded md:mx-8 md:mt-[50px] md:pb-24 md:py-20 md:px-10">
        <div className="flex flex-wrap py-6 mx-5 md:justify-between md:px-6">
          <div
            className="w-[222px] flex items-center border border-solid border-primary-300 rounded-md 
          ml-[10px] p-[5px] focus-within:border-[#df2020] transition-all"
          >
            <input
              value={query}
              placeholder="search"
              className="w-full rounded outline-none md:w-64 "
              onChange={handleChange}
            />
            <GoSearch className="text-[16px]" />
          </div>
          <select
            value={sort}
            onChange={handleSortChange}
            className="mt-2 ml-2 border border-primary-300 rounded-md max-w-[222px] md:border md:w-60 "
            name="default sorting"
            id="sorting"
          >
            <option value="default">default sorting</option>
            <option value="title">Short by title</option>
            <option value="low to high">Short by price:low to high</option>
            <option value="high to low">Short by price:high to low</option>
          </select>
        </div>

        {productData.data.length > 0 && (
          <ProductList
            products={productData.data}
            productDataMeta={productData.meta}
            params={params}
            page={page}
          />
        )}
        {productData.data.length == 0 && <NoMatching />}
      </div>
    </div>
  );
}

export default WithUser(ProductListPage);
