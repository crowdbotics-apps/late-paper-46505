javascript;
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Linking } from "react-native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic
    console.log(username, password);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => Linking.openURL("http://example.com/terms")}>
        <Text style={styles.linkText}>Terms and Conditions</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5"
  },
  logoContainer: {
    marginBottom: 20
  },
  logo: {
    width: 100,
    height: 100
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  linkText: {
    marginTop: 20,
    color: "#007bff"
  }
});
export default LoginScreen;