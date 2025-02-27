import React, {useState, useMemo} from 'react';
import {StyleSheet, FlatList, View, TouchableOpacity, Text} from 'react-native';
import FlightDetails from '../components/FlightDetails';
import FilterButtons from '../components/FilterButtons';
import FlightCardSelectable from '../components/FlightCardSelectable';
import ScreenLayout from '../components/ScreenLayout';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const BookingScreen = ({navigation}: any) => {
  const {flights, error} = useSelector((state: RootState) => state.flights);
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
    () => flights.find(flight => flight.id == selectedFlight),
    [selectedFlight],
  );

  const renderFlightItem = ({item}: any) => {
    return (
      <FlightCardSelectable
        item={item}
        fare={item?.Fare}
        detailsButton="FLIGHT DETAILS"
        isSelected={item.id === selectedFlight}
        onSelect={() => setSelectedFlight(item?.ResultIndex)}
        navigationPath={'FlightDetails'}
        ResultIndex={item?.ResultIndex}
      />
    );
  };

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
