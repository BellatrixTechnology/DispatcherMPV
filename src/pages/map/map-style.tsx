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
  },
  delButton: {
    height:44,
    width:158,
    backgroundColor:"blue",
    position:"absolute",
    alignSelf:"center",
    bottom:hp(5),
    justifyContent:"center",
    alignItems:"center",
    borderRadius:hp(22)
  },
  delButtonTxt: {
    fontSize:14,
    fontFamily:"Gilroy-Bold",
    color:"#fff"
  },
   _mainContainer: {
    flex:1,
    backgroundColor:"#0047FF",
   },
   _header: {
    height:hp(18),
    width:wp(100),
    borderWidth:0,
    justifyContent:"center",
    alignItems:"center"
   },
   _infoContainer: {
    flex:1,
    backgroundColor:"#fff",
    borderRadius:wp(10),
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0 ,
    alignItems:"center"
   },
   timeTitle: {
    fontSize: wp(5.2),
    fontFamily: "Gilroy-Light",
    color:"#fff"
   },
   time: {
    fontSize: wp(8.5),
    fontFamily: "Gilroy-Bold",
    color:"#fff",
    marginTop: hp(1)
   },
   statusContainer: {
     height:hp(4.5),
     width:wp(33),
     position:"absolute",
     top: hp(-4.5/2),
     backgroundColor:"#F4F7FC",
     borderRadius:hp(4.5/2),
     elevation:3,
     justifyContent:"center",
     alignItems:"center"
   },
   statusTitle: {
     fontSize:wp(3.2),
     fontFamily:"Gilroy-Bold",
     color: "#C0C5D1"
   },
   status: {
    fontSize:wp(3.2),
    fontFamily:"Gilroy-Medium",
    color: "#31A702"
   },
   orderTracking: {
    fontSize:wp(6.5),
    fontFamily:"Gilroy-Bold",
    color: "#3C4253",
    marginTop:hp(5)
   },
   trackingNO: {
    fontSize:wp(3.2),
    fontFamily:"Gilroy-Regular",
    color: "#C0C5D1",
    marginTop:hp(0.5)
   },
   statusMainContainer: {
     height:hp(50),
     width:wp(80),
     borderWidth:0,
     marginTop:hp(1)
   },
   line: {
     height:hp(50),
     width:0,
     marginLeft:hp(5/2),
     borderWidth:1.5,
     borderColor:"#F4F7FF"
   },
   stepContainer: {
     height:hp(5.5),
     //width:wp(50),
     borderWidth:0,
     position:"absolute",
     flexDirection:"row",
     alignItems:"center",
     
   },
   iconContainer: {
     height:hp(5),
     width:hp(5),
     borderRadius:hp(5/2),
     backgroundColor:"#F4F6FF",
     justifyContent:"center",
     alignItems:"center",
   },
   statusTxt: {
     fontSize: wp(3.6),
     fontFamily: "Gilroy-Medium",
     color: "#C0C5D1",
     marginLeft: hp(2.5)
   },
   currentstatusTxt: {
    fontSize: wp(5.3),
    fontFamily: "Gilroy-Bold",
    color: "#0047FF",
    marginLeft: hp(2.5)
   },
   statusDetailContainer: {
     //height:27,
     width:wp(55),
     borderWidth:0,
     position:"absolute",
     marginLeft:hp(7.5),
     top: hp(22.5)
   },
   statusDetail: {
    fontSize: wp(3.2),
    fontFamily: "Gilroy-Medium",
    color: "#C0C5D1",
   },
   uploadProofTitle: {
    position:"absolute",
    marginLeft:hp(7.5),
    top: hp(28),
    fontSize: wp(4.2),
    fontFamily: "Gilroy-Bold",
    color: "#3C4253", 
   },
   _button : {
    height:hp(10),
    width : wp(28),
    borderWidth:0.5,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#C0C5D1",
    borderStyle:"dashed",
    position:"absolute",
    top:hp(33),
    marginLeft: hp(7.5)
  },
  _buttonTitle: {
    fontSize:wp(3),
    marginTop:hp(0.5),
    alignSelf:"center",
    fontFamily:"Gilroy-Bold",
    color:"#3C4253"
  },
  viewMapButton: {
    height: hp(6.5),
    width:wp(33),
    borderRadius:hp(6.5/2),
    backgroundColor:"#0047FF",
    elevation:3,
    justifyContent:"center",
    alignItems:"center",
    marginVertical:hp(3)
  },
  viewMapButtonTxt: {
    fontSize: wp(4.5),
    fontFamily: "Gilroy-Bold",
    color: "#fff",
  }
  });
