import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    addItemToCart: (state, action) => {
      const { item, quantity } = action.payload;
      const existingItem = state.items[item.id];

      if (!existingItem) {
        state.items[item.id] = { ...item, quantity: quantity, totalPrice: item.price * quantity };
      } else {
        existingItem.quantity += quantity;
        existingItem.totalPrice += item.price * quantity;
      }

      state.totalQuantity += quantity;
      state.totalPrice += item.price * quantity;
    },

    removeItemFromCart: (state, action) => {
      const { item, quantity } = action.payload;

      if (state.items[item.id]) {
        if (quantity === 0) {
          delete state.items[item.id];
          state.totalQuantity -= item.quantity;
          state.totalPrice -= item.totalPrice;
        } else if (state.items[item.id].quantity > 1) {
          state.items[item.id].quantity -= 1;
          state.items[item.id].totalPrice -= item.price;
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        } else {
          delete state.items[item.id];
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        }
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, adjustItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
