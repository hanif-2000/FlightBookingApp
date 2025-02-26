import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../components/Header';
import Collapsible from 'react-native-collapsible';

const passengers = [
  {id: '1', name: 'SAYEED AFZAL', age: 28, gender: 'Male', country: 'Indian'},
  {id: '2', name: 'RAHUL YADAV', age: 33, gender: 'Female', country: 'Indian'},
  {id: '3', name: 'SHIV SHANKAR', age: 12, gender: 'Male', country: 'Indian'},
  {id: '4', name: 'SHIV SHANKAR', age: 2, gender: 'Female', country: 'Indian'},
];

const ReviewAlert = () => (
  <View style={styles.alertContainer}>
    <View style={styles.alertHeader}>
      <Icon name="alert-circle-outline" size={20} color="#E74C3C" />
      <Text style={styles.alertTitle}>Review Alert</Text>
    </View>
    <Text style={styles.alertMessage}>
      Please ensure that your name matches your govt. ID such as Aadhaar,
      Passport, or Driver’s License.
    </Text>
  </View>
);

const TravelersCard = () => {
  return (
    <View style={travelCardStyles.container}>
      {/* Header */}
      <Text style={travelCardStyles.title}>Travelers</Text>
      <Text style={travelCardStyles.subtitle}>
        Review and update Traveler details
      </Text>

      {/* Traveler Categories */}
      <View style={travelCardStyles.row}>
        <View style={travelCardStyles.box}>
          <Text style={travelCardStyles.label}>adults</Text>
          <Icon name="human-male" size={18} color="#10E0F9" />
          <Text style={travelCardStyles.value}>02</Text>
        </View>
        <View style={travelCardStyles.box}>
          <Text style={travelCardStyles.label}>children</Text>
          <Icon name="human-child" size={18} color="#10E0F9" />
          <Text style={travelCardStyles.value}>01</Text>
        </View>
        <View style={travelCardStyles.box}>
          <Text style={travelCardStyles.label}>infants</Text>
          <Icon name="baby-carriage" size={18} color="#10E0F9" />
          <Text style={travelCardStyles.value}>01</Text>
        </View>
      </View>
    </View>
  );
};

const PassengerListScreen = ({navigation}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Use `useCallback` to prevent unnecessary re-renders
  const toggleCollapse = useCallback(() => {
    setIsCollapsed(prevState => !prevState);
  }, []);

  return (
    <>
      <Header back step={2} />
      <ScrollView keyboardShouldPersistTaps="handled" style={{flex: 1, marginBottom: 140}}>
        <View style={styles.container}>
          <TravelersCard />
          <ReviewAlert />
          {passengers &&
            passengers.map((item, index) => (
              <View key={index} style={styles.card}>
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.details}>
                    age: {item.age} gender: {item.gender} country:{item.country}
                  </Text>
                </View>
                <TouchableOpacity>
                  <Icon
                    name="pencil-circle-outline"
                    size={24}
                    color="#10E0F9"
                  />
                </TouchableOpacity>
              </View>
            ))}
        </View>
      </ScrollView>
      {/* Fare Summary */}
      <View style={styles.bottomView}>
        <Text style={styles.fareSummaryText}>Fare Summary</Text>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleCollapse}>
          <Text style={styles.travelerText}>
            6 Travelers - 2 Adult, 1 Child, 1 Infant
          </Text>
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
          <TouchableOpacity
            style={styles.bookButton}
            onPress={()=>navigation.navigate('BillingDetails')}
          >
            <Text style={styles.bookButtonText}>REVIEW TRAVELERS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  alertContainer: {
    backgroundColor: '#FFF7DC',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alertTitle: {
    color: '#E74C3C',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  alertMessage: {
    color: '#333',
    fontSize: 14,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderColor: '#333',
    borderWidth: 1,
  },
  name: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    color: '#FFFFFF99',
    fontSize: 14,
    marginTop: 4,
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

const travelCardStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginVertical: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    borderRightWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 12,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default PassengerListScreen;
