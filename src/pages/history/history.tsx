import {INavigationProps} from '../../interfaces/navigation';
import React from 'react'
import {Text,SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, View, Modal} from 'react-native'
import { style } from './history-style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons' 
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default class History extends React.Component<INavigationProps> {
    state: any = {};

    constructor(props:any) {
        super(props);
    
        this.state = {
         loads:true,
         loadsDetails:false
        };
    } 


    render(){
        const {loads,loadsDetails} = this.state
        return(

              <SafeAreaView style = { style.mainContainer1 }>
                <View style = { style.header1 }>
                  <View style = { style.header1Part1 }>
                    <View style = {style.statusContainer}>
                      <View style = {style.dot1}></View>
                      <Text style = {style.late}>LATE</Text>
                    </View>
                  </View>
                  <View style = { style.header1Part2 }>
                    <View style = { style.header1Part21 }>
                      <Text style = { style.design }>8 Design Co.</Text>
                      <Text style = { style.designNo }>IV By D9899 23</Text>
                    </View>

                    <View style = { style.invoiceDetailsCard }>
                      <View style = { style.invoiceDetailsContainer }>
                       <Text style = {style.invoiceFor}>INVOICE FOR</Text>
                       <Text style = { style.invoiceName}>Karl Johns</Text>
                       <Text style = { style.invoiceAddress}>Abc st 1/4, San Francisco, California, USA</Text>
                      </View>
                      <View style = { style.invoiceAmountContainer }>
                        <Text style = { style.invoiceFor}>AMOUNT DUE</Text>
                        <Text style = {{...style.amount,marginLeft:0}}>$16,00</Text>
                        <View style = {{flexDirection:"row"}}>
                          <View style = { style.dot}></View>
                          <Text style = { style.date}>APR 8, 2021</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>

                <View style = { style.tasksContainer}>
                  <View style = { style.taskContainer}>
                     <Text style = {style.taskTitle}>TASKS</Text>
                     <Text style = {style.taskTitle}>TOTAL</Text>
                  </View>
                  <View style = { style.taskContainer}>
                     <Text style = {style.task}>ABC design is made for XYZ</Text>
                     <Text style = {{...style.taskTitle, fontSize : wp(3.6)}}>$ <Text 
                           style = {style.total}>1080</Text></Text>
                  </View>
                  <View style = { style.taskContainer}>
                     <Text style = {style.task}>ABC design is made for XYZ</Text>
                     <Text style = {{...style.taskTitle, fontSize : wp(3.6)}}>$ <Text 
                           style = {style.total}>1080</Text></Text>
                  </View>
                  <View style = { style.taskContainer}>
                     <Text style = {style.task}>ABC design is made for XYZ</Text>
                     <Text style = {{...style.taskTitle, fontSize : wp(3.6)}}>$ <Text 
                           style = {style.total}>1080</Text></Text>
                  </View>
                  <View style = { style.taskContainer}>
                     <Text style = {style.task}>ABC design is made for XYZ</Text>
                     <Text style = {{...style.taskTitle, fontSize : wp(3.6)}}>$ <Text 
                           style = {style.total}>1080</Text></Text>
                  </View>
                  <View style = { style.taskContainer}>
                     <Text style = {style.task}>ABC design is made for XYZ</Text>
                     <Text style = {{...style.taskTitle, fontSize : wp(3.6)}}>$ <Text 
                           style = {style.total}>1080</Text></Text>
                  </View>
                  <View style = { style.taskContainer}>
                     <Text style = {style.task}>ABC design is made for XYZ</Text>
                     <Text style = {{...style.taskTitle, fontSize : wp(3.6)}}>$ <Text 
                           style = {style.total}>1080</Text></Text>
                  </View>
                  <View style = { style.taskContainer}>
                     <Text style = {style.task}>ABC design is made for XYZ</Text>
                     <Text style = {{...style.taskTitle, fontSize : wp(3.6)}}>$ <Text 
                           style = {style.total}>1080</Text></Text>
                  </View>
                </View>

                <View style={ style.totalAmountContainer}>
                  <View style = {style.paid}>
                    <Text style = {style.status}>PAID</Text>
                    <Text style = {style.dummyText}>is simply dummy text of the printing</Text>
                    <Text style = {style.dummyText}>and typesetting industry. Lorem </Text>
                  </View>
                  <View style = {style.totalAmount}>
                    <Text style = {style.totalAmountTitle}>TOTAL AMOUNT</Text>
                    <Text style = {{...style.taskTitle, fontSize : wp(5), marginTop:hp(1)}}>$ <Text 
                           style = {{...style.total, fontSize : wp(5), fontFamily : "Gilroy-Bold"}}>1,600</Text></Text>
                  </View>
                </View>
              </SafeAreaView>

            // <SafeAreaView style={style.mainContainer}>
            //    {!loadsDetails?
            //     <View style={style.header}>
            //        <TouchableOpacity
            //        onPress={()=>{this.setState({loads:true})}}
            //        style = {loads?style.headerButton:style.headerButton1}
            //        >
            //        <Text style={loads?style.headerButtonTxt:style.headerButtonTxt1}>Loads</Text>    
            //        </TouchableOpacity>
                   
            //        <TouchableOpacity
            //        onPress={()=>{this.setState({loads:false})}}
            //        style = {!loads?style.headerButton:style.headerButton1}
            //        >
            //        <Text style={!loads?style.headerButtonTxt:style.headerButtonTxt1}>Invoices</Text>    
            //        </TouchableOpacity>
            //    </View>
            //    :
            //    <View style={{...style.header,justifyContent:"space-between",width:wp(88),alignSelf:"center"}}>
            //        <TouchableOpacity
            //        onPress={()=>{this.setState({loadsDetails:false})}}
            //        style={style.backButton}
            //        >
            //        <MaterialIcons name="chevron-left" size={25}/>    
            //        </TouchableOpacity>

            //        <Text style={style.heading}>Load Details</Text>

            //        <TouchableOpacity
            //        style={{}}
            //        >
            //        <MaterialCommunityIcons name="dots-vertical" size={25} color="#fff"/>    
            //        </TouchableOpacity>
            //    </View>
            //    }

            //   {loadsDetails?
            //     <View style={style.dataContainer}>
            //       <View style={style.shipNoContainer}>
            //          <Text style={style.shipNoTitle}>Shipment No: <Text style={style.shipNo}>1234-5678</Text></Text> 
            //          {/* <MaterialIcons name="close" size={25} color="#3C4253"/> */}
            //       </View>

            //       <View style={{...style.infoContainer,width:wp(88),borderBottomWidth:0.2,height:hp(10)}}>
            //         <View style={style.senderInfo}>
            //                 <Text style={{...style.Name,fontSize:wp(6.5)}}>Miami</Text>
            //                 <Text style={{...style.City,color:"#3C4253"}}>Florida</Text>
            //               </View> 
            //               <Text style = {style.to}>to</Text>
            //               <View style={style.reciverInfo}>
            //                 <Text style={{...style.Name,fontSize:wp(6.5)}}>Atlanta</Text>
            //                 <Text style={{...style.City,color:"#3C4253"}}>Georgia</Text> 
            //               </View>
            //             </View> 

            //             <View style={style.dmtnContainer}>
            //                 <Text style={{...style.title,fontSize:wp(3.8)}}>Dimensions</Text>
            //                 <Text style={style.value}>7.1" H x 6.7" W x 3.3" D (8.3 oz)</Text>
            //             </View>  

            //             <View style={style.boxContainer}>
            //             <Text style={{...style.title,fontSize:wp(3.8),marginBottom:hp(1.5)}}>What's in the box?</Text>
            //             <Text style={style.value}><MaterialIcons name="check" size={15} color="#C0C5D1" />  ABC wireless earphones</Text>
            //             <Text style={style.value}><MaterialIcons name="check" size={15} color="#C0C5D1" />  Usb charging Cable</Text>
            //             <Text style={style.value}><MaterialIcons name="check" size={15} color="#C0C5D1" />  AAudio Cable</Text>
            //             </View>

            //             <View style={style.attchFileContainer}>
            //             <Text style={{...style.title,fontSize:wp(3.8)}}>Attached Files</Text>

            //             <View style = {style.buttonsContainer}>

            //                 <View style = {style.buttonContainer}>
            //                 <TouchableOpacity
            //                 style={style.button}
            //                 >
            //                 {/* <Ionicons name="cloud-upload-outline" size={35} color="#C0C5D1"/>  */}
            //                 <Image source={require('./../../assets/imgs/arrow-icon.png')}/>
            //                 <Text style={style.buttonTitle}>upload</Text>   
            //                 </TouchableOpacity>
            //                 <Text style={{...style.buttonTitle,fontSize:wp(2.6)}}>Rate confirmation</Text>
            //                 </View> 

            //                 <View style = {style.buttonContainer}>
            //                 <TouchableOpacity
            //                 style={style.button}
            //                 >
            //                 {/* <Ionicons name="cloud-upload-outline" size={35} color="#C0C5D1"/>   */}
            //                 <Image source={require('./../../assets/imgs/arrow-icon.png')}/>
            //                 <Text style={style.buttonTitle}>upload</Text>    
            //                 </TouchableOpacity>
            //                 <Text style={{...style.buttonTitle,fontSize:wp(2.6)}}>Bill of ABC</Text>
            //                 </View>

            //                 <View style = {style.buttonContainer}>
            //                 <TouchableOpacity
            //                 style={style.button}
            //                 >
            //                 {/* <Ionicons name="cloud-upload-outline" size={35} color="#C0C5D1"/>    */}
            //                 <Image source={require('./../../assets/imgs/arrow-icon.png')}/>
            //                 <Text style={style.buttonTitle}>upload</Text>   
            //                 </TouchableOpacity>
            //                 <Text style={{...style.buttonTitle,fontSize:wp(2.6)}}>Proof of delivery</Text>
            //                 </View> 
                            
            //             </View>  
            //             </View>
            //       </View>
 
            //    :

            //    <View style={style.dataContainer}>
            //        {loads?
            //        <ScrollView
            //        showsVerticalScrollIndicator={false}
            //        contentContainerStyle={{paddingBottom:hp(2)}}
            //        >
            //        <TouchableOpacity
            //        onPress={()=>{this.setState({loadsDetails:true})}}
            //        style={style.card}>
            //            <View style={style.infoContainer}>
            //               <View style={style.senderInfo}>
            //                 <Text style={style.Name}>Miami</Text>
            //                 <Text style={style.City}>Florida</Text>
            //               </View> 
            //               <Text style = {style.to}>to</Text>
            //               <View style={style.reciverInfo}>
            //                 <Text style={style.Name}>Atlanta</Text>
            //                 <Text style={style.City}>Georgia</Text> 
            //               </View>
            //             </View>  

            //             <Image
            //               source={require('./../../assets/imgs/logo.png')}
            //               style={style.logo}
            //               />

            //             <View style={[style.infoContainer,{borderBottomWidth:0.2}]}>
            //               <View style={style.senderInfo}>
            //                 <Text style={style.title}>Date</Text>
            //                 <Text style={style.value}>May 19, 2020</Text>
            //               </View> 
                          
            //               <View style={style.reciverInfo}>
            //                 <Text style={style.title}>Shipment No</Text>
            //                 <Text style={style.value}>1234-5678</Text> 
            //               </View>
            //            </View>


            //            <View style={[style.infoContainer,{height:hp(6)}]}>
            //               <View style={style.senderInfo}>
            //                 <Text style={style.status}>Completed</Text>
            //               </View> 
                          
            //               <View style={{...style.reciverInfo,flexDirection:"row",alignItems:"flex-end"}}>
            //                 <Text style={style.type}>Load Rate</Text>
            //                 <Text style={style.amount}>$1,600</Text>
            //               </View>
            //            </View>

            //        </TouchableOpacity>

            //        </ScrollView>
            //        :
            //        <ScrollView
            //        showsVerticalScrollIndicator={false}
            //        contentContainerStyle={{paddingBottom:hp(2)}}
            //        >

            //        <View style={style.card}>
            //            <View style={style.infoContainer}>
            //               <View style={style.senderInfo}>
            //                 <Text style={style.Name}>Jan 20</Text>
            //                 <Text style={style.City}>2021</Text>
            //               </View> 
            //               <Text style = {style.to}>to</Text>
            //               <View style={style.reciverInfo}>
            //                 <Text style={style.Name}>Jan 27</Text>
            //                 <Text style={style.City}>2021</Text> 
            //               </View>
            //             </View>  

            //             <Image
            //               source={require('./../../assets/imgs/logo.png')}
            //               style={style.logo}
            //               />

            //             <View style={[style.infoContainer,{borderBottomWidth:0.2}]}>
            //               <View style={style.senderInfo}>
            //                 <Text style={style.title}>Company</Text>
            //                 <Text style={style.value}>ABC logistice, LLC</Text>
            //               </View> 
                          
            //               <View style={style.reciverInfo}>
            //                 <Text style={style.title}>Invoice No</Text>
            //                 <Text style={style.value}>1234-5678-1234</Text> 
            //               </View>
            //            </View>


            //            <View style={[style.infoContainer,{height:hp(6)}]}>
            //               <View style={style.senderInfo}>
            //                 <Text style={style.status}>PAID</Text>
            //               </View> 
                          
            //               <View style={{...style.reciverInfo,flexDirection:"row",alignItems:"flex-end"}}>
            //                 <Text style={style.type}>Invoice Amount</Text>
            //                 <Text style={style.amount}>$1,600</Text>
            //               </View>
            //            </View>

            //        </View>

                   

            //        </ScrollView>  
            //        }
            //    </View>}
            // </SafeAreaView>
        )
    }  
}