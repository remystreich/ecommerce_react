import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, fetchProductsByCategory } from "../redux/slices/productsSlice";

export const useFetchProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
};

export const useFetchProductsByCategory = (category) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (category) {
      dispatch(fetchProductsByCategory(category));
    }
  }, [dispatch, category]);
};
