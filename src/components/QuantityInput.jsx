// QuantitySelector.jsx

const QuantityInput = ({ quantity, onIncrease, onDecrease }) => {
 
 

  return (
    <div className="flex items-center rounded border border-gray-200">
    <button onClick={onDecrease} type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
      -
    </button>

    <input
      type="number"
      id="Quantity"
      value={quantity}
      readOnly
      className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
    />

    <button onClick={onIncrease} type="button" className="size-10 leading-10 text-gray-600 transition hover:opacity-75">
      +
    </button>
  </div>
  );
};

export default QuantityInput;
