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
  location1ChangeFlight: string;
  location2ChangeFlight: string;
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

const AirPortName: React.FC<{location1: string; location2: string}> = ({
  location1,
  location2,
}) => (
  <View style={[styles.flightLocation]}>
    <Text style={[styles.airportNameView]}>{location1}</Text>
    <Text style={[styles.airportNameView, {textAlign: 'right'}]}>
      {location2}
    </Text>
  </View>
);

const TerminalName: React.FC<{location1: string; location2: string}> = ({
  location1,
  location2,
}) => (
  <View style={styles.flightLocation}>
    <Text style={styles.airportNameView}>{location1}</Text>
    <Text style={[styles.airportNameView, {textAlign: 'right'}]}>
      {location2}
    </Text>
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
}) => {
  return (
    <>
      <View style={[styles.flightCard]}>
        {/* Flight Time */}
        <View style={styles.flightTime}>
          <Text style={styles.timeText}>{date}</Text>
          <Text style={styles.durationText}>{duration}</Text>
          <Text style={styles.timeText}>{date}</Text>
        </View>

        <FlightTime time1={time1} time2={time2} />
        <FlightLocation location1={location1} location2={location2} />
        <AirPortName
          location1={'AirPort Name AirPortName AirPortName'}
          location2={' AirPort Name AirPortName AirPortName'}
        />
        <TerminalName location1={'Terminal 1'} location2={'Terminal 2'} />

        <View style={styles.separator} />

        {/* Baggage Details */}
        <View style={[styles.baggageDetails, {marginBottom: 10}]}>
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
            <Text style={styles.baggageText}>{baggage1}</Text>
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
            <Text style={styles.baggageText}>{baggage2}</Text>
          </View>
        </View>
      </View>
      <View>
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
                  backgroundColor: '#FFFFFF0D',
                }}>
                <Text style={{color: '#FFFFFFCC'}}>{changeFlight}</Text>
              </View>
            </View>
            <View style={styles.flightCard}>
              {/* Flight Time */}
              <View style={styles.flightTime}>
                <Text style={styles.timeText}>{dateChangeFlight}</Text>
                <Text style={styles.durationText}>{durationChangeFlight}</Text>
                <Text style={styles.timeText}>{dateChangeFlight}</Text>
              </View>

              <FlightTime time1={time1ChangeFlight} time2={time2ChangeFlight} />
              <FlightLocation location1={location1} location2={location2} />
              <AirPortName
                location1={'AirPort Name AirPortName AirPortName'}
                location2={' AirPort Name AirPortName AirPortName'}
              />
              <TerminalName location1={'Terminal 1'} location2={'Terminal 2'} />

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
                  <Text style={styles.baggageText}>{baggage1}</Text>
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
                  <Text style={styles.baggageText}>{baggage2}</Text>
                </View>
              </View>
            </View>
          </>
        )}
      </View>
    </>
  );
};

export default memo(FlightCard);

const styles = StyleSheet.create({
  flightCard: {
    backgroundColor: '#141414',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
    paddingTop: 10,
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
  airportNameView: {
    fontSize: 10,
    fontWeight: '400',
    color: '#FFFFFFCC',
    width: '30%',
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
    marginBottom: 10,
  },
  baggageText: {
    fontSize: 14,
    color: '#FFFFFFCC',
  },
});
