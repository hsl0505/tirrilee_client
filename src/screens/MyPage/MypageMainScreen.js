import React from 'react';
// import {View, Text} from 'react-native';

import MyPageMainComponent from '../../components/MyPage/MyPageMainComponent';

export default function MypageMainScreen(props) {
  const {navigation} = props;
  return <MyPageMainComponent navigation={navigation} />;
}
