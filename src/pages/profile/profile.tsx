import {INavigationProps} from '../../interfaces/navigation';
import React from 'react'
import {Text,SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, View} from 'react-native'
import { style } from './profile-style';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default class Profile extends React.Component<INavigationProps> {
    state: any = {};

    constructor(props:any) {
        super(props);
    
        this.state = {
          
        };
    } 


    render(){
     return(
        // <SafeAreaView style={style.mainContainer}> 

        //   <ScrollView
        //   showsVerticalScrollIndicator={false}
        //   contentContainerStyle = {{paddingBottom:hp(2)}}
        //   >
        //     <View style = { style.profileMainContainer }>
        //        <View style={style.profileContainer}>
        //          <View style = {{...style.dp, elevation:10}}>  
        //          <Image
        //          source = {require('./../../assets/imgs/dp1.jpg')}
        //          style = {style.dp}
        //          />  
        //          </View> 

        //          <View style = {style.about}>
        //           <Text style={style.name}>Dr Anna Mackey</Text>  
        //           <Text style={style.spec}>Heart Surgeon Specialist</Text>  

        //           <View style={style.ratingContainer}>
        //              <View style={style.iconContainer}>
        //                <AntDesign name="star" size={15} color="#F1B92A"/>  
        //                  </View> 
        //              <View style={style.valuesContainer}>
        //                <Text style={style.valueTitle}>Rating</Text>  
        //                <Text style={style.value}>4.5 out of 5</Text>  
        //              </View>
        //           </View>

        //           <View style={style.ratingContainer}>
        //              <View style={style.iconContainer}>
        //               <MaterialIcons name="group" size={15} color="#2A58A1"/>   
        //                  </View> 
        //              <View style={style.valuesContainer}>
        //                <Text style={style.valueTitle}>Patients</Text>  
        //                <Text style={style.value}>1000+</Text>  
        //              </View>
        //           </View>
        //          </View>
        //         </View> 
        //     </View>   

        //     <View style = { style.companyInfoContainer }>
        //         <Text style = {style.title}>Company Information</Text>

        //         <Text style={style.companyInfoTitle}>NAME:  <Text style={style.companyInfoValue}>ABC LLB</Text></Text>
        //         <Text style={style.companyInfoTitle}>USDOT:  <Text style={style.companyInfoValue}>ABC LLB</Text></Text>
        //         <Text style={style.companyInfoTitle}>MC:  <Text style={style.companyInfoValue}>ABC LLB</Text></Text>
                
        //         <Text style={{...style.companyInfoTitle,marginTop:hp(1)}}>Authority Expiration:   <Text style={style.companyInfoValue}>Feb 25, 2021</Text></Text>
            
        //         <View style = {style.buttonsContainer}>
        //         <View style = {style.buttonContainer}>
        //             <TouchableOpacity
        //             style={style.button}
        //             >
        //             {/* <Ionicons name="cloud-upload-outline" size={35} color="#C0C5D1"/>  */}
        //             <Image source={require('./../../assets/imgs/arrow-icon.png')}/>
        //             <Text style={style.buttonTitle}>upload</Text>   
        //             </TouchableOpacity>
        //             <Text style={style.buttonBottomTitle}>Operating Authority</Text>
        //             </View> 

        //             <View style = {style.buttonContainer}>
        //             <TouchableOpacity
        //             style={style.button}
        //             >
        //             {/* <Ionicons name="cloud-upload-outline" size={35} color="#C0C5D1"/>   */}
        //             <Image source={require('./../../assets/imgs/arrow-icon.png')}/>
        //             <Text style={style.buttonTitle}>upload</Text>    
        //             </TouchableOpacity>
        //             <Text style={style.buttonBottomTitle}>Proof of insurance</Text>
        //             </View>

        //             <View style = {style.buttonContainer}>
        //             <TouchableOpacity
        //             style={style.button}
        //             >
        //             {/* <Ionicons name="cloud-upload-outline" size={35} color="#C0C5D1"/>    */}
        //             <Image source={require('./../../assets/imgs/arrow-icon.png')}/>
        //             <Text style={style.buttonTitle}>upload</Text>   
        //             </TouchableOpacity>
        //             <Text style={style.buttonBottomTitle}>Carrier Packet</Text>
        //             </View> 
        //         </View>
        //     </View>  

        //     <View style = { style.vehicleInfoContainer }>
        //        <Text style = {style.title}>Vehicle Information</Text>

        //         <Text style={style.companyInfoTitle}>YEAR:  <Text style={style.companyInfoValue}>ABC LLB</Text></Text>
        //         <Text style={style.companyInfoTitle}>MAKE:  <Text style={style.companyInfoValue}>ABC LLB</Text></Text>
        //         <Text style={style.companyInfoTitle}>MODAL:  <Text style={style.companyInfoValue}>ABC LLB</Text></Text>
        //         <Text style={style.companyInfoTitle}>License Plate::  <Text style={style.companyInfoValue}>ABC LLB</Text></Text>
            
        //         <Text style={{...style.companyInfoTitle,marginTop:hp(1)}}>Weight Rating::   <Text style={style.companyInfoValue}>35000 Pounds</Text></Text>
        //     </View>  
        //     </ScrollView>     
        // </SafeAreaView>
        <View></View>
        )
    }  
}