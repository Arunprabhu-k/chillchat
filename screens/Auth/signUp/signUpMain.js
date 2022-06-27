import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import UiInput from '../../../common/uiInput';
import UiButton from '../../../common/uiButton';
import colors from '../../../constent/colors';
import {useNavigation} from '@react-navigation/native';
import sizes from '../../../constent/sizes';
import countryCodeData from '../../../data/countryCode';
import CountryPicker from '../countryPicker/countryPicker';
import {connect} from 'react-redux';
import {sendUserDetails} from '../../../actions/phoneNumberCheck.Action';
const SignUpMain = props => {
  const {dispatch,getUserDetails} = props;
  const navigation = useNavigation();
  const intialState = () => {
    return {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      password: '',
      countryCode: '+91',
      counrtyPicker: false,
      selectedCode: [],
    };
  };
  console.log(getUserDetails)
  const [state, setState] = useState(intialState());
  const {
    firstname,
    lastname,
    phone,
    email,
    password,
    countryCode,
    counrtyPicker,
    selectedCode,
  } = state;
  const onHandleSubmit = () => {
    console.log(state);
    const body = {
      firstname: firstname,
      lastname: lastname,
      phonenumber: countryCode + phone,
      email,
      password,
    };
    dispatch(sendUserDetails(body));
  };
  const onHandleCountryPicker = () => {
    setState(prev => ({
      ...prev,
      counrtyPicker: true,
    }));
  };
  return (
    <KeyboardAvoidingView
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
            style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../../../assets/images/logo.png')}
              style={{marginBottom: 30}}
            />
          </View>

          <View style={{flex: 6}}>
            <UiInput
              placeholder="First Name"
              image={require('../../../assets/images/user_pink.png')}
              onChangeText={text =>
                setState(prev => ({...prev, firstname: text}))
              }
            />
            <UiInput
              placeholder="Last Name"
              image={require('../../../assets/images/user_pink.png')}
              onChangeText={text =>
                setState(prev => ({...prev, lastname: text}))
              }
            />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={onHandleCountryPicker}>
                <UiInput
                  size="small"
                  value={countryCode}
                  image={require('../../../assets/images/call_pink.png')}
                  disabled
                />
              </TouchableOpacity>

              <UiInput
                size="medium"
                placeholder="PhoneNumber"
                onChangeText={text =>
                  setState(prev => ({...prev, phone: text}))
                }
              />
            </View>

            <UiInput
              placeholder="Email"
              image={require('../../../assets/images/email_pink.png')}
              onChangeText={text => setState(prev => ({...prev, email: text}))}
            />
            <UiInput
              placeholder="Password"
              secureTextEntry={true}
              image={require('../../../assets/images/security_pink.png')}
              onChangeText={text =>
                setState(prev => ({...prev, password: text}))
              }
            />
            <UiButton primary title="Sign Up" onPress={onHandleSubmit} />

            <Text style={{textAlign: 'center', color: colors.black}}>
              Already have an account?{' '}
              <Text
                style={{color: colors.pink, fontWeight: 'bold'}}
                onPress={() => navigation.navigate('SignIn')}>
                Sign In
              </Text>
            </Text>
          </View>
        </View>
        {counrtyPicker && (
          <CountryPicker
            onTab={item => {
              setState(prev => ({...prev, selectedCode: item[0]}));
            }}
            selectedCode={selectedCode}
            visible={counrtyPicker}
            data={countryCodeData}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
const mapStateToProps = state => {
  return {
    getUserDetails: state.authCheckReducer.getUserDetails,
  };
};
export default connect(mapStateToProps, null)(SignUpMain);
