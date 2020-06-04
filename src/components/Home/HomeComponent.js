import React from 'react';
import {View, StatusBar, StyleSheet, ScrollView} from 'react-native';

import MainBannerComponent from './MainBannerComponent';
import CardMSectionComponent from './CardMSection/CardMSectionComponent';
import BoardSectionComponent from './boardSection/BoardSectionComponent';
import CardSSectionComponent from './CardSSection/CardSSectionComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

function HomeComponent() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView>
        <MainBannerComponent />
        <CardMSectionComponent />
        <BoardSectionComponent />
        <CardSSectionComponent />
      </ScrollView>
    </View>
  );
}

export default HomeComponent;
