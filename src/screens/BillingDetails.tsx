import React, {useCallback, useState} from 'react';
import {ScrollView} from 'react-native';
import {
  View,
  Text,
  TextInput,
  Switch,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import CustomDropdown from '../components/CustomDropdown';
import ScreenLayout from '../components/ScreenLayout';
import KeyboardAwareWrapper from '../components/KeyboardAwareWrapper';

const cityNames = [
  {label: 'BLR - Bengaluru', value: 'BLR'},
  {label: 'DEL - New Delhi', value: 'DEL'},
  {label: 'BOM - Mumbai', value: 'BOM'},
  {label: 'MAA - Chennai', value: 'MAA'},
];

const BillingDetails = ({navigation}:any) => {
  const [gstEnabled, setGstEnabled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);

  // Use `useCallback` to prevent unnecessary re-renders
  const toggleCollapse = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, []);


  return (
    <ScreenLayout step={3} back>
      <ScrollView keyboardShouldPersistTaps="handled" style={{flex: 1, marginBottom: 140}}>
      <KeyboardAwareWrapper>
        <View style={styles.container}>
          {/* Billing Details Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Billing Details</Text>
            <Text style={styles.headerSubtitle}>
              Review and update your billing details
            </Text>
          </View>

          {/* Email Field */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="sayeedafzal1440@gmail.com"
              placeholderTextColor={'#fff'}
            />
          </View>

          {/* Mobile Field */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mobile</Text>
            <View
              style={[
                styles.row,
                {borderBottomWidth: 1, borderBottomColor: '#444'},
              ]}>
              <Text style={styles.flag}>🇮🇳</Text>
              <TextInput
                style={[styles.input, {borderBottomWidth: 0}]}
                placeholderTextColor={'#fff'}
                placeholder="+918073734941"
                keyboardType="name-phone-pad"
              />
              {/* <Text style={styles.phoneNumber}>+91 (807) - 3734 - 941</Text> */}
            </View>
          </View>

          {/* GST Toggle */}
          <View style={styles.switchContainer}>
            <Text style={styles.label}>Include GST Details</Text>
            <Switch
              value={gstEnabled}
              onValueChange={setGstEnabled}
              trackColor={{false: '#767577', true: '#00C8FF'}}
              thumbColor={gstEnabled ? '#ffffff' : '#f4f3f4'}
            />
          </View>

          {/* Pincode */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Pincode</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter GST Number"
              placeholderTextColor="#888"
            />
          </View>

          {/* Address */}
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Company Name"
              placeholderTextColor="#888"
            />
          </View>
          <CustomDropdown
              label="City"
              placeHolder="Select your City"
              items={cityNames}
              selectedValue={city}
              onSelect={setCity}
            />

          <CustomDropdown
              label="State"
              placeHolder="Select your State"
              items={cityNames}
              selectedValue={state}
              onSelect={setState}
            />
        </View>
        </KeyboardAwareWrapper>

      </ScrollView>
      {/* Fare Summary */}
      <View style={styles.bottomView}>
        <Text style={styles.fareSummaryText}>Fare Summary</Text>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleCollapse}>
          <Text style={styles.travelerText}>
            6 Travelers - 2 Adult, 1 Child, 1 Infant
          </Text>
          <Text style={styles.arrowIcon}>{isCollapsed ? '▼' : '▲'}</Text>
        </TouchableOpacity>
 
         <Collapsible collapsed={isCollapsed}>
          <View style={styles.fareDetails}>
            <View style={styles.row}>
              <Text style={styles.label}>Fare Type</Text>
              <Text style={styles.value}>₹4,340</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Base Fare</Text>
              <Text style={styles.value}>₹360</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Taxes & Fees</Text>
              <Text style={styles.value}>₹250</Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.label, styles.boldText]}>TOTAL</Text>
              <Text style={[styles.value, styles.boldText]}>₹12,340</Text>
            </View>
          </View>
        </Collapsible>

        {/* Footer Buttons */}
        <View style={styles.footerButtons}>
          <View style={styles.applyButton}>
            <Text style={styles.applyButtonText}>+ 2,150 per adult</Text>
          </View>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={()=>navigation.navigate('FlightTicketBooked')}
          >
            <Text style={styles.bookButtonText}>PAY NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#777',
  },
  inputContainer: {
    backgroundColor: '#1C1C1E',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  //   label: {
  //     fontSize: 14,
  //     color: '#fff',
  //     marginBottom: 5,
  //   },
  input: {
    fontSize: 16,
    color: '#fff',
    borderBottomWidth: 1, // Bottom border width
    borderBottomColor: '#444', // Bottom border color (adjust as needed)
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    fontSize: 20,
    marginRight: 8,
  },
  phoneNumber: {
    fontSize: 16,
    color: '#fff',
  },
  switchContainer: {
    backgroundColor: '#1C1C1E',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pickerContainer: {
    backgroundColor: '#1C1C1E',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },
  pickerText: {
    fontSize: 16,
    color: '#888',
  },

  bottomView: {
    padding: 15,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  fareSummaryText: {
    paddingLeft: 10,
    color: '#fff',
    fontWeight: '400',
    fontSize: 12,
  },
  toggleButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  travelerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  arrowIcon: {
    color: '#fff',
    fontSize: 18,
  },
  fareDetails: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  //   row: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     paddingVertical: 8,
  //   },
  label: {
    color: '#fff',
    fontSize: 14,
  },
  value: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
  footerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  applyButton: {
    flex: 1,
    marginRight: 10,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    alignItems: 'center',
    borderColor: '#F0F0F0',
    borderWidth: 1,
  },
  applyButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  bookButton: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 12,
    backgroundColor: '#10E0F9',
    borderRadius: 12,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default BillingDetails;
