/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import BaseFlatList from '../components/components/BaseFlatList';
import SecondItem from '../components/BaseFlatList/SecondItem';
import {data} from '../components/store/indexItem';
export default function ListSecond() {
  function handleOnPress(item: any) {
    console.log('Second: ', item);
  }
  return (
    <View style={{flex: 1}}>
      <BaseFlatList
        data={data}
        onPress={handleOnPress}
        itemViewRender={SecondItem}
      />
    </View>
  );
}
