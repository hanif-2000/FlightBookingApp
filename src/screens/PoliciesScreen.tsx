import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import {useRoute} from '@react-navigation/native';
import ScreenLayout from '../components/ScreenLayout';

const policies = [
  {
    id: 'baggage',
    title: 'Baggage Policy',
    content: 'Details about baggage policy...',
  },
  {
    id: 'cancellation',
    title: 'Cancellation Policy',
    content: [
      {
        time: 'Time Frame*',
        fee: 'Cancellation fee',
      },
      {
        time: 'Before 29th Sep',
        fee: '₹2,250 + Fare difference',
      },
      {
        time: '4 hours to 4 days',
        fee: '₹2,999 + Fare difference',
      },
      {
        time: '0 hours to 4 hours',
        fee: 'Non Changeable',
      },
    ],
  },
  {
    id: 'reschedule',
    title: 'Reschedule Policy',
    content: [
      {
        time: 'Time Frame*',
        fee: 'Extra fee**',
      },
      {
        time: 'Before 29th Sep',
        fee: '₹2,250 + Fare difference',
      },
      {
        time: '4 hours to 4 days',
        fee: '₹2,999 + Fare difference',
      },
      {
        time: '0 hours to 4 hours',
        fee: 'Non Changeable',
      },
    ],
  },
];

const PoliciesScreen = () => {
  const route = useRoute();
  const policyType = route?.params?.policyType;

  const [selectedPolicy, setSelectedPolicy] = useState(
    policyType || 'reschedule',
  );
  const renderPolicyContent = () => {
    const policy = policies.find(p => p.id === selectedPolicy);
    if (!policy) return null;

    if (selectedPolicy != 'baggage') {
      return (
        <View style={styles.table}>
          {policy &&
            policy?.content.map((row, index) => (
              <View
                key={index}
                style={[styles.row, index === 2 && styles.lastRow]}>
                <Text style={[styles.cell, {textAlign: 'left'}]}>
                  {row.time}
                </Text>
                <Text style={[styles.cell, {textAlign: 'right'}]}>
                  {row.fee}
                </Text>
              </View>
            ))}
        </View>
      );
    }
    return <Text style={styles.content}>{policy?.content}</Text>;
  };

  return (
    <ScreenLayout label={'policies'} back>
    <View style={styles.container}>
      {/* Policy Tabs */}
      <View style={styles.tabs}>
        {policies.map(policy => (
          <TouchableOpacity
            key={policy.id}
            style={[
              styles.tab,
              selectedPolicy === policy.id && styles.selectedTab,
            ]}
            onPress={() => setSelectedPolicy(policy.id)}>
            <Text
              style={[
                styles.tabText,
                selectedPolicy === policy.id && styles.selectedTabText,
              ]}>
              {policy.id}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Policy Details */}
      <View style={styles.policyContent}>
        <Text style={styles.policyTitle}>{selectedPolicy.toUpperCase()}</Text>
        {renderPolicyContent()}
      </View>
      {selectedPolicy != 'baggage' && (
        <View style={styles.termsContainer}>
          <Text style={styles.termsTitle}>TERMS & CONDITIONS</Text>
          <FlatList
            data={[
              'Cancellation charges are applicable per passenger per sector.',
              'Discount and Assured fee, if any, will be adjusted in the final refund amount.',
              'Partial cancellation cannot be made for tickets booked under special or discounted fares.',
              'In case of a no-show or late cancellation, only statutory taxes are refundable.',
              'Penalty charges may change without prior notice. We do not guarantee accuracy.',
            ]}
            renderItem={({item}) => (
              <Text style={styles.termsText}>• {item}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
    </ScreenLayout>
  );
};

export default PoliciesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  tabs: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: '#222',
    marginRight: 10,
  },
  selectedTab: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#10E0F9',
  },
  tabText: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  selectedTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  policyContent: {
    // backgroundColor: '#1E1E1E',
    // padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  policyTitle: {
    color: '#FFD700',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 10,
  },
  content: {
    color: '#fff',
    fontSize: 14,
  },
  table: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  lastRow: {
    borderBottomWidth: 0,
  },
  cell: {
    color: '#fff',
    fontSize: 14,
    flex: 1,
  },
  termsContainer: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 10,
  },
  termsTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  termsText: {
    color: '#aaa',
    fontSize: 12,
    marginBottom: 5,
  },
});
