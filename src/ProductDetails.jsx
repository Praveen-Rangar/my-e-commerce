import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { getProductData } from "./Api";
import Loading from "./Loading";
import NotFound from "./NotFound";

function ProductDetails({onAddToCart}) {
  const params = useParams();
  const id = +params.id;

  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] =useState(1);

  useEffect(
    function () {
      const promise = getProductData(id);
      promise
        .then(function (product) {
          setProduct(product);
          setLoading(false);
        })
        .catch(function () {
          setLoading(false);
        });
    },
    [id]
  );

  function onHandleChange(event){
  setCount(+event.target.value);
  };

  function handleButtonClick(){
  return onAddToCart(id, count);
  };

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <div>
      <div className="py-10 bg-gray-200 md:px-12 md:pt-10 ">
        <Link to="/">
          {" "}
          <HiArrowNarrowLeft className="w-12 h-8 font-semibold rounded text-primary-500 hover:text-white hover:bg-primary-500" />{" "}
        </Link>
        <div className="flex flex-col px-12 py-10 bg-white md:flex-row md:pr-16 md:shadow-xl">
          <div className="max-w-full aspect-square ">
            <img
              className="object-cover w-full h-full rounded-md"
              src={product.thumbnail}
            />
          </div>

          <div className="space-y-2 md:pl-14">
            <h2 className="text-3xl font-bold ">{product.title} </h2>
            <h4 className="pt-4 text-xl font-bold">${product.price}.00</h4>
            <p className="pt-4 md:pr-20">{product.description}</p>
            <div className="pt-4 space-x-1">
              <input
                type="number"
                value={count}
                onChange={onHandleChange}
                className="h-8 pl-3 pr-2 border border-gray-500 rounded w-14 "
              />

              <button onClick={handleButtonClick} className="h-8 text-white rounded w-52 bg-primary-500 hover:bg-primary-700 ">
                ADD TO CART
              </button>

              <div className="flex items-center justify-between max-w-full mt-12 md:pr-20">
                <div>
                  {id > 1 && (
                    <Link
                      to={"/products/" + (id - 1)}
                      className=" h-8 px-3 py-0.5  text-primary-500 font-semibold rounded border-2 border-primary-500 hover:text-white hover:bg-primary-500"
                    >
                      {" "}
                      Previous{" "}
                    </Link>
                  )}{" "}
                </div>
                <div>
                  {id < 30 && (
                    <Link
                      to={"/products/" + (id + 1)}
                      className=" h-8 px-3 py-0.5  text-primary-500 font-semibold rounded border-2 border-primary-500 hover:text-white hover:bg-primary-500"
                    >
                      Next{" "}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
