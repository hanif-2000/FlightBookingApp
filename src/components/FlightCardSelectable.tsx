import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import RoundCheckbox from './RoundCheckbox';

interface FlightCardProps {
  airline: string;
  classType: string;
  date: string;
  duration: string;
  time1: string;
  time2: string;
  location1: string;
  location2: string;
  baggage1?: string;
  baggage2?: string;
  price: string;
  detailsButton: string;
  airlineImg: any;
  isSelected: boolean;
  onSelect: () => void;
  changeFlight: string;
  changeFlightStatus: boolean;
  airlineChangeFlight: string;
  classTypeChangeFlight: string;
  dateChangeFlight: string;
  durationChangeFlight: string;
  time1ChangeFlight: string;
  time2ChangeFlight: string;
  location1ChangeFlight?: string;
  location2ChangeFlight?: string;
  onFlightDetails?: () => void;
}

const FlightTime: React.FC<{time1: string; time2: string}> = ({
  time1,
  time2,
}) => (
  <View style={styles.flightTime}>
    <Text style={styles.timeText}>{time1}</Text>
    <Image
      source={require('../../assets/ongoing.png')}
      style={styles.ongoingIcon}
    />
    <Text style={styles.timeText}>{time2}</Text>
  </View>
);

const FlightLocation: React.FC<{location1: string; location2: string}> = ({
  location1,
  location2,
}) => (
  <View style={styles.flightLocation}>
    <Text style={styles.locationText}>{location1}</Text>
    <Text style={styles.locationText}>{location2}</Text>
  </View>
);

const PriceDetails: React.FC<{price: string; detailsButton: string;onFlightDetails?:()=>void}> = ({
  price,
  detailsButton,
  onFlightDetails
}) => (
  <View style={styles.priceDetails}>
    <Text style={styles.priceText}>{price}</Text>
    <TouchableOpacity style={styles.detailsButton} onPress={onFlightDetails} >
      <Text style={styles.detailsButtonText}>{detailsButton}</Text>
    </TouchableOpacity>
  </View>
);

const FlightCardSelectable: React.FC<FlightCardProps> = ({
  airline,
  classType,
  date,
  duration,
  time1,
  time2,
  location1,
  location2,
  baggage1 = 'Cabin: 7kg',
  baggage2 = 'Check-in: 15kg',
  price,
  detailsButton,
  airlineImg,
  isSelected,
  onSelect,
  changeFlight,
  changeFlightStatus,
  airlineChangeFlight,
  classTypeChangeFlight,
  dateChangeFlight,
  durationChangeFlight,
  time1ChangeFlight,
  time2ChangeFlight,
  location1ChangeFlight,
  location2ChangeFlight,
  onFlightDetails,
}) => {


  return (
    <View style={[styles.flightCard]}>
      {/* Airline Details */}
      <View style={styles.airlineDetails}>
        <Image source={airlineImg} style={styles.airlineImage} />
        <View>
          <Text style={styles.airlineClass}>{airline}</Text>
          <Text style={styles.economyClass}>{classType}</Text>
        </View>
        <RoundCheckbox isSelected={isSelected} onSelect={onSelect} />
      </View>

      <View style={styles.separator} />

      {/* Flight Time */}
      <View style={styles.flightTime}>
        <Text style={styles.timeText}>{date}</Text>
        <Text style={styles.durationText}>{duration}</Text>
        <Text style={styles.timeText}>{date}</Text>
      </View>

      <FlightTime time1={time1} time2={time2} />
      <FlightLocation location1={location1} location2={location2} />

      {/* Baggage Details */}
      <View style={styles.baggageDetails}>
        <Text style={styles.baggageText}>{baggage1}</Text>
        <Text style={styles.baggageText}>{baggage2}</Text>
      </View>
      {changeFlightStatus && (
        <>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '10%',
                borderBottomWidth: 1,
                borderBottomColor: '#FFFFFF0D',
              }}
            />
            <View
              style={{
                flex: 1,
                width: '80%',
                paddingVertical: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#FFFFFF0D',
                alignSelf: 'center',
                borderRadius: 12,
                marginVertical: 10,
              }}>
              <Text style={{color: '#FFFFFFCC'}}>{changeFlight}</Text>
            </View>
            <View
              style={{
                width: '10%',
                borderBottomWidth: 1,
                borderBottomColor: '#FFFFFF0D',
              }}
            />
          </View>

          {/* Flight Time */}
          <View style={styles.flightTime}>
            <Text style={styles.timeText}>{dateChangeFlight}</Text>
            <Text style={styles.durationText}>{durationChangeFlight}</Text>
            <Text style={styles.timeText}>{dateChangeFlight}</Text>
          </View>

          <FlightTime time1={time1ChangeFlight} time2={time2ChangeFlight} />
          <FlightLocation
            location1={location1ChangeFlight}
            location2={location2ChangeFlight}
          />

          {/* Baggage Details */}
          <View style={styles.baggageDetails}>
            <Text style={styles.baggageText}>{baggage1}</Text>
            <Text style={styles.baggageText}>{baggage2}</Text>
          </View>
        </>
      )}

      {/* Price & Details Button */}
      <PriceDetails price={price} detailsButton={detailsButton} onFlightDetails={onFlightDetails} />
    </View>
  );
};

export default memo(FlightCardSelectable);

const styles = StyleSheet.create({
  flightCard: {
    backgroundColor: '#141414',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  selectedCard: {
    borderColor: '#10E0F9',
  },
  airlineDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#272727',
    padding: 10,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  airlineImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    resizeMode: 'contain',
  },
  airlineClass: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  economyClass: {
    fontSize: 14,
    color: '#FFFFFFCC',
  },
  separator: {
    borderBottomColor: '#FFFFFF1F',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  flightTime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  timeText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  durationText: {
    fontSize: 16,
    color: '#777',
  },
  ongoingIcon: {
    height: 20,
  },
  flightLocation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  locationText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  baggageDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  baggageText: {
    fontSize: 14,
    color: '#777',
  },
  priceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    backgroundColor: '#272727',
    padding: 10,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    borderColor:'#FFFFFF1F'
  },
  priceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailsButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  detailsButtonText: {
    color: '#10E0F9',
    fontWeight: '700',
    fontSize: 12,
  },
});
