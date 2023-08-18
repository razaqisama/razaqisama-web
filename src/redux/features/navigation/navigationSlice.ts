import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavigationPath } from './type';

type NavigationState = {
  path: NavigationPath;
};

const initialState = {
  path: 'home',
} as NavigationState;

export const navigation = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    reset: () => initialState,
    setPath: (state, action: PayloadAction<NavigationPath>) => {
      state.path = action.payload;
    },
  },
});

export const { setPath, reset } = navigation.actions;
export default navigation.reducer;
