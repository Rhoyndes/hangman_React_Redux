import { configureStore } from '@reduxjs/toolkit';
import hangmanReducer from '../features/hangman/HangManSlice'

export const store = configureStore({
  reducer: {
    hangman: hangmanReducer
  },
});
