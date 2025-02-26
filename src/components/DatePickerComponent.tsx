import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
  date: Date;
  show: boolean;
  onChange: (event: any, selectedDate: Date | undefined) => void;
  showDatePicker: () => void;
  label: string;
}

const DatePickerComponent = ({
  date,
  show,
  onChange,
  showDatePicker,
  label,
}: DatePickerProps) => {
  // Format the selected date
  const formattedDate = date ? date.toDateString() : 'Select Date';

  return (
    <View style={[styles.container, show && styles.showPicker]}>
      <Text style={styles.labelText}>{label}</Text>

      <TouchableOpacity
        style={styles.inputContainer}
        onPress={showDatePicker} // Show the date picker when pressed
        activeOpacity={0.7}
      >
        <Text style={styles.inputText}>{formattedDate}</Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate={new Date()} // Prevent past date selection
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: '#FFFFFF1F',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Elevation for Android shadow
  },
  showPicker: {
    zIndex: 1000,
    elevation: 1000, // Ensure it appears on top of other elements
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  inputContainer: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFFFFF1F',
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default DatePickerComponent;
