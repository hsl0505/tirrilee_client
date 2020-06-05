import React from 'react';

import CommunityMainComponent from '../../components/Community/CommunityMainComponent';

export default function CommunityMainScreen(props) {
  const {navigation} = props;
  return <CommunityMainComponent navigation={navigation} />;
}
