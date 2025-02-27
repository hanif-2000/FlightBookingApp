import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchFareQuote} from '../../services/api';

export interface FareQuoteState {
  fareDetails: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: FareQuoteState = {
  fareDetails: null,
  loading: false,
  error: null,
};

export const fetchFareDetails = createAsyncThunk(
  'fareQuote/fetchFareDetails',
  async ({traceId, ResultIndex}: any, {rejectWithValue}) => {
    try {
      const response = await fetchFareQuote({traceId, ResultIndex});
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

const fareQuoteSlice = createSlice({
  name: 'fareQuote',
  initialState,
  reducers: {
    clearFareDetails: state => {
      state.fareDetails = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchFareDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFareDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.fareDetails = action.payload;
      })
      .addCase(fetchFareDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const {clearFareDetails} = fareQuoteSlice.actions;
export default fareQuoteSlice.reducer;
