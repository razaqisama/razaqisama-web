import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { navigationSlice, aboutSlice } from './features';

export const store = configureStore({
  reducer: {
    navigationSlice,
    aboutSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
