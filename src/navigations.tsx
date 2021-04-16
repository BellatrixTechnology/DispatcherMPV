import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {INavigationProps} from './../src/interfaces/navigation'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import { ActivityIndicator, Alert } from 'react-native';
import { heightPercentageToDP as hp} from 'react-native-responsive-screen';

//Screens
import Login from './pages/chat/chat';
import SignUp from './pages/signup/signup';

import ButtonTab from "./bottomTab"








const Stack = createStackNavigator();


export default class nav extends Component {
    constructor(props: INavigationProps) {
        super(props);
       this.state={
        checkUser: '',
        initialRoute: 'signup',
        activityIndicator: false,
       }  
    }


        


    render() {
        const { initialRoute, activityIndicator }:any = this.state
        return (
            activityIndicator==false?
            <NavigationContainer >
                <Stack.Navigator initialRouteName={initialRoute} >
                    <Stack.Screen name="bottomtab" component={ButtonTab} options={{ headerShown: false }} />
                    <Stack.Screen name="signup" component={SignUp} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
            :
            <ActivityIndicator size="large" color="#3385e7" style={{marginTop:hp(40)}}/>
        )
    }

}