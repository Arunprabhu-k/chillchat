import {Alert} from 'react-native';
import ModalPopup from '../common/modal';

// import axios from 'axios';
const recriveUserDetails = payload => {
  return {
    type: 'GET_USER_DETAILS',
    payload,
  };
};
const getCountryCode = payload => {
  return {
    type: 'GET_COUNTRY_CODE',
    payload,
  };
};
export function fetchCountyCode() {
  console.log('worked');
  return async dispatch => {
    const request = await fetch('https://restcountries.com/v3.1/all');
    const jsonRes = await request.json();
    dispatch(getCountryCode(jsonRes));
  };
}
export function sendUserDetails(data) {
  return async dispatch => {
    await fetch('http://localhost:9000/app/v1/user/signup', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    })
      .then(res => {
        dispatch(recriveUserDetails(res))
      })
      .catch(err => {
        Alert.alert(err);
      });
  };
}
export function verifyOtp(otp) {
  return async dispatch => {
    try {
      const request = await fetch('http://localhost:9000/app/v1/user/verify', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(otp),
      });
    } catch (error) {
      return ModalPopup();
    }
  };
}
