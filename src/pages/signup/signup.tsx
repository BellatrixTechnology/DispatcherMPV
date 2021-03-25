import {INavigationProps} from '../../interfaces/navigation';
import React from 'react'
import {Text,SafeAreaView, TextInput, TouchableOpacity, Image,Alert,ToastAndroid,ScrollView, View } from 'react-native'
import { style } from './signup-style';
import PhoneInput from "react-native-phone-number-input";
import Modal from 'react-native-modal'
//@ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
//@ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons'
//@ts-ignore
import Octicons from 'react-native-vector-icons/Octicons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


export default class SignUp extends React.Component<INavigationProps> {
    state: any = {};
    phone:any = null
    constructor(props:any) {
        super(props);
    
        this.state = {
          step1 : true,
          step2 : false,
          step3 : false,
          step4 : false,
          step5 : false,
          step6 : false,
          selectedColor : "#0047FF"
        };
    } 


    _validateValues(){
        let {phone,phoneFormated} = this.state
        if(this.phone.isValidNumber(phone)==false){
          Alert.alert('Invalid phone number!');return
        }
        
      }


    render(){
    const {phone,phoneFormated,step1,step2,step3,step4,step5,selectedColor,step6} = this.state
        return(
            step1?
            <SafeAreaView style={style.mainContainer}>
              <ScrollView
              style={{height:hp(75),marginTop:hp(12),alignSelf:"center"}}
              showsVerticalScrollIndicator={false}
              >
               <Image
               source = {require('./../../assets/imgs/logo.png')}
               style = {style.logo}
               /> 

               <Text style={style.screenTitle}>Sign Up</Text>
               <Text style={style.screenNote}>to start driving</Text>

               {/* <TextInput
                style = {style.textInputStyle}
                placeholder = "Email address"
                placeholderTextColor = "lightgrey"
                textContentType = "emailAddress"
                keyboardType = "email-address"
                autoCapitalize = "none"
                /> */}


               <PhoneInput
                ref={p=>this.phone = p}
                defaultValue={''}
                defaultCode="PK"
                layout="first"
                onChangeText={(text) => {}}
                onChangeFormattedText={(text) => {}}
                withDarkTheme
                withShadow
                autoFocus
                containerStyle={[style.textInputStyle,{backgroundColor:'#ffffff00',elevation:0,marginTop:hp(10)}]}
                textInputStyle={{borderWidth:0,height:hp(7),backgroundColor:"#ffffff00"}}
                textContainerStyle={{height:hp(7),backgroundColor:"#ffffff00"}}
                countryPickerButtonStyle={{backgroundColor:"#ffffff00"}}
                codeTextStyle={{backgroundColor:"#ffffff00"}}
                />


               <TouchableOpacity
                onPress = { () => this.setState({step2:true,step1:false})}
                style = {[style.nextButton,{marginTop:hp(18)}]}
                >
                <MaterialIcons name="arrow-forward" size={30} color={"#fff"}/>
                </TouchableOpacity>


                <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate("login")}}
                style={style.footerContainer}
                >
                <Text style={style.footer}>Have an Account? <Text style={style.footerTag}> Sign in</Text></Text>
                </TouchableOpacity>

                <View style={style.freeSpace}></View>
               </ScrollView>
            </SafeAreaView>

            :

            step2?
            <SafeAreaView style={style.mainContainer}>
              <ScrollView
              style={{height:hp(75),marginTop:hp(12),alignSelf:"center"}}
              showsVerticalScrollIndicator={false}
              >
               <Image
               source = {require('./../../assets/imgs/logo.png')}
               style = {style.logo}
               /> 

               <Text style={style.screenTitle}>Hello!</Text>
               <Text style={style.screenNote}>Tell us who are you</Text>

               <TextInput
                style = {[style.textInputStyle,{marginTop:hp(7)}]}
                placeholder = "First Name"
                placeholderTextColor = "lightgrey"
                textContentType = "givenName"
                autoCapitalize = "words"
                />


               <TextInput
                style = {[style.textInputStyle,{marginTop:hp(2.5)}]}
                placeholder = "Last Name"
                placeholderTextColor = "lightgrey"
                textContentType = "givenName"
                autoCapitalize = "words"
                />


               <View style = {style.profileContainer}>
                <View style={style.imageView}></View>
                 <TouchableOpacity
                 style = 
                 {{
                     marginLeft:20
                    }}
                 >
                 <Text 
                  style = { style.uploadImageTxt }> 
                   Upload Profile Picture 
                 </Text>    
                 </TouchableOpacity>  
                   </View> 


               <View style={{ flexDirection:"row" , marginTop:hp(15), marginBottom:156, width:225, alignItems:"center",justifyContent:"space-between"}}>

                <TouchableOpacity
                onPress = { () => this.setState({step1:true,step2:false})} 
                style = {{}}
                >
                <MaterialIcons name="arrow-back" size={35} color={"lightgrey"}/>
                </TouchableOpacity> 

                <TouchableOpacity
                onPress = { () => this.setState({step3:true,step2:false})} 
                style = {[style.nextButton,{marginTop:0,marginLeft:0}]}
                >
                <MaterialIcons name="arrow-forward" size={35} color={"#fff"}/>
                </TouchableOpacity>

               </View>

               </ScrollView>
            </SafeAreaView>

            :

            step3?
            <SafeAreaView style={style.mainContainer}>
               <ScrollView
              style={{height:hp(75),marginTop:hp(12),alignSelf:"center"}}
              showsVerticalScrollIndicator={false}
              >
               <Image
               source = {require('./../../assets/imgs/logo.png')}
               style = {style.logo}
               /> 

               <Text style={style.screenTitle}>Hello,</Text>
               <Text style={style.screenNote}>Asim Khurshid</Text>



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


               <TextInput
                 style = {[style.textInputStyle,{marginTop:30}]}
                placeholder = "Confirm Password"
                placeholderTextColor = "lightgrey"
                textContentType = "password"
                secureTextEntry = {true}
                />


               


                <View style={{ flexDirection:"row" , marginTop:hp(15), marginBottom:156, width:225, alignItems:"center",justifyContent:"space-between"}}>

                <TouchableOpacity
                onPress = { () => this.setState({step1:true,step2:false})} 
                style = {{}}
                >
                <MaterialIcons name="arrow-back" size={35} color={"lightgrey"}/>
                </TouchableOpacity> 

                <TouchableOpacity
                onPress = { () => this.setState({step4:true,step3:false})} 
                style = {[style.nextButton,{marginTop:0,marginLeft:0}]}
                >
                <MaterialIcons name="arrow-forward" size={35} color={"#fff"}/>
                </TouchableOpacity>

               </View>
               </ScrollView>
            </SafeAreaView>

            :
            
            <SafeAreaView style={style.mainContainer}>
               <ScrollView
              style={{height:hp(75),marginTop:hp(12),alignSelf:"center"}}
              showsVerticalScrollIndicator={false}
              >
               <Image
               source = {require('./../../assets/imgs/logo.png')}
               style = {style.logo}
               /> 

               <Text style={style.screenTitle}>Add</Text>
               <Text style={style.screenNote}>Company Info</Text>



               <TextInput
                style = {[style.textInputStyle,{marginTop:72}]}
                placeholder = "Company name"
                placeholderTextColor = "lightgrey"
                textContentType = "organizationName"
                autoCapitalize = "words"
                />

               <TextInput
                style = {[style.textInputStyle,{marginTop:30}]}
                placeholder = "MC number"
                placeholderTextColor = "lightgrey"
                keyboardType = "number-pad"
                />


               <TextInput
                style = {[style.textInputStyle,{marginTop:30}]}
                placeholder = "DOT number"
                placeholderTextColor = "lightgrey"
                keyboardType = "number-pad"
                />


               


                <View style={{ flexDirection:"row" , marginTop:hp(15), marginBottom:156, width:225, alignItems:"center",justifyContent:"space-between"}}>

                <TouchableOpacity
                onPress = { () => this.setState({step1:true,step2:false})} 
                style = {{}}
                >
                <MaterialIcons name="arrow-back" size={35} color={"lightgrey"}/>
                </TouchableOpacity> 

                <TouchableOpacity
                onPress = { () => this.setState({step5:true,step4:false})} 
                style = {[style.nextButton,{marginTop:0,marginLeft:0}]}
                >
                <MaterialIcons name="arrow-forward" size={35} color={"#fff"}/>
                </TouchableOpacity>

                </View>

               </ScrollView>

               <Modal
               isVisible = {step5}
               animationIn="slideInUp"
               animationOut="slideOutDown"
               animationInTiming={400}
               animationOutTiming={500}
               style={{flex:1,justifyContent:"center",margin:0}}
               >
               <View style={style.modal}>
                 <Text style = {style.modalTitle}>Verify Account</Text> 
                 <Text style = {style.modalTxt}>Upload these documents to verify your account. Once your account is verified, you will have a full access to the Apollo ecosystem.</Text> 
                 <Text style = {style.modalTxt}>Documents are usually verified within 24 hours or less</Text> 

                 <View style = {style.buttonsContainer}>

                    <View style = {style.buttonContainer}>
                    <TouchableOpacity
                    style={style.button}
                    >
                    <Ionicons name="cloud-upload-outline" size={35} color="lightgrey"/> 
                    <Text style={style.buttonTitle}>upload</Text>   
                    </TouchableOpacity>
                    <Text style={style.buttonTitle}>Rate confirmation</Text>
                    </View> 

                    <View style = {style.buttonContainer}>
                    <TouchableOpacity
                    style={style.button}
                    >
                    <Ionicons name="cloud-upload-outline" size={35} color="lightgrey"/>  
                    <Text style={style.buttonTitle}>upload</Text>    
                    </TouchableOpacity>
                    <Text style={style.buttonTitle}>Bill of ABC</Text>
                    </View>

                    <View style = {style.buttonContainer}>
                    <TouchableOpacity
                    style={style.button}
                    >
                    <Ionicons name="cloud-upload-outline" size={35} color="lightgrey"/>   
                    <Text style={style.buttonTitle}>upload</Text>   
                    </TouchableOpacity>
                    <Text style={style.buttonTitle}>Proof of delivery</Text>
                    </View> 
                     
                </View>  


                <TouchableOpacity
                onPress = { () => this.setState({step5:false,step6:true})}
                style={style.submitButton}
                >
                <Text style={style.submitButtonTxt}>Submit</Text>    
                </TouchableOpacity>
                   
               </View>    
               </Modal>


               <Modal
               isVisible = {step6}
               animationIn="slideInUp"
               animationOut="slideOutDown"
               animationInTiming={400}
               animationOutTiming={500}
               style={{flex:1,justifyContent:"center",margin:0}}
               >
               <View style={[style.modal,{height:600}]}>
                
                <Text style = {[style.modalTitle,{marginTop:25}]}>Welcome!</Text> 

                <View style = {style.imageView1}></View>

                <Text style = {style.screenNote1}>Asim Khurshid</Text>

                <Text style={style.title}>Please select you app</Text>
                <Text style={[style.title,{marginTop:0}]}>theme color</Text>

                <View style = {style.colorBoxescontainer}>

                    <TouchableOpacity
                    onPress = {() => { this.setState({selectedColor : "#FFC9C9"})}}
                    style = {[style.colorBox , { backgroundColor : "#FFC9C9" }]}
                    >
                    {selectedColor == "#FFC9C9" ?   
                    <Octicons name="check" size={25} color="#fff"/>
                    :
                    null}
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress = {() => { this.setState({selectedColor : "#0047FF"})}}
                    style = {[style.colorBox , { backgroundColor : "#0047FF" }]}
                    >
                    {selectedColor == "#0047FF" ?   
                    <Octicons name="check" size={25} color="#fff"/>
                    :
                    null}    
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress = {() => { this.setState({selectedColor : "#C9FDFF"})}}
                    style = {[style.colorBox , { backgroundColor : "#C9FDFF" }]}
                    >
                    {selectedColor == "#C9FDFF" ?   
                    <Octicons name="check" size={25} color="#fff"/>
                    :
                    null}    
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress = {() => { this.setState({selectedColor : "#FEF8AA"})}}
                    style = {[style.colorBox , { backgroundColor : "#FEF8AA" }]}
                    >
                    {selectedColor == "#FEF8AA" ?   
                    <Octicons name="check" size={25} color="#fff"/>
                    :
                    null}    
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress = {() => { this.setState({selectedColor : "#AAD4FE"})}}
                    style = {[style.colorBox , { backgroundColor : "#AAD4FE" }]}
                    >
                    {selectedColor == "#AAD4FE" ?   
                    <Octicons name="check" size={25} color="#fff"/>
                    :
                    null}   
                    </TouchableOpacity>

                </View>


                <View style = {[style.colorBoxescontainer,{marginTop:hp(2)}]}>

                    <TouchableOpacity
                    onPress = {() => { this.setState({selectedColor : "#C9FFCD"})}}
                    style = {[style.colorBox , { backgroundColor : "#C9FFCD" }]}
                    >
                    {selectedColor == "#C9FFCD" ?   
                    <Octicons name="check" size={25} color="#fff"/>
                    :
                    null}    
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress = {() => { this.setState({selectedColor : "#FFB194"})}}
                    style = {[style.colorBox , { backgroundColor : "#FFB194" }]}
                    >
                    {selectedColor == "#FFB194" ?   
                    <Octicons name="check" size={25} color="#fff"/>
                    :
                    null}    
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress = {() => { this.setState({selectedColor : "#FFC9FB"})}}
                    style = {[style.colorBox , { backgroundColor : "#FFC9FB" }]}
                    >
                    {selectedColor == "#FFC9FB" ?   
                    <Octicons name="check" size={25} color="#fff"/>
                    :
                    null}    
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress = {() => { this.setState({selectedColor : "#FEAAAA"})}}
                    style = {[style.colorBox , { backgroundColor : "#FEAAAA" }]}
                    >
                    {selectedColor == "#FEAAAA" ?   
                    <Octicons name="check" size={25} color="#fff"/>
                    :
                    null}    
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress = {() => { this.setState({selectedColor : "#FB84FF"})}}
                    style = {[style.colorBox , { backgroundColor : "#FB84FF" }]}
                    >
                    {selectedColor == "#FB84FF" ?   
                    <Octicons name="check" size={25} color="#fff"/>
                    :
                    null}    
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                style={style.submitButton}
                >
                <Text style={style.submitButtonTxt}>Save</Text>    
                </TouchableOpacity>
                   
               </View>    
               </Modal>
            </SafeAreaView>
        )
    }  
}