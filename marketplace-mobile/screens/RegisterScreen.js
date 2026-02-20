import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import API from "../services/api";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", { email, password });
      alert("Registered successfully");
      navigation.goBack();
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={styles.input} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 100 },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});