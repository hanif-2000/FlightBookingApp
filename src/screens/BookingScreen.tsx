import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import FlightDetails from '../components/FlightDetails';
import FlightCard from '../components/FlightCard';
import FilterButtons from '../components/FilterButtons';
import Header from '../components/Header';

// Flight data (extracted outside component for better structure)
const flights = [
  {
    id: '1',
    airline: 'Air India',
    classType: 'Economy Class',
    date: 'Mon, 20 May',
    duration: '2H 55M',
    time1: '07:55',
    time2: '10:20',
    location1: 'New Delhi',
    location2: 'Goa (North)',
    baggage1: '1 Cabin bag - 7kg',
    baggage2: '2 Check-in Bags 23kg',
    price: '₹2,340',
    airlineImg: require('../../assets/airindia.png'),
  },
  {
    id: '2',
    airline: 'Air Arabiya',
    classType: 'Economy Class',
    date: 'Mon, 20 May',
    duration: '2H 55M',
    time1: '07:55',
    time2: '10:20',
    location1: 'New Delhi',
    location2: 'Goa (North)',
    price: '₹2,170 per adult',
    airlineImg: require('../../assets/airarabiya.png'),
  },
];

const BookingScreen = ({navigation}:any) => {
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);

  // Handle flight selection
  const handleSelectFlight = useCallback((id: string) => {
    setSelectedFlight(id);
  }, []);

  // Render Flight Item
  const renderFlightItem = ({item}: {item: (typeof flights)[0]}) => (
    <FlightCard
      {...item}
      detailsButton="FLIGHT DETAILS"
      isSelected={item.id === selectedFlight}
      onSelect={() => handleSelectFlight(item.id)}
    />
  );

  // Render List Header
  const renderListHeader = () => (
    <View>
      <FlightDetails
        title="Departure Flight"
        route="New Delhi To Goa North"
        date="3rd October"
        day="Thursday"
        icon={require('../../assets/location.png')}
        layoff={require('../../assets/layoff.png')}
        down={require('../../assets/trend-down.png')}
      />
      <FilterButtons />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header back label="Change Flight" left />

      <FlatList
        data={flights}
        keyExtractor={item => item.id}
        renderItem={renderFlightItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderListHeader}
      />

      {/* Fixed Footer Buttons */}
      <View style={styles.footerButtons}>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookButton} onPress={()=>navigation.navigate('FlightDetails')}>
          <Text style={styles.bookButtonText}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000',
  },
  listContainer: {
    paddingBottom: 100, // Ensure scrolling space above the buttons
    paddingHorizontal: 20,
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  applyButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    borderColor: '#F0F0F0',
    borderWidth: 1,
  },
  applyButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  bookButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 12,
    backgroundColor: '#10E0F9',
    borderRadius: 12,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BookingScreen;
