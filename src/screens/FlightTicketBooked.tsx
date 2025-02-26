import React from 'react';
import {Image, ScrollView} from 'react-native';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import ScreenLayout from '../components/ScreenLayout';
import FarePolicies from '../components/FarePolicies';

const bookingData = {
  id: 'IH12839757909943230',
  amount: '₹4195',
  email: 'sayeedafzal1440@gmail.com',
  bookingNumber: '1470481953',
  bookedOn: '12 Dec, 2024',
  bookingDate: '21 Jan, 2024',
  pnr: 'R31YMK',
  status: 'Confirmed',
};

const FlightTicketBooked = ({navigation}: any) => {
  return (
    <ScreenLayout back>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{flex: 1, backgroundColor: '#141414'}}>
        <BookingDetails booking={bookingData} />
        <FlightTicket />
        <FlightTicket2
          departureTime="07:55"
          arrivalTime="10:20"
          duration="2H 55M"
          departureCity="Bangalore"
          arrivalCity="Hyderabad"
          departureCode="BLR"
          arrivalCode="HYD"
          departureAirport="Indira Gandhi International Airport"
          arrivalAirport="Chhatrapati Shivaji International Airport"
          departureTerminal="1"
          arrivalTerminal="2"
        />

        <Layover />

        <FlightTicket2
          departureTime="07:55"
          arrivalTime="10:20"
          duration="2H 55M"
          departureCity="New Delhi"
          arrivalCity="Mumbai"
          departureCode="DEL"
          arrivalCode="BOM"
          departureAirport="Indira Gandhi International Airport"
          arrivalAirport="Chhatrapati Shivaji International Airport"
          departureTerminal="1"
          arrivalTerminal="2"
        />
        <BillingDetails navigation={navigation} />
      </ScrollView>
    </ScreenLayout>
  );
};

export default FlightTicketBooked;

const BookingDetails = ({booking}: any) => {
  return (
    <View style={BookingDetailsStyles.container}>
      <View style={BookingDetailsStyles.alert}>
        <Text style={BookingDetailsStyles.successText}>Booking Complete</Text>
        <Text style={BookingDetailsStyles.emailText}>
          A confirmation email has been sent to {booking.email}
        </Text>
      </View>

      <View style={BookingDetailsStyles.detailsCard}>
        <Text style={BookingDetailsStyles.title}>Booking Details</Text>
        <View style={BookingDetailsStyles.row}>
          <Text style={BookingDetailsStyles.label}>Booking ID</Text>
          <Text style={BookingDetailsStyles.value}>{booking.id}</Text>
        </View>
        <View style={BookingDetailsStyles.row}>
          <Text style={BookingDetailsStyles.label}>Booking Number</Text>
          <Text style={BookingDetailsStyles.value}>
            {bookingData?.bookingNumber}
          </Text>
        </View>
        <View style={BookingDetailsStyles.row}>
          <Text style={BookingDetailsStyles.label}>Booked On</Text>
          <Text style={BookingDetailsStyles.value}>
            {bookingData?.bookedOn}
          </Text>
        </View>
        <View style={BookingDetailsStyles.row}>
          <Text style={BookingDetailsStyles.label}>Booking Date</Text>
          <Text style={BookingDetailsStyles.value}>
            {bookingData?.bookingDate}
          </Text>
        </View>
        <View style={BookingDetailsStyles.row}>
          <Text style={BookingDetailsStyles.label}>Amount</Text>
          <Text style={BookingDetailsStyles.value}>{bookingData?.amount}</Text>
        </View>
        <View style={BookingDetailsStyles.row}>
          <Text style={BookingDetailsStyles.label}>PNR</Text>
          <Text style={BookingDetailsStyles.value}>{bookingData?.pnr}</Text>
        </View>
        <View style={BookingDetailsStyles.row}>
          <Text style={BookingDetailsStyles.label}>Status</Text>
          <Text style={BookingDetailsStyles.value}>{bookingData?.status}</Text>
        </View>
      </View>
    </View>
  );
};

const BookingDetailsStyles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#121212',
    flex: 1,
  },
  alert: {
    backgroundColor: '#D4EDDA',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  successText: {
    fontWeight: 'bold',
    color: '#155724',
    fontSize: 16,
  },
  emailText: {
    color: '#155724',
    fontSize: 14,
  },
  detailsCard: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#303030',
    paddingVertical: 8,
  },
  label: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  value: {
    color: '#FFFFFF',
    fontSize: 14,
  },
});

const FlightTicket = () => {
  return (
    <View style={styles.container}>
      {/* Airline Info */}
      <View style={styles.airlineRow}>
        <Image
          source={require('../../assets/airindia.png')}
          style={styles.airlineLogo}
        />
        <View>
          <Text style={styles.airlineName}>Air India</Text>
          <Text style={styles.classText}>Economy Class</Text>
        </View>
      </View>

      {/* Flight Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.dateText}>Mon, 20 May</Text>
        <Text style={styles.durationText}>2H 55M</Text>
        <Text style={styles.dateText}>Mon, 20 May</Text>
      </View>

      <View style={styles.flightRow}>
        <View style={styles.cityContainer}>
          <Text style={styles.timeText}>07:55</Text>
          <Text style={styles.cityText}>Bangalore</Text>
        </View>
        <Image source={require('../../assets/ongoing.png')} />
        <View style={styles.cityContainer}>
          <Text style={styles.timeText}>10:20</Text>
          <Text style={styles.cityText}>Hyderabad</Text>
        </View>
      </View>

      {/* Baggage Info */}
      <View style={styles.baggageContainer}>
        <View style={styles.baggageBox}>
          <Text style={styles.baggageText}>1 Cabin bag - 7kg</Text>
        </View>
        <View style={styles.baggageBox}>
          <Text style={styles.baggageText}>2 Check-in Bags 23kg each</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 12,
    borderColor: '#444',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  airlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  airlineLogo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  airlineName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  classText: {
    color: '#aaa',
    fontSize: 14,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateText: {
    color: '#aaa',
    fontSize: 14,
  },
  durationText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  flightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cityContainer: {
    alignItems: 'center',
  },
  timeText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cityText: {
    color: '#aaa',
    fontSize: 14,
  },
  baggageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  baggageBox: {
    backgroundColor: '#2A2A2A',
    padding: 10,
    borderRadius: 8,
  },
  baggageText: {
    color: '#ddd',
    fontSize: 12,
  },

  sectionTitle: {
    color: '#FFFFFF99',
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 8,
    paddingLeft: 20,
    paddingTop: 10,
  },

  supportBox: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  supportText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  downloadContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  downloadButton: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    width: '48%',
    justifyContent: 'center',
  },
  downloadIcon: {
    width: 20,
    height: 20,
    tintColor: '#00BFFF',
    marginRight: 8,
  },
  downloadText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
  },
});

interface FlightProps {
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureCity: string;
  arrivalCity: string;
  departureCode: string;
  arrivalCode: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTerminal: string;
  arrivalTerminal: string;
}

const FlightTicket2: React.FC<FlightProps> = ({
  departureTime,
  arrivalTime,
  duration,
  departureCity,
  arrivalCity,
  departureCode,
  arrivalCode,
  departureAirport,
  arrivalAirport,
  departureTerminal,
  arrivalTerminal,
}) => {
  return (
    <View style={FlightTicket2Styles.container}>
      {/* Flight Date & Duration */}
      <View style={FlightTicket2Styles.dateContainer}>
        <Text style={FlightTicket2Styles.dateText}>Mon, 20 May</Text>
        <Text style={FlightTicket2Styles.durationText}>{duration}</Text>
        <Text style={FlightTicket2Styles.dateText}>Mon, 20 May</Text>
      </View>

      {/* Flight Route */}
      <View style={FlightTicket2Styles.flightRow}>
        <View style={FlightTicket2Styles.cityContainer}>
          <Text style={FlightTicket2Styles.timeText}>{departureTime}</Text>
          <Text style={FlightTicket2Styles.cityCode}>{departureCode}</Text>
          <Text style={FlightTicket2Styles.cityCode}>{departureCity}</Text>
          <Text style={FlightTicket2Styles.airportText}>
            {departureAirport}
          </Text>
          <Text style={FlightTicket2Styles.terminalText}>
            Terminal {departureTerminal}
          </Text>
        </View>

        <Image source={require('../../assets/ongoing.png')} />

        <View style={FlightTicket2Styles.cityContainer}>
          <Text
            style={[
              FlightTicket2Styles.timeText,
              {textAlign: 'right', marginRight: 5},
            ]}>
            {arrivalTime}
          </Text>
          <Text
            style={[
              FlightTicket2Styles.cityCode,
              {textAlign: 'right', marginRight: 5},
            ]}>
            {arrivalCode}
          </Text>
          <Text
            style={[
              FlightTicket2Styles.cityCode,
              {textAlign: 'right', marginRight: 5},
            ]}>
            {arrivalCity}
          </Text>
          <Text
            style={[
              FlightTicket2Styles.airportText,
              {textAlign: 'right', marginRight: 5},
            ]}>
            {arrivalAirport}
          </Text>
          <Text
            style={[
              FlightTicket2Styles.terminalText,
              {textAlign: 'right', marginRight: 5},
            ]}>
            Terminal {arrivalTerminal}
          </Text>
        </View>
      </View>

      {/* Baggage Information */}
      <View style={FlightTicket2Styles.baggageContainer}>
        <View style={FlightTicket2Styles.baggageBox}>
          <Text style={FlightTicket2Styles.baggageText}>1 Cabin bag - 7kg</Text>
        </View>
        <View style={FlightTicket2Styles.baggageBox}>
          <Text style={FlightTicket2Styles.baggageText}>
            2 Check-in Bags 23kg each
          </Text>
        </View>
      </View>
    </View>
  );
};

const FlightTicket2Styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 12,
    borderColor: '#444',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dateText: {
    color: '#aaa',
    fontSize: 14,
  },
  durationText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  flightRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  cityContainer: {
    // alignItems: 'center',
    // borderWidth: 1,
    // backgroundColor: 'red',
    width: '35%',
  },
  timeText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cityCode: {
    color: '#00BFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  airportText: {
    color: '#aaa',
    fontSize: 12,
    // width: '30%',
  },
  terminalText: {
    color: '#888',
    fontSize: 12,
  },
  planeIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  baggageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  baggageBox: {
    backgroundColor: '#2A2A2A',
    padding: 10,
    borderRadius: 8,
  },
  baggageText: {
    color: '#ddd',
    fontSize: 12,
  },
});

const Layover = () => {
  return (
    <View style={LayoverStyles.layoverContainer}>
      <Text style={LayoverStyles.layoverText}>Change flight | 8h layover</Text>
    </View>
  );
};

const LayoverStyles = StyleSheet.create({
  layoverContainer: {
    backgroundColor: '#2A2A2A',
    padding: 10,
    borderRadius: 8,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  layoverText: {
    color: '#aaa',
    fontSize: 14,
  },
});

const BillingDetails = ({navigation}: any) => {
  return (
    <View style={BillingDetailsStyles.container}>
      {/* Action Buttons */}
      <View style={BillingDetailsStyles.actionContainer}>
        <ActionButton
          icon={require('../../assets/cancelFlight.png')}
          text="Cancel flight"
        />
        <ActionButton
          icon={require('../../assets/rescheduling.png')}
          text="Re-schedule"
        />
        <ActionButton
          icon={require('../../assets/refund.png')}
          text="Check refund"
        />
      </View>

      {/* Billing Information */}
      <View style={BillingDetailsStyles.billingBox}>
        <Text style={BillingDetailsStyles.billingTitle}>Billing Details</Text>
        <View
          style={{borderWidth: 1, marginVertical: 10, borderColor: '#444'}}
        />
        <View style={BillingDetailsStyles.infoRow}>
          <FontAwesome5
            name="phone-alt"
            size={15}
            style={BillingDetailsStyles.icon}
            color={'#fff'}
          />
          <Text style={BillingDetailsStyles.infoText}>+91 9876543210</Text>
        </View>
        <View
          style={{borderWidth: 1, marginVertical: 10, borderColor: '#444'}}
        />
        <View style={BillingDetailsStyles.infoRow}>
          <Foundation
            name="mail"
            size={20}
            style={BillingDetailsStyles.icon}
            color={'#fff'}
          />
          <Text style={BillingDetailsStyles.infoText}>
            sayeedafzal@gmail.com
          </Text>
        </View>
      </View>

      {/* Fare Summary */}
      <View style={BillingDetailsStyles.fareContainer}>
        <Text style={BillingDetailsStyles.fareTitle}>Fare Summary</Text>
        <Text style={BillingDetailsStyles.travellerInfo}>
          4 Travellers, 3 Adults, 1 Child
        </Text>

        <View style={BillingDetailsStyles.fareBox}>
          <FareRow label="Base Fare" amount="₹4,340" />
          <View
            style={{borderWidth: 1, marginVertical: 10, borderColor: '#ccc'}}
          />
          <FareRow label="Seats" amount="₹350" />
          <View
            style={{borderWidth: 1, marginVertical: 10, borderColor: '#ccc'}}
          />
          <FareRow label="Taxes & Fees" amount="₹250" />
          <View style={BillingDetailsStyles.totalRow}>
            <Text style={BillingDetailsStyles.totalText}>TOTAL</Text>
            <Text style={BillingDetailsStyles.totalAmount}>₹12,340</Text>
          </View>
        </View>
      </View>

      {/* Note Section */}
      <View style={BillingDetailsStyles.noteContainer}>
        <Text style={BillingDetailsStyles.noteTitle}>⚠️ Note</Text>
        <Text style={BillingDetailsStyles.noteText}>
          1. This ticket is non-refundable.
        </Text>
      </View>


<FarePolicies/>
      {/* Customer Support */}
      <Text style={styles.sectionTitle}>CUSTOMER HELP & SUPPORT</Text>
      <TouchableOpacity style={styles.supportBox}>
        <Text style={styles.supportText}>1800-0001-5456-51515</Text>
        <FontAwesome5 name="headphones" color={'#fff'} size={20} />
      </TouchableOpacity>

      {/* Download Buttons */}
      <View style={styles.downloadContainer}>
        <DownloadButton
          icon={require('../../assets/ticket.png')}
          text="Download E-Ticket"
        />
        <DownloadButton
          icon={require('../../assets/invoice.png')}
          text="Download Invoice"
        />
      </View>
    </View>
  );
};

// Download Button Component
const DownloadButton = ({icon, text}: {icon: any; text: string}) => (
  <TouchableOpacity style={styles.downloadButton}>
    <Image source={icon} style={styles.downloadIcon} />
    <Text style={styles.downloadText}>{text}</Text>
  </TouchableOpacity>
);


// Action Button Component
const ActionButton = ({icon, text}: {icon: any; text: string}) => (
  <TouchableOpacity style={BillingDetailsStyles.actionButton}>
    <Image source={icon} style={BillingDetailsStyles.actionIcon} />
    <Text style={BillingDetailsStyles.actionText}>{text}</Text>
  </TouchableOpacity>
);

// Fare Row Component
const FareRow = ({label, amount}: {label: string; amount: string}) => (
  <View style={BillingDetailsStyles.fareRow}>
    <Text style={BillingDetailsStyles.fareLabel}>{label}</Text>
    <Text style={BillingDetailsStyles.fareAmount}>{amount}</Text>
  </View>
);

const BillingDetailsStyles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    paddingVertical: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    width: 110,
  },
  actionIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  actionText: {
    color: '#000',
    fontSize: 12,
    fontWeight: '500',
  },
  billingBox: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingBottom: 10,
  },
  billingTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 15,
    paddingTop: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingLeft: 15,
    paddingTop: 15,
  },
  icon: {
    marginRight: 10,
  },
  infoText: {
    color: '#fff',
    fontSize: 14,
  },
  fareContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  fareTitle: {
    color: '#888',
    fontSize: 14,
  },
  travellerInfo: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  fareBox: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    padding: 16,
  },
  fareRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  fareLabel: {
    color: '#444',
    fontSize: 14,
  },
  fareAmount: {
    color: '#444',
    fontSize: 14,
    fontWeight: '600',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  noteContainer: {
    backgroundColor: '#FFF8E1',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 20,
  },
  noteTitle: {
    color: '#DAA520',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noteText: {
    color: '#555',
    fontSize: 14,
  },
});
