import React, {memo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import RoundCheckbox from './RoundCheckbox';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

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
  onFlightDetails,
}) => (
  <View style={styles.flightLocation}>
    <Text style={styles.locationText}>{location1}</Text>
    <Text style={[styles.locationText, {textAlign: 'right'}]}>{location2}</Text>
  </View>
);

const PriceDetails: React.FC<{
  price: string;
  detailsButton: string;
  onFlightDetails?: () => void;
}> = ({price, detailsButton, onFlightDetails}) => (
  <View style={styles.priceDetails}>
    <Text style={styles.priceText}>{price}</Text>
    <TouchableOpacity style={styles.detailsButton} onPress={onFlightDetails}>
      <Text style={styles.detailsButtonText}>{detailsButton}</Text>
    </TouchableOpacity>
  </View>
);

const FlightCardSelectable = ({
  isSelected,
  onSelect,
  item,
  detailsButton,
  fare,
  ResultIndex,
}: any) => {
  const navigation = useNavigation();
  let tmp = item?.Segments && item.Segments[0] && item.Segments[0][0];

  const onFlightDetails = () => {
    navigation.navigate('FlightDetails', {ResultIndex: ResultIndex});
  };
  return (
    <View style={[styles.flightCard]}>
      {/* Airline Details */}
      <View style={styles.airlineDetails}>
        <Image
          source={require('../../assets/indigo.png')}
          style={styles.airlineImage}
        />
        <View>
          <Text style={styles.airlineClass}>{tmp?.Airline?.AirlineName}</Text>
          <Text style={styles.economyClass}>{tmp?.SupplierFareClass}</Text>
        </View>
        <RoundCheckbox isSelected={isSelected} onSelect={onSelect} />
      </View>

      <View style={styles.separator} />

      {/* Flight Time */}
      <View style={styles.flightTime}>
        <Text style={styles.timeText}>
          {moment(tmp?.Destination?.ArrTime).format('DD-MM-YY')}
        </Text>
        <Text style={styles.durationText}>{tmp?.Duration}</Text>
        <Text style={styles.timeText}>
          {moment(tmp?.Origin?.DepTime).format('DD-MM-YY')}
        </Text>
      </View>

      <FlightTime
        time1={moment(tmp?.Destination?.ArrTime).format('HH:mm')}
        time2={moment(tmp?.Origin?.DepTime).format('HH:mm')}
      />
      <FlightLocation
        location1={tmp?.Origin?.Airport?.AirportName}
        location2={tmp?.Destination?.Airport?.AirportName}
      />

      {/* Baggage Details */}
      <View style={styles.baggageDetails}>
        <View
          style={{
            padding: 10,
            borderColor: '#FFFFFF1F',
            borderWidth: 1,
            borderRadius: 12,
            width: '45%',
            alignItems: 'center',
            backgroundColor: '#FFFFFF0D',
          }}>
          <Text style={styles.baggageText}>{tmp?.Baggage}</Text>
        </View>
        <View
          style={{
            padding: 10,
            borderColor: '#FFFFFF1F',
            borderWidth: 1,
            borderRadius: 12,
            width: '45%',
            alignItems: 'center',
            backgroundColor: '#FFFFFF0D',
          }}>
          <Text style={styles.baggageText}>{tmp?.CabinBaggage}</Text>
        </View>
      </View>

      {tmp?.StopOver && (
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
              <Text style={{color: '#FFFFFFCC'}}>
                Change flight | 8h layover
              </Text>
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
            <Text style={styles.timeText}>
              {moment(tmp?.Destination?.ArrTime).format('DD-MM-YY')}
            </Text>
            <Text style={styles.durationText}>{tmp?.Duration}</Text>
            <Text style={styles.timeText}>
              {' '}
              {moment(tmp?.Origin?.DepTime).format('DD-MM-YY')}
            </Text>
          </View>

          <FlightTime
            time1={moment(tmp?.StopPointArrivalTime).format('HH:mm')}
            time2={moment(tmp?.StopPointDepartureTime).format('HH:mm')}
          />

          {/* Baggage Details */}
          <View style={styles.baggageDetails}>
            <View
              style={{
                padding: 10,
                borderColor: '#FFFFFF1F',
                borderWidth: 1,
                borderRadius: 12,
                width: '45%',
                alignItems: 'center',
                backgroundColor: '#FFFFFF0D',
              }}>
              <Text style={styles.baggageText}>{tmp?.Baggage}</Text>
            </View>
            <View
              style={{
                padding: 10,
                borderColor: '#FFFFFF1F',
                borderWidth: 1,
                borderRadius: 12,
                width: '45%',
                alignItems: 'center',
                backgroundColor: '#FFFFFF0D',
              }}>
              <Text style={styles.baggageText}>{tmp?.CabinBaggage}</Text>
            </View>
          </View>
        </>
      )}

      {/* Price & Details Button */}
      <PriceDetails
        price={`${fare?.Currency} ${fare?.PublishedFare}`}
        detailsButton={detailsButton}
        onFlightDetails={() => onFlightDetails()}
      />
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
    width: '40%',
  },
  baggageDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
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
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: '#FFFFFF1F',
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
