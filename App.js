import React from 'react';
import StackNavigator from './navigators/stackNavigator';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store';
const store = configureStore();
const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;
