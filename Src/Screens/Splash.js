import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';


const Splash = ({navigation}) => {

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#FFFFFF" />
      <View
        style={{
          height: '60%',
          width: '110%',
          backgroundColor: '#FFFFFF',
          borderRadius: 200,
          marginTop: '-40%',
          alignSelf: 'center',
        }}>
        <View style={{marginTop: '42%'}}>
          <Text
            style={{
              color: '#000000',
              textAlign: 'center',
              fontSize: 24,
              fontWeight: '500',
            }}>
            TALK TO REPORTERS !
          </Text>
          <View style={{marginTop: '2%'}}>
            <Text style={styles.textStyle}>
              The most simple & convenient way to access talk therapy
            </Text>
            <Text style={styles.textStyle}>
              - anytime, anywhere, any device.
            </Text>
          </View>
        </View>
      </View>

      <View style={{position: 'absolute', right: 30, top: 200}}>
        <Avatar.Image size={180} source={require('../assets/Splash3.jpg')} />
      </View>

      <View style={{position: 'absolute', left: 80, top: 200}}>
        <Avatar.Image size={60} source={require('../assets/Splash2.jpg')} />
      </View>

      <View style={{position: 'absolute', left: 30, top: 300}}>
        <Avatar.Image size={120} source={require('../assets/Splash1.jpg')} />
      </View>

      <View style={{position: 'absolute', left: 170, top: 420}}>
        <Avatar.Image size={60} source={require('../assets/Splash4.jpg')} />
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 70,
          flexDirection: 'row',
          alignSelf: 'center',
        }}>
        <View>
          <Text style={[{marginLeft: -3}, styles.textStyle]}>
            Login Via 
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=>navigation.navigate('EmailVerify')} activeOpacity={0.6}>
            <Text style={{marginLeft: 3, fontWeight: '700', color: '#000000'}}>
              Email Verification !
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          alignSelf: 'center',
          flexDirection: 'row',
          height: 55,
        }}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('CreateAc')}
          activeOpacity={0.8}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFFFFF',
            width: '50%',
          }}>
          <Text
            style={{
              color: '#000000',
              padding: 10,
              letterSpacing: 1,
              fontSize: 15,
              fontWeight: '500',
            }}>
            CREATE ACCOUNT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Login')}
          activeOpacity={0.8}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e34230',
            width: '50%',
          }}>
          <Text
            style={{
              color: '#FFFFFF',
              padding: 10,
              letterSpacing: 1,
              fontSize: 15,
              fontWeight: '500',
            }}>
            LOG IN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  textStyle: {
    color: '#000000',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
  },
});
