/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import APIPage from '../pages/APIPage';
import BaseFlatList from '../components/components/BaseFlatList';
import TestAPI from '../pages/TestAPI';

export default function APIScreen() {
  const [page, setPage] = useState(3);

  function handlePress(item: any) {
    console.log('Click: ', item.name);
  }

  function handleEndReached() {
    setPage(page + 1);
  }

  async function handleRefresh() {
      setPage(1);
  }
  return (
    <BaseFlatList
      url= "https://jsonplaceholder.typicode.com/posts/"
      currentPage={page}
      onPress={handlePress}
      onEndReached={handleEndReached}
      onEndReachedThreshold={0.1}
      itemViewRender={APIPage}
      onRefresh={handleRefresh} />

      // <BaseFlatList
      // url= "https://api.genderize.io/?name="
      // currentPage={page}
      // onPress={handlePress}
      // onEndReached={handleEndReached}
      // onEndReachedThreshold={0.1}
      // itemViewRender={TestAPI}
      // onRefresh={handleRefresh} />
  );
}
