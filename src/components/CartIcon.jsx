import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <div className="inline-block relative text-gray-700">
      <FaShoppingCart size="2.5em" />
      <span className="absolute right-0  top-6 rounded-full bg-red-600 w-5 h-5 top right p-0 m-0 text-white font-mono   leading-tight text-center">{totalQuantity}</span>
    </div>
  );
};

export default CartIcon;
