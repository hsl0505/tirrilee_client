import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

import SearchResultCard from './SearchResultCard';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: height * 0.023668639,
    marginLeft: width * 0.032,
  },
  count: {
    color: '#0379c7',
  },
});

export default function SearchResult(props) {
  const {data, getSearchResult, selectedSeason} = props;

  let searchData = data.slice();

  if (selectedSeason !== '리셋') {
    if (getSearchResult !== '') {
      searchData = data.filter(
        ele =>
          ele.name.includes(getSearchResult) && ele.season === selectedSeason,
      );
    } else {
      searchData = data.filter(ele => ele.season === selectedSeason);
    }
  } else {
    searchData = data.filter(ele => ele.name.includes(getSearchResult));
  }

  return (
    <View>
      <View>
        <Text style={styles.title}>
          {getSearchResult === ''
            ? '제철과일을 즐겨보세요 '
            : `"${getSearchResult}" 검색결과`}
          <Text style={styles.count}>{`(${searchData.length}개)`}</Text>
        </Text>
      </View>

      <View>
        {searchData.map((ele, idx) => (
          <SearchResultCard key={idx.toString()} data={ele} />
        ))}
      </View>
    </View>
  );
}
