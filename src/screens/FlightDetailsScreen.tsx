import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const FlightDetailsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/back.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Flight Details</Text>
        <TouchableOpacity>
          {/* <Image source={require("../../assets/menu.png")} style={styles.icon} /> */}
        </TouchableOpacity>
      </View>

      {/* Flight Information */}
      <View style={styles.flightCard}>
        <View style={styles.airlineRow}>
          <Image
            source={require('../../assets/indigo.png')}
            style={styles.airlineLogo}
          />
          <View>
            <Text style={styles.airlineName}>Indigo</Text>
            <Text style={styles.flightCode}>QP - 1355</Text>
          </View>
        </View>
        <Text style={styles.route}>New Delhi to Bengaluru</Text>
        <Text style={styles.class}>Economy</Text>
        <Text style={styles.price}>₹2,170</Text>
      </View>

      {/* Flight Timings */}
      <View style={styles.flightInfoCard}>
        <Text style={styles.date}>Mon, 20 May</Text>
        <Text style={styles.duration}>2H 55M</Text>
        <Text style={styles.date}>Mon, 20 May</Text>
      </View>

      <View style={styles.flightInfoCard}>
        <Text style={styles.time}>07:55</Text>
        <Image
          source={require('../../assets/ongoing.png')}
          style={styles.icon}
        />
        <Text style={styles.time}>10:20</Text>
      </View>

      <View style={styles.locationRow}>
        <Text style={styles.location}>DEL - New Delhi</Text>
        <Text style={styles.location}>BOM - Mumbai</Text>
      </View>

      <View style={styles.baggageRow}>
        <Text style={styles.baggage}>1 Cabin bag - 7kg</Text>
        <Text style={styles.baggage}>2 Check-in Bags 23kg</Text>
      </View>

      {/* Change Flight | Layover */}
      <View style={styles.layoverCard}>
        <Text style={styles.layoverText}>Change Flight | 8h Layover</Text>
      </View>

      {/* Book Now Button */}
      <TouchableOpacity style={styles.bookNowButton}>
        <Text style={styles.bookNowText}>BOOK NOW</Text>
      </TouchableOpacity>

      {/* Fare Breakup */}
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
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>Change in Itinerary</Text>
          <Text style={styles.fareAmount}>+ ₹2,340</Text>
        </View>
      </View>

      {/* Cancellation Policy */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>CANCELLATION</Text>
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>Before 29th Sep</Text>
          <Text style={styles.fareAmount}>₹2,999</Text>
        </View>
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>4 hours to 4 days</Text>
          <Text style={styles.fareAmount}>₹3,999</Text>
        </View>
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>0 hours to 4 hours</Text>
          <Text style={styles.fareAmount}>Non-Refundable</Text>
        </View>
      </View>

      {/* Reschedule Policy */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>RESCHEDULE</Text>
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>Before 29th Sep</Text>
          <Text style={styles.fareAmount}>₹2,250 + Fare difference</Text>
        </View>
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>4 hours to 4 days</Text>
          <Text style={styles.fareAmount}>₹2,999 + Fare difference</Text>
        </View>
        <View style={styles.fareRow}>
          <Text style={styles.fareLabel}>0 hours to 4 hours</Text>
          <Text style={styles.fareAmount}>Non-Changeable</Text>
        </View>
      </View>

      {/* Terms & Conditions */}
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
  );
};

export default FlightDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark mode background
    padding: 15,
  },

  // Header
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

  // Flight Card
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

  // Flight Timings
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

  // Locations
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  location: {
    color: '#a5a5a5',
    fontSize: 15,
  },

  // Baggage
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

  // Layover
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

  // Sections (Fare, Cancellation, Reschedule)
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

  // Terms & Conditions
  termsText: {
    color: '#a5a5a5',
    fontSize: 13,
    marginBottom: 6,
  },

  // Book Now Button
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
});
