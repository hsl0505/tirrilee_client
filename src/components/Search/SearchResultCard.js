/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import {Card} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.936,
    height: height * 0.409763314,
    marginHorizontal: width * 0.032,
    marginBottom: height * 0.035502959,
  },
  image: {
    width: width * 0.936,
    height: height * 0.295857988,
  },
  textLine_1: {
    flexDirection: 'row',
    marginHorizontal: width * 0.024,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  textLine_2: {
    flexDirection: 'row',
    marginHorizontal: width * 0.024,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textLine_2_group: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heart: {
    width: 24,
    height: 24,
    position: 'absolute',
    top: -height * 0.284023669,
    right: width * 0.021333333,
  },
});

export default function SearchResultCard(props) {
  const {data} = props;
  const {image, name, season, rating, seller, price} = data;

  return (
    <Card
      containerStyle={styles.cardContainer}
      image={image}
      imageStyle={styles.image}>
      <Image
        source={require('../../asset/card/heart_disabled_line_white.png')}
        style={styles.heart}
      />
      <View style={styles.textLine_1}>
        <Text style={{fontSize: 18}}>{name}</Text>
        <Text style={{fontSize: 12, color: '#707070'}}>{seller}</Text>
      </View>
      <View style={styles.textLine_2}>
        <View style={styles.textLine_2_group}>
          <Text style={{fontSize: 12, color: '#707070'}}>{season}</Text>
          <Image
            source={require('../../asset/card/star.png')}
            style={{width: 12, height: 12, marginLeft: 6, marginRight: 4}}
          />
          <Text style={{fontSize: 12, color: '#707070'}}>{rating}점</Text>
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#0379c7'}}>
          {price}원
        </Text>
      </View>
    </Card>
  );
}
