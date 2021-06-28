import {INavigationProps} from '../../interfaces/navigation';
import React from 'react'
import {Text,SafeAreaView, TextInput, TouchableOpacity, Image, ScrollView, View} from 'react-native'
import { style } from './financial-style';
import { BarChart } from 'react-native-chart-kit'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';


const data = {
   labels: ['10', '15', '20', '25', '30'],
   datasets: [
       {
         data: [0, 100, 200, 300, 400]  
       }
   ] 
}

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.3,
    useShadowColorFromDataset: false // optional
  };

export default class Financial extends React.Component<INavigationProps> {
    state: any = {};

    constructor(props:any) {
        super(props);
    
        this.state = {
          selectedTime: 'daily',
          DH : true,
        };
    } 


    render(){
        const {selectedTime , DH} = this.state
        return(
            <SafeAreaView style={style.mainContainer}>
              {/* <ScrollView showsVerticalScrollIndicator = {false}>   */}
               <View style = {style.header}>
                 <View style = {style.headerView}>
                     <View style = {{}}>
                        <Text style = {style.headingTitle}>Recent Invoice</Text>
                        <Text style = {style.headingValue}>$3544.61</Text> 
                     </View>
                     <TouchableOpacity
                     style = {style.payButton}
                     >
                     <Text style = {style.payButtonTxt}>Pay Now</Text>    
                     </TouchableOpacity>
                 </View>
               </View> 
               <View style = {style.infoContainer}>

                  <View style = {style.buttonsContainer}>
                    <TouchableOpacity 
                    onPress = { () => this.setState({ selectedTime : 'daily' })}
                    style = { selectedTime == 'daily'? style.button : style.button1 }>
                      <Text style = { selectedTime == 'daily'? style.buttonTxt : style.buttonTxt1 }>Daily</Text>  
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress = { () => this.setState({ selectedTime : 'weekly' })}
                    style = { selectedTime == 'weekly'? style.button : style.button1 }>
                      <Text style = { selectedTime == 'weekly'? style.buttonTxt : style.buttonTxt1 }>Weekly</Text>  
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress = { () => this.setState({ selectedTime : 'monthly' })}
                    style = { selectedTime == 'monthly'? style.button : style.button1 }>
                      <Text style = { selectedTime == 'monthly'? style.buttonTxt : style.buttonTxt1 }>Monthly</Text>  
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress = { () => this.setState({ selectedTime : 'yearly' })}
                    style = { selectedTime == 'yearly'? style.button : style.button1 }>
                      <Text style = { selectedTime == 'yearly'? style.buttonTxt : style.buttonTxt1 }>Yearly</Text>  
                    </TouchableOpacity>
                  </View> 

                  <Text style = {style.amount}>$1,600 <Text style = {style.amountValue}>USD</Text></Text>

                  {//@ts-ignore
                  <BarChart
                    style = {{alignSelf:"center"}}
                    data = {data}
                    width = {wp(80)}
                    height = {hp(23)}
                    //yAxisLabel = '$'
                    chartConfig = {chartConfig}
                    //verticalLabelRotation = {30}
                  />
                  }

                   <View style = {{...style.buttonsContainer, width : wp(45) , marginTop : hp(1.5)}}>
                    <TouchableOpacity 
                    onPress = { () => this.setState({ DH : true })}
                    style = { DH ? style.button : style.button1 }>
                      <Text style = { DH ? style.buttonTxtDh : style.buttonTxtDh1 }>With DH</Text>  
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress = { () => this.setState({ DH : false})}
                    style = { !DH ? style.button : style.button1 }>
                      <Text style = {!DH ? style.buttonTxtDh : style.buttonTxtDh1 }>Without DH</Text>  
                    </TouchableOpacity>
                  </View>


                  <View style = {style.otherInfomainContainer}>
                      <View style = {{...style.otherInfoContainer, borderLeftWidth: 0}}>
                         <Text style = {style.otherInfoValue}>9</Text>
                         <Text style = {style.otherInfoTitle}>Trips</Text>   
                      </View>
                      <View style = {style.otherInfoContainer}>
                         <Text style = {style.otherInfoValue}>$2.73</Text>
                         <Text style = {style.otherInfoTitle}>Rate/Mile</Text>   
                      </View>
                      <View style = {style.otherInfoContainer}>
                         <Text style = {style.otherInfoValue}>3,137</Text>
                         <Text style = {style.otherInfoTitle}>Total Miles</Text>   
                      </View>
                  </View>
               </View>
               {/* </ScrollView> */}
            </SafeAreaView>
        )
    }  
}