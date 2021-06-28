import {INavigationProps} from '../../interfaces/navigation';
import React from 'react'
import {Text,SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, View, StatusBar} from 'react-native'
import { style } from './chat-style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default class Chat extends React.Component<INavigationProps> {
    state: any = {};

    constructor(props:any) {
        super(props);
    
        this.state = {
          profile:false
        };
    } 


    render(){
        const { profile } = this.state
        return(
            profile?
            <SafeAreaView style = { style.mainContainer1 }>
               <Image
               source = {require('./../../assets/imgs/logo1.png')}
               style = {style.logo}
               />

               <Text style = {style.Title}>Your Dispatcher</Text>
               <View style = { style.profileContainer}>
               <Image
               source = {require('./../../assets/imgs/profile.png')}
               style = {style.profile}
               />
               <Text style = { style.profileName}>Alexander James</Text>
               <Text style = { style.profileAbout}>Abc logistics, LLC</Text>
               <View style = { {...style.dotAndName,marginTop:hp(0.5)}}>
                <View style={style.dot}></View> 
                <Text style={{...style.status,color:"#C0C5D1"}}>Online</Text>
               </View>

               <View style = {style.buttonsContainer}>
                 <TouchableOpacity
                 onPress = { () => this.setState({profile:false})}
                 style = {style.chatButton}
                 >
                 <Ionicons name={'chatbox-outline'} size={20} color={"#0047FF"} /> 
                 </TouchableOpacity>
                 <TouchableOpacity
                 style = {style.callButton}
                 >
                 <MaterialIcons name={'phone'} size={20} color={"#fff"} /> 
                 </TouchableOpacity>
               </View>
               </View>

               <Text style = {style.company}>A Christian Owned and Operated Company</Text>
            </SafeAreaView>
            :
            <SafeAreaView style={style.mainContainer}>
              <StatusBar backgroundColor="#0047FF"/>
              <View style={{...style.header,justifyContent:"space-between",width:wp(88),alignSelf:"center"}}>
                   <View style={style.dpAndNameContainer}>
                   <TouchableOpacity 
                   onPress = { () => this.setState({profile:true})}
                   style={style.dp}>
                     <Image
                     source = {require('./../../assets/imgs/dp.webp')}
                     style = {{height:"100%",width:"100%"}}
                     />
                   </TouchableOpacity>

                   <View style={style.nameAndStatusContainer}>
                      <Text style={style.name}>Alexander James</Text>
                      <View style={style.dotAndName}>
                       <View style={style.dot}></View> 
                       <Text style={style.status}>Online</Text> 
                      </View>
                   </View>
                   </View>

                   <TouchableOpacity
                   style={{}}
                   >
                   <MaterialIcons name="close" size={25} color="#fff"/>
                   </TouchableOpacity>
               </View>

               <View style={style.dataContainer}>

               <ScrollView
               showsVerticalScrollIndicator={false}
               contentContainerStyle={{paddingBottom:hp(3)}}
               style={{flex:1}}
               >    

               <View style={style.messageContainer}>
                 <View style={style.dpAndMsgContainer}>
                   <View style={style.smallDp}>
                     <Image
                     source = {require('./../../assets/imgs/dp.webp')}
                     style = {{height:"100%",width:"100%"}}
                     />
                   </View>
                   <View style={style.messageView}>
                       <Text style={style.message}>Sure I can check on that no problem. </Text>
                   </View>
                 </View> 
                 <Text style={style.msgTime}>11:20 AM, Today</Text>
               </View>


               <View style={style.messageContainer1}>
                 <View style={style.dpAndMsgContainer1}>
                   <View style={style.messageView1}>
                       <Text style={style.message1}>Sure I can check on that no problem. </Text>
                   </View>
                   <View style={style.smallDp1}>
                   <Image
                     source = {require('./../../assets/imgs/dp.webp')}
                     style = {{height:"100%",width:"100%"}}
                     />
                   </View>
                 </View> 
                 <Text style={style.msgTime1}>11:20 AM, Today</Text>
               </View>  


               <View style={style.messageContainer}>
                 <View style={style.dpAndMsgContainer}>
                   <View style={style.smallDp}>
                   <Image
                     source = {require('./../../assets/imgs/dp.webp')}
                     style = {{height:"100%",width:"100%"}}
                     />
                   </View>
                   <View style={style.messageView}>
                       <Text style={style.message}>Sure I can check on that no problem. </Text>
                   </View>
                 </View> 
                 <Text style={style.msgTime}>11:20 AM, Today</Text>
               </View>


               <View style={style.messageContainer1}>
                 <View style={style.dpAndMsgContainer1}>
                   <View style={style.messageView1}>
                       <Text style={style.message1}>Sure I can check on that no problem. </Text>
                   </View>
                   <View style={style.smallDp1}>
                   <Image
                     source = {require('./../../assets/imgs/dp.webp')}
                     style = {{height:"100%",width:"100%"}}
                     />
                   </View>
                 </View> 
                 <Text style={style.msgTime1}>11:20 AM, Today</Text>
               </View>  


               <View style={style.messageContainer}>
                 <View style={style.dpAndMsgContainer}>
                   <View style={style.smallDp}>
                   <Image
                     source = {require('./../../assets/imgs/dp.webp')}
                     style = {{height:"100%",width:"100%"}}
                     />
                   </View>
                   <View style={style.messageView}>
                       <Text style={style.message}>Sure I can check on that no problem. </Text>
                   </View>
                 </View> 
                 <Text style={style.msgTime}>11:20 AM, Today</Text>
               </View>


               <View style={style.messageContainer1}>
                 <View style={style.dpAndMsgContainer1}>
                   <View style={style.messageView1}>
                       <Text style={style.message1}>Sure I can check on that no problem. </Text>
                   </View>
                   <View style={style.smallDp1}>
                   <Image
                     source = {require('./../../assets/imgs/dp.webp')}
                     style = {{height:"100%",width:"100%"}}
                     />
                   </View>
                 </View> 
                 <Text style={style.msgTime1}>11:20 AM, Today</Text>
               </View>  

               </ScrollView>  


                   
               <View style={style.inputContainer}>
                 <View style={style.keyboardView}>
                    <TouchableOpacity>
                    <SimpleLineIcons name='emotsmile' size={18} color="#707070" />
                    </TouchableOpacity>

                    <TextInput
                        placeholder='Type a messages..'
                        style={{ width: wp(50) , color:"#707070" }}
                        onChangeText = {(txt)=> {}}
                    />

                    <TouchableOpacity>
                    <MaterialIcons name='attach-file' size={18} color="#707070" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                    <MaterialIcons name="camera-alt" size={18} color="#707070"/>
                    </TouchableOpacity>


                 </View>  

                 <TouchableOpacity
                 style={style.mic}
                 >
                 <MaterialIcons name="mic" size={25} color="#fff"/>    
                 </TouchableOpacity>
                </View> 
               </View>
            </SafeAreaView>
        )
    }  
}