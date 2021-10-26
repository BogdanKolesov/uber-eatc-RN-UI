import * as React from "react";
import { View } from "react-native";
import RestaurantDetail from "./src/views/About";
import Home from './src/views/Home'

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <RestaurantDetail />
    </View>
  );
}
