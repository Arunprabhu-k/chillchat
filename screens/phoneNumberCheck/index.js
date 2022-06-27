import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constent/colors';
import UiInput from '../../common/uiInput';
import {
  fetchCountyCode,
  sendPhoneNumber,
} from '../../actions/phoneNumberCheck.Action';
import {connect} from 'react-redux';
import {useEffect} from 'react';
import {useState} from 'react';
import UiHeader from '../../common/uiHeader';
import UiModal from '../../common/uiModal';
import sizes from '../../constent/sizes';
import UiButton from '../../common/uiButton';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import _ from 'lodash';
import UiAlert from '../../common/uiAlert';
import {
  EditPhoneNumber,
  EnterPhoneNumber,
  EnterPhoneNumberError,
  ErrorPhoneNumber,
  LengthPhoneNumberError,
} from '../../commonText/alertText';
import ModalPopup from '../../common/modal';
const PhoneNumberCheck = props => {
  const {getCountryCode, CountryCode, navigation, route, dispatchPhoneNuber} =
    props;
  const [countryName, setCountryName] = useState('india');
  const [countryCode, setCountryCode] = useState('+91');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  let errorType = ' ';
  let selected;
  let code;
  let name;
  if (route.params && route.params.selected) {
    selected = route.params.selected;
    code = route.params.stdCode;
    name = route.params.countName;
  }
  const isFocus = useIsFocused();
  useEffect(() => {
    getCountryCode();
  }, []);
  useEffect(() => {
    if (selected === true) {
      console.log(route.params.countryName);
      setCountryCode(code);
      setCountryName(name);
    }
  }, [isFocus]);

  const formatPhoneNumber = phoneNumberString => {
    let newNumber = '';
    let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    for (var i = 0; i < cleaned.length; i++) {
      if (i === 0) {
        newNumber = '(';
      } else if (i === 3) {
        newNumber = newNumber + ') ';
      } else if (i === 6) {
        newNumber = newNumber + '-';
      }
      newNumber = newNumber + cleaned[i];
    }
    setPhoneNumber(newNumber);
  };
  const handleSubmit = () => {
    const reg = /^[0]?[789]\d{9}$/;
    if (PhoneNumber === '') {
      console.log(PhoneNumber)
      setErrorAlert(true);
    } else {
      console.log(PhoneNumber)
      setVisible(true);
    }
  };

  const onLeftAction = () => {
    setVisible(false);
  };
  const onRightAction = () => {
    const joinNumberAndCode = countryCode + PhoneNumber;
    dispatchPhoneNuber({phonenumber: joinNumberAndCode});
    navigation.navigate('VerifyOtp', {
      phone: joinNumberAndCode,
    });
    setVisible(false);
  };
  console.log(errorType);
  return (
    <View style={styles.container} onPress={() => setShow(false)}>
      <UiHeader
        title="Enter your phone number"
        onRightPress={() => setShow(!show)}
        iconName="ellipsis-v"
      />
      <Text style={[styles.text, {marginTop: 30, lineHeight: 20}]}>
        WhatsApp will need to verify your phone number. {'\n'}{' '}
        <Text style={{color: colors.primary}}>What's my number?</Text>
      </Text>
      <UiInput
        placeholder="India"
        iconName={'arrow-down'}
        value={countryName}
        onPress={() =>
          navigation.navigate('PhoneCodeAndFlag', {CountryCode: CountryCode})
        }
        disabled
      />
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <UiInput
          value={countryCode}
          size="small"
          disabled={true}
          placeholder="+91"
        />
        <UiInput
          value={PhoneNumber}
          size="medium"
          onChangeText={text => formatPhoneNumber(text)}
          keyboardType="phone-pad"
        />
      </View>
      <UiButton title="Next" size="small" onPress={handleSubmit} />
      {visible && (
        <ModalPopup
          visible={visible}
          closebutton={onLeftAction}
          actionName="Next"
          message="Are you ready to proceed this number ?"
          onPress={onRightAction}
        />
      )}
      {errorAlert && (
        <ModalPopup
          closebutton={onLeftAction}
          actionName="Edit"
          message="Phone number length is less"
        />
      )}

      {show ? (
        <UiModal open={show} text="help" close={() => setShow(false)} />
      ) : null}
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getCountryCode: () => dispatch(fetchCountyCode()),
    dispatchPhoneNuber: phone => dispatch(sendPhoneNumber(phone)),
  };
};
export default connect(null, mapDispatchToProps)(PhoneNumberCheck);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: '#000',
  },
  title: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 5,
  },
});
