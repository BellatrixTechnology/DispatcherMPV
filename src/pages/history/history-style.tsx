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
   mainContainer1: {
    flex:1,
    backgroundColor:"#fff",
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
   header1: {
    height:hp(25),
    width:wp(100),
    borderWidth:0,
    justifyContent:"center",
    alignItems:"center",
    //flexDirection:"row",
    backgroundColor:"#0047FF",
    borderBottomRightRadius:40,
    borderBottomLeftRadius:40,
  },
  header1Part1: {
    height:hp(15),
    width:wp(86),
    borderWidth:0,
    paddingLeft:wp(1),
    justifyContent:"flex-end",
    paddingBottom:hp(1)
  },
  dot1: {
    height:6,
    width:6,
    borderRadius:3,
    backgroundColor:"#FE6545",
  },
  late: {
    fontSize:wp(2.4),
    fontFamily:"Gilroy-Medium",
    color:"#fff",
  },
  statusContainer: {
    height:hp(3.5),
    width:62,
    borderRadius:hp(3.5/2),
    //borderWidth:1,
    backgroundColor:"#163DC8",
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"row",
    paddingHorizontal:wp(2.5)
  },
  header1Part2: {
    height:hp(19.55),
    width:wp(86),
    borderWidth:0
  },
  header1Part21: {
    height:hp(8.6),
    width:wp(86),
    borderWidth:0,
    paddingLeft:wp(1)
  },
  tasksContainer: {
    //height:hp(30),
    width:wp(84),
    borderWidth:0,
    alignSelf:"center",
    marginTop:hp(8)
  },
  taskContainer: {
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderWidth:0,
    marginTop:hp(1.5)
  },
  taskTitle: {
    fontSize:wp(3),
    fontFamily:"Gilroy-Medium",
    color:"#3C425350"
  },
  task: {
    fontSize:wp(3.2),
    fontFamily:"Gilroy-Medium",
    color:"#3C4253"
  },
  total: {
    fontSize:wp(3.4),
    fontFamily:"Gilroy-Medium",
    color:"#3C4253"
  },
  totalAmountTitle: {
    fontSize:wp(2.6),
    fontFamily:"Gilroy-Bold",
    color:"#3C425350"
  },
  dummyText: {
    fontSize:wp(2.4),
    fontFamily:"Gilroy-Regular",
    color:"#07070775"
  },
  totalAmountContainer: {
    //height:hp(10),
    width:wp(86),
    borderTopWidth:0.5,
    alignSelf:"center",
    marginTop:hp(4),
    borderColor:"#70707089",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingVertical:hp(2)
  },
  paid: {},
  totalAmount: {},
  design: {
    fontSize:wp(6),
    fontFamily:"Gilroy-Bold",
    color:"#fff"
  },
  designNo: {
    fontSize: wp(3),
    fontFamily:"Gilroy-Medium",
    color:"#FFFFFF50",
    marginBottom: hp(1),
  },
  invoiceDetailsCard: {
    height:hp(15),
    width:wp(86),
    backgroundColor:"#fff",
    borderRadius:10,
    elevation:10,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  invoiceDetailsContainer: {
    height:hp(11.4),
    width:"45%",
    borderWidth:0,
    padding:hp(1),
    justifyContent:"space-evenly",
    paddingHorizontal:hp(1.5)
  },
  invoiceAmountContainer: {
    height:hp(11.4),
    width:"45%",
    //borderWidth:1,
    padding:hp(1),
    justifyContent:"space-evenly",
    paddingHorizontal:hp(2),
    borderRadius:10,
    backgroundColor:"#F5F8FD"
  },
  invoiceFor: {
    fontSize:wp(2.2),
    fontFamily:"Gilroy-Medium",
    color:"#3C425365"
  },
  invoiceName: {
    fontSize:wp(3.5),
    fontFamily:"Gilroy-Bold",
    color:"#3C4253"
  },
  invoiceAddress: {
    fontSize:wp(2.5),
    fontFamily:"Gilroy-Bold",
    color:"#3C425365"
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
     fontFamily:"Gilroy-ExtraBold",
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
    borderRadius:8,
    backgroundColor:"#fff",
    elevation: 8,
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
    fontFamily:"Gilroy-ExtraBold",
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
  backButton1: {
    height:hp(5),
    width:hp(5),
    borderRadius:hp(2.75),
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    elevation:5,
    marginBottom:hp(1)
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
    justifyContent:"center",
    alignItems:"center"
  },
  shipNoTitle: {
    fontSize:wp(5.1),
    fontFamily:"Gilroy-Bold",
    color:"#3C4253"
  },
  shipNo: {
    fontSize:wp(4.25),
    fontFamily:"Gilroy-Medium",
    color:"#C0C5D1",
  },
  dot: {
    height:hp(1.15),
    width:hp(1.15),
    backgroundColor:"#FE6545",
    borderRadius:hp(1.15/2)
  },
  date: {
    fontSize:wp(2.2),
    fontFamily:"Gilroy-Medium",
    color:"#3C425350",
    marginLeft:wp(1)
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
    borderStyle:"dashed"
  },
  buttonTitle: {
    fontSize:10,
    marginTop:hp(0.5),
    alignSelf:"center",
    fontFamily:"Gilroy-Bold",
    color:"#3C4253"
  },
  to: {
    fontSize:12,
    fontFamily:"Gilroy-Medium",
    color:"#3C4253"
  },
  payButton: {
    height:hp(5),
    width:wp(25),
    backgroundColor:"#0047FF",
    elevation:5,
    borderRadius:hp(2.5),
    justifyContent:"center",
    alignItems:"center"
  },
  payButtonTxt: {
    fontSize:16,
    fontFamily:"Gilroy-Bold",
    color:"#fff"
  }
  });
