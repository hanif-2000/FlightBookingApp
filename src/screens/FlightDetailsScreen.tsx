import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import FlightDetailsCard from '../components/FlightDetailsCard';
import FlightCard from '../components/FlightCard';
import {FlatList} from 'react-native-gesture-handler';
import PolicySection from '../components/PolicySection';
import ScreenLayout from '../components/ScreenLayout';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {
  clearFareDetails,
  fetchFareDetails,
} from '../redux/slices/fareQuoteSlice';
import {convertMinutesToHoursMinutes} from '../utils/CommonFunction';

const FlightDetailsScreen = ({navigation}:any) => {
  const route = useRoute();
  const {ResultIndex} = route.params as {ResultIndex: any};
  const dispatch = useDispatch<AppDispatch>();
  const {traceId} = useSelector((state: RootState) => state.flights);
  const [sagmentData, setSegmentData] = useState();
  const {fareDetails, error} = useSelector(
    (state: RootState) => state.fareQuote,
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (traceId && ResultIndex) {
      dispatch(fetchFareDetails({traceId, ResultIndex}));
    }
    setLoading(false);

    return () => {
      dispatch(clearFareDetails());
      setLoading(false);
    };
  }, [traceId, ResultIndex]);

  const renderFlightItem = ({item}: {item: any}) => {

    const firstSegment = item.Segments[0]?.[0];
    const lastSegment = item.Segments[0]?.[item.Segments[0].length - 1];
    setSegmentData(firstSegment);
    const mappedFlight = {
      airline: item.ValidatingAirline || 'Unknown Airline',
      classType: 'Economy',
      date: '2025-03-01',
      duration: convertMinutesToHoursMinutes(firstSegment?.Duration) || 'N/A',
      time1: firstSegment?.Origin?.DepTime || 'N/A',
      time2: lastSegment?.Destination?.ArrTime || 'N/A',
      location1: firstSegment?.Origin?.Airport?.CityName || 'N/A',
      location2: lastSegment?.Destination?.Airport?.CityName || 'N/A',
      AirportName: firstSegment?.Origin?.Airport?.AirportName || 'N/A',
      AirportName2: lastSegment?.Origin?.Airport?.AirportName || 'N/A',
      Terminal: firstSegment?.Origin?.Airport?.Terminal || 'N/A',
      Terminal2: lastSegment?.Origin?.Airport?.Terminal || 'N/A',
      baggage1: 'Cabin: 7kg',
      baggage2: `Check-in: ${item.Fare?.TotalBaggageCharges || 'N/A'} kg`,
      price: `₹${item.Fare?.PublishedFare?.toLocaleString('en-IN') || 'N/A'}`,
    };

    return <FlightCard {...mappedFlight} detailsButton="FLIGHT DETAILS" />;
  };

  return (
    <ScreenLayout label={'Flight Details'} back>
      {loading && (
        <Modal transparent visible={loading}>
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        </Modal>
      )}
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
        <FlightDetailsCard
          airlineName={sagmentData?.Airline?.AirlineName}
          flightCode={`${sagmentData?.Airline?.AirlineCode} ${sagmentData?.Airline?.FlightNumber}`}
          route={`${sagmentData?.Origin?.Airport?.CityName} To ${sagmentData?.Destination?.Airport?.CityName}`}
          date="3rd October"
          day="Thursday"
          classType="economy"
          price={fareDetails?.Results?.Fare?.BaseFare}
          icon={require('../../assets/location.png')}
          layoff={require('../../assets/indigo.png')}
          down={require('../../assets/trend-down.png')}
        />
        <FlatList
          data={fareDetails?.Results ? [fareDetails.Results] : []}
          keyExtractor={item => item.id}
          renderItem={renderFlightItem}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />

        <Text
          style={{
            color: '#FFFFFF99',
            fontSize: 12,
            fontWeight: '400',
            width: '90%',
            marginVertical: 10,
          }}>
          <Text style={{color: '#FFFFFF'}}>Note:</Text> Your flight shall be
          landing in Mopa Airport.Please note that Mopa Airport is 20 Km from
          North Goa and 60 Km from South Goa.
        </Text>
        <PolicySection
          title="FARE BREAKUP"
          data={[
            {label: 'Base Fare', value: fareDetails?.Results?.Fare?.BaseFare},
            {label: 'Surcharges', value: fareDetails?.Results?.Fare?.Tax},
            {label: 'Total Fare', value: '₹4,700'},
            {label: 'Change in Itinerary', value: '+ ₹2,340'},
          ]}
        />

        <PolicySection
          title="CANCELLATION"
          titleColor="#E81E54"
          data={[
            {label: 'Before 29th Sep', value: '₹2,999'},
            {label: '4 hours to 4 days', value: '₹3,999'},
            {label: '0 hours to 4 hours', value: 'Non-Refundable'},
          ]}
        />

        <PolicySection
          title="RESCHEDULE"
          titleColor="#FFD400"
          data={[
            {label: 'Before 29th Sep', value: '₹2,250 + Fare difference'},
            {label: '4 hours to 4 days', value: '₹2,999 + Fare difference'},
            {label: '0 hours to 4 hours', value: 'Non-Changeable'},
          ]}
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>TERMS & CONDITIONS</Text>
          {[
            'Cancellation charges are applicable per passenger per sector.',
            'Discount and Assured fee, if any, will be adjusted in the final refund amount.',
            'Partial cancellation cannot be made for tickets booked under special or discounted fares.',
            'In case of a no-show or for tickets cancelled post a specific time, only statutory taxes are refundable.',
            'Penalty charged by the airline is indicative only and may change without any prior notice.',
            'Cancellation request will be processed only within the mentioned time period.',
            'If the flight fare is less than default cancellation penalty then taxes will be refundable.',
            'Reschedule request will be processed only within the mentioned time period.',
            'The difference in fares between the old and the new booking will also be payable by the user.',
          ].map((item, index) => (
            <Text key={index} style={styles.termsText}>
              {index + 1}. {item}
            </Text>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footerButtons}>
        <View style={styles.applyButton}>
          <Text style={styles.applyButtonText}>
            {fareDetails?.Results?.Fare?.BaseFare}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => navigation.navigate('ReviewFlight')}
        >
          <Text style={styles.bookButtonText}>BOOK NOW</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};

export default FlightDetailsScreen;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: '#ffffff',
  },
  flightCard: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 4,
    elevation: 5,
  },
  airlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  airlineLogo: {
    width: 44,
    height: 44,
    marginRight: 10,
  },
  airlineName: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  flightCode: {
    color: '#a5a5a5',
    fontSize: 14,
  },
  route: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  class: {
    color: '#cccccc',
    fontSize: 15,
  },
  price: {
    color: '#10E0F9',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
  listContainer: {
    paddingBottom: 10,
    paddingTop: 20,
  },
  flightInfoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  date: {
    color: '#ffffff',
    fontSize: 15,
  },
  duration: {
    color: '#10E0F9',
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  location: {
    color: '#a5a5a5',
    fontSize: 15,
  },
  baggageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  baggage: {
    color: '#ffffff',
    fontSize: 15,
  },
  layoverCard: {
    backgroundColor: '#10E0F9',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  layoverText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#FFFFFF99',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 8,
  },

  totalFareLabel: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '400',
  },
  totalFareAmount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
  },
  termsText: {
    color: '#a5a5a5',
    fontSize: 13,
    marginBottom: 6,
  },
  bookNowButton: {
    backgroundColor: '#10E0F9',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  bookNowText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
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
