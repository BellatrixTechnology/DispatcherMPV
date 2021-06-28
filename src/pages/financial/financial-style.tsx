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
    height:hp(18),
    width:wp(100),
    borderWidth:0,
    justifyContent:"center",
    
   },
   infoContainer: {
    flex:1,
    backgroundColor:"#fff",
    borderRadius:wp(10),
    borderBottomLeftRadius:0,
    borderBottomRightRadius:0 
   },
   buttonsContainer: {
     height:hp(3.9),
     width:wp(90),
     borderWidth:0,
     marginTop:hp(4),
     alignSelf:"center",
     flexDirection : "row",
     justifyContent:"space-around",
     alignItems:"center",
   },
   button: {
     height : hp(3.9),
     width : wp(18),
     backgroundColor : "#0047FF",
     borderRadius : hp(3.9/2),
     justifyContent:"center",
     alignItems:"center",
   },
   buttonTxt: {
     fontSize:wp(3.2),
     fontFamily: "Gilroy-Light",
     color: "#fff"
   },
   button1: {
    height : hp(3.9),
    width : wp(18),
    backgroundColor : "#fff",
    borderRadius : hp(3.9/2),
    justifyContent:"center",
    alignItems:"center",
  },
  buttonTxt1: {
    fontSize:wp(3.2),
    fontFamily: "Gilroy-Regular",
    color: "#3C4253"
  },
  amount: {
    fontSize : wp(10),
    fontFamily : 'Gilroy-Bold',
    color : "#3C4253",
    marginVertical : hp(3.5),
    alignSelf : "center"
  },
  amountValue : {
    fontSize : wp(5),
    fontFamily : 'Gilroy-Regular',
    color:"#979797"
  }, 
  buttonTxtDh: {
    fontSize:wp(2.6),
    fontFamily: "Gilroy-Medium",
    color: "#fff"
  },
  buttonTxtDh1: {
    fontSize:wp(2.6),
    fontFamily: "Gilroy-Regular",
    color: "#3C4253"
  },
  otherInfomainContainer: {
    height : hp(15),
    width : wp(80),
    alignSelf : "center",
    //borderWidth : 1,
    marginTop : hp(2),
    marginBottom: hp(5),
    borderRadius : wp(3.5),
    elevation : 3,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    flexDirection : "row"
  },
  otherInfoContainer: {
    height: hp(8),
    width:"33.33%",
    borderLeftWidth:1,
    justifyContent:"center",
    alignItems:"center",
    borderColor:'#70707020'
  },
  otherInfoValue: {
    fontSize: wp(8),
    fontFamily: "Gilroy-Medium",
    color:"#3C4253"
  },
  otherInfoTitle: {
    fontSize: wp(2.6),
    fontFamily: "Gilroy-Bold",
    color:"#3C425335"
  },
  headerView: {
    height:hp(15),
    width:wp(85),
    borderWidth:0,
    alignSelf:"center",
    borderRadius:wp(5),
    marginTop:hp(3),
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:wp(5)
  },
  headingTitle: {
    fontSize : wp(3.6),
    fontFamily : 'Gilroy-Regular',
    color:"#fff"

  },
  headingValue: {
    fontSize : wp(7.2),
    fontFamily : 'Gilroy-Medium',
    color:"#fff"
  },
  payButton: {
    height : hp(4.8),
    width : wp(25),
    backgroundColor:"#fff",
    borderRadius : hp(4.8/2),
    elevation:3,
    justifyContent:"center",
    alignItems:"center"
  },
  payButtonTxt: {
    fontSize : wp(3.6),
    fontFamily : 'Gilroy-Bold',
    color:"#0047FF"
  },

  });
