// untuk komponen pada atom / molecul menggunakan stateless komponen atau functional komponen
import React from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


// functional component menggunakan props untuk membuat dinamis komponen
const GopayFeature = (props) => {
  return (
    <View style={{flex:1,alignItems:'center'}}>
        <TouchableOpacity onPress={props.onPress}>
          <Image source={props.img}/>
          <Text style={{fontSize:13,fontWeight:'bold',color:'white',marginTop:15,textAlign:'center'}}>{props.title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default GopayFeature;

// Menggunakan this pada props untuk membuat dinamis komponen

// class GopayFeature extends Component {
//     render(){
//       return(
//         <View style={{flex:1,alignItems:'center'}}>
//           <Image source={this.props.img}/>
//           <Text style={{fontSize:13,fontWeight:'bold',color:'white',marginTop:15}}>{this.props.title}</Text>
//       </View>
//       )
//     }
//   }