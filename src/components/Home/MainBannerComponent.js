import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

import {Button} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.032,
    marginTop: 12,
    marginBottom: 8,
  },
  logo: {
    width: width * 0.186666667,
    height: 22,
  },
  searchIcon: {
    height: 24,
    width: 24,
  },
  mainBanner: {
    width,
    height: height * 0.262390671,
  },
  bannerText_box: {
    marginLeft: width * 0.053333333,
    marginTop: 30,
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
  },
  bannerBtn: {
    width: width * 0.266666667,
    height: 32,
    marginLeft: width * 0.053333333,
    marginTop: 16,
  },
  bannerBtn_text: {
    fontSize: 12,
  },
});

function MainBannerComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../asset/signIn/email_login_logo.png')}
          style={styles.logo}
        />
        <Image
          source={require('../../asset/Home/search_icon.png')}
          style={styles.searchIcon}
        />
      </View>
      <View>
        <ImageBackground
          source={require('../../asset/Home/mainBanner.jpg')}
          style={styles.mainBanner}>
          <View style={styles.bannerText_box}>
            <Text style={styles.bannerText}>티릴리</Text>
            <Text style={styles.bannerText}>과일농장</Text>
          </View>
          <Button
            title="구경하기"
            buttonStyle={styles.bannerBtn}
            titleStyle={styles.bannerBtn_text}
          />
        </ImageBackground>
      </View>
    </View>
  );
}

export default MainBannerComponent;
