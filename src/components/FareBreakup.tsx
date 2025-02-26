import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FareBreakup = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>FARE BREAKUP</Text>
      <View style={styles.fareRow}>
        <Text style={styles.fareLabel}>Base Fare</Text>
        <Text style={styles.fareAmount}>₹4,340</Text>
      </View>
      <View style={styles.fareRow}>
        <Text style={styles.fareLabel}>Surcharges</Text>
        <Text style={styles.fareAmount}>₹360</Text>
      </View>
      <View style={styles.fareRow}>
        <Text style={styles.totalFareLabel}>Total Fare</Text>
        <Text style={styles.totalFareAmount}>₹4,700</Text>
      </View>
    </View>
  );
};

export default FareBreakup;

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  fareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  fareLabel: {
    color: '#a5a5a5',
    fontSize: 15,
  },
  fareAmount: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  totalFareLabel: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalFareAmount: {
    color: '#10E0F9',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
