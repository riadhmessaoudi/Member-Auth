import React from 'react';

import {  Icon} from 'native-base';
import { StyleSheet, } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AccountScreen from "../screens/AccountScreen";
import DetailsScreen from "../screens/DetailsScreen";

const MemberStack = createStackNavigator();

const MemberStackScreen = ({ navigation }) => (
    <MemberStack.Navigator >
        <MemberStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
                title: 'Home',
                headerStyle: {
                    backgroundColor: '#1f65ff',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerLeft: () => (
                    <Icon type="Ionicons" name="menu" onPress={() => navigation.openDrawer() } style={styles.drawerBtn}  />
                ),

            }}

        />
        <MemberStack.Screen
            name="DetailsScreen"
            component={DetailsScreen}
            options={{
                title: 'Details',
                headerStyle: {
                    backgroundColor: '#dc3545',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                

            }}
        />
        <MemberStack.Screen
            name="AccountScreen"
            component={AccountScreen}
            options={{
                title: 'Account',
                headerStyle: {
                    backgroundColor: '#2d3e50',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                },
                headerLeft: () => (
                    <Icon type="Ionicons" name="menu" onPress={() => navigation.openDrawer() } style={styles.drawerBtn}  />
                ),
               
            }}
        />
    </MemberStack.Navigator>
);

export default MemberStackScreen;

const styles = StyleSheet.create({
    drawerBtn: {
      color: '#fff',
      marginLeft: 20,
      marginTop : 3

    },
})
