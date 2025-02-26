import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

interface FlightDetailsProps {
  route: string;
  date: string;
  day: string;
  icon: any;
  layoff: any;
  down: any;
  airlineName: string;
  flightCode: string;
  classType?: string;
  price?: string;
  duration?: string;
}

const FlightDetailsCard = ({
  route,
  date,
  day,
  icon,
  layoff,
  down,
  airlineName,
  flightCode,
  classType,
  price,
  duration,
}: FlightDetailsProps) => {
  const renderDateItem = (text: string, icon: true) => (
    <View style={styles.dateItem}>
      {icon && (
        <Image source={down} tintColor="#141414" style={styles.iconMargin} />
      )}
      <Text style={styles.dateText}>{text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <View style={styles.header}>
          <View style={{marginBottom: 10}}>
            <Text style={styles.title}>{airlineName}</Text>
            <Text style={[styles.flightCode]}>{flightCode}</Text>
          </View>
          <Image source={layoff} style={styles.layoffIcon} />
        </View>
        <View style={styles.flightRoute}>
          <Image source={icon} />
          <Text style={styles.routeText}>{route}</Text>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.dateSection}>
        <ScrollView keyboardShouldPersistTaps="handled" horizontal showsHorizontalScrollIndicator={false}>
          {renderDateItem(classType, (icon = true))}
          {renderDateItem(price, (icon = false))}
          {renderDateItem(duration, (icon = false))}
        </ScrollView>
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
  },
  flightCode: {
    fontSize: 12,
    color: '#000',
    fontWeight: '400',
  },
  layoffIcon: {
    position: 'absolute',
    right: 5,
    top: -5,
    height: 35,
    borderRadius: 10,
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

export default FlightDetailsCard;
