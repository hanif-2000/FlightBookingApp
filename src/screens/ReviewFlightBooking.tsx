import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Collapsible from 'react-native-collapsible';

import Header from '../components/Header';
import FlightDetailsCard from '../components/FlightDetailsCard';
import FlightCard from '../components/FlightCard';

const flights = [
  {
    id: '3',
    airline: 'Air Arabiya',
    classType: 'Economy Class',
    date: 'Mon, 20 May',
    duration: '2H 55M',
    time1: '07:55',
    time2: '10:20',
    location1: 'New Delhi',
    location2: 'Goa (North)',
    price: '₹2,170 per adult',
    airlineImg: require('../../assets/airarabiya.png'),
    changeFlight: 'Change flight | 8h layover',
    changeFlightStatus: true,
    airlineChangeFlight: 'Air Arabiya',
    classTypeChangeFlight: 'Economy Class',
    dateChangeFlight: 'Mon, 21 May',
    durationChangeFlight: '2H 55M',
    time1ChangeFlight: '07:55',
    time2ChangeFlight: '10:20',
    location1ChangeFlight: 'Goa (North)',
    location2ChangeFlight: 'Mumbai',
  },
];

interface PolicyCardProps {
  title: string;
  onPress: () => void;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ title, onPress }) => (
  <TouchableOpacity style={styles.policyCard} onPress={onPress}>
    <Text style={styles.policyTitle}>{title}</Text>
    <Icon name="info-with-circle" size={16} color="#fff" />
  </TouchableOpacity>
);

const ReviewFlightBooking = ({ navigation }: any) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Use `useCallback` to prevent unnecessary re-renders
  const toggleCollapse = useCallback(() => {
    setIsCollapsed(prevState => !prevState);
  }, []);

  return (
    <View style={styles.container}>
      <Header back step={1} />
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.scrollView}>
        {/* Flight Information */}
        <FlightDetailsCard
          airlineName="Indigo"
          flightCode="QP - 1355"
          route="New Delhi To Goa North"
          date="3rd October"
          day="Thursday"
          classType="economy"
          price="+ 2,150"
          duration="2h 20m"
          icon={require('../../assets/location.png')}
          layoff={require('../../assets/indigo.png')}
          down={require('../../assets/trend-down.png')}
        />

        <FlatList
          data={flights}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <FlightCard {...item} detailsButton="FLIGHT DETAILS" />
          )}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />

        <Text style={styles.sectionTitle}>FARE POLICIES</Text>
        <PolicyCard
          title="Baggage Policy"
          onPress={() => navigation.navigate('Policies', { policyType: 'baggage' })}
        />
        <PolicyCard
          title="Cancellation Policy"
          onPress={() => navigation.navigate('Policies', { policyType: 'cancellation' })}
        />
        <PolicyCard
          title="Reschedule Policy"
          onPress={() => navigation.navigate('Policies', { policyType: 'reschedule' })}
        />
      </ScrollView>

      {/* Fare Summary */}
      <View style={styles.bottomView}>
        <Text style={styles.fareSummaryText}>Fare Summary</Text>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleCollapse}>
          <Text style={styles.travelerText}>6 Travelers - 2 Adult, 1 Child, 1 Infant</Text>
          <Text style={styles.arrowIcon}>{isCollapsed ? '▼' : '▲'}</Text>
        </TouchableOpacity>

        <Collapsible collapsed={isCollapsed}>
          <View style={styles.fareDetails}>
            <View style={styles.row}>
              <Text style={styles.label}>Fare Type</Text>
              <Text style={styles.value}>₹4,340</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Base Fare</Text>
              <Text style={styles.value}>₹360</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Taxes & Fees</Text>
              <Text style={styles.value}>₹250</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.label, styles.boldText]}>TOTAL</Text>
              <Text style={[styles.value, styles.boldText]}>₹12,340</Text>
            </View>
          </View>
        </Collapsible>

        {/* Footer Buttons */}
        <View style={styles.footerButtons}>
          <View style={styles.applyButton}>
            <Text style={styles.applyButtonText}>+ 2,150 per adult</Text>
          </View>
          <TouchableOpacity style={styles.bookButton} onPress={()=>navigation.navigate('ReviewTraveler')}>
            <Text style={styles.bookButtonText}>REVIEW TRAVELERS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ReviewFlightBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 150,
  },
  listContainer: {
    paddingTop: 20,
  },
  sectionTitle: {
    color: '#FFFFFF99',
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 8,
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
  },
  policyTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  bottomView: {
    padding: 15,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  fareSummaryText: {
    paddingLeft: 10,
    color: '#fff',
    fontWeight: '400',
    fontSize: 12,
  },
  toggleButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  travelerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  arrowIcon: {
    color: '#fff',
    fontSize: 18,
  },
  fareDetails: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  label: {
    color: '#000',
    fontSize: 14,
  },
  value: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  applyButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    borderColor: '#F0F0F0',
    borderWidth: 1,
  },
  applyButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  bookButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 12,
    backgroundColor: '#10E0F9',
    borderRadius: 12,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});