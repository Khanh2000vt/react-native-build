/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Item, data, HeaderBar} from '../components/store/indexItem';

const SecondScreen = () => {
  const [selectedId, setSelectedId] = useState(-1);
  return (
    <View>
      <HeaderBar />
      <FlatList
        data={data}
        horizontal={false}
        numColumns={3}
        renderItem={({item}) => {
          const backgroundColor =
            item.id === selectedId ? '#00ffff' : '#fff';
          return (
            <Item
              item={item}
              onPress={() => setSelectedId(item.id)}
              backgroundColor={backgroundColor}
            />
          );
        }}
      />
    </View>
  );
};
export default SecondScreen;
