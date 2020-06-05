import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';

import {Button} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 0.266272189,
    width,
    marginBottom: height * 0.014792899,
  },
  wrapper: {
    backgroundColor: 'black',
    position: 'absolute',
    height: height * 0.266272189,
    width,
    zIndex: 1,
    opacity: 0.45,
  },
  image: {
    width,
    height: height * 0.266272189,
  },
  bannerText_box: {
    position: 'absolute',
    marginTop: height * 0.044378698,
    marginLeft: width * 0.053333333,
    zIndex: 2,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    zIndex: 2,
  },
  bannerBtn_box: {
    position: 'absolute',
    zIndex: 2,
    top: height * 0.165680473,
  },
  bannerBtn: {
    width: width * 0.266666667,
    height: height * 0.047337278,
    marginLeft: width * 0.053333333,
  },
  bannerBtn_text: {
    fontSize: 12,
  },
});

export default function CommunityBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.bannerText_box}>
        <Text style={styles.bannerText}>이번주</Text>
        <Text style={styles.bannerText}>베스트 과일후기</Text>
      </View>
      <View style={styles.bannerBtn_box}>
        <Button
          title="보러가기"
          buttonStyle={styles.bannerBtn}
          titleStyle={styles.bannerBtn_text}
        />
      </View>

      <View style={styles.wrapper} />
      <ImageBackground
        source={require('../../asset/community/communityBanner.jpg')}
        style={styles.image}
      />
    </View>
  );
}
