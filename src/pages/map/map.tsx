import {INavigationProps} from '../../interfaces/navigation';
import React from 'react'
import {Text,SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, View, ImageBackground, StyleSheet} from 'react-native'
import { style } from './map-style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { ScaleFromCenterAndroidSpec } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionSpecs';


export default class Map extends React.Component<INavigationProps> {
    state: any = {};

    constructor(props:any) {
        super(props);
    
        this.state = {
          map : false,
          status: false,
          invoice : true
        };
    } 


    render(){
      const {map,status, invoice} = this.state
        return(
         invoice?
         <SafeAreaView style={style.mainContainer}>
                <View style={{...style.header,justifyContent:"space-between",width:wp(88),alignSelf:"center"}}>
                   
                   <MaterialIcons name="chevron-left" size={25}/>    

                   <Text style={style.heading}>New Load Alert</Text>

                   <TouchableOpacity
                   style={{}}
                   >
                   <MaterialCommunityIcons name="dots-vertical" size={25} color="#000"/>    
                   </TouchableOpacity>

               </View>

               <View style={style.loadAlertContainer}>
                  <View style={style.smallMapContainer}>
                    <Image
                    source = {require('./../../assets/imgs/smallMap.png')}
                    //style = {{height:hp(100),width:"100%"}}
                    />  
                  </View>
                  <View style={style.alertContainer}>
                    <View style={style.infoContainer}>
                          <View style={style.senderInfo}>
                             <Text style={style.Name}>Miami</Text>
                             <Text style={style.City}>Florida</Text>
                           </View> 
                           <Text style = {style.to}>to</Text>
                           <View style={style.reciverInfo}>
                             <Text style={style.Name}>Atlanta</Text>
                             <Text style={style.City}>Georgia</Text> 
                           </View>
                    </View>  

                    <View style={style.amountContainer}>
                      <Text style={style.amount}>$1,600</Text>
                    </View> 
                    <View style={style.distanceAndRate}>
                        <Text style={style.disAndRate}>664 Miles</Text>
                        <Text style={style.disAndRate}>$2.40/mi</Text>
                    </View>

                    <View style={style.buttonsContainer}>
                        <TouchableOpacity
                        style = {style.button}
                        >
                        <Text style={style.buttonTxt}>Decline</Text>    
                        </TouchableOpacity>

                        <TouchableOpacity
                        onPress = {() => this.setState({map:true,invoice:false})}
                        style = {{...style.button,backgroundColor:"#0047FF"}}
                        >
                        <Text style={{...style.buttonTxt,color:"#fff"}}>Accept</Text>    
                        </TouchableOpacity>
                    </View>

                    <Text style={{...style.disAndRate,alignSelf:"center",marginVertical:hp(2)}}>See More</Text>
                  </View> 
               </View>
         </SafeAreaView>
         :
        map?
        <SafeAreaView style={style.mainContainer}>
          <ImageBackground
          source={require('./../../assets/imgs/map.png')}
          style = {{flex:1}} 
          >
          <TouchableOpacity
          onPress = {() => {this.setState({status:true,map:false})}}
          style = {style.delButton}
          >
           <Text style = {style.delButtonTxt}>Delivey Status</Text> 
          </TouchableOpacity>  
          </ImageBackground>
        </SafeAreaView>
        :
        status?
        <SafeAreaView style={style._mainContainer}> 
            {/* <ScrollView showsVerticalScrollIndicator = {false}> */}
               <View style = {style._header}>
                 <Text style = {style.timeTitle}>Time remaining until delivery</Text>
                 <Text style = {style.time}>1h 20min</Text>
               </View> 

               <View style = {style._infoContainer}>
                 <View style = {style.statusContainer}>
                   <Text style = {style.statusTitle}>status - <Text style = {style.status}>On time</Text></Text>
                 </View>

                 <Text style = {style.orderTracking}>Order Tracking</Text>
                 <Text style = {style.trackingNO}>Order Number: 457 034</Text>

                 <View style = {style.statusMainContainer}>
                   <View style = {style.line}></View>

                   <View style = {style.stepContainer}>
                     <View style = {style.iconContainer}>
                       <MaterialCommunityIcons name = "check" size = {20} color = "#0047FF"/>
                     </View>
                     <Text style = {style.statusTxt}>Order accepted</Text>
                   </View>

                   <View style = {{...style.stepContainer, top:hp(7.5)}}>
                     <View style = {style.iconContainer}>
                       <MaterialCommunityIcons name = "check" size = {20} color = "#0047FF"/>
                     </View>
                     <Text style = {style.statusTxt}>Preparing order</Text>
                   </View>

                   <View style = {{...style.stepContainer, top:hp(15)}}>
                     <View style = {{...style.iconContainer, backgroundColor:"#0047FF"}}>
                       <MaterialCommunityIcons name = "check" size = {20} color = "#fff"/>
                     </View>
                     <Text style = {{...style.currentstatusTxt}}>Ready to Collect</Text> 
                   </View>

                   <View style = {style.statusDetailContainer}>
                     <Text style={style.statusDetail}>Your order was collected and it's</Text>
                     <Text style={style.statusDetail}>waiting for you at the pickup spot</Text>
                   </View>

                   <Text style = {style.uploadProofTitle}>Upload proof of delivery</Text>

                   <TouchableOpacity
                    style={style._button}
                    >
                    {/* <Ionicons name="cloud-upload-outline" size={35} color="#C0C5D1"/>  */}
                    <Image source={require('./../../assets/imgs/arrow-icon.png')}/>
                    <Text style={style._buttonTitle}>upload</Text>   
                    </TouchableOpacity>

                   

                   <View style = {{...style.stepContainer, bottom:0}}>
                     <View style = {style.iconContainer}>
                       <Octicons name = "primitive-dot" size = {30} color = "#0047FF"/>
                     </View>
                     <Text style = {style.statusTxt}>Order Collected</Text>
                   </View>

                 </View>

                 <TouchableOpacity 
                 onPress ={() => this.setState({map:true,status:false})}
                 style = {style.viewMapButton}>
                   <Text style = {style.viewMapButtonTxt}>Map View</Text>
                 </TouchableOpacity>
               </View>
            {/* </ScrollView>    */}
        </SafeAreaView>:null
        )
    }  
}