import * as React from 'react';

import SearchComponent from '../../components/Search/SearchComponent';

function Search(props) {
  const {navigation} = props;
  return <SearchComponent navigation={navigation} />;
}

export default Search;
