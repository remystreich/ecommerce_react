import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import productSlice from "./slices/productsSlice"
import categories from "./slices/categoriesSlice"

const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    categories: categories,
  },
});

export default store