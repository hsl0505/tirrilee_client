import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 34,
  },
  category: {
    color: '#0379c7',
    fontSize: 14,
    marginRight: width * 0.114666667,
  },
  title: {
    fontSize: 14,
    color: '#707070',
  },
});

function BoardComponent(props) {
  const {data} = props;
  const {category, title} = data;
  return (
    <View style={styles.container}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default BoardComponent;
