import { configureStore } from '@reduxjs/toolkit';
import flightsReducer from './slices/flightsSlice'; // ✅ Correct path
import fareQuoteReducer from './slices/fareQuoteSlice'
export const store = configureStore({
  reducer: {
    flights: flightsReducer,
    fareQuote: fareQuoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
