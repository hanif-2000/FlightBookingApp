import React, {memo, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

interface FlightCardProps {
  airline: string;
  classType: string; // Renamed from `class` to avoid keyword conflict
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

const PriceDetails: React.FC<{price: string; detailsButton: string}> = ({
  price,
  detailsButton,
}) => (
  <View style={styles.priceDetails}>
    <Text style={styles.priceText}>{price}</Text>
    <TouchableOpacity style={styles.detailsButton}>
      <Text style={styles.detailsButtonText}>{detailsButton}</Text>
    </TouchableOpacity>
  </View>
);

const FlightCard: React.FC<FlightCardProps> = ({
  airline,
  classType,
  date,
  duration,
  time1,
  time2,
  location1,
  location2,
  baggage1,
  baggage2,
  price,
  detailsButton,
  airlineImg,
  isSelected,
  onSelect,
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
        <TouchableOpacity style={styles.checkboxContainer} onPress={onSelect}>
          <View style={[styles.checkbox, isSelected && styles.checked]}>
            {isSelected && <View style={styles.checkmark} />}
          </View>
        </TouchableOpacity>
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
      {baggage1 && baggage2 && (
        <View style={styles.baggageDetails}>
          <Text style={styles.baggageText}>{baggage1}</Text>
          <Text style={styles.baggageText}>{baggage2}</Text>
        </View>
      )}

      {/* Price & Details Button */}
      <PriceDetails price={price} detailsButton={detailsButton} />
    </View>
  );
};

// Default Props
FlightCard.defaultProps = {
  baggage1: 'Cabin: 7kg',
  baggage2: 'Check-in: 15kg',
};

export default memo(FlightCard);

const styles = StyleSheet.create({
  flightCard: {
    backgroundColor: '#141414',
    borderRadius: 15,
    // padding: 15,
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
    borderRadius: 10,
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

  checkboxContainer: {
    position: 'absolute',
    top: 10,
    right: 5,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFFFFF1F',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#3e4e59',
    borderColor: '#3e4e59',
  },
  checkmark: {
    width: 12,
    height: 12,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
});
