import React from 'react';
import {
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  btn_slide: {
    backgroundColor: 'white',
    height: height * 0.130177515,
    marginBottom: height * 0.014792899,
  },
  btn_box: {
    alignItems: 'center',
    marginTop: height * 0.017751479,
    marginHorizontal: width * 0.042666667,
  },
  btn_img: {
    width: 48,
    height: 48,
  },
  btn_text: {
    marginTop: height * 0.00591716,
    fontSize: 12,
    color: '#c6c6c6',
  },
});

export default function CommunityBtnSlide() {
  return (
    <ScrollView
      style={styles.btn_slide}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <TouchableOpacity style={styles.btn_box}>
        <Image
          source={require('../../asset/community/community_button1.png')}
          style={styles.btn_img}
        />
        <Text style={styles.btn_text}>버튼1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn_box}>
        <Image
          source={require('../../asset/community/community_button2.png')}
          style={styles.btn_img}
        />
        <Text style={styles.btn_text}>버튼2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn_box}>
        <Image
          source={require('../../asset/community/community_button3.png')}
          style={styles.btn_img}
        />
        <Text style={styles.btn_text}>버튼3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn_box}>
        <Image
          source={require('../../asset/community/community_button4.png')}
          style={styles.btn_img}
        />
        <Text style={styles.btn_text}>버튼4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn_box}>
        <Image
          source={require('../../asset/community/community_button5.png')}
          style={styles.btn_img}
        />
        <Text style={styles.btn_text}>버튼5</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
