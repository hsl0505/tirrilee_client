/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
// import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTabNav from './BottomTabNav';

import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';

import LoginContext from './Auth/LoginContext';

const Switch = createStackNavigator();

function InitScreen() {
  // 임시 로그인 state 및 함수
  const [isLogIn, setLogIn] = useState(false);

  return (
    <LoginContext.Provider value={setLogIn}>
      <Switch.Navigator>
        {!isLogIn ? (
          <>
            <Switch.Screen
              name="로그인"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Switch.Screen
              name="회원가입"
              component={SignUp}
              options={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#0379c7',
                },
              }}
            />
          </>
        ) : (
          <Switch.Screen
            name="메인"
            component={BottomTabNav}
            options={{headerShown: false}}
          />
        )}
      </Switch.Navigator>
    </LoginContext.Provider>
  );
}

export default InitScreen;
