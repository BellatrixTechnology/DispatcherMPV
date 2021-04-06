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
    //alignItems:"center"
   },
   header: {
     height:hp(15),
     width:wp(100),
     borderWidth:0,
     justifyContent:"center",
     alignItems:"center",
     flexDirection:"row",
   },
   headerButton: {
     height:hp(6),
     width:wp(30),
     borderRadius:hp(3),
     backgroundColor:"#fff",
     elevation:5,
     justifyContent:"center",
     alignItems:"center"
   },
   headerButtonTxt: {
     fontSize:wp(4.2),
     //fontFamily:"Gilory-Bold",
     fontFamily:"Gilroy-Medium",
     color:"#3C4253"
   },
   headerButton1: {
    height:hp(6),
    width:wp(30),
    borderRadius:hp(3),
    //backgroundColor:"#fff",
    //elevation:5,
    justifyContent:"center",
    alignItems:"center",
    marginLeft:wp(3)
  },
  headerButtonTxt1: {
    fontSize:wp(4.2),
    fontFamily:"Gilroy-Bold",
    color:"#fff"
  },
  dataContainer: {
    flex:1,
    backgroundColor:"#fff",
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    paddingTop:hp(3),
    borderColor:"#C0C5D1",
  },
  card: {
    //height:hp(27),
    width:wp(90),
    borderWidth:0,
    alignSelf:"center",
    marginTop:hp(2),
    paddingTop:hp(4),
    paddingBottom:hp(2),
    elevation:10,
    borderRadius:10,
    backgroundColor:"#fff"
  },
  infoContainer: {
    height:hp(7),
    width:wp(75),
    alignSelf:"center",
    borderWidth:0,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderColor:"#C0C5D1",
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
    fontFamily:"Gilroy-Medium",
    color:"#3C4253"
  },
  City: {
    fontSize:wp(3.5),
    color:"#C0C5D1",
    fontFamily:"Gilroy-Medium"
  },
  title: {
    fontSize:wp(3.5),
    color:"#C0C5D1",
    fontFamily:"Gilroy-Medium"
  },
  value: {
    fontSize:wp(3.5),
    fontFamily:"Gilroy-Bold",
    color:"#3C4253"
  },
  status: {
    fontSize:wp(3.5),
    color:"#17C903",
    fontFamily:"Gilroy-Medium"
  },
  type: {
    fontSize:wp(2.5),
    marginBottom:hp(0.4),
    fontFamily:"Gilroy-Medium",
    color:"#3C4253"
  },
  amount: {
    fontSize:wp(6),
    fontFamily:"Gilroy-Bold",
    marginLeft:wp(2),
    color:"#3C4253"
  },
  logo: {
    position:"absolute",
    height:32,
    width:34,
    alignSelf:"center",
    top:hp(10)
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
  shipNoContainer: {
    height:hp(8),
    width:wp(88),
    alignSelf:"center",
    borderWidth:0,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  shipNoTitle: {
    fontSize:wp(6),
    fontFamily:"Gilroy-Bold",
    color:"#3C4253"
  },
  shipNo: {
    fontSize:wp(5),
    fontFamily:"Gilroy-Medium",
    color:"#C0C5D1",
  },
  dmtnContainer: {
    height:hp(10),
    width:wp(88),
    alignSelf:"center",
    borderBottomWidth:0.2,
    justifyContent:"space-around",
    paddingVertical:hp(1.5),
    borderColor:"#C0C5D1",
  },
  boxContainer: {
    height:hp(17),
    width:wp(88),
    alignSelf:"center",
    justifyContent:"center",
    borderBottomWidth:0.2,
    borderColor:"#C0C5D1",
  },
  attchFileContainer: {
    height:hp(23),
    width:wp(88),
    alignSelf:"center",
    borderWidth:0,
    justifyContent:"center",
    //flexDirection:"row"
  },
  buttonsContainer: {
    //height:hp(15),
    //width:290,
    borderWidth:0,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:hp(1.5)
  },
  buttonContainer : {
    height:hp(15),
    width : "26%",
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
  },
  buttonTitle: {
    fontSize:10,
    marginTop:hp(0.5),
    alignSelf:"center",
    fontFamily:"Gilroy-Bold"
  },
  });
