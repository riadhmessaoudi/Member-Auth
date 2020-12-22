import React from 'react';
import { Root } from "native-base";

import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const ConnectionStack = createStackNavigator();

const ConnectionStackScreen = ({ navigation }) => (
  <ConnectionStack.Navigator screenOptions={{ headerShown: false }} >
    <ConnectionStack.Screen name="SignInScreen" component={SignInScreen} />
    <ConnectionStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </ConnectionStack.Navigator>
);

export default () =>
  <Root>
    <ConnectionStackScreen />
  </Root>;