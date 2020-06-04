import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    marginBottom: 19,
  },
});

import BoardComponent from './BoardComponent';

function BoardSectionList() {
  // fake Data
  const fakeData = [
    {
      category: '카테고리1',
      title: '제목이 들어갑니다1',
    },
    {
      category: '카테고리2',
      title: '제목이 들어갑니다2',
    },
    {
      category: '카테고리3',
      title: '제목이 들어갑니다3',
    },
  ];
  return (
    <View style={styles.container}>
      {fakeData.map((ele, idx) => (
        <BoardComponent key={idx.toString()} data={ele} />
      ))}
    </View>
  );
}

export default BoardSectionList;
