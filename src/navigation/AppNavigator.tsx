import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import FlightDetailsScreen from '../screens/FlightDetailsScreen';
import BookingScreen from '../screens/BookingScreen';
import ReviewFlightBooking from '../screens/ReviewFlightBooking';
import PoliciesScreen from '../screens/PoliciesScreen';
import PassengerListScreen from '../screens/ReviewTraveler';
import BillingDetails from '../screens/BillingDetails';
import FlightTicketBooked from '../screens/FlightTicketBooked';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BookingScreen" component={BookingScreen} />
        <Stack.Screen name="FlightDetails" component={FlightDetailsScreen} />
        <Stack.Screen name="ReviewFlight" component={ReviewFlightBooking} />
        <Stack.Screen name="Policies" component={PoliciesScreen} />
        <Stack.Screen name="ReviewTraveler" component={PassengerListScreen} />      
        <Stack.Screen name="BillingDetails" component={BillingDetails} />    
        <Stack.Screen name="FlightTicketBooked" component={FlightTicketBooked} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
