import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import {ButtonGroup} from 'react-native-elements';

import CardSComponent from '../Home/CardSSection/CardSComponent';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  btn_container: {
    borderWidth: 0,
    height: height * 0.076923077,
    marginTop: 0,
    marginLeft: 0,
    width: width * 0.746666667,
    marginBottom: height * 0.035502959,
  },
  btn_innerStyle: {
    width: 0,
  },
  selectedBtn: {
    backgroundColor: 'white',
    color: '#0379c7',
    borderBottomColor: '#0379c7',
    borderBottomWidth: 2,
  },
  selectedBtn_text: {
    color: '#0379c7',
  },
  disabledBtn_text: {
    color: '#c6c6c6',
  },
  cardBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: width * 0.032,
  },
});

export default function CommuntiyTab() {
  // fake Data
  const fakeData = [
    {
      image: require('../../asset/card/strawberry_S_img.png'),
      name: '친환경 딸기',
      season: '봄',
      rating: 4.9,
      seller: '이티릴',
      price: '10,000',
    },
    {
      image: require('../../asset/card/watermelon_S_img.png'),
      name: '고당도 수박',
      season: '여름',
      rating: 4.9,
      seller: '이티릴',
      price: '12,000',
    },
    {
      image: require('../../asset/card/apple_S_img.png'),
      name: '아오리 사과',
      season: '가을',
      rating: 4.9,
      seller: '이티릴',
      price: '10,000',
    },
    {
      image: require('../../asset/card/madarin_S_img.png'),
      name: '제주 감귤',
      season: '겨울',
      rating: 4.9,
      seller: '이티릴',
      price: '12,000',
    },
  ];

  const btns = ['탭1', '탭2', '탭3'];
  const [selected, setSelect] = useState(0);

  return (
    <View style={styles.container}>
      <ButtonGroup
        buttons={btns}
        onPress={select => setSelect(select)}
        containerStyle={styles.btn_container}
        innerBorderStyle={styles.btn_innerStyle}
        selectedIndex={selected}
        selectedButtonStyle={styles.selectedBtn}
        selectedTextStyle={styles.selectedBtn_text}
        textStyle={styles.disabledBtn_text}
      />

      <View style={styles.cardBox}>
        {selected === 0 ? (
          <>
            <CardSComponent data={fakeData[0]} />
            <CardSComponent data={fakeData[1]} />
          </>
        ) : selected === 1 ? (
          <>
            <CardSComponent data={fakeData[2]} />
            <CardSComponent data={fakeData[3]} />
          </>
        ) : (
          <CardSComponent data={fakeData[0]} />
        )}
      </View>
    </View>
  );
}
