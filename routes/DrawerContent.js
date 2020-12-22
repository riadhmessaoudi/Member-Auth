import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { signOutMember as signOutMemberAction } from "../redux/actions/memberAction";
import { View, StyleSheet } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function DrawerContent(props) {

    const dispatch = useDispatch()
    const memberData = useSelector(state => state.memberState.member)

    const signOut = () =>{
        dispatch(signOutMemberAction()) 
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.topDrawerItem}>
                        <View style={styles.memberInfo}>
                            <Avatar.Text 
                                label={`${memberData.member_firstName[0].toUpperCase()} ${memberData.member_lastName[0].toUpperCase()} `}
                                size={50}
                                labelStyle={{fontSize: 20, }}
                            />
                            <View style={ styles.memberCoordinate}>
                                <Title style={styles.title}> {memberData.member_firstName} {memberData.member_lastName} </Title>
                                <Caption style={styles.caption}>{memberData.member_email}</Caption>
                            </View>
                        </View>

                        </View>

                    <View style={styles.drawerItems}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('HomeScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Account"
                            onPress={() => {props.navigation.navigate('AccountScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Details"
                            onPress={() => {props.navigation.navigate('DetailsScreen')}}
                        />

                    </View>

                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerItem}>
                <DrawerItem 
                
                    icon={({color, size}) => (
                        <Icon 
                        style={{color:"white"}}
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    labelStyle={{color:"white"}}
                    onPress={() => {  signOut() }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },

    memberInfo: {
      display:"flex",
      marginTop: "15%",
      alignItems:"center",
      borderBottomWidth: 3,
      borderBottomColor: "#f4f4f4",
      paddingBottom: "5%",
    },
    memberCoordinate : {
        display: "flex",
        alignItems:"center",
        marginTop: "1%",
    },
    title: {
      fontSize: 16,
      marginTop: "2%",
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    drawerItems: {
      marginTop: "5%",
    },
    bottomDrawerItem: {
        backgroundColor: "#8f44ad",
    },

  });
