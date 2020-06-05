import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';

import {Button} from 'react-native-elements';

import CommunityBanner from './CommunityBanner';
import CommunityBtnSlide from './CommunityBtnSlide';
import CommuntiyTab from './CommuntiyTab';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
    width,
    height: height * 0.064139942,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0379c7',
    marginVertical: height * 0.014577259,
  },
  wdithBtn_container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: height * 0.035502959,
  },
  writeBtn: {
    backgroundColor: '#0379c7',
    width: width * 0.373333333,
    height: height * 0.059171598,
    borderRadius: 20,
  },
  writeBtn_icon: {
    width: 24,
    height: 24,
  },
  writeBtn_text: {
    fontSize: 12,
    marginLeft: width * 0.058666667,
  },
});

export default function CommunityMainComponent(props) {
  const {navigation} = props;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>커뮤니티</Text>
      </View>

      <CommunityBanner />
      <CommunityBtnSlide />
      <CommuntiyTab />

      <View style={styles.wdithBtn_container}>
        <Button
          title="글 작성하기"
          buttonStyle={styles.writeBtn}
          icon={
            <Image
              source={require('../../asset/community/writing_white_icon.png')}
              style={styles.writeBtn_icon}
            />
          }
          titleStyle={styles.writeBtn_text}
          onPress={() => navigation.navigate('communityWrite')}
        />
      </View>
    </ScrollView>
  );
}
