import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { searchFlights, bookFlight, getTicket, getFareRules, listTravelers } from '../../services/api';

// 🔍 Async action for searching flights
export const fetchFlights = createAsyncThunk('flight/fetchFlights', async (payload, { rejectWithValue }) => {
  try {
    return await searchFlights(payload);
  } catch (error) {
    return rejectWithValue(error?.response?.data || 'Error fetching flights');
  }
});

// ✈️ Async action for booking flight
export const fetchBooking = createAsyncThunk('flight/fetchBooking', async (payload, { rejectWithValue }) => {
  try {
    return await bookFlight(payload);
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Error booking flight');
  }
});

// 🎟️ Async action for getting ticket
export const fetchTicket = createAsyncThunk('flight/fetchTicket', async (payload, { rejectWithValue }) => {
  try {
    return await getTicket(payload);
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Error fetching ticket');
  }
});

// ℹ️ Async action for getting fare rules
export const fetchFareRules = createAsyncThunk('flight/fetchFareRules', async (payload, { rejectWithValue }) => {
  try {
    return await getFareRules(payload);
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Error fetching fare rules');
  }
});

// 🧳 Async action for listing travelers
export const fetchTravelers = createAsyncThunk('flight/fetchTravelers', async (tripId, { rejectWithValue }) => {
  try {
    return await listTravelers(tripId);
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Error fetching travelers');
  }
});

// 🚀 Redux Slice
const flightSlice = createSlice({
  name: 'flight',
  initialState: {
    searchResults: [],
    bookingDetails: null,
    ticketDetails: null,
    fareRules: null,
    travelers: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => { state.loading = true; })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(fetchBooking.fulfilled, (state, action) => { state.bookingDetails = action.payload; })
      .addCase(fetchTicket.fulfilled, (state, action) => { state.ticketDetails = action.payload; })
      .addCase(fetchFareRules.fulfilled, (state, action) => { state.fareRules = action.payload; })
      .addCase(fetchTravelers.fulfilled, (state, action) => { state.travelers = action.payload; });
  },
});

export default flightSlice.reducer;
