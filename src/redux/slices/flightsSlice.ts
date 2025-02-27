import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchFlights } from '../../services/api';

export interface FlightState {
  flights: any[];
  traceId: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: FlightState = {
  flights: [],
  traceId: null,
  loading: false,
  error: null,
};

export const fetchFlights = createAsyncThunk(
  'flights/fetchFlights',
  async (searchParams: any, { rejectWithValue }) => {
    try {
      const response = await searchFlights(searchParams);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    clearFlights: (state) => {
      state.flights = [];
      state.traceId = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.flights = action.payload.Results[0] || [];
        state.traceId = action.payload.TraceId;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearFlights } = flightsSlice.actions;
export default flightsSlice.reducer;
