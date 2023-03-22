import {} from 'react-native';
import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
// import HomeScreen from '../Screens/Home';
import Splash from '../Screens/Splash';
import CreateAc from '../Screens/CreateAc';
import Login from '../Screens/Login';
import Auth from '@react-native-firebase/auth';
import EmailVerify from '../Screens/EmailVerify';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const [isUserLogin, setisUserLogin] = useState(false);

  Auth().onAuthStateChanged(user => {
    if (user !== null) {
      setisUserLogin(true);
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isUserLogin ? (
          <Stack.Screen name="Splash" component={Splash} />
        ) : null}
        {isUserLogin ? <Stack.Screen name="Home" component={Home} /> : null}
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="CreateAc" component={CreateAc} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EmailVerify" component={EmailVerify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
