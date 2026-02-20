import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import API from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      await AsyncStorage.setItem("token", res.data.token);
      navigation.replace("Products");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} style={styles.input} />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate("Register")} />
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