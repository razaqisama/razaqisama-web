import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { AboutState } from './type';

const initialState = {
  title: 'Josep Razaqi',
  subtitle: 'Software Engineer | Plays Director',
  content: '',
  skills: [],
} as AboutState;

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    resetAboutState: () => initialState,
    setAboutState: (state, action: PayloadAction<AboutState>) => {
      state.title = action.payload.title;
      state.subtitle = action.payload.subtitle;
      state.content = action.payload.content;
      state.skills = action.payload.skills;
    },
  },
});

const persistConfig = {
  key: 'about',
  storage,
  whitelist: ['title', 'subtitle', 'content', 'skills'],
};

export const persistedAbout = persistReducer(persistConfig, aboutSlice.reducer);

export const { setAboutState, resetAboutState } = aboutSlice.actions;
export default aboutSlice.reducer;
