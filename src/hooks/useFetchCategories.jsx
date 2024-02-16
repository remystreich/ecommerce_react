import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategories } from '../redux/slices/categoriesSlice';

export const useFetchCategories = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
};