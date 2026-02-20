import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import API from "../services/api";

export default function UpdateProductScreen({ route, navigation }) {
  const { product } = route.params;

  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(String(product.price));
  const [description, setDescription] = useState(product.description);

  const handleUpdate = async () => {
    await API.put(`/products/${product._id}`, {
      title,
      price,
      description,
    });
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput value={title} onChangeText={setTitle} />
      <TextInput value={price} onChangeText={setPrice} />
      <TextInput value={description} onChangeText={setDescription} />
      <Button title="Update Product" onPress={handleUpdate} />
    </View>
  );
}