import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Modal,
  Alert,
} from 'react-native';
import BookingOptions from '../components/BookingOptions';
import DatePickerComponent from '../components/DatePickerComponent';
import CustomCheckbox from '../components/CustomCheckbox';
import PrimaryButton from '../components/PrimaryButton';
import CustomDropdown from '../components/CustomDropdown';
import ScreenLayout from '../components/ScreenLayout';
import {useDispatch} from 'react-redux';
import {fetchFlights} from '../redux/slices/flightsSlice';

const FlightBookingScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('flight');
  const [checked, setChecked] = useState(false);

  const [loading, setLoading] = useState(false);

  const [fromOpen, setFromOpen] = useState(null);
  const [toOpen, setToOpen] = useState(null);
  const [classOpen, setClassOpen] = useState(null);

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [returnDate, setReturnDate] = useState(new Date());
  const [showReturn, setShowReturn] = useState(false);

  const fromItems = [
    {label: 'BLR - Bengaluru', value: 'BLR'},
    {label: 'DEL - New Delhi', value: 'DEL'},
    {label: 'BOM - Mumbai', value: 'BOM'},
    {label: 'MAA - Chennai', value: 'MAA'},
  ];

  const toItems = [
    {label: 'DEL - New Delhi', value: 'DEL'},
    {label: 'BLR - Bengaluru', value: 'BLR'},
    {label: 'BOM - Mumbai', value: 'BOM'},
    {label: 'MAA - Chennai', value: 'MAA'},
  ];

  const classItems = [
    {label: 'Economy & 2 Adults', value: 'Economy'},
    {label: 'Business & 1 Adult', value: 'Business'},
    {label: 'First Class & 3 Adults', value: 'First'},
  ];

  const toggleCheckbox = useCallback(() => {
    setChecked(prevState => !prevState);
  }, []);

  const onDateChange = (
    event: any,
    selectedDate: Date | undefined,
    setDateFunc: (date: Date) => void,
  ) => {
    console.warn(selectedDate,'selectedDate')
    if (selectedDate) {
      setDateFunc(selectedDate);
      setShow(false);
    }
  };

  const onReturnDateChange = (
    event: any,
    selectedDate: Date | undefined,
    setDateFunc: (date: Date) => void,
  ) => {
    if (selectedDate) {
      setDateFunc(selectedDate);
      setShowReturn(false);
    }
  };

  const showDatePicker = () => setShow(true);
  const showDatePickerReturn = () => setShowReturn(true);

  const handleSearch = async () => {
    setLoading(true);
    const searchParams = {
      EndUserIp: '192.168.5.56',
      TokenId: '6fc566be-162b-437b-a7de-8c90d868979b',
      AdultCount: 1,
      ChildCount: 0,
      InfantCount: 0,
      DirectFlight: false,
      OneStopFlight: false,
      JourneyType: '1',
      PreferredAirlines: null,
      Segments: [
        {
          Origin: 'DEL',
          Destination: 'BOM',
          FlightCabinClass: '1',
          PreferredDepartureTime: '2025-03-01T08:00:00',
          PreferredArrivalTime: '2025-03-01T14:00:00',
        },
      ],
      Sources: null,
    };

    try {
      const response = await dispatch(fetchFlights(searchParams) as any);
      if (response&&response.payload!='Invalid Token') {
        setLoading(false);
        navigation.navigate('BookingScreen');
        console.warn('response==-- ',response.payload)
      } else {
        setLoading(false);
        Alert.alert('Invalid Token')
        navigation.navigate('BookingScreen');
        console.log('⚠️ No response found.');
      }
    } catch (error) {
      setLoading(false);
      console.log('error:', error);
    }
  };

  return (
    <ScreenLayout label={'Gaya, India'} user chat>
      {loading && (
        <Modal transparent visible={loading}>
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </Modal>
      )}
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}>
            <BookingOptions
              selected={selectedOption}
              onSelect={setSelectedOption}
            />
            <CustomDropdown
              label="From"
              placeHolder="Select an Option"
              items={toItems}
              selectedValue={fromOpen}
              onSelect={setFromOpen}
            />
            <CustomDropdown
              label="To"
              placeHolder="Select an Option"
              items={fromItems}
              selectedValue={toOpen}
              onSelect={setToOpen}
            />
            <CustomDropdown
              label="Class & Travellers"
              placeHolder="Select an Option"
              items={classItems}
              selectedValue={classOpen}
              onSelect={setClassOpen}
            />
            <DatePickerComponent
              date={date}
              show={show}
              onChange={({event, selectedDate}:any) =>
                onDateChange(event, selectedDate, setDate)
              }
              showDatePicker={showDatePicker}
              label="Departure"
            />
            <CustomCheckbox checked={checked} toggleCheckbox={toggleCheckbox} />
            {checked && (
              <DatePickerComponent
                date={returnDate}
                show={showReturn}
                onChange={({event, selectedDate}:any) =>
                  onReturnDateChange(event, selectedDate, setReturnDate)
                }
                showDatePicker={showDatePickerReturn}
                label="Return"
              />
            )}
            <PrimaryButton title={'SEARCH NOW'} onPress={handleSearch} />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#141414',
    paddingHorizontal: 20,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});

export default FlightBookingScreen;
