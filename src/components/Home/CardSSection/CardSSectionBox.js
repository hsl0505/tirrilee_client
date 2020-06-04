import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import CardSComponent from './CardSComponent';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: width * 0.032,
  },
});

export default function CardSSectionBox() {
  // fake Data
  const fakeData = [
    {
      image: require('../../../asset/card/strawberry_S_img.png'),
      name: '친환경 딸기',
      season: '봄',
      rating: 4.9,
      seller: '이티릴',
      price: '10,000',
    },
    {
      image: require('../../../asset/card/watermelon_S_img.png'),
      name: '고당도 수박',
      season: '여름',
      rating: 4.9,
      seller: '이티릴',
      price: '12,000',
    },
    {
      image: require('../../../asset/card/apple_S_img.png'),
      name: '아오리 사과',
      season: '가을',
      rating: 4.9,
      seller: '이티릴',
      price: '10,000',
    },
    {
      image: require('../../../asset/card/madarin_S_img.png'),
      name: '제주 감귤',
      season: '겨울',
      rating: 4.9,
      seller: '이티릴',
      price: '12,000',
    },
  ];
  return (
    <View style={styles.container}>
      {fakeData.map((ele, idx) => (
        <CardSComponent key={idx.toString()} data={ele} />
      ))}
    </View>
  );
}
