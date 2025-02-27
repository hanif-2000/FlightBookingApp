import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const options = [
  {id: 'stay', icon: require('../../assets/hotel.png'), label: 'Stay'},
  {id: 'flight', icon: require('../../assets/flight.png'), label: 'Flight'},
  {id: 'bus', icon: require('../../assets/bus.png'), label: 'Bus'},
  {id: 'train', icon: require('../../assets/train.png'), label: 'Train'},
];

const BookingOptions = ({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (id: string) => void;
}) => {
  return (
    <View style={styles.container}>
      {options.map((item, index) => (
        <View key={item.id || index}>
          {selected === item.id ? (
            <LinearGradient
              colors={['#1CAEDC', '#10E0F9']}
              style={styles.gradient}>
              <TouchableOpacity
                activeOpacity={0.7}
                key={item.id}
                style={[styles.option]}
                onPress={() => onSelect(item.id)}>
                <Image
                  source={item.icon}
                  style={styles.icon}
                  tintColor={selected === item.id ? '#fff' : '#434343'}
                />
                <Text
                  style={[
                    styles.label,
                    selected === item.id && styles.selectedText,
                  ]}>
                  {item.label}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item.id}
              style={[styles.option, {backgroundColor: '#FFFFFF'}]}
              onPress={() => onSelect(item.id)}>
              <Image
                source={item.icon}
                style={styles.icon}
                tintColor={selected === item.id ? '#fff' : '#434343'}
              />
              <Text
                style={[
                  styles.label,
                  selected === item.id && styles.selectedText,
                ]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  gradient: {
    alignItems: 'center',
    borderRadius: 10,
    width: 80,
    height: 60,
  },
  option: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
    width: 80,
    height: 60,
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 5,
  },
  label: {
    color: '#434343',
    fontSize: 12,
  },
  selectedText: {
    color: '#434343',
  },
});

export default BookingOptions;
