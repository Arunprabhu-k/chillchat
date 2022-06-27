const intialState = {
  getCountryCodeandFlag: [],
  getUserDetails: []
};
export default function authCheckReducer(state = intialState, action) {
  switch (action.type) {
    case 'GET_COUNTRY_CODE':
      return {
        ...state,
        getCountryCodeandFlag: action.payload,
      };
    case 'GET_USER_DETAILS':
      return {
        ...state,
        getUserDetails: action.payload,
      };
    default:
      return state;
  }
}
