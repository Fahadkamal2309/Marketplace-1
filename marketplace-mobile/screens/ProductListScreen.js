import React, { useEffect, useState } from "react";
import { View, FlatList, Button } from "react-native";
import API from "../services/api";
import ProductCard from "../components/ProductCard";

export default function ProductListScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await API.get("/products");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await API.delete(`/products/${id}`);
    fetchProducts();
  };

  return (
    <View>
      <Button title="Add Product" onPress={() => navigation.navigate("AddProduct")} />
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onDelete={handleDelete}
            onEdit={() => navigation.navigate("UpdateProduct", { product: item })}
          />
        )}
      />
    </View>
  );
}