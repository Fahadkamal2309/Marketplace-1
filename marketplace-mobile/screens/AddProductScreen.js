import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import API from "../services/api";

export default function AddProductScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    await API.post("/products", { title, price, description });
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Title" onChangeText={setTitle} />
      <TextInput placeholder="Price" onChangeText={setPrice} />
      <TextInput placeholder="Description" onChangeText={setDescription} />
      <Button title="Add Product" onPress={handleAdd} />
    </View>
  );
}
