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
   header: {
    height:hp(15.8),
    width:wp(100),
    borderWidth:0,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
  },
  back: {
    height:hp(5.5),
    width:hp(5.5),
    borderRadius:hp(2.75),
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    elevation:5
  },
  heading: {
    fontSize:wp(5.5),
   // color:"#fff",
    fontFamily:"Gilroy-Bold",
  },
  loadAlertContainer: {
    height:hp(70),
    width:wp(88),
    borderWidth:0,
    alignSelf:"center",
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    overflow:"hidden"
  },
  smallMapContainer: {
    height:hp(30),
    width:"100%",
    borderWidth:0,
  },
  alertContainer: {
    height:hp(41),
    width:"99.9%",
    borderWidth:0,
    marginTop:"-5%",
    borderColor:"blue",
    backgroundColor:"#fff",
    borderRadius:20,
    elevation:3,
    alignSelf:"center",
  },
  infoContainer: {
    height:hp(7),
    width:wp(70),
    alignSelf:"center",
    borderWidth:0,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderColor:"#C0C5D1",
    marginTop:hp(4)
  },
  senderInfo: {
   borderWidth:0,
   minWidth:wp(25)
  },
  reciverInfo: {
    borderWidth:0,
    minWidth:wp(25),
   alignItems:"flex-end"
  },
  Name: {
    fontSize:wp(5),
    fontFamily:"Gilroy-ExtraBold",
    color:"#3C4253"
  },
  City: {
    fontSize:wp(3.5),
    color:"#3C4253",
    fontFamily:"Gilroy-Light"
  },
  to: {
    fontSize:12,
    fontFamily:"Gilroy-Medium",
    color:"#3C4253"
  },
  amountContainer: {
    alignSelf:"center",
    borderWidth:0
  },
  amount: {
    fontSize:51,
    fontFamily:"Gilroy-Bold",
    color:"#3C4253"
  },
  distanceAndRate: {
    width:wp(60),
    borderWidth:0,
    alignSelf:"center",
    marginTop:hp(3),
    flexDirection:"row",
    justifyContent:"space-between"
  },
  disAndRate: {
    fontSize:14,
    fontFamily:"Gilroy-Medium",
    color:"#C0C5D1"
  },
  buttonsContainer: {
    alignSelf:"center",
    width:wp(75),
    borderWidth:0,
    marginTop:hp(3),
    flexDirection:"row",
    justifyContent:"space-between"
  },
  button: {
    height:hp(6.5),
    width:"48%",
    borderWidth:0,
    borderRadius:hp(3.25),
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    elevation:5
  },
  buttonTxt: {
    fontSize:16,
    fontFamily:"Gilroy-Bold",
    color: "#3C4253",
  }
  });
