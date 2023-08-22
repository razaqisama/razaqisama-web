import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { navigationSlice, persistedAbout } from './features';

export const store = configureStore({
  reducer: {
    navigationSlice,
    aboutSlice: persistedAbout,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
