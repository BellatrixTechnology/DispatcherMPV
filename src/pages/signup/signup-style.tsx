import {StyleSheet, Dimensions} from 'react-native';
//import {globalStyle} from '../../globalStyle';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const $eqWh = (Dimensions.get('screen').width - 54) / 2;
export const style = StyleSheet.create({
  //  mainContainer: {
  //   flex:1,
  //   paddingHorizontal:wp(10),
  //   backgroundColor:"#fff"
  //  },
  //  logo: {
  //   height:92,
  //   width:262,
  //   marginTop:hp(10),
  //   marginLeft:-wp(4)
  //  },
  //  screenTitle: {
  //    fontSize:38,
  //    fontWeight:"bold",
  //    color:"#3C4253"
  //  },
  //  screenNote: {
  //   fontSize:32,
  //   fontWeight:"bold",
  //   color:"lightgrey",
  //   marginBottom:hp(8)
  // },
  // screenNote1: {
  //   fontSize:26,
  //   fontWeight:"bold",
  //   color:"lightgrey",
  //   marginBottom:hp(5),
  //   marginTop:hp(2)
  // },
  // textInputStyle: {
  //   height:hp(7),
  //   width:wp(75),
  //   borderBottomWidth:2,
  //   marginTop:hp(3),
  //   borderColor:"lightgrey",
  //   fontSize:16,
  //   fontWeight:"bold"
  // },
  // nextButton : {
  //   height:hp(8),
  //   width:wp(35),
  //   borderRadius:hp(4),
  //   backgroundColor:"#3C4253",
  //   marginTop:hp(13),
  //   justifyContent:"center",
  //   alignItems:"center",
  //   elevation:3
  // },
  // nextButton1 : {
  //   // height:hp(8),
  //   // width:wp(35),
  //   // borderRadius:hp(4),
  //   //marginTop:hp(6),
  //   // justifyContent:"center",
  //   // alignItems:"center"
  // },
  // footer: {
  //   fontSize:18,
  //   fontWeight:"bold",
  //   color:"lightgrey",
  //   marginTop:hp(5)
  // },
  // footerTag: {
  //   color:"#3C4253",
  //   fontSize:18,
  //   fontWeight:"bold"
  // },

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
  screenNote1: {
    fontSize:24,
    fontFamily:"Gilroy-Medium",
    color:"#C0C5D1",
    marginTop:18
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
    elevation:0,
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
  }, 
  profileContainer: {
    height:hp(10),
    width:wp(75),
    borderWidth:0,
    marginTop:30,
    marginLeft:66,
    flexDirection:"row",
    alignItems:"center"
  },
  imageView: {
    height:66,
    width:66,
    borderRadius:33,
    backgroundColor:"lightgrey"
  },
  imageView1: {
    height:102,
    width:102,
    borderRadius:51,
    backgroundColor:"lightgrey",
    marginTop : 30,
    elevation:5
  },
  uploadImageTxt: {
    fontSize:18,
    fontWeight:"bold",
    color:"#3C4253",
  },
  modal: {
    backgroundColor:"#fff",
    width:350,
    height:574,
    alignSelf:"center",
    borderRadius:hp(5),
    paddingHorizontal:35,
    //justifyContent:"center",
    alignItems:"center"
  },
  modalTitle: {
    alignSelf : "center",
    fontSize : 30,
    fontFamily : "Gilroy-Bold",
    marginTop : 66,
    color : "#3C4253"
  },
  modalTxt: {
    fontSize : 16,
    fontFamily: "Gilroy-Medium",
    marginTop:29
  },
  buttonsContainer: {
    height:hp(15),
    width:290,
    borderWidth:0,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:60
  },
  buttonContainer : {
    height:hp(15),
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
    borderColor:"lightgrey"
  },
  buttonTitle: {
    fontSize:10,
    marginTop:hp(0.5),
    alignSelf:"center"
  },
  submitButton: {
    height:hp(7),
    width:wp(40),
    backgroundColor:"#0047FF",
    elevation:5,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    marginTop : 55,
    borderRadius:hp(3.5),
    marginBottom:hp(5)
  },
  submitButtonTxt: {
    fontSize:16,
    color:"#fff",
    fontWeight:"bold"
  },
  title: {
    fontSize:18,
    fontWeight:"bold",
    color:"#3C4253",
    fontFamily:"Gilroy-Medium",
    marginTop:40
  },
  colorBoxescontainer: {
    height:hp(5),
    width:wp(70),
    alignItems:"center",
    justifyContent:"space-around",
    flexDirection:"row",
    borderWidth:0,
    marginTop:58
  },
  colorBox: {
    height:43,
    width:46,
    borderWidth:0,
    borderRadius:5,
    justifyContent:"center",
    alignItems:"center"
  }
  });
