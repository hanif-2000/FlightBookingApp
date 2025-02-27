import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

interface FlightDetailsProps {
  title: string;
  route: string;
  date: string;
  day: string;
  icon: any;
  layoff: any;
  down: any;
}

const FlightDetails = ({
  title,
  route,
  date,
  day,
  icon,
  layoff,
  down,
}: FlightDetailsProps) => {
  const renderDateItem = (text: string) => (
    <View style={styles.dateItem}>
      <Image source={down} tintColor="#141414" style={styles.iconMargin} />
      <Text style={styles.dateText}>{text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Image source={layoff} style={styles.layoffIcon} />
        </View>
        <View style={styles.flightRoute}>
          <Image source={icon} />
          <Text style={styles.routeText}>{route}</Text>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.dateSection}>
        {renderDateItem(date)}
        {renderDateItem(day)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  headerSection: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  layoffIcon: {
    position: 'absolute',
    right: -20,
    top: -20,
  },
  flightRoute: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  routeText: {
    color: '#000',
    fontSize: 16,
    marginLeft: 8,
  },
  separator: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    width: '100%',
  },
  dateSection: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#FAFAFA',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  dateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 12,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    marginRight: 10,
  },
  dateText: {
    color: '#141414',
    fontSize: 16,
  },
  iconMargin: {
    marginRight: 10,
  },
});

export default FlightDetails;
