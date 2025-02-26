import React, {useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import BookingOptions from '../components/BookingOptions';
import DatePickerComponent from '../components/DatePickerComponent';
import CustomCheckbox from '../components/CustomCheckbox';
import PrimaryButton from '../components/PrimaryButton';
import CustomDropdown from '../components/CustomDropdown';

const FlightBookingScreen = ({navigation}: any) => {
  const [selectedOption, setSelectedOption] = useState('flight');
  const [checked, setChecked] = useState(false);

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

  // Toggle checkbox handler
  const toggleCheckbox = useCallback(() => {
    setChecked(prevState => !prevState);
  }, []);

  // Single date change handler for both departure and return
  const onDateChange = (
    event: any,
    selectedDate: Date | undefined,
    setDateFunc: (date: Date) => void,
  ) => {
    if (selectedDate) {
      setDateFunc(selectedDate);
      setShow(false); // Close the date picker modal after date selection
    }
  };

  const onReturnDateChange = (
    event: any,
    selectedDate: Date | undefined,
    setDateFunc: (date: Date) => void,
  ) => {
    if (selectedDate) {
      setDateFunc(selectedDate);
      setShowReturn(false); // Close the return date picker modal after date selection
    }
  };

  const showDatePicker = () => setShow(true); // Open the departure date picker modal
  const showDatePickerReturn = () => setShowReturn(true); // Open the return date picker modal

  return (
    <>
      <Header label={'Gaya, India'} user chat />
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboardAvoidingView}>
            {/* Booking Options */}
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

            {/* Date Picker */}
            <DatePickerComponent
              date={date}
              show={show}
              onChange={(event, selectedDate) =>
                onDateChange(event, selectedDate, setDate)
              }
              showDatePicker={showDatePicker}
              label="Departure"
            />

            {/* Custom Checkbox */}
            <CustomCheckbox checked={checked} toggleCheckbox={toggleCheckbox} />

            {checked && (
              <DatePickerComponent
                date={returnDate}
                show={showReturn}
                onChange={(event, selectedDate) =>
                  onReturnDateChange(event, selectedDate, setReturnDate)
                }
                showDatePicker={showDatePickerReturn}
                label="Return"
              />
            )}

            <PrimaryButton
              title={'SEARCH NOW'}
              onPress={() => navigation.navigate('BookingScreen')}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
