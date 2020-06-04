import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import {Input, Button, Overlay, ButtonGroup} from 'react-native-elements';

import SearchResult from './SearchResult';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
  },
  header: {
    width,
    height: height * 0.064139942,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.014577259,
  },
  header_title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0379c7',
  },
  searchBar_container: {
    width: width * 0.936,
    borderWidth: 1,
    borderColor: '#f5f5f5',
    height: height * 0.065088757,
    marginTop: height * 0.038461538,
    marginLeft: width * 0.032,
  },
  searchBar_inputContainer: {
    borderBottomWidth: 0,
  },
  searchBar_textInput: {
    fontSize: 14,
  },
  searchBar_icon: {
    width: 24,
    height: 24,
  },
  filterBtn_container: {
    width,
    justifyContent: 'flex-start',
    marginLeft: width * 0.032,
    marginTop: height * 0.023668639,
  },
  filterBtn: {
    width: width * 0.298666667,
    height: height * 0.059171598,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: '#e6e6e6',
    borderWidth: 1,
    marginBottom: height * 0.023668639,
  },
  filterBtn_selected: {
    width: width * 0.298666667,
    height: height * 0.059171598,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: '#0379c7',
    borderWidth: 1,
    marginBottom: height * 0.023668639,
  },
  filterBtn_img: {
    width: 20,
    height: 20,
  },
  filterBtn_text: {
    fontSize: 14,
    color: '#c6c6c6',
    marginLeft: width * 0.021333333,
  },
  filterBtn_text_selected: {
    fontSize: 14,
    color: 'black',
    marginLeft: width * 0.021333333,
  },
  overlay: {
    width: width * 0.8,
    height: height * 0.2,
    justifyContent: 'center',
  },
});

export default function SearchComponent(props) {
  const {navigation} = props;
  const [isVisible, setVisible] = useState(false);
  const [selectedSeason, setSeason] = useState('리셋');

  const [searchTarget, setTarget] = useState('');
  const [getSearchResult, setGetResult] = useState('');

  const btns = ['봄', '여름', '가을', '겨울', '리셋'];

  // fake Data
  const fakeData = [
    {
      id: 0,
      image: require('../../asset/card/strawberry-M-img.png'),
      name: '친환경 딸기',
      season: '봄',
      rating: 4.9,
      seller: '이티릴',
      price: '10,000',
    },
    {
      id: 1,
      image: require('../../asset/card/watermelon_L_img.png'),
      name: '고당도 수박',
      season: '여름',
      rating: 4.9,
      seller: '이티릴',
      price: '12,000',
    },
    {
      id: 2,
      image: require('../../asset/card/apple_L_img.png'),
      name: '아오리 사과',
      season: '가을',
      rating: 4.9,
      seller: '이티릴',
      price: '10,000',
    },
    {
      id: 3,
      image: require('../../asset/card/mandarin_L_img.png'),
      name: '제주 감귤',
      season: '겨울',
      rating: 4.9,
      seller: '이티릴',
      price: '12,000',
    },
    {
      id: 4,
      image: require('../../asset/card/strawberry_L_img.png'),
      name: '고당도 딸기',
      season: '봄',
      rating: 4.9,
      seller: '이티릴',
      price: '20,000',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_title}>검색하기</Text>
      </View>

      <Input
        placeholder="과일명을 입력해주세요."
        containerStyle={styles.searchBar_container}
        inputContainerStyle={styles.searchBar_inputContainer}
        inputStyle={styles.searchBar_textInput}
        rightIcon={
          <TouchableOpacity onPress={() => setGetResult(searchTarget)}>
            <Image
              source={require('../../asset/Home/search_icon.png')}
              style={styles.searchBar_icon}
            />
          </TouchableOpacity>
        }
        onChangeText={text => setTarget(text)}
      />
      <View style={styles.filterBtn_container}>
        <Button
          title={selectedSeason === '리셋' ? '계절선택' : selectedSeason}
          icon={
            <Image
              source={require('../../asset/search/calendar.png')}
              style={styles.filterBtn_img}
            />
          }
          buttonStyle={
            selectedSeason === '리셋'
              ? styles.filterBtn
              : styles.filterBtn_selected
          }
          titleStyle={
            selectedSeason === '리셋'
              ? styles.filterBtn_text
              : styles.filterBtn_text_selected
          }
          onPress={() => {
            setVisible(true);
          }}
        />
        <Overlay
          overlayStyle={styles.overlay}
          isVisible={isVisible}
          onBackdropPress={() => {
            setVisible(false);
          }}>
          <ButtonGroup
            buttons={btns}
            onPress={idx => {
              setSeason(btns[idx]);
              setVisible(false);
            }}
          />
        </Overlay>
      </View>

      <SearchResult
        data={fakeData}
        getSearchResult={getSearchResult}
        selectedSeason={selectedSeason}
      />
    </ScrollView>
  );
}
