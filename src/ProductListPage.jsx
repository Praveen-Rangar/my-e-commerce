import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { getProductList } from "./Api";
import NoMatching from "./NoMatching";
import Loading from "./Loading";
import { GoSearch } from "react-icons/go";


function ProductListPage() {
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

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="mx-4 my-6 mb-5 bg-white rounded md:mx-8 md:mt-24 md:pb-24 md:py-20 md:px-10">
        <div className="flex flex-wrap py-6 mx-5 md:justify-between md:px-6">
          <div
            className=" flex items-center border border-solid border-gray-500 rounded-md 
          ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all"
          >
            <input
              value={query}
              placeholder="search"
              className="w-full rounded outline-none md:w-64"
              onChange={handleChange}
            />
            <GoSearch className="text-[16px]" />
          </div>
          <select
            value={sort}
            onChange={handleSortChange}
            className="w-full mt-2 border border-gray-500 rounded-md md:border-2 md:w-60"
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

export default ProductListPage;
