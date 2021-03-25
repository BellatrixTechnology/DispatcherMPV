import {StyleSheet, Dimensions,PixelRatio} from 'react-native';
//import {globalStyle} from '../../globalStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const $eqHi = (Dimensions.get('screen').height*0.8)
export const style = StyleSheet.create({
   mainContainer: {
    flex:1,
    backgroundColor:"#fff",
    justifyContent:"center"
//    borderWidth:1
   },
   logo: {
    height:hp(8),
    width:262,
    marginLeft:-12,
   // marginTop:130
   },
   screenTitle: {
     fontSize:hp(5.5),
     //fontWeight:"bold",
     color:"#3C4253",
    // marginLeft:65,
     marginTop:hp(2.5),
     fontFamily:"Gilroy-Bold"
   },
   screenNote: {
    fontSize:hp(3.8),
    fontFamily:"Gilroy-Medium",
    color:"#C0C5D1",
   // marginLeft:65,
    marginTop:hp(1.5),
  },
  textInputStyle: {
    height:hp(7),
    width:wp(70),
    borderBottomWidth:2,
    //marginLeft:66,
    borderColor:"lightgrey",
    fontSize:18,
    fontFamily:"Gilroy-Medium",
    //marginTop:hp(10)
  },
  nextButton : {
    height:hp(8.5),
    width:158,
    borderRadius:hp(4.25),
    backgroundColor:"#3C4253",
    marginTop:hp(11),
    //marginLeft:65,
    justifyContent:"center",
    alignItems:"center",
    elevation:1,
  },
  footerContainer: {
    marginTop:hp(8.2),
    //marginLeft:66,
   // marginBottom:30
  },
  footer: {
    fontSize:hp(2.5),
    fontFamily:"Gilroy-Medium",
    color:"lightgrey",
  },
  footerTag: {
    color:"#3C4253",
    fontSize:hp(2.5),
    fontFamily:"Gilroy-Medium",
  },
  freeSpace: {
   // height:156
  } 
  });
