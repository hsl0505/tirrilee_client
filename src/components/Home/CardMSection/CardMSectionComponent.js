import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import CardMSectionSlide from './CardMSectionSlide';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: width * 0.032,
    marginVertical: 24,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  heraderMore: {
    fontSize: 12,
    color: '#707070',
  },
});

function CardMSectionComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.sectionHeader}>
        <Text style={styles.headerTitle}>카드M_Section</Text>
        <Text style={styles.heraderMore}>더보기 ></Text>
      </View>
      <CardMSectionSlide />
    </View>
  );
}

export default CardMSectionComponent;
