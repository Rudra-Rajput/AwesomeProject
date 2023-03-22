import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Style from './Style';
import { TextInput } from 'react-native-paper';


const EmailVerify = () => {
  return (
    <View style={Style.container}>
      <View style={Style.titleTextContainer}>
        <Text style={Style.titleText}>Enter Your Email</Text>
      </View>

    <View style={Style.inputContainer}>
        <TextInput 
          label='Enter your email'
        />
    </View>

    <TouchableOpacity activeOpacity={0.8} style={Style.buttonStyle}>
        <Text style={Style.btnText}>SEND VERIFICATION LINK</Text>
    </TouchableOpacity>

    </View>
  );
};

export default EmailVerify;
