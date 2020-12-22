import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { useDispatch, useSelector } from "react-redux";
import { StyleSheet } from 'react-native';

import { getToken } from "../services/asyncStorage.service";
import { fetchMember as fetchMemberAction } from "../redux/actions/memberAction";

import LoadingScreen from "../screens/LoadingScreen";
import ConnectionStack from "../routes/ConnectionStack";
import MemberStack from "../routes/MemberStack";
import DrawerContent from "../routes/DrawerContent";

const Drawer = createDrawerNavigator();

export default function IndexStack() {

    const dispatch = useDispatch()
    const memberState = useSelector(state => state.memberState)

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        let isSubscribed  = true;
        async function fetchUser() {

            const token = await getToken();
             dispatch(fetchMemberAction(token))
            if (isSubscribed ) {
                setLoading(false)
            }

        }

        setLoading(true)
        fetchUser();
        return () => {
            isSubscribed  = false
        }

    }, [memberState.isLoggedInMember]);

    if (loading) {
        return (
            <LoadingScreen />
        );
    }
    else {

        return (
            <NavigationContainer>
                {memberState.isLoggedInMember ?
                    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
                        <Drawer.Screen name="MemberStack" component={MemberStack} />
                    </Drawer.Navigator>

                    :
                    <ConnectionStack />
                }
            </NavigationContainer>
        );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})