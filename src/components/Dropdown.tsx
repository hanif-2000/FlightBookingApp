import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker, {ItemType} from 'react-native-dropdown-picker';

interface DropdownProps {
  label: string;
  open: boolean;
  value: string | null;
  items: ItemType<string>[];
  setOpen: (open: boolean) => void;
  setValue: (value: string | null) => void;
  setItems: (items: ItemType<string>[]) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  placeholder = 'Select an option',
}) => {
  return (
    <View
      style={[styles.container, open ? {zIndex: 1000, elevation: 1000} : {}]}>
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={placeholder}
        style={styles.dropdown}
        dropDownContainerStyle={[
          styles.dropdownContainer,
          open ? {zIndex: 1000, elevation: 1000} : {},
        ]}
        textStyle={styles.dropdownText}
        placeholderStyle={styles.placeholderText}
        showArrowIcon={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: '#FFFFFF1F',
    borderRadius: 10,
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  dropdown: {
    justifyContent: 'center',
    backgroundColor: '#FFFFFF1F',
    height: 50,
    paddingLeft: 10,
    borderWidth: 0,
    borderBlockColor: '#fff',
  },
  dropdownContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
  },
  dropdownText: {
    color: 'white',
    fontSize: 16,
  },
  placeholderText: {
    color: '#000',
    fontSize: 16,
  },
});

export default Dropdown;
