import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../../constent/colors';
import UiInput from '../../../common/uiInput';
import UiButton from '../../../common/uiButton';
import sizes from '../../../constent/sizes';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignInMain = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
          behavior="padding">
          <View
            style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={{marginBottom: 30}}
            />
          </View>

          <View style={{flex: 6}}>
            <UiInput
              placeholder="Phone/Email"
              image={require('../../../assets/images/email_pink.png')}
            />
            <UiInput
              placeholder="Password"
              secureTextEntry={true}
              image={require('../../../assets/images/security_pink.png')}
            />
            <UiButton primary title="Sign In" />
            <View style={{justifyContent: 'flex-start'}}>
              <Text style={{textAlign: 'center', marginVertical: sizes.base}}>
                Forgot Password?
              </Text>
              <Text style={{textAlign: 'center', color: colors.black}}>
                Dont't have an account?{' '}
                <Text
                  style={{color: colors.pink, fontWeight: 'bold'}}
                  onPress={() => navigation.navigate('SignUp')}>
                  Sign Up
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInMain;

const styles = StyleSheet.create({});
