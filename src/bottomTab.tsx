import React, { Component } from 'react'
import { View ,Image} from 'react-native'
import {INavigationProps} from './../src/interfaces/navigation'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
//import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Vector Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Chat from './pages/chat/chat';
import History from './pages/history/history';
import Financial from './pages/financial/financial';
import Map from './pages/map/map';
import Profile from './pages/profile/profile';


//Screens





//Serives



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const bottomTab = () => (
    //@ts-ignore
    <Tab.Navigator initialRouteName={"chat"}
         
        screenOptions={({ route }:any) => ({
            tabBarIcon: ({ focused, color, size }:any) => {
                let iconName;

                if(route.name === "chat") {
                    return <Ionicons name={'chatbox-outline'} size={20} color={color} /> 

                } else if(route.name === "history") {
                    return <Ionicons name={'time-outline'} size={20} color={color} /> 
                }
                else if(route.name === "financial") {
                     return <SimpleLineIcons name={'chart'} size={15} color={color} />
                    // return <Image source = {require('./assets/imgs/finan.png')} style={{height:16,width:17}}/>
                }
                else if(route.name === "profile") {
                    return <Ionicons name={'person-outline'} size={18} color={color} />
                }
                // else if(route.name === "transection") {
                //     return iconName = focused ? <View style={{}}><Image source={require('./../src/assets/imgs/logo.png')}/></View> :
                //         <AntDesign name={'plus'} size={hp(3.3)} color={color} />
                // }

                else if(route.name == "map") {
                    return(
                        // <View
                        //     style={{
                        //         backgroundColor: "#fff",
                        //         height: 80,
                        //         width: 80,
                        //         marginTop: -25,
                        //         borderTopColor: "gray",
                        //         borderTopRightRadius: 120,
                        //         borderTopLeftRadius: 120,
                        //         alignItems: "center",
                        //         justifyContent: "center"
                        //     }}
                        // >
                        focused?
                            <View
                                style={{
                                    //backgroundColor: "#fff",
                                    height: hp(7.5),
                                    width: hp(8),
                                    //borderRadius: 40,
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    //backgroundColor:"black",
                                    marginTop:hp(2.5)
                                }}
                            >
                                
                                <Image
                                source={require("./assets/imgs/logob.png")}
                                style={{height:"105%",width:"105%"}}
                                />  
                                
                                
                             </View>
                            :
                            <View
                                style={{
                                    //backgroundColor: "#fff",
                                    height: hp(7.5),
                                    width: hp(8),
                                    //borderRadius: 40,
                                    alignItems: "center",
                                    justifyContent: "flex-end",
                                    //backgroundColor:"black",
                                    marginTop:hp(2.5)
                                }}
                            >
                                
                                <Image
                                source={require("./assets/imgs/logo.png")}
                                style={{height:"105%",width:"105%"}}
                                />  
                                
                                
                             </View> 
                        // </View>
                
                    )}
                // else {
                    //return <AntDesign name={'home'} size={size} color={color} />
                //}
            }
        })}
        tabBarOptions={{
            showLabel:true,
            labelStyle:{fontFamily:"Gilroy-Bold",fontSize:12},
            activeTintColor: "#0047FF",
            inactiveTintColor: "#C0C5D1",
            style:{height:hp(10),elevation:0,borderTopWidth:0},
            tabStyle: {borderWidth:0,height:hp(5),alignSelf:"center",marginTop:-hp(1)},
            keyboardHidesTabBar: true
              
        }}
    >
        <Tab.Screen name="chat" component={Chat} options={{title:"Chat"}}/>
        <Tab.Screen name="history" component={History} options={{title:"History"}}/>
        <Tab.Screen name="map" component={Map} listeners={{ tabPress: () => { } }} options={{title:""}} />
        <Tab.Screen name="financial" component={Financial} options={{title:"Financial"}}/>
        <Tab.Screen name="profile" component={Profile} options={{title:"Profile"}}/>
    </Tab.Navigator>
);







export default class App extends Component<INavigationProps> {
    constructor(props: any) {
        super(props);
    }
    state = {
        userDetail: '',
        loader: true
    }

    

    async componentDidMount() {
        // const userStorage = await storage.get("user")
        // this.setState({ userDetail: userStorage, loader: false })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                
                        <Stack.Navigator>
    
                            <Stack.Screen
                                name="bottomTab"
                                component={bottomTab}
                                options={{ headerShown: false }}
                            />
 
                        </Stack.Navigator>
                
            </View>

        );
    }

}
