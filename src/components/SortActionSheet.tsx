import React, {useRef} from 'react';
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

interface SortActionSheetProps {
  title: string;
  options: string[];
  selectedOptions: Set<string>;
  onSelect: (option: string) => void;
}

const SortActionSheet: React.FC<SortActionSheetProps> = ({
  title,
  options,
  selectedOptions,
  onSelect,
}) => {
  const sortActionSheetRef = useRef<ActionSheetRef>(null);

  return (
    <>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => sortActionSheetRef.current?.show()}>
        <Image tintColor={'#FFFFFF'} resizeMode={'cover'} source={require('../../assets/sort.png')} />
      </TouchableOpacity>

      <ActionSheet
        ref={sortActionSheetRef}
        gestureEnabled
        containerStyle={{backgroundColor: '#141414'}}>
        <View style={styles.sheetContent}>
          <Text style={styles.sheetTitle}>{title}</Text>
          <View style={styles.separator} />

          <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.selectableList}>
            {options.map(option => (
              <TouchableOpacity
                key={option}
                style={[styles.selectableButton]}
                onPress={() => onSelect(option)}>
                <Text
                  style={[
                    styles.selectableButtonText,
                    selectedOptions.has(option) && styles.selectedButtonText,
                  ]}>
                  {option}
                </Text>
                <RoundCheckbox
                  isSelected={selectedOptions.has(option)}
                  onSelect={() => onSelect(option)}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  sheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    color: '#fff',
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
  selectableButton: {
    paddingVertical: 10,
    borderRadius: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  selectableButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  selectedButtonText: {
    color: '#fff',
  },
});

export default SortActionSheet;
