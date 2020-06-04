/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import {Card} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    width: width * 0.770666667,
    height: 237,
    borderRadius: 4,
    borderWidth: 0,
    marginBottom: 4,
    marginTop: 0,
    marginHorizontal: 5,
  },
  image: {
    width: width * 0.770666667,
    height: 165,
    borderWidth: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
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
});

function CardMComponent(props) {
  const {data} = props;
  const {image, name, season, seller, rating, price} = data;
  return (
    <Card
      containerStyle={styles.cardContainer}
      image={image}
      imageStyle={styles.image}>
      <View style={styles.textLine_1}>
        <Text style={{fontSize: 16}}>{name}</Text>
        <Text style={{fontSize: 12, color: '#707070'}}>{seller}</Text>
      </View>
      <View style={styles.textLine_2}>
        <View style={styles.textLine_2_group}>
          <Text style={{fontSize: 12, color: '#707070'}}>{season}</Text>
          <Image
            source={require('../../../asset/card/star.png')}
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

export default CardMComponent;
