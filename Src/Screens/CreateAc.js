import {View, Text, TouchableOpacity} from 'react-native';
import React,{useState} from 'react';
import Style from './Style';
import {TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ALERT_TYPE, Dialog, AlertNotificationRoot } from 'react-native-alert-notification';
// import firestore from '@react-native-firebase/firestore';


const CreateAc = ({navigation}) => {
  // const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [visible, setVisible] = useState(true);

  const register = async() => {
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then((res) => {
   alert('Congrats! sucessfully registered!')
    console.log(res.user.uid);
    if (res.additionalUserInfo) {
        navigation.navigate('HomeScreen');
    }
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'That email address is already in use!',
        button: 'Close',
      })
    }

    if (error.code === 'auth/invalid-email') {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Warning',
        textBody: 'That email address is invalid!',
        button: 'Close',
      })
    }

    else{
      Dialog.show({
        type: ALERT_TYPE.WARNING,
        title: 'Warning',
        textBody: 'Email address already registered',
        button: 'Close',
      })
    }
  });
}

  return (
    <View style={Style.container}>
      <Text style={Style.textStyle}>Create a new account</Text>

      {/* <View style={Style.inputContainer}>
        <TextInput
          mode="outlined"
          label="Enter Your Name"
          onChangeText={setName}
        />
      </View> */}

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
      <TouchableOpacity onPress={register} activeOpacity={0.7} style={Style.buttonStyle}>
        <Text style={Style.btnText}>REGISTER</Text>
      </TouchableOpacity>
      </AlertNotificationRoot>

      {/* <TouchableOpacity onPress={()=>navigation.navigate('Login')} activeOpacity={0.8} style={{alignSelf: 'center', position: 'absolute', top: '42%'}}>
        <Text style={{fontSize: 15, color: 'blue', fontWeight: '600', letterSpacing: 0}}>ALLREADY HAVE AN ACCOUNT LOG IN</Text>
      </TouchableOpacity> */}

    </View>
  );
};

export default CreateAc;
