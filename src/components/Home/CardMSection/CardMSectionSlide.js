import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import CardMComponent from './CardMComponent';

const styles = StyleSheet.create({
  sliceContainer: {
    marginBottom: 20,
    marginHorizontal: 5,
  },
});

function CardMSectionSlide() {
  // fake data
  const fakeData = [
    {
      image: require('../../../asset/card/strawberry-M-img.png'),
      name: '친환경 딸기',
      season: '봄',
      rating: 4.9,
      seller: '이티릴',
      price: '10,000',
    },
    {
      image: require('../../../asset/card/watermelon_L_img.png'),
      name: '고당도 수박',
      season: '여름',
      rating: 4.9,
      seller: '이티릴',
      price: '12,000',
    },
    {
      image: require('../../../asset/card/apple_L_img.png'),
      name: '아오리 사과',
      season: '가을',
      rating: 4.9,
      seller: '이티릴',
      price: '10,000',
    },
    {
      image: require('../../../asset/card/mandarin_L_img.png'),
      name: '제주 감귤',
      season: '겨울',
      rating: 4.9,
      seller: '이티릴',
      price: '12,000',
    },
    {
      image: require('../../../asset/card/strawberry_L_img.png'),
      name: '고당도 딸기',
      season: '봄',
      rating: 4.9,
      seller: '이티릴',
      price: '20,000',
    },
  ];
  return (
    <ScrollView
      style={styles.sliceContainer}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {fakeData.map((ele, idx) => (
        <CardMComponent data={ele} key={idx.toString()} />
      ))}
    </ScrollView>
  );
}

export default CardMSectionSlide;
