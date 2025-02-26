import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CustomCheckboxProps {
  checked: boolean;
  toggleCheckbox: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  toggleCheckbox,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={toggleCheckbox}>
        <View style={[styles.checkbox, checked && styles.checked]}>
          {checked && <Icon name="done" size={20} color={'#fff'} />}
        </View>
        <Text style={styles.checkboxLabel}>Need Return Booking?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFFFFF1F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#10E0F9',
  },
  checkmark: {
    width: 12,
    height: 12,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default CustomCheckbox;
