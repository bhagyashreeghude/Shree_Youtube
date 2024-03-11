import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    isLiveOpen: false,
    isOpenComment: false,
    isSportOpen:false
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    closeLive: (state) => {
      state.isLiveOpen = true;
    },
    OpenComment: (state) => {
      state.isOpenComment = true;
    },
    SportOpen: (state) => {
      state.isSportOpen = true;
    },
  },
});
export const { toggleMenu, closeMenu, closeLive, OpenComment ,SportOpen} =
  appSlice.actions;
export default appSlice.reducer;
