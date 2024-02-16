import { useFetchProducts } from "../hooks/useFetchProducts";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Home = () => {
  useFetchProducts();
  const { items, status, error } = useSelector((state) => state.products);
  if (status === "loading") return <div>Chargement...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div className="w-full my-10 px-6 relative z-10">
      <header className="text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">New Collection</h2>

        <p className="mx-auto mt-4 mb-8 max-w-md text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit natus?
        </p>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <li key={index}>
            
              <ProductCard item= {item}  />
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
