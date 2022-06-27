import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../screens/welcomescreen/welcomeScreen';
import PhoneNumberCheck from '../screens/phoneNumberCheck';
import {NavigationContainer} from '@react-navigation/native';
import PhoneCodeAndFlag from '../screens/phoneNumberCheck/subScreens/phoneCodeAndFlag';
import UiHeader from '../common/uiHeader';
import VerifyOtp from '../screens/verifyOtp';
import SignUpandSignIn from '../screens/Auth';
import SignInMain from '../screens/Auth/signIn/signInMain';
import SignUpMain from '../screens/Auth/signUp/signUpMain';
const Stack = createStackNavigator();
const StackNavigator = () => {
  // const horizontalAnimation = {
  //   gestureDirection: 'horizontal',
  //   cardStyleInterpolator: ({current, layouts}) => {
  //     return {
  //       cardStyle: {
  //         transform: [
  //           {
  //             translateX: current.progress.interpolate({
  //               inputRange: [0, 1],
  //               outputRange: [layouts.screen.width, 0],
  //             }),
  //           },
  //         ],
  //       },
  //     };
  //   },
  // };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="PhoneNumberCheck">
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
        {/* <Stack.Screen
          name="PhoneNumberCheck"
          component={SignUpandSignIn}
          option={horizontalAnimation}
        /> */}
        <Stack.Screen name="SignIn" component={SignInMain} />
        <Stack.Screen name="SignUp" component={SignUpMain} />
        <Stack.Screen name="PhoneCodeAndFlag" component={PhoneCodeAndFlag} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
