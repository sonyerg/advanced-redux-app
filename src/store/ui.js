import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isCartOpen: false, notification: null },
  reducers: {
    isCartOpen(state) {
      state.isCartOpen = !state.isCartOpen;
    },

    showNotification(state, action) {
      const payload = action.payload;
      state.notification = {
        status: payload.status,
        title: payload.title,
        message: payload.message,
      };
    },

    clearNotification(state) {
      state.notification = null;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
