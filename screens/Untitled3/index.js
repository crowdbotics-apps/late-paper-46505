plaintext;
import React, { useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, TextInput, Button, View, Text } from "react-native";

const Untitled3 = () => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    console.log("Submitted Full Name:", fullName);
    console.log("Submitted Address:", address);
    console.log("Submitted Phone Number:", phoneNumber);
  };

  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.label}>Full Name:</Text>
        <TextInput style={styles.input} onChangeText={setFullName} value={fullName} placeholder="Enter your full name" />
        <Text style={styles.label}>Address:</Text>
        <TextInput style={styles.input} onChangeText={setAddress} value={address} placeholder="Enter your address" />
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput style={styles.input} onChangeText={setPhoneNumber} keyboardType="phone-pad" value={phoneNumber} placeholder="Enter your phone number" />
        <View style={styles.buttonContainer}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  scrollView: {
    padding: 20
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: "#cccccc"
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  buttonContainer: {
    marginTop: 20
  }
});
export default Untitled3;