import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface DatePickerProps {
  date: Date;
  onChange: (selectedDate: Date) => void;
  label: string;
  show?:boolean;
  showDatePicker?:any
}

const DatePickerComponent = ({date, onChange, label,show,showDatePicker}: DatePickerProps) => {
  const [iosShowModal, setIosShowModal] = useState(false);
  const [tempDate, setTempDate] = useState(date);

  const formattedDate = date ? date.toDateString() : 'Select Date';

  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>

      <TouchableOpacity
        style={styles.inputContainer}
        onPress={() => {
          if (Platform.OS === 'ios') {
            setTempDate(date);
            setIosShowModal(true);
          }
        }}
        activeOpacity={0.7}>
        <Text style={styles.inputText}>{formattedDate}</Text>
      </TouchableOpacity>

      {Platform.OS === 'ios' && iosShowModal && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={iosShowModal}
          onRequestClose={() => setIosShowModal(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <DateTimePicker
                value={tempDate}
                mode="date"
                display="spinner"
                onChange={(event, selectedDate) => {
                  if (selectedDate) setTempDate(selectedDate);
                }}
                minimumDate={new Date()}
              />
              <TouchableOpacity
                onPress={() => {
                  onChange(tempDate);
                  setIosShowModal(false);
                }}
                style={styles.doneButton}>
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      {Platform.OS === 'android' && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            if (selectedDate) onChange(selectedDate);
          }}
          minimumDate={new Date()}
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
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  doneButton: {
    marginTop: 10,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 10,
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DatePickerComponent;
