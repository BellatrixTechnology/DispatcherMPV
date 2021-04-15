import {INavigationProps} from '../../interfaces/navigation';
import React from 'react'
import {Text,SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, View} from 'react-native'
import { style } from './map-style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default class Map extends React.Component<INavigationProps> {
    state: any = {};

    constructor(props:any) {
        super(props);
    
        this.state = {
          
        };
    } 


    render(){
        return(
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
                        style = {{...style.button,backgroundColor:"#0047FF"}}
                        >
                        <Text style={{...style.buttonTxt,color:"#fff"}}>Accept</Text>    
                        </TouchableOpacity>
                    </View>

                    <Text style={{...style.disAndRate,alignSelf:"center",marginVertical:hp(2)}}>See More</Text>
                  </View> 
               </View>
         </SafeAreaView>
        )
    }  
}