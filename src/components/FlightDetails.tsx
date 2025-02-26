import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface FlightDetailsProps {
  title: string;
  route: string;
  date: string;
  day: string;
  icon: any;
  layoff: any;
  down:any
}

const FlightDetails = ({
  title,
  route,
  date,
  day,
  icon,
  layoff,
  down
}: FlightDetailsProps) => {
  return (
    <View style={styles.flightDetailsSection}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.departureTitle}>{title}</Text>
        <Image
          source={layoff}
          style={{position: 'absolute', right: -20, top: -20,}}
        />
      </View>

      <View style={styles.flightRoute}>
        <Image
          source={icon}
          // tintColor={selected === item.id ? '#fff' : '#434343'}
        />
        <Text style={styles.routeText}> {route}</Text>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: '#F0F0F0'}} />
      <View style={styles.flightDate}>
        <View style={[styles.dateText]}>
          <Image source={down} style={{marginRight:10}}/>
          <Text style={{color: '#000'}}>{date}</Text>
        </View>
        <View style={[styles.dateText]}>
        <Image source={down} style={{marginRight:10}}/>
        <Text style={{color: '#bbb'}}>{day}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flightDetailsSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },
  departureTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    // marginBottom: 10,
  },
  flightRoute: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  routeText: {
    color: '#000',
    fontSize: 16,
  },
  flightDate: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: '#FAFAFA',
  },
  dateText: {
    color: '#000',
    fontSize: 16,
    marginRight: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 12,
    flexDirection:'row',
    height:40,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20
  },
});

export default FlightDetails;
