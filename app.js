import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductListScreen from "./screens/ProductListScreen";
import AddProductScreen from "./screens/AddProductScreen";
import UpdateProductScreen from "./screens/UpdateProductScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Products" component={ProductListScreen} />
        <Stack.Screen name="AddProduct" component={AddProductScreen} />
        <Stack.Screen name="UpdateProduct" component={UpdateProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}