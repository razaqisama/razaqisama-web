import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavigationPath, NavigationState } from './type';

const initialState = {
  path: 'home',
} as NavigationState;

export const navigation = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    resetNavigation: () => initialState,
    setPath: (state, action: PayloadAction<NavigationPath>) => {
      state.path = action.payload;
    },
  },
});

export const { setPath, resetNavigation } = navigation.actions;
export default navigation.reducer;
