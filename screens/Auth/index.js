import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {size} from 'lodash';
import sizes from '../../constent/sizes';
import colors from '../../constent/colors';
import UiButton from '../../common/uiButton';
import {useNavigation} from '@react-navigation/native';
const SignUpandSignIn = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../../assets/images/login.png')}
        style={{
          width: sizes.width,
          height: sizes.height * 0.4,
          resizeMode: 'center',
        }}
      />
      <View
        style={{
          paddingHorizontal: sizes.base * 4,
          marginVertical: sizes.base * 4,
        }}>
        <Text
          style={{
            color: colors.black,
            fontWeight: 'bold',
            fontSize: 25,
            textAlign: 'center',
          }}>
          Sign In/Sign Up
        </Text>
        <Text
          style={{
            fontSize: 18,
            opacity: 0.4,
            textAlign: 'center',
            marginTop: 10,
            lineHeight: 28,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum
          dolor sit amet
        </Text>
      </View>
      <View>
        <UiButton
          primary
          title={'Sign In'}
          onPress={() => navigation.navigate('SignIn')}
        />
        <UiButton
          title={'Sign Up'}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignUpandSignIn;

const styles = StyleSheet.create({});
