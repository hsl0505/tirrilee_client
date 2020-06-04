import React from 'react';

import MyPageEditComponent from '../../components/MyPage/MyPageEditComponent';

export default function MyPageEditScreen(props) {
  const {navigation} = props;
  return <MyPageEditComponent navigation={navigation} />;
}
