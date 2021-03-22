import {StyleSheet, Dimensions} from 'react-native';
//import {globalStyle} from '../../globalStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const $eqWh = (Dimensions.get('screen').width - 54) / 2;
export const style = StyleSheet.create({
   mainContainer: {
    flex:1,
   // paddingHorizontal:wp(10),
    backgroundColor:"#fff"
   },
   logo: {
    height:92,
    width:262,
    marginLeft:47,
    marginTop:130
   },
   screenTitle: {
     fontSize:42,
     //fontWeight:"bold",
     color:"#3C4253",
     marginLeft:65,
     marginTop:22,
     fontFamily:"Gilroy-Bold"
   },
   screenNote: {
    fontSize:30,
    fontFamily:"Gilroy-Medium",
    color:"#C0C5D1",
    marginLeft:65,
    marginTop:15,
  },
  textInputStyle: {
    height:hp(7),
    width:wp(70),
    borderBottomWidth:2,
    marginLeft:66,
    borderColor:"lightgrey",
    fontSize:18,
    fontFamily:"Gilroy-Medium",
    marginTop:72
  },
  nextButton : {
    height:70,
    width:158,
    borderRadius:35,
    backgroundColor:"#3C4253",
    marginTop:100,
    marginLeft:65,
    justifyContent:"center",
    alignItems:"center",
    elevation:1,
  },
  footerContainer: {
    marginTop:63,
    marginLeft:66,
    marginBottom:30
  },
  footer: {
    fontSize:20,
    fontFamily:"Gilroy-Medium",
    color:"lightgrey",
  },
  footerTag: {
    color:"#3C4253",
    fontSize:20,
    fontFamily:"Gilroy-Medium",
  } 
  });
