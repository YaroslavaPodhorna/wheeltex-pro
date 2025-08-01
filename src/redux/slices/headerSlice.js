import { createSlice } from "@reduxjs/toolkit";
const headerSlice = createSlice({
  name: "header",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = headerSlice.actions;
export default headerSlice.reducer;
