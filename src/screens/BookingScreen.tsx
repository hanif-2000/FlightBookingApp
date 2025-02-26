import React, {useState, useMemo} from 'react';
import {StyleSheet, FlatList, View, TouchableOpacity, Text} from 'react-native';
import FlightDetails from '../components/FlightDetails';
import FilterButtons from '../components/FilterButtons';
import FlightCardSelectable from '../components/FlightCardSelectable';
import ScreenLayout from '../components/ScreenLayout';

type Flight = {
  id: string;
  airline: string;
  classType: string;
  date: string;
  duration: string;
  time1: string;
  time2: string;
  location1: string;
  location2: string;
  baggage1?: string;
  baggage2?: string;
  price: string;
  airlineImg: any;
  changeFlight?: string;
  changeFlightStatus?: boolean;
  airlineChangeFlight?: string;
  classTypeChangeFlight?: string;
  dateChangeFlight?: string;
  durationChangeFlight?: string;
  time1ChangeFlight?: string;
  time2ChangeFlight?: string;
  location1ChangeFlight?: string;
  location2ChangeFlight?: string;
};

const flights: Flight[] = [
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
  {
    id: '3',
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
    changeFlight: 'Change flight | 8h layover',
    changeFlightStatus: true,
    airlineChangeFlight: 'Air Arabiya',
    classTypeChangeFlight: 'Economy Class',
    dateChangeFlight: 'Mon, 21 May',
    durationChangeFlight: '2H 55M',
    time1ChangeFlight: '07:55',
    time2ChangeFlight: '10:20',
    location1ChangeFlight: 'Goa (North)',
    location2ChangeFlight: 'Mumbai',
  },
];
const BookingScreen = ({navigation}: any) => {
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);
  const [selectedSortOptions, setSelectedSortOptions] = useState<Set<string>>(
    new Set(),
  );
  const [selectedFilters, setSelectedFilters] = useState<Set<string>>(
    new Set(),
  );
  const [selectedFiltersOptions, setSelectedFiltersOptions] = useState<
    Set<string>
  >(new Set());
  const [selectedClass, setSelectedClass] = useState<Set<string>>(new Set());

  // Toggle Selection Function
  const toggleSelection = (
    setSelection: React.Dispatch<React.SetStateAction<Set<string>>>,
    option: string,
  ) => {
    setSelection(prev => {
      const newSet = new Set(prev);
      newSet.has(option) ? newSet.delete(option) : newSet.add(option);
      return newSet;
    });
  };

  const selectedFlightDetails = useMemo(
    () => flights.find(flight => flight.id === selectedFlight),
    [selectedFlight],
  );

  // Render Individual Flight
  const renderFlightItem = ({item}: {item: Flight}) => (
    <FlightCardSelectable
      {...item}
      detailsButton="FLIGHT DETAILS"
      isSelected={item.id === selectedFlight}
      onSelect={() => setSelectedFlight(item.id)}
      onFlightDetails={() => navigation.navigate('FlightDetails')}
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
      <FilterButtons
        selectedSortOptions={selectedSortOptions}
        selectedFilters={selectedFilters}
        selectedFiltersOptions={selectedFiltersOptions}
        selectedClass={selectedClass}
        toggleSelection={toggleSelection}
        setSelectedSortOptions={setSelectedSortOptions}
        setSelectedFilters={setSelectedFilters}
        setSelectedFiltersOptions={setSelectedFiltersOptions}
        setSelectedClass={setSelectedClass}
      />
    </View>
  );

  return (
    <ScreenLayout label={'Change Flight'} back>
      <View style={styles.mainContainer}>
        <FlatList
          data={flights}
          keyExtractor={item => item.id}
          renderItem={renderFlightItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={renderListHeader}
        />

        {/* Footer Buttons */}
        <View style={styles.footerButtons}>
          <View style={styles.applyButton}>
            <Text style={styles.applyButtonText}>
              {selectedFlightDetails
                ? selectedFlightDetails.price
                : 'Flight Price'}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => navigation.navigate('ReviewFlight')}>
            <Text style={styles.bookButtonText}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenLayout>
  );
};

// Styles
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#000',
  },
  listContainer: {
    paddingBottom: 100,
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
