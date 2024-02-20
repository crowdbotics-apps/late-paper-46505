import React from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from "react-native";

const LoginScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FC",
    alignItems: "center",
    justifyContent: "center"
  },
  loginContainer: {
    width: "80%",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20
  },
  button: {
    width: "100%",
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  }
});
export default LoginScreen;