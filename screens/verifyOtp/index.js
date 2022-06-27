import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import UiHeader from '../../common/uiHeader';
import colors from '../../constent/colors';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Icon} from 'react-native-elements';
import sizes from '../../constent/sizes';
import verifyData from '../../json/verify.json';
import UiButton from '../../common/uiButton';
import {verifyOtp} from '../../actions/phoneNumberCheck.Action';
import {connect} from 'react-redux';

const VerifyOtp = props => {
  const {Navigation, route, dispatch} = props;
  const phoneNumber = route.params.phone;
  const [show, setShow] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const handleSubmit = () => {
    console.log(otpCode);
    dispatch(verifyOtp({otp: otpCode,phonenumber:phoneNumber}));
  };
  return (
    <View style={styles.container}>
      <UiHeader
        title="Verifying your number"
        onRightPress={() => setShow(!show)}
        iconName="ellipsis-v"
      />
      <Text style={styles.textContainer}>
        {' '}
        Waiting to automatically detect an SMS sent to {'\n'}
        <Text style={{fontWeight: 'bold'}}> {phoneNumber}</Text>
        <Text style={{color: colors.primary, margin: 20}}> Wrong number?</Text>
      </Text>
      <OTPInputView
        style={{width: '80%', height: 100}}
        pinCount={6}
        code={otpCode} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
        onCodeChanged={code => {
          setOtpCode(code);
        }}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`);
        }}
        placeholderCharacter="-"
      />
      <Text>Enter 6-digit code</Text>
      {verifyData.map(item => {
        return (
          <View style={styles.lastContainer} key={item.id}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name={item.ICON} type="ionicon" size={20} />
              <Text style={{marginLeft: 20}}>{item.title}</Text>
            </View>

            <Text>1:01</Text>
          </View>
        );
      })}
      <UiButton title="verify OTP" size="small" onPress={handleSubmit} />
    </View>
  );
};

export default connect(null, null)(VerifyOtp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textContainer: {
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
    lineHeight: 20,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
    borderColor: colors.primary,
    borderBottomWidth: 1,
    color: 'black',
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
    color: 'black',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
    color: 'black',
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
  lastContainer: {
    flexDirection: 'row',
    width: sizes.width,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    marginTop: 30,
  },
});
