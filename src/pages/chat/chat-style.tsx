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
    backgroundColor:"#0047FF",
   },
   header: {
    height:hp(15),
    width:wp(100),
    borderWidth:0,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    paddingTop:hp(2)
    //borderTopWidth:1
  },
   backButton: {
    height:hp(5.5),
    width:hp(5.5),
    borderRadius:hp(2.75),
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    elevation:5
  },
  heading: {
    fontSize:wp(6),
    color:"#fff",
    fontFamily:"Gilroy-Bold",
  },
  dataContainer: {
    flex:1,
    backgroundColor:"#fff",
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    paddingTop:hp(3),
    borderColor:"#C0C5D1",
  },
  dpAndNameContainer: {
    height:hp(7),
    //width:wp(70),
    borderWidth:0,
    flexDirection:"row",
    alignItems:"center"
  },
  dp: {
    height:hp(6),
    width:hp(6),
    borderRadius:hp(3),
    backgroundColor:"lightgrey",
    elevation:5,
    overflow:"hidden"
  },
  nameAndStatusContainer: {
    //height:hp(5),
    //width:wp(40),
    borderWidth:0,
    marginLeft:wp(3)
  },
  name: {
    fontSize:wp(4.5),
    fontFamily:"Gilroy-Bold",
    color:"#fff"
  },
  status: {
    fontFamily:"Gilroy-Medium",
    color:"#fff",
    fontSize:wp(2.5),
    marginLeft:wp(1)

  },
  dotAndName: {
    flexDirection:"row",
    alignItems:"center",
    borderWidth:0
  },
  dot: {
    height:6,
    width:6,
    borderRadius:3,
    backgroundColor:"#09C729"
  },
  keyboardView: {
    height: hp(6.5),
    width: wp(73),
    flexDirection: 'row',
    paddingHorizontal: wp(3),
    borderRadius: hp(3.25),
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    //elevation:3,
    //alignSelf:"center"
    },
  inputContainer: {
    height:hp(12),
    width:wp(88),
    //borderTopWidth:0.2,
    alignSelf:"center",
    alignItems:"center",
    flexDirection:"row",
    justifyContent:"space-between",
    borderColor:"#707070"
    },
  mic: {
    height:hp(6.5),
    width:hp(6.5),
    borderRadius:hp(6.5/2),
    backgroundColor:"#0047FF",
    elevation:3,
    justifyContent:"center",
    alignItems:"center"
  },
  messageContainer: {
    //height:hp(10),
    maxWidth:wp(72),
    borderWidth:0,
    marginLeft:wp(6),
    justifyContent:"space-between",
    marginTop:hp(3)
  },
  dpAndMsgContainer: {
    //height:"80%",
    //width:"100%",
    borderWidth:0,
    flexDirection:"row",
    alignItems:"flex-end",
    //justifyContent:"space-between"
  },
  smallDp: {
    height:wp(5),
    width:wp(5),
    borderRadius:wp(2.5),
    backgroundColor:"lightgrey",
    //elevation:1,
    overflow:"hidden"
  },
  messageView: {
    //height:"100%",
    maxWidth:wp(62),
    borderWidth:0,
    borderRadius:wp(8),
    borderBottomLeftRadius:0,
    backgroundColor:"#F5F6FA",
    paddingHorizontal:wp(5),
    paddingVertical:wp(4),
    marginLeft:wp(1)
  },
  message: {
    fontSize:wp(4.2),
    fontFamily:"Gilroy-Medium",
    color:"#3C4253"
  },
  msgTime: {
    fontSize:wp(2.4),
    fontFamily:"Gilroy-Light",
    color:"#3C4253",
    marginLeft:wp(10),
    marginTop:hp(0.5)
    //alignSelf:"flex-end"
  },
  messageContainer1: {
    //height:hp(10),
    maxWidth:wp(72),
    borderWidth:0,
    marginRight:wp(6),
    justifyContent:"space-between",
    marginTop:hp(3),
    alignSelf:"flex-end",
  },
  dpAndMsgContainer1: {
    //height:"80%",
    //width:"100%",
    borderWidth:0,
    flexDirection:"row",
    alignItems:"flex-end",
    //justifyContent:"space-between"
  },
  smallDp1: {
    height:wp(5),
    width:wp(5),
    borderRadius:wp(2.5),
    backgroundColor:"lightgrey",
    elevation:0,
    overflow:"hidden"
  },
  messageView1: {
    //height:"100%",
    maxWidth:wp(62),
    borderWidth:0,
    borderRadius:wp(8),
    borderBottomRightRadius:0,
    backgroundColor:"#0047FF",
    paddingHorizontal:wp(5),
    paddingVertical:wp(4),
    marginRight:wp(1),
    
  },
  message1: {
    fontSize:wp(4.2),
    fontFamily:"Gilroy-Medium",
    color:"#fff",
  },
  msgTime1: {
    fontSize:wp(2.4),
    fontFamily:"Gilroy-Light",
    color:"#3C4253",
    marginRight:wp(10),
    marginTop:hp(0.5),
    alignSelf:"flex-end"
    //alignSelf:"flex-end"
  } 
  });
