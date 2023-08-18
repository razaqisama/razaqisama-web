import { configureStore } from '@reduxjs/toolkit';
import { navigationSlice } from './features';

export const store = configureStore({
  reducer: {
    navigationSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
