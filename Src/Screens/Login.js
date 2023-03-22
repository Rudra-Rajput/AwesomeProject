import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Style from './Style';
import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';


const Login = ({navigation}) => {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [visible, setVisible] = useState(true);

  const logIN = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        // console.log(res);
        if (res.additionalUserInfo) {
          navigation.navigate('Home');
        }
      })
      .catch(error => {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Warning',
          textBody: 'Wrong email or password',
          button: 'Close',
        })
      });
  };

  return (
    <View style={Style.container}>
      <Text style={Style.textStyle}>Login Here</Text>

      <View style={Style.inputContainer}>
        <TextInput
          mode="outlined"
          label="Enter Your Email"
          onChangeText={setEmail}
        />
      </View>

      <View style={Style.inputContainer}>
        <TextInput
          mode="outlined"
          label="Enter Your Password"
          onChangeText={setPassword}
          secureTextEntry={visible}
        />
        <TouchableOpacity activeOpacity={0.8} style={Style.passIconContainer} onPress={()=>setVisible(!visible)}>
           <FontAwesome name={visible ? 'eye-slash':'eye'} size={23} color='#000000'/>
        </TouchableOpacity>
      </View>

    <AlertNotificationRoot>
      <TouchableOpacity
        onPress={logIN}
        activeOpacity={0.7}
        style={Style.buttonStyle}>
        <Text style={Style.btnText}>LOG IN</Text>
      </TouchableOpacity>
    </AlertNotificationRoot>

    {/* <TouchableOpacity onPress={()=>navigation.navigate('CreateAc')} activeOpacity={0.8} style={{alignSelf: 'center', position: 'absolute', top: '42%'}}>
       <Text style={{fontSize: 15, color: 'blue', fontWeight: '600', letterSpacing: 1}}>CREATE A NEW ACCOUNT</Text>
    </TouchableOpacity> */}

    </View>
  );
};

export default Login;
