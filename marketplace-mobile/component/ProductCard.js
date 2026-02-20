import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";

export default function ProductCard({ product, onDelete, onEdit }) {
  return (
    <View style={styles.card}>
      {product.image ? (
        <Image source={{ uri: product.image }} style={styles.image} />
      ) : null}

      <Text style={styles.title}>{product.title}</Text>
      <Text>₹ {product.price}</Text>
      <Text>{product.description}</Text>

      <View style={styles.buttons}>
        <Button title="Edit" onPress={() => onEdit(product)} />
        <Button title="Delete" color="red" onPress={() => onDelete(product._id)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});