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
   },
   profileMainContainer: {
    height:hp(27),
    width:wp(90),
    //borderWidth:1,
    alignSelf:"center",
    marginTop:hp(7),
    backgroundColor:"#FBFAFF"
    // justifyContent:"center",
    // alignItems:"center",
    // flexDirection:"row"
   },
   profileContainer: {
    height:hp(23.5),
    width:wp(80),
    borderWidth:0,
    marginTop:hp(0.5),
    marginLeft:wp(5),
    flexDirection:"row" 
   },
   dp: {
    height:hp(20),
    width:wp(30),
    borderRadius:15,
    alignSelf:"flex-end",
   },
   about: {
    height:hp(20),
    //width:wp(40),
    borderWidth:0,
    alignSelf:"flex-end",
    marginLeft:wp(3)
   },
   name: {
    fontSize:wp(5.5),
    fontFamily:"Gilroy-ExtraBold",
    color:"#090909",
    marginTop:hp(2) 
   },
   spec: {
    fontSize:14,
    fontFamily:"Gilroy-Reqular",
    color:"#ABABB5",
    marginLeft:wp(1),
    marginTop:hp(0.5) 
   },
   ratingContainer: {
    flexDirection:"row",
    marginLeft:wp(1),
    marginTop:hp(1),
    borderWidth:0
   },
   iconContainer: {
    height:hp(4),
    width:hp(4),
    borderRadius:8,
    //borderWidth:1,
    backgroundColor:"#fff",
    elevation:5,
    justifyContent:"center",
    alignItems:"center" 
   },
   valuesContainer: {
    justifyContent:"center",
    marginLeft:wp(2),
    borderWidth:0
   },
   valueTitle: {
     fontSize:wp(2.8),
     fontFamily:"Gilroy-Regular",
     color:"#ABABB5"
   },
   value: {
     fontSize:wp(2.8),
     fontFamily:"Gilroy-Bold",
     color:"#010101",
     marginTop:hp(0.3)
   },
   companyInfoContainer: {
    //height:hp(30),
    width:wp(90),
    alignSelf:"center",
    //borderWidth:1,
    marginTop:hp(2.5),
    paddingVertical:hp(2.5),
    paddingLeft:wp(6),
    backgroundColor:"#fff",
    borderRadius:8,
    elevation:8
   },
   title: {
     fontSize:wp(4.2),
     fontFamily:"Gilroy-Bold",
     color:"#3C4253",
     marginBottom:hp(2)
   },
   companyInfoTitle: {
    fontSize:wp(2.8),
    fontFamily:"Gilroy-ExtraBold",
    color:"#3C4253",
   },
   companyInfoValue: {
    fontSize:wp(2.8),
    fontFamily:"Gilroy-Medium",
    color:"#8F929D",
   },
   buttonsContainer: {
    //height:hp(15),
    width:wp(75),
    borderWidth:0,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:hp(1),
    marginBottom:hp(1)
  },
  buttonContainer : {
    height:hp(11),
    width : "30%",
    borderWidth:0,
    justifyContent:"flex-start"
  },
  button : {
    height:hp(10),
    width : "100%",
    borderWidth:0.5,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#C0C5D1",
    borderStyle:"dashed",
    //marginLeft:wp(3)
  },
  buttonTitle: {
    fontSize:9,
    marginTop:hp(0.5),
    alignSelf:"center",
    fontFamily:"Gilroy-Bold",
    color:"#3C4253"
  },
  buttonBottomTitle: {
    fontSize:wp(2.2),
    marginTop:hp(0.5),
    alignSelf:"center",
    fontFamily:"Gilroy-Medium",
    color:"#8F929D"
  },
   vehicleInfoContainer: {
    //height:hp(17),
    width:wp(90),
    alignSelf:"center",
    //borderWidth:1,
    marginTop:hp(3.5),
    backgroundColor:"#fff",
    borderRadius:8,
    elevation:8,
   // marginTop:hp(2.5),
    paddingVertical:hp(2.5),
    paddingLeft:wp(6),
   }
  });
