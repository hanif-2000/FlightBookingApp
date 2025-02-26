import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface PolicyItem {
  label: string;
  value: string;
}

interface PolicySectionProps {
  title: string;
  titleColor?: string;
  data: PolicyItem[];
}

const PolicySection: React.FC<PolicySectionProps> = ({ title, titleColor = '#fff', data }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, { color: titleColor }]}>{title}</Text>
      <View style={styles.section}>
        {data.map((item, index) => (
          <View key={index}>
            <View style={styles.fareRow}>
              <Text style={styles.fareLabel}>{item.label}</Text>
              <Text style={styles.fareAmount}>{item.value}</Text>
            </View>
            {index < data.length - 1 && <View style={styles.separator} />}
          </View>
        ))}
      </View>
    </View>
  );
};

export default PolicySection;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  section: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
  },
  sectionTitle: {
    color: '#FFFFFF99',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 8,
  },
  fareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  fareLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
  },
  fareAmount: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
  },
  separator: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 5,
  },
});
