import axios from 'axios';

const API_BASE_URL = 'http://aws.fatboi.ai/api/';
const AUTH_TOKEN = 'YOUR_AUTH_TOKEN';  // Replace with your real token

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Token ${AUTH_TOKEN}`,
  },
});

// 🔍 Search Flights
export const searchFlights = async (payload: any) => {
  const response = await api.post('flight-search', payload);
  return response.data;
};

// ✈️ Book Flight
export const bookFlight = async (payload: any) => {
  const response = await api.post('flight-book', payload);
  return response.data;
};

// 🎟️ Get Ticket
export const getTicket = async (payload: any) => {
  const response = await api.post('get-ticket', payload);
  return response.data;
};

// ℹ️ Get Fare Rules
export const getFareRules = async (payload: any) => {
  const response = await api.post('fare-rule', payload);
  return response.data;
};

// 🧳 List Travelers
export const listTravelers = async (tripId: number) => {
  const response = await api.get(`list-travelers/?trip_id=${tripId}`);
  return response.data;
};
