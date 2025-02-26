import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import { bookFlight } from '../services/api';
import { setBookingDetails } from '../redux/slices/flightSlice';

const PassengerInfoScreen = ({ route, navigation }) => {
  const { flight } = route.params;
  const dispatch = useDispatch();
  const [passengers, setPassengers] = useState([{ name: '', age: '' }]);
  const [loading, setLoading] = useState(false);

  const handleBookFlight = async () => {
    setLoading(true);
    try {
      const bookingResponse = await bookFlight({ result_index: flight.result_index });
      dispatch(setBookingDetails(bookingResponse));
      navigation.navigate('BookingConfirmation', { booking: bookingResponse });
    } catch (error) {
      console.error('Booking Error:', error);
    }
    setLoading(false);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Passenger Information</Text>
      <FlatList
        data={passengers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Name:</Text>
            <TextInput
              placeholder="Enter Name"
              value={item.name}
              onChangeText={(text) => {
                const newPassengers = [...passengers];
                newPassengers[index].name = text;
                setPassengers(newPassengers);
              }}
              style={{ borderWidth: 1, padding: 8, marginBottom: 5 }}
            />
            <Text>Age:</Text>
            <TextInput
              placeholder="Enter Age"
              value={item.age}
              keyboardType="numeric"
              onChangeText={(text) => {
                const newPassengers = [...passengers];
                newPassengers[index].age = text;
                setPassengers(newPassengers);
              }}
              style={{ borderWidth: 1, padding: 8 }}
            />
          </View>
        )}
      />
      <Button title="Book Flight" onPress={handleBookFlight} disabled={loading} />
    </View>
  );
};

export default PassengerInfoScreen;
