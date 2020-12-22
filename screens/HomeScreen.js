import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from "../styles/GlobalStyle";

export default function HomeScreen() {

  return (
    <View style={globalStyles.mainContainer}>
      <Text style={globalStyles.ScreenText}>Home Screen</Text>
    </View>
  );
}

