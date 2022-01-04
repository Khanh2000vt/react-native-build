/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View } from 'react-native';
import {TopBar, HeaderBar} from '../components/store/indexItem';
// import {NavigationContainer} from '@react-navigation/native';
import {ListFirst, ListSecond, ListThird} from '../components/store/indexPages';

export default function HomeScreen({route, navigation}: {navigation: any, route: any}) {
  const handlePressTab = (key: number) => {
    navigation.navigate('HomeScreen',
    {
      id: key,
    },
    key);
  };
  const id = route.params ? route.params.id : 0;
  return (
    <View style={{flex: 1}}>
      <HeaderBar />
      <TopBar pressTab={handlePressTab}/>
      {
        id === 0 && <ListFirst />
      }
      {
        id === 1 && <ListSecond />
      }
      {
        id === 2 && <ListThird />
      }
    </View>
  );
}
