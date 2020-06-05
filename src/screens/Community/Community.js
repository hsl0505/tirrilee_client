import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CommunityMainScreen from './CommunityMainScreen';
import CommunityWriteScreen from './CommunityWriteScreen';

const CommunityStack = createStackNavigator();

function Community() {
  return (
    <CommunityStack.Navigator>
      <CommunityStack.Screen
        name="communityMain"
        component={CommunityMainScreen}
        options={{headerShown: false}}
      />
      <CommunityStack.Screen
        name="communityWrite"
        component={CommunityWriteScreen}
        options={{headerShown: false}}
      />
    </CommunityStack.Navigator>
  );
}

export default Community;
