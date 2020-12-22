import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from "../styles/GlobalStyle";

export default function DetailsScreen() {

  return (
    <View style={globalStyles.mainContainer}>
      <Text  style={globalStyles.ScreenText} > Details Screen</Text>

    </View>
  );
}
