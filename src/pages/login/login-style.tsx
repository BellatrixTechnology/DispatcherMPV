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
    paddingHorizontal:wp(10),
    backgroundColor:"#fff"
   },
   logo: {
    height:92,
    width:262,
    marginTop:hp(10),
    marginLeft:-wp(4)
   },
   screenTitle: {
     fontSize:38,
     fontWeight:"bold",
     color:"#3C4253"
   },
   screenNote: {
    fontSize:32,
    fontWeight:"bold",
    color:"lightgrey",
    marginBottom:hp(8)
  },
  textInputStyle: {
    height:hp(7),
    width:wp(75),
    borderBottomWidth:2,
    marginTop:hp(3),
    borderColor:"lightgrey",
    fontSize:16,
    fontWeight:"bold"
  },
  nextButton : {
    height:hp(8),
    width:wp(35),
    borderRadius:hp(4),
    backgroundColor:"#3C4253",
    marginTop:hp(13),
    justifyContent:"center",
    alignItems:"center",
    elevation:3
  },
  footer: {
    fontSize:18,
    fontWeight:"bold",
    color:"lightgrey",
    marginTop:hp(5)
  },
  footerTag: {
    color:"#3C4253",
    fontSize:18,
    fontWeight:"bold"
  } 
  });
