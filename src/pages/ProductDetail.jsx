import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/slices/cartSlice";
import StarsRating from "../components/starsRating";
import QuantityInput from "../components/QuantityInput";

const ProductDetail = () => {
  const location = useLocation();
  const item = location.state.item;

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItemToCart({ item: item, quantity }));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="w-full mx-3 my-5 md:mx-14 md:px-6 flex flex-col justify-center items-center gap-16">
      <div className="md:flex justify-around items-center gap-10">
        <img src={item.image} alt={item.title} className="h-96 mx-auto" />

        <div className="flow-root">
          <dl className="-my-3 divide-y divide-gray-200 text-sm">
            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Name</dt>
              <dd className="text-gray-700 sm:col-span-2">{item.title}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Price</dt>
              <dd className="text-gray-700 sm:col-span-2">{item.price} €</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Description</dt>
              <dd className="text-gray-700 sm:col-span-2">{item.description}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Occupation</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {" "}
                <StarsRating rating={item.rating.rate} totalRatings={item.rating.count}></StarsRating>{" "}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div>
          <label htmlFor="Quantity" className="sr-only">
            {" "}
            Quantity{" "}
          </label>
          <QuantityInput quantity={quantity} onIncrease={handleIncrease} onDecrease={handleDecrease} />
        </div>
        <button onClick={addToCartHandler} className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
