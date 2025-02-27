import axios from 'axios';

const API_URL =
  'http://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/';
const AUTH_TOKEN = '58c17155-9fe3-42e8-8c63-b962b878c952';

export const searchFlights = async (requestBody: any) => {
  try {
    const response = await axios.post(`${API_URL}Search`, requestBody);

    // Check if the response has an error
    if (
      response.data.Response.Error &&
      response.data.Response.Error.ErrorCode !== 0
    ) {
      throw new Error(response.data.Response.Error.ErrorMessage);
    }

    return response.data.Response;
  } catch (error: any) {
    throw new Error(error.message || 'Something went wrong');
  }
};

export const fetchFareQuote = async ({traceId, ResultIndex}: any) => {
  try {
    const response = await axios.post(
      `https://api.tektravels.com/BookingEngineService_Air/AirService.svc/rest/FareQuote/`,
      {
        EndUserIp: '192.168.29.33', // Your IP
        TokenId: AUTH_TOKEN, // Stored in Redux
        TraceId: traceId, // Passed from Redux
        ResultIndex: ResultIndex, // Passed via navigation
      },{
        headers: {
          'Content-Type': 'application/json',
        },
    
      }
    );
    return response.data.Response;
  } catch (error) {
    console.log('errrrr', error);
    throw error;
  }
};
