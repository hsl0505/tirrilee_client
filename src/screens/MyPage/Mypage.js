import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MypageMainScreen from './MypageMainScreen';
import MyPageEditScreen from './MyPageEditScreen';

const MyPageStack = createStackNavigator();

function MyPage() {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen
        name="myPageMainScreen"
        component={MypageMainScreen}
        options={{headerShown: false}}
      />
      <MyPageStack.Screen
        name="myPageEditScreen"
        component={MyPageEditScreen}
        options={{headerShown: false}}
      />
    </MyPageStack.Navigator>
  );
}

export default MyPage;
