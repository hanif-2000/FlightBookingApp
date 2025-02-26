import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Entypo';
import Collapsible from 'react-native-collapsible';

// Flight Card Component
const FlightCard = ({airline, flightCode, route, price, duration}) => (
  <View style={styles.flightCard}>
    <View style={styles.airlineRow}>
      <View>
        <Text style={styles.airlineName}>{airline}</Text>
        <Text style={styles.flightCode}>{flightCode}</Text>
      </View>
      <Image
        source={require('../../assets/indigo.png')}
        style={styles.airlineLogo}
      />
    </View>
    <View style={styles.routeRow}>
      <Image
        source={require('../../assets/location.png')}
        style={styles.icon}
      />
      <Text style={styles.route}>{route}</Text>
    </View>
    <View style={styles.separator} />
    <View style={styles.flightInfoRow}>
      <Text style={styles.class}>Economy</Text>
      <Text style={styles.price}>₹{price}</Text>
      <Text style={styles.class}>{duration}</Text>
      <Text style={styles.price}>Non-stop</Text>
    </View>
  </View>
);

// Flight Timing Info Component
const FlightInfo = ({date, departure, arrival, depLocation, arrLocation}) => (
  <View style={styles.flightInfoContainer}>
    <View style={styles.flightInfoCard}>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.duration}>2H 55M</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
    <View style={styles.flightInfoCard}>
      <Text style={styles.time}>{departure}</Text>
      <Image source={require('../../assets/ongoing.png')} style={styles.icon} />
      <Text style={styles.time}>{arrival}</Text>
    </View>
    <View style={styles.locationRow}>
      <Text style={styles.location}>{depLocation}</Text>
      <Text style={styles.location}>{arrLocation}</Text>
    </View>
    <View style={styles.separator} />
    <View style={styles.baggageRow}>
      <Text style={styles.baggage}>1 Cabin bag - 7kg</Text>
      <Text style={styles.baggage}>2 Check-in Bags - 23kg</Text>
    </View>
  </View>
);

// Policy Button Component
const PolicyButton = ({title}) => (
  <TouchableOpacity style={styles.policyButton}>
    <Text style={styles.policyButtonText}>{title}</Text>
    <Icon name="info-with-circle" size={16} color="#fff" />
  </TouchableOpacity>
);

const AccordionItem = ({title, content}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View style={styles.accordionContainer}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>{title}</Text>
          <Text style={{color: '#fff'}}>{content}</Text>
        </View>

        <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
          <Text style={{color: '#fff'}}>icon</Text>
        </TouchableOpacity>
      </View>

      <Collapsible collapsed={isCollapsed}>
        <View style={styles.body}>
          <Text>{content}</Text>
        </View>
      </Collapsible>
    </View>
  );
};

const ReviewFlightScreen = () => {
  return (
    <View style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Header back left step={1} />

        {/* Flight Details */}
        <FlightCard
          airline="Indigo"
          flightCode="QP - 1355"
          route="New Delhi to Bengaluru"
          price="2,170"
          duration="2h 20m"
        />

        {/* Flight Timing Info */}
        <FlightInfo
          date="Mon, 20 May"
          departure="07:55"
          arrival="10:20"
          depLocation="DEL - New Delhi"
          arrLocation="BOM - Mumbai"
        />

        {/* Layover */}
        <View style={styles.layoverCard}>
          <Text style={styles.layoverText}>Change Flight | 8h Layover</Text>
        </View>

        {/* Second Flight Info */}
        <FlightInfo
          date="Mon, 20 May"
          departure="18:55"
          arrival="21:20"
          depLocation="BOM - Mumbai"
          arrLocation="BLR - Bengaluru"
        />

        {/* Fare Policies */}
        <Text style={styles.sectionTitle}>FARE POLICIES</Text>
        <View style={styles.fareRow}>
          <PolicyButton title="Baggage Policy" />
          <PolicyButton title="Cancellation Policy" />
          <PolicyButton title="Reschedule Policy" />
        </View>
      </ScrollView>
      <View style={[styles.separator, {backgroundColor: '#FFFFFF1F'}]} />

      <View style={styles.container}>
        <AccordionItem
          title="Fare Summary"
          content="6 Travelers - 2 Adult, 1 Child, 1 Infant"
        />
        {/* <AccordionItem title="Baggage Policy" content="Baggage allowance is 7kg carry-on." />
      <AccordionItem title="Cancellation Policy" content="You can cancel within 24 hours." /> */}
      </View>
      {/* Book Now Button */}
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <TouchableOpacity style={styles.priceButton}>
          <Text style={styles.priceText}>₹ 182,170</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookNowButton}>
          <Text style={styles.bookNowText}>REVIEW TRAVELERS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReviewFlightScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContainer: {
    paddingHorizontal: 12,
    paddingBottom: 20,
  },

  // Flight Card
  flightCard: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 3},
    shadowRadius: 3,
    elevation: 3,
  },
  airlineRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  airlineLogo: {
    width: 40,
    height: 40,
  },
  airlineName: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  flightCode: {
    color: '#a5a5a5',
    fontSize: 13,
  },
  routeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    height: 16,
    marginRight: 6,
  },
  route: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
  },
  separator: {
    borderBottomColor: '#E0E0E0',
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  flightInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  class: {
    color: '#000',
    fontSize: 13,
  },
  price: {
    color: '#10E0F9',
    fontSize: 13,
    fontWeight: 'bold',
  },

  // Flight Info
  flightInfoContainer: {
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  flightInfoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  date: {
    color: '#ffffff',
    fontSize: 14,
  },
  duration: {
    color: '#10E0F9',
    fontSize: 14,
    fontWeight: 'bold',
  },
  time: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location: {
    color: '#a5a5a5',
    fontSize: 13,
  },
  baggageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  baggage: {
    color: '#ffffff',
    fontSize: 13,
  },

  // Layover
  layoverCard: {
    backgroundColor: '#2A2A2A',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 12,
  },
  layoverText: {
    color: '#fff',
    fontSize: 13,
  },

  // Section Title
  sectionTitle: {
    color: '#FFFFFF99',
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 8,
  },

  // Fare Policies
  fareRow: {
    marginBottom: 16,
  },
  policyButton: {
    backgroundColor: '#2A2A2A',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  policyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },

  priceButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    padding: 12,
  },
  priceText: {
    color: '#141414',
    fontSize: 14,
    fontWeight: '700',
  },

  bookNowButton: {
    backgroundColor: '#10E0F9',
    borderRadius: 8,
    alignItems: 'center',
    padding: 12,
  },
  bookNowText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
  },

  container: {padding: 10},
  accordionContainer: {
    marginBottom: 10,
    // borderWidth: 1,
    borderRadius: 8,
    // borderColor: '#ccc',
  },
  header: {
    padding: 10,
    // backgroundColor: '#151515',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {fontWeight: 'bold', color: '#fff'},
  body: {padding: 15, backgroundColor: '#fff'},
});
