import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart.js";
import uiReducer from "./ui.js";

const store = configureStore({
  reducer: { cart: cartReducer, ui: uiReducer },
});

export default store;
