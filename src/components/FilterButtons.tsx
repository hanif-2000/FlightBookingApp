import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import FilterActionSheet from './FilterActionSheet';
import SortActionSheet from './SortActionSheet';

const SORT_OPTIONS = [
  'Default',
  'Price: Low to High',
  'Departure Time: Late to Early',
  'Arrival Time: Early to Late',
  'Arrival Time: Late to Early',
  'Duration: Low to High',
];

const FILTER_OPTIONS = [
  {
    airlineName: 'Emirates',
    airlineLogo: '',
  },
  {
    airlineName: 'Vistara Airlines',
    airlineLogo: '',
  },
  {
    airlineName: 'Lufthansa',
    airlineLogo: '',
  },
  {
    airlineName: 'Indigo',
    airlineLogo: '',
  },
  {
    airlineName: 'Tree House',
    airlineLogo: '',
  },
  {
    airlineName: 'Air India',
    airlineLogo: '',
  },
  {
    airlineName: 'Qatar Airways',
    airlineLogo: '',
  },
];

const CLASSTYPES = [
  'Economy',
  'Premium Economy',
  'First Class',
  'Business Class',
  'Private Flight',
];

const FILTER_LABELS = ['Cheapest', 'Fastest', 'Non-stop'];

interface SelectableButtonProps {
  label?: string;
  onPress: () => void;
  isSelected?:boolean;
}

const SelectableButton = ({label, isSelected, onPress}:SelectableButtonProps) => (
  <TouchableOpacity
    style={[
      styles.selectableButton,
      isSelected ? styles.selectedButton : styles.unselectedButton,
    ]}
    onPress={onPress}
    activeOpacity={0.8}>
    <Text
      style={[
        styles.selectableButtonText,
        isSelected && styles.selectedButtonText,
      ]}>
      {label}
    </Text>
  </TouchableOpacity>
);

const FilterButtons = ({
  selectedSortOptions,
  selectedFilters,
  selectedFiltersOptions,
  selectedClass,
  toggleSelection,
  setSelectedSortOptions,
  setSelectedFilters,
  setSelectedFiltersOptions,
  setSelectedClass,
}: any) => {
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {FILTER_LABELS.map(label => (
          <SelectableButton
            key={label}
            label={label}
            isSelected={selectedFilters.has(label)}
            onPress={() => toggleSelection(setSelectedFilters, label)} // ✅ Use setter function
          />
        ))}
      </ScrollView>

      <View style={styles.actionContainer}>
        <SortActionSheet
          title="Sort"
          options={SORT_OPTIONS}
          selectedOptions={selectedSortOptions}
          onSelect={option => toggleSelection(setSelectedSortOptions, option)}
        />
        <FilterActionSheet
          title="Filters"
          options={FILTER_OPTIONS}
          classType={CLASSTYPES}
          selectedOptions={selectedFiltersOptions}
          onSelect={option => toggleSelection(setSelectedFiltersOptions, option)}
          selectedClass={selectedClass}
          onSelectClass={option => toggleSelection(setSelectedClass, option)}
        />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  actionContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  selectableButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
  },
  unselectedButton: {
    backgroundColor: '#FFFFFF1F',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  selectedButton: {
    backgroundColor: '#FFFFFF',
    borderColor: '#10E0F9',
    borderWidth: 1,
  },
  selectableButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  selectedButtonText: {
    color: '#000',
  },
});

export default FilterButtons;
