import { StyleSheet, Dimensions } from 'react-native';
import globalFonts from './globalFonts';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

$themColor: '#2F66F7';
export const globalStyle = StyleSheet.create({


    font14: { fontSize: 14,  },
    font16: { fontSize: 16,  },
    font18: { fontSize: 18,  },
    font19: { fontSize: 19,  },
    font21: { fontSize: 21,  },
    font22: { fontSize: 22,  },
    font23: { fontSize: 23,  },
    font24: { fontSize: 24, lineHeight: 24 },
    font30: { fontSize: 30,  },
    font34: { fontSize: 34,  },

    contentPadding: { padding: 16 },
    paddingHorizontal: { paddingHorizontal: 16 },
    paddingVertical: { paddingVertical: 16 },

    bgWhite: { backgroundColor: 'white' },
    whiteColor: { color: 'white' },
    themeTextColor: { color: '#2F66F7' },
    themeBgColor: { backgroundColor: '#2F66F7' },
    themeBorderColor: { borderColor: '#2F66F7' },
    liteGrey: { color: '#999999' },
    darkGrey: { color: '#444444' },


    textCenter: { textAlign: 'center' },
    textEnd: { textAlign: 'right' },

    width100: { width: '100%' },
    height100: { height: Dimensions.get('screen').height },

    w100: { fontWeight: '100' },
    w400: { fontWeight: '400' },
    w500: { fontWeight: '500' },
    w600: { fontWeight: '600' },
    w700: { fontWeight: '700' },
    bold: { fontWeight: 'bold' },


    dFlex: { display: 'flex' },
    alignItemCenter: { alignItems: 'center' },
    justifyContentCenter: { justifyContent: 'center' },
    justifyContentSpaceBetween: { justifyContent: 'space-between' },
    flexWrap: { flexWrap: 'wrap' },
    flexRow: { flexDirection: 'row' },
    flexcolumn: { flexDirection: 'column' },
    flex1: { flex: 1 },


    customBtn: { maxWidth: 280, height: 59 },

    margintop100: { marginTop: 80 },
    margintop70: { marginTop: 70 },
    margintop55: { marginTop: 55 },
    margintop25: { marginTop: 25 },
    margintop18: { marginTop: 18 },
    marginRight: { marginRight: 20 },

    underlineInput: { borderColor: '#ccc', borderBottomWidth: 0.5, },

    safeAreaView:{height:hp("90%"),width:wp("90%"),borderWidth:0,alignSelf:"center"},
    scrollView:{height:"100%",width:"100%",elevation:2,borderWidth:0,backgroundColor:"white"},
    titleView:{height:40,width:"100%",borderWidth:0,justifyContent:"center"},
    title:{fontSize:18,fontWeight:"500",marginLeft:15},
    textInput:{height:55,width:"90%",borderBottomWidth:0.2,alignSelf:"center"},
    radioView:{height:60,width:"90%",borderWidth:0,justifyContent:"center",alignSelf:"center"},
    submitButton:{height:60,width:"95%",borderWidth:0,alignSelf:"center",marginTop:30,marginBottom:30,justifyContent:"center",alignItems:"center"},
    questiontext:{},
});