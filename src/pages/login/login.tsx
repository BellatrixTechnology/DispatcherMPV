import {INavigationProps} from '../../interfaces/navigation';
import React from 'react'
import {Text,SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'
import { style } from './login-style';
//@ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default class Login extends React.Component<INavigationProps> {
    state: any = {};

    constructor(props:any) {
        super(props);
    
        this.state = {
          
        };
    } 


    render(){
        return(
            <SafeAreaView style={style.mainContainer}>
              <ScrollView
              showsVerticalScrollIndicator={false}
              >
               <Image
               source = {require('./../../assets/imgs/logo.png')}
               style = {style.logo}
               /> 

               <Text style={style.screenTitle}>Sign In</Text>
               <Text style={style.screenNote}>to start driving</Text>

               <TextInput
                style = {[style.textInputStyle,{marginTop:72}]}
                placeholder = "Email address"
                placeholderTextColor = "lightgrey"
                textContentType = "emailAddress"
                keyboardType = "email-address"
                autoCapitalize = "none"
                />

               <TextInput
                style = {[style.textInputStyle,{marginTop:30}]}
                placeholder = "Password"
                placeholderTextColor = "lightgrey"
                textContentType = "password"
                secureTextEntry = {true}
                />

               <TouchableOpacity
                style = {style.nextButton}
                >
                <MaterialIcons name="arrow-forward" size={30} color={"#fff"}/>
                </TouchableOpacity>

               
                <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate("signup")}}
                style={style.footerContainer}
                >
                <Text style={style.footer}>Don't have an Account? <Text style={style.footerTag}> Sign up</Text></Text>
                </TouchableOpacity> 
              </ScrollView>
            </SafeAreaView>
        )
    }  
}