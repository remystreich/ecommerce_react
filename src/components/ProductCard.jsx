import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa6";
import { addItemToCart } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCartHandler = (e) => {
    e.preventDefault(); 
    e.stopPropagation();
    dispatch(addItemToCart({ item: item, quantity: 1 }));
  };

  return (
    <div className="flex flex-col justify-between bg-white shadow-md p-2 h-full rounded-md transition hover:scale-105 hover:shadow-xl">
      <Link to="/productDetail" state={{ item: item }} className="group flex flex-col justify-between p-2 ">
        <img src={item.image} alt={item.title} className="aspect-square object-scale-down w-full h-full rounded " />

        <div className="mt-3">
          <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">{item.title}</h3>
        </div>
      </Link>
      <div className="flex justify-between">
        <p className="mt-1 text-sm text-gray-700">{item.price}€</p>
        <button onClick={addToCartHandler}>
          <FaCartPlus className="text-xl transition hover:text-2xl" />
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
