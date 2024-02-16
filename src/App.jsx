import { useFetchCategories } from "./hooks/useFetchCategories";
import Router from "./Router";

function App() {
  useFetchCategories();
  return (
    <div className="md:flex h-screen w-screen items-start bg-gray-100">
      <Router></Router>
    </div>
  );
}

export default App;
