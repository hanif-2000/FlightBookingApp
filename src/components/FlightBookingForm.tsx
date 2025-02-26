import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const FlightBookingForm = () => {
  const [fromOpen, setFromOpen] = useState(false);
  const [fromValue, setFromValue] = useState(null);
  const [fromItems, setFromItems] = useState([
    { label: "BLR - Bengaluru", value: "BLR" },
    { label: "DEL - New Delhi", value: "DEL" },
    { label: "BOM - Mumbai", value: "BOM" },
    { label: "MAA - Chennai", value: "MAA" },
  ]);

  const [toOpen, setToOpen] = useState(false);
  const [toValue, setToValue] = useState(null);
  const [toItems, setToItems] = useState([
    { label: "DEL - New Delhi", value: "DEL" },
    { label: "BLR - Bengaluru", value: "BLR" },
    { label: "BOM - Mumbai", value: "BOM" },
    { label: "MAA - Chennai", value: "MAA" },
  ]);

  const [classOpen, setClassOpen] = useState(false);
  const [classValue, setClassValue] = useState(null);
  const [classItems, setClassItems] = useState([
    { label: "Economy & 2 Adults", value: "Economy" },
    { label: "Business & 1 Adult", value: "Business" },
    { label: "First Class & 3 Adults", value: "First" },
  ]);

  return (
    <View style={styles.container}>
      {/* FROM DROPDOWN */}
      <Text style={styles.label}>From</Text>
      <DropDownPicker
        open={fromOpen}
        value={fromValue}
        items={fromItems}
        setOpen={setFromOpen}
        setValue={setFromValue}
        setItems={setFromItems}
        placeholder="Select Departure"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        textStyle={styles.dropdownText}
      />

      {/* TO DROPDOWN */}
      <Text style={styles.label}>To</Text>
      <DropDownPicker
        open={toOpen}
        value={toValue}
        items={toItems}
        setOpen={setToOpen}
        setValue={setToValue}
        setItems={setToItems}
        placeholder="Select Destination"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      /> 

      {/* CLASS & TRAVELLERS DROPDOWN */}
       <Text style={styles.label}>Class & Travellers</Text>
      <DropDownPicker
        open={classOpen}
        value={classValue}
        items={classItems}
        setOpen={setClassOpen}
        setValue={setClassValue}
        setItems={setClassItems}
        placeholder="Select Class"
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      /> 
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:'#FFFFFF1F',
    borderColor:'#FFFFFF1F',
    borderWidth:1,
    borderRadius:20

  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "white",
  },
  dropdown: {
    backgroundColor: "#FFFFFF1F",
    borderWidth: 0,
    borderRadius: 10,
    marginBottom: 15,
    // color: "#fff",
    zIndex:999,

  },
  dropdownContainer: {
    backgroundColor: "#333",
    zIndex:999,
  },
  dropdownText: {
    color: "white", // ✅ White text for labels
    fontSize: 16,
  },
});

export default FlightBookingForm;
