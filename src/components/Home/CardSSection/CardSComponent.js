/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import {Card} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.453333333,
    height: 213,
    borderWidth: 0,
    borderRadius: 4,
    margin: 0,
    marginRight: width * 0.026666667,
    marginBottom: 24,
  },
  image: {
    width: width * 0.453333333,
    height: 120,
    resizeMode: 'cover',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  textLine_1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.024,
    marginBottom: 6,
  },
  textLine_2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.024,
    marginBottom: 12,
  },
  textLine_3: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: width * 0.024,
  },
});

export default function CardSComponent(props) {
  const {data} = props;
  const {image, name, season, seller, rating, price} = data;
  return (
    <Card
      image={image}
      imageStyle={styles.image}
      containerStyle={styles.cardContainer}>
      <View style={styles.textLine_1}>
        <Text style={{fontSize: 14}}>{name}</Text>
        <Text style={{fontSize: 12, color: '#707070'}}>{seller}</Text>
      </View>
      <View style={styles.textLine_2}>
        <Text style={{fontSize: 12, color: '#707070'}}>{season}</Text>
        <Image
          source={require('../../../asset/card/star.png')}
          style={{width: 12, height: 12, marginLeft: 6, marginRight: 4}}
        />
        <Text style={{fontSize: 12, color: '#707070'}}>{rating}점</Text>
      </View>
      <View style={styles.textLine_3}>
        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#0379c7'}}>
          {price}원
        </Text>
      </View>
    </Card>
  );
}
