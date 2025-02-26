import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getTicket } from '../services/api';
import { setTicketDetails } from '../redux/slices/flightSlice';
import { RootState } from '../redux/store';

const BookingConfirmationScreen = ({ route, navigation }) => {
  const { booking } = route.params;
  const dispatch = useDispatch();
  const ticketDetails = useSelector((state: RootState) => state.flight.ticketDetails);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTicketDetails();
  }, []);

  const fetchTicketDetails = async () => {
    setLoading(true);
    try {
      const ticket = await getTicket({ result_index: booking.result_index });
      dispatch(setTicketDetails(ticket));
    } catch (error) {
      console.error('Error fetching ticket:', error);
    }
    setLoading(false);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Booking Confirmation</Text>
      <Text>Booking Status: {booking.status}</Text>

      {loading ? <ActivityIndicator size="large" color="blue" /> : <Text>Ticket: {ticketDetails?.ticket_number || 'Fetching...'}</Text>}

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default BookingConfirmationScreen;
