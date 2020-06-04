/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import InitScreen from './screens/InitScreen';

const App = () => {
  console.log('test');
  return (
    <NavigationContainer>
      <InitScreen />
    </NavigationContainer>
  );
};

export default App;
