import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import RoundCheckbox from './RoundCheckbox';

interface FilterOption {
  airlineName: string;
  airlineLogo: string;
}

interface FilterActionSheetProps {
  title: string;
  options: FilterOption[];
  classType: string[];
  selectedOptions: Set<string>;
  selectedClass: Set<string>;
  onSelect: (option: string) => void;
  onSelectClass: (option: string) => void;
}

const FilterActionSheet: React.FC<FilterActionSheetProps> = ({
  title,
  options,
  classType,
  selectedOptions,
  selectedClass,
  onSelect,
  onSelectClass,
}) => {
  const filterActionSheetRef = useRef<ActionSheetRef>(null);
  const [selectedTab, setSelectedTab] = useState<'Airline' | 'Class'>(
    'Airline',
  );

  return (
    <>
      <TouchableOpacity
        style={styles.actionButton}
        activeOpacity={0.7}
        onPress={() => filterActionSheetRef.current?.show()}>
        <Image
          resizeMode={'cover'}
          tintColor={'#FFFFFF'}
          source={require('../../assets/filter.png')}
        />
      </TouchableOpacity>

      <ActionSheet
        ref={filterActionSheetRef}
        gestureEnabled
        containerStyle={styles.actionSheet}>
        <View style={styles.sheetContent}>
          <View style={styles.header}>
            <Text style={styles.sheetTitle}>{title}</Text>

            <View style={styles.filterButtons}>
              <TouchableOpacity
                style={[
                  styles.filterButton,
                  selectedTab === 'Class' && styles.activeFilterButton,
                ]}
                activeOpacity={0.7}
                onPress={() => setSelectedTab('Class')}>
                <Text
                  style={[
                    styles.filterButtonText,
                    selectedTab === 'Class' && styles.activeFilterButtonText,
                  ]}>
                  Class
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.filterButton,
                  selectedTab === 'Airline' && styles.activeFilterButton,
                ]}
                activeOpacity={0.7}
                onPress={() => setSelectedTab('Airline')}>
                <Text
                  style={[
                    styles.filterButtonText,
                    selectedTab === 'Airline' && styles.activeFilterButtonText,
                  ]}>
                  Airline
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.separator} />
          <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.selectableList}>
            {selectedTab === 'Airline'
              ? options.map(({airlineName, airlineLogo}) => (
                  <View key={airlineName} style={styles.selectableButton}>
                    <View style={styles.optionContainer}>
                      {airlineLogo ? (
                        <Image
                          source={{uri: airlineLogo}}
                          style={styles.logo}
                        />
                      ) : null}
                      <Text style={[styles.selectableButtonText]}>
                        {airlineName}
                      </Text>
                    </View>
                    <RoundCheckbox
                      isSelected={selectedOptions.has(airlineName)}
                      onSelect={() => onSelect(airlineName)}
                    />
                  </View>
                ))
              : classType.map(classType => (
                  <View key={classType} style={styles.selectableButton}>
                    <Text style={[styles.selectableButtonText]}>
                      {classType}
                    </Text>
                    <RoundCheckbox
                      isSelected={selectedClass.has(classType)}
                      onSelect={() => onSelectClass(classType)}
                    />
                  </View>
                ))}
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => {
                if (selectedTab === 'Airline') {
                  selectedOptions.forEach(option => onSelect(option));
                } else {
                  selectedClass.forEach(option => onSelectClass(option));
                }
              }}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.applyButton} onPress={() => {}}>
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>
    </>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    paddingVertical: 10,
    marginLeft: 10,
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  actionSheet: {
    backgroundColor: '#141414',
  },
  sheetContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  filterButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 12,
  },
  activeFilterButton: {
    backgroundColor: '#10E0F9',
  },
  filterButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  activeFilterButtonText: {
    color: '#fff',
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%',
    marginVertical: 10,
  },
  selectableList: {
    width: '100%',
    alignItems: 'center',
  },
  selectableButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: 'contain',
  },
  selectableButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  selectedButtonText: {
    color: '#10E0F9',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  resetButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#10E0F9',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 10,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#10E0F9',
  },
  applyButton: {
    flex: 1,
    backgroundColor: '#10E0F9',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default FilterActionSheet;
