import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { SiHomebridge } from "react-icons/si";
import { TiThMenu } from "react-icons/ti";
import CartIcon from "./CartIcon";
import { useState } from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  const { categories, status, error } = useSelector((state) => state.categories);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => {
    switch (isSidebarOpen) {
      case false:
        document.getElementById("nav").classList.add("hidden");
        setIsSidebarOpen(true);
        break;

      case true:
        document.getElementById("nav").classList.remove("hidden");
        setIsSidebarOpen(false);
        break;
    }
  };

  if (status === "loading") return <div>Chargement des catégories...</div>;
  if (error) return <div>Erreur de chargement : {error}</div>;

  return (
    <>
      <button
        onClick={toggleMenu}
        type="button"
        className="text-gray-600 text-4xl m-4  transition hover:scale-110 hover:text-gray-700 md:hidden md:absolute top-0 left-0"
      >
        <TiThMenu />
      </button>

      <header
        id="nav"
        className={`z-20 absolute md:static ${
          isSidebarOpen ? "flex" : "hidden "
        } md:flex h-screen flex-col justify-between bg-white w-11/12 md:w-1/6  md:min-w-64 md:max-w-80`}
      >
        <div className="px-4 py-6 relative ">
          <Link to="/cart" onClick={() => setIsSidebarOpen(false)} className="flex  items-center ml-3 transition hover:scale-110 mb-10">
            <CartIcon></CartIcon>
          </Link>

          <SearchBar />
          <ul className="mt-6 space-y-1 ">
            <li className="flex items-center justify-center my-10">
              <Link
                to="/"
                onClick={() => setIsSidebarOpen(false)}
                className="text-3xl text-center font-medium text-gray-700 flex gap-2 items-center justify-center transition hover:scale-105"
              >
                <SiHomebridge className="text-5xl" />
                <p>Home</p>
              </Link>
            </li>

            {categories.map((category, index) => (
              <li key={index}>
                <Link
                  to={`/category/${category}`}
                  onClick={() => setIsSidebarOpen(false)}
                  className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:scale-105 hover:shadow-xl uppercase"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
