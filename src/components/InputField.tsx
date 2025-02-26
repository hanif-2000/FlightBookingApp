import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InputField = ({ label, value, onPress }: { label: string; value: string; onPress?: () => void }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#262626',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: '#aaa',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    marginTop: 5,
  },
});

export default InputField;
