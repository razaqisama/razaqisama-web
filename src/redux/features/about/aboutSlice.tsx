/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Link from 'next/link';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { persistReducer } from 'redux-persist';
import { GithubCatIcon, InstagramIcon, LinkedinIcon } from '@/icons';
import { AboutState } from './type';

const initialState = {
  title: 'Josep Razaqi',
  subtitle: 'Software Engineer | Plays Director',
  content: (
    <p>
      Greetings! I am a versatile software engineer and visionary playwright who
      flourishes at the crossroads of{' '}
      <span className="font-bold text-main-500">Technology</span> and{' '}
      <span className="font-bold text-main-500">Art</span>. With a steadfast
      belief in the synergy between these domains, I specialize in crafting code
      that is not only{' '}
      <span className="font-bold text-main-500">Functional</span> but also{' '}
      <span className="font-bold text-main-500">Aesthetically Pleasing</span>.
      And As a plays director, I&apos;ve masterfully blended technology with the
      stage, resulting in{' '}
      <span className="font-bold text-main-500">Interactive</span> and{' '}
      <span className="font-bold text-main-500">Immersive</span> performances.
    </p>
  ),
  footer: (
    <div className="flex gap-4">
      <Link href="https://github.com/razaqisama">
        <GithubCatIcon
          className="w-6 transform hover:scale-[120%] transition duration-300 ease-in-out cursor-pointer"
          color="#fff"
        />
      </Link>
      <Link href="https://www.linkedin.com/in/razaqisama/">
        <LinkedinIcon
          className="w-6 transform hover:scale-[120%] transition duration-300 ease-in-out cursor-pointer"
          color="#fff"
        />
      </Link>
      <Link href="https://www.instagram.com/joojujijoje/">
        <InstagramIcon
          className="w-6 transform hover:scale-[120%] transition duration-300 ease-in-out cursor-pointer"
          color="#fff"
        />
      </Link>
    </div>
  ),
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
      state.footer = action.payload.footer;
    },
  },
});

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== 'undefined'
    ? createWebStorage('local')
    : createNoopStorage();

const persistConfig = {
  key: 'aboutState',
  storage,
  whitelist: ['title', 'subtitle', 'content', 'footer'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  aboutSlice.reducer,
);

export const { setAboutState, resetAboutState } = aboutSlice.actions;
export default aboutSlice.reducer;
