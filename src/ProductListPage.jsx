import React, { useState, useEffect, useMemo } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./Api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import { GoSearch } from "react-icons/go";
import { Button } from "@material-ui/core";
import Withuser from "./Withuser";

function ProductListPage({ setUser }) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    const list = getProductList();

    list.then(function (product) {
      setProductList(product);
      setLoading(false);
    });
  }, []);

  let data = productList.filter(function (item) {
    const lowerCaseTitle = item.title.toLowerCase();
    const lowercaseQuery = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowercaseQuery) != -1;
  });

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSortChange(event) {
    setSort(event.target.value);
  }

  useMemo(
    function () {
      console.log("usememo running");
      if (sort === "low to high") {
        data.sort(function (x, y) {
          return x.price - y.price;
        });
      }

      if (sort === "high to low") {
        data.sort(function (x, y) {
          return y.price - x.price;
        });
      }

      if (sort === "Title") {
        data.sort(function (x, y) {
          return x.title < y.title ? -1 : 1;
        });
      }
    },
    [sort]
  );

  if (loading) {
    return <Loading />;
  }

  function handleLogOut(user) {
    localStorage.removeItem("token");
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
            <option value="Title">Short by title</option>
            <option value="low to high">Short by price:low to high</option>
            <option value="high to low">Short by price:high to low</option>
          </select>
        </div>

        {data.length > 0 && <ProductList products={data} />}
        {data.length == 0 && <NoMatching />}
      </div>
    </div>
  );
}

export default Withuser(ProductListPage);
