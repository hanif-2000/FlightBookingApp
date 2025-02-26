import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import FlightDetailsScreen from '../screens/FlightDetailsScreen';
import PassengerInfoScreen from '../screens/PassengerInfoScreen';
import BookingConfirmationScreen from '../screens/BookingConfirmationScreen';
import { SafeAreaView } from 'react-native';
import BookingScreen from '../screens/BookingScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
        <Stack.Screen name="FlightDetails" component={FlightDetailsScreen} />
        <Stack.Screen name="PassengerInfo" component={PassengerInfoScreen} />
        <Stack.Screen name="BookingConfirmation" component={BookingConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;
