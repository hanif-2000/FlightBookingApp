import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';

// Sorting options
const SORT_OPTIONS = [
  'Default',
  'Price: Low to High',
  'Departure Time: Late to Early',
  'Arrival Time: Early to Late',
  'Arrival Time: Late to Early',
  'Duration: Low to High',
];

// Filter labels
const FILTER_LABELS = ['Cheapest', 'Fastest', 'Non-stop'];

// Reusable Selectable Button Component
const SelectableButton = ({ label, isSelected, onPress }) => (
  <TouchableOpacity
    style={[styles.selectableButton, isSelected ? styles.selectedButton : styles.unselectedButton]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text style={[styles.selectableButtonText, isSelected && styles.selectedButtonText]}>{label}</Text>
  </TouchableOpacity>
);

const FilterButtons = () => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [selectedSortOptions, setSelectedSortOptions] = useState(new Set());
  const [selectedFilters, setSelectedFilters] = useState(new Set());

  const toggleSelection = (setSelection, option) => {
    setSelection(prevSet => {
      const newSet = new Set(prevSet);
      newSet.has(option) ? newSet.delete(option) : newSet.add(option);
      return newSet;
    });
  };

  return (
    <View style={styles.container}>
      {/* Filter Buttons */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {FILTER_LABELS.map(label => (
          <SelectableButton
            key={label}
            label={label}
            isSelected={selectedFilters.has(label)}
            onPress={() => toggleSelection(setSelectedFilters, label)}
          />
        ))}
      </ScrollView>

      {/* Sort & Filter Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => actionSheetRef.current?.show()}>
          <Text style={styles.actionButtonText}>Filters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => actionSheetRef.current?.show()}>
          <Text style={styles.actionButtonText}>Sort</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Action Sheet */}
      <ActionSheet ref={actionSheetRef} gestureEnabled>
        <View style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>Sort & Filters</Text>
          <View style={styles.separator} />

          {/* Sort Options */}
          <Text style={styles.sectionTitle}>Sort By</Text>
          <ScrollView contentContainerStyle={styles.selectableList}>
            {SORT_OPTIONS.map(option => (
              <SelectableButton
                key={option}
                label={option}
                isSelected={selectedSortOptions.has(option)}
                onPress={() => toggleSelection(setSelectedSortOptions, option)}
              />
            ))}
          </ScrollView>

          {/* Apply & Close Buttons */}
          <View style={styles.footerButtons}>
            <TouchableOpacity style={styles.applyButton} onPress={() => actionSheetRef.current?.hide()}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => actionSheetRef.current?.hide()}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>
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
  actionButton: {
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginLeft: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sheetContent: {
    padding: 20,
    alignItems: 'center',
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 10,
  },
  selectableList: {
    width: '100%',
    alignItems: 'center',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  applyButton: {
    flex: 1,
    marginRight: 5,
    padding: 10,
    backgroundColor: '#28a745',
    borderRadius: 10,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    flex: 1,
    marginLeft: 5,
    padding: 10,
    backgroundColor: '#dc3545',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FilterButtons;