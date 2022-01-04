/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import BaseFlatList from '../components/components/BaseFlatList';
import {data} from '../components/store/indexItem';
import ThirdItem from '../components/BaseFlatList/ThirdItem';
export default function ListThird() {
  function handleOnPress(item: any) {
    console.log('Third: ', item);
  }
  return (
    <View style={{flex: 1}}>
      <BaseFlatList
        data={data}
        onPress={handleOnPress}
        itemViewRender={ThirdItem}
      />
    </View>
  );
}
