
import { configureStore, createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: state => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = sidebarSlice.actions;

const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
  },
});
export type RootState = {
    sidebar: {
      isMenuOpen: boolean;
    };
  };

export default store;
