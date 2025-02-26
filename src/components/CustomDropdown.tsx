import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import Icon from 'react-native-vector-icons/Ionicons';

const CustomDropdown = ({label,placeHolder, items, selectedValue, onSelect}) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);

  const openSheet = () => actionSheetRef.current?.show();
  const closeSheet = () => actionSheetRef.current?.hide();

  return (
    <View style={[styles.container]}>
      <Text style={styles.label}>{label}</Text>
      {/* <View style={styles.container}> */}
        {/* Dropdown Button */}
        <TouchableOpacity style={styles.dropdownButton} onPress={openSheet}>
          <Text style={styles.selectedText}>
            {selectedValue ? selectedValue.label : placeHolder}
          </Text>
          <Icon name="chevron-down" size={20} color="#A1A1A1" />
        </TouchableOpacity>

        {/* Action Sheet for Dropdown */}
        <ActionSheet ref={actionSheetRef}>
          <View style={styles.sheetContent}>
            <FlatList
              data={items}
              keyExtractor={item => item.value}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.dropdownItem}
                  onPress={() => {
                    onSelect(item);
                    closeSheet();
                  }}>
                  <Text style={styles.itemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </ActionSheet>
      {/* </View> */}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    marginBottom: 15,
    backgroundColor: '#FFFFFF1F',
    borderRadius: 10,
    padding: 10,

  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFFFFF99',
  },
  dropdownButton: {
    // backgroundColor: '#FFF',
    // backgroundColor: '#FFFFFF1F',

    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderWidth: 1,
    borderColor: '#ccc',
    borderBottomWidth:1

  },
  selectedText: {
    fontSize: 16,
    color: '#fff',
  },
  sheetContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default CustomDropdown;
