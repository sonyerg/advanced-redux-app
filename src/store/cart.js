import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { isOpen: false, items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    isOpen(state) {
      state.isOpen = !state.isOpen;
    },

    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        const filteredItems = state.items.filter((item) => item.id !== id);

        state.items = filteredItems;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
