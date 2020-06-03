import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNav from './BottomTabNav';

import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';

const Switch = createStackNavigator();

// // 임시 로그인
// const isLogIn = false;

function InitScreen() {
  return (
    <Switch.Navigator headerMode="none">
      {!false ? (
        <>
          <Switch.Screen name="로그인" component={SignIn} />
          <Switch.Screen name="회원가입" component={SignUp} />
        </>
      ) : (
        <Switch.Screen name="메인" component={BottomTabNav} />
      )}
    </Switch.Navigator>
  );
}

export default InitScreen;
