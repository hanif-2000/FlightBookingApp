import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';

interface PolicyCardProps {
  title: string;
  onPress: () => void;
}

const PolicyCard: React.FC<PolicyCardProps> = ({title, onPress}) => (
  <TouchableOpacity style={styles.policyCard} onPress={onPress}>
    <Text style={styles.policyTitle}>{title}</Text>
    <Icon name="info-with-circle" size={16} color="#fff" />
  </TouchableOpacity>
);

const FarePolicies = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.sectionTitle}>FARE POLICIES</Text>
      <PolicyCard
        title="Baggage Policy"
        onPress={() => navigation.navigate('Policies', {policyType: 'baggage'})}
      />
      <PolicyCard
        title="Cancellation Policy"
        onPress={() =>
          navigation.navigate('Policies', {policyType: 'cancellation'})
        }
      />
      <PolicyCard
        title="Reschedule Policy"
        onPress={() =>
          navigation.navigate('Policies', {policyType: 'reschedule'})
        }
      />
    </View>
  );
};

export default FarePolicies;

const styles = StyleSheet.create({
  sectionTitle: {
    color: '#FFFFFF99',
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 8,
    paddingLeft: 20,
    paddingTop: 10,
  },
  policyCard: {
    backgroundColor: '#1E1E1E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
    marginHorizontal: 15,
  },
  policyTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});
