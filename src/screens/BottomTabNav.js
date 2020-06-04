/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home/Home';
import Search from './Search/Search';
import Action from './Action/Action';
import Community from './Community/Community';
import MyPage from './MyPage/Mypage';

const BottomTab = createBottomTabNavigator();

function BottomTabNav() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#0379c7',
        inactiveTintColor: 'gray',
      }}>
      <BottomTab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../asset/bottomTabIcons/homeIcon.png')}
                style={{
                  tintColor: focused ? '#0379c7' : 'gray',
                  width: 32,
                  height: 32,
                }}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="검색"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../asset/bottomTabIcons/searchIcon.png')}
                style={{
                  tintColor: focused ? '#0379c7' : 'gray',
                  width: 32,
                  height: 32,
                }}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="액션기능"
        component={Action}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../asset/bottomTabIcons/actionIcon.png')}
                style={{
                  tintColor: focused ? '#0379c7' : 'gray',
                  width: 32,
                  height: 32,
                }}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="커뮤니티"
        component={Community}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../asset/bottomTabIcons/communityIcon.png')}
                style={{
                  tintColor: focused ? '#0379c7' : 'gray',
                  width: 32,
                  height: 32,
                }}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="마이페이지"
        component={MyPage}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../asset/bottomTabIcons/mypageIcon.png')}
                style={{
                  tintColor: focused ? '#0379c7' : 'gray',
                  width: 32,
                  height: 32,
                }}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNav;
