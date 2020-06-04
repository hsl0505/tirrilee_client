/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';

import {ListItem} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  screenTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0379c7',
    alignSelf: 'center',
    marginVertical: height * 0.014792899,
  },
  profile: {
    flexDirection: 'row',
    marginTop: height * 0.035502959,
    height: 80 + height * 0.041420118,
    borderBottomWidth: 0.5,
    borderBottomColor: '#f7f7f7',
    paddingBottom: height * 0.041420118,
  },
  profile_header: {
    flexDirection: 'row',
  },
  profile_header_editIcon: {
    height: 24,
    width: 24,
    // marginRight: 12,
  },
  profile_img: {
    width: 80,
    height: 80,
    marginLeft: width * 0.042666667,
    marginRight: width * 0.053333333,
  },
  profile_text: {
    flexDirection: 'column',
  },
  profile_text_name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#381f1f',
    marginBottom: height * 0.017751479,
    marginRight: width * 0.44,
  },
  profile_text_explain: {
    fontSize: 14,
    color: '#707070',
  },
  info: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    borderBottomWidth: height * 0.014792899,
    borderBottomColor: '#f7f7f7',
  },
  info_1: {
    width: width * 0.341333333,
    height: height * 0.118343195,
    marginVertical: height * 0.00887574,
    alignItems: 'center',
  },
  info_2: {
    width: width * 0.317333333,
    height: height * 0.118343195,
    marginVertical: height * 0.00887574,
    alignItems: 'center',
    borderLeftWidth: 0.5,
    borderLeftColor: '#f7f7f7',
    borderRightWidth: 0.5,
    borderRightColor: '#f7f7f7',
  },
  info_title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#381f1f',
    marginTop: height * 0.014792899,
  },
  info_content: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0379c7',
    marginTop: height * 0.023668639,
  },
});

export default function MyPageMainComponent(props) {
  const list = [
    {
      title: '좋아요 목록',
      source: require('../../asset/myPage/like_icon.png'),
    },
    {
      title: '내가 작성한 글',
      source: require('../../asset/myPage/writing_icon.png'),
    },
    {
      title: '주문배송조회',
      source: require('../../asset/myPage/cart_icon.png'),
    },
  ];

  const {navigation} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.screenTitle}>마이페이지</Text>

      <View style={styles.profile}>
        <Image
          source={require('../../asset/myPage/profile_img.png')}
          style={styles.profile_img}
        />
        <View style={styles.profile_text}>
          <View style={styles.profile_header}>
            <Text style={styles.profile_text_name}>이티릴</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('myPageEditScreen')}>
              <Image
                source={require('../../asset/myPage/edit_icon.png')}
                style={styles.profile_header_editIcon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.profile_text_explain}>
            안녕하세요. 이티릴입니다.
          </Text>
          <Text style={styles.profile_text_explain}>
            소개내용이 들어갑니다.
          </Text>
        </View>
      </View>

      <View style={styles.info}>
        <View style={styles.info_1}>
          <Text style={styles.info_title}>구매</Text>
          <Text style={styles.info_content}>100</Text>
        </View>
        <View style={styles.info_2}>
          <Text style={styles.info_title}>판매</Text>
          <Text style={styles.info_content}>200</Text>
        </View>
        <View style={styles.info_1}>
          <Text style={styles.info_title}>성향</Text>
          <Text style={styles.info_content}>봄</Text>
        </View>
      </View>

      <View>
        {list.map((ele, idx) => (
          <ListItem
            containerStyle={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#f7f7f7',
            }}
            key={idx.toString()}
            title={ele.title}
            chevron={
              <Image
                source={require('../../asset/myPage/chevron_right_gray.png')}
                style={{width: 24, height: 24}}
              />
            }
            leftElement={
              <Image source={ele.source} style={{width: 32, height: 32}} />
            }
            titleStyle={{color: '#381f1f', fontSize: 16}}
          />
        ))}
      </View>
    </View>
  );
}
