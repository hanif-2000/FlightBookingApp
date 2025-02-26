import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const RoundCheckbox: React.FC<{isSelected: boolean; onSelect: () => void}> = ({
  isSelected,
  onSelect,
}) => (
  <TouchableOpacity style={styles.checkboxContainer} onPress={onSelect}>
    <View style={[styles.checkbox, isSelected && styles.checked]}>
      {isSelected && (
        <View style={styles.checkmarkWrapper}>
          <View style={styles.checkmark} />
        </View>
      )}
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    checkboxContainer: {
        position: 'absolute',
        top: 10,
        right: 5,
      },
      checkbox: {
        width: 24,
        height: 24,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#FFFFFF1F',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      },
      checked: {
        backgroundColor: '#FFFFFF',
        borderColor: '#10E0F9',
      },
      checkmarkWrapper: {
        backgroundColor: '#fff',
        borderRadius: 20,
      },
      checkmark: {
        width: 12,
        height: 12,
        backgroundColor: '#10E0F9',
        borderRadius: 20,
      },
    });

export default memo(RoundCheckbox);
