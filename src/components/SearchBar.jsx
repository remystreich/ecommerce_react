import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const { items } = useSelector((state) => state.products);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = items.filter((suggestion) => suggestion.title.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(filteredSuggestions);
    }
  };

  const handleClick = (e) => {
    setQuery("") 
    setSuggestions([])
  }

  return (
    <>
      <div className="relative">
        <label htmlFor="Search" className="sr-only">
          {" "}
          Search{" "}
        </label>

        <input
          type="text"
          id="Search"
          placeholder="Search for..."
          value={query}
          onChange={handleChange}
          className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button type="button" className="text-gray-600 hover:text-gray-700">
            <span className="sr-only">Search</span>
            <CiSearch className="h-4 w-4" />
          </button>
        </span>
      </div>
      <ul className={`absolute px-2 z-10 ${query ? "border-2" : "border-0"}   border-blue-600 bg-gray-100 rounded-md shadow-lg max-h-60 mt-1 overflow-auto`}>
        {suggestions.slice(0, 3).map((suggestion, index) => (
          <li key={index} className="p-2 my-2 rounded-md transition hover:shadow-md hover:bg-blue-200">
            <Link to="/productDetail" state={{ item: suggestion }} onClick={() => handleClick()}>
              {suggestion.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchBar;
