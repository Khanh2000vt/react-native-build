/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderHome from '../components/HeaderHome';
import ItemViewParents from '../components/ItemViewParents';
import {dataList} from '../components/data-test';
import BaseFlatList from '../components/BaseFlatList';
export default function HomeScreen({navigation}: {navigation: any}) {
  function handlePressProfile() {
    navigation.navigate('ProfileScreen');
  }
  return (
    <View style={styles.container}>
      <HeaderHome onPress={handlePressProfile} />
      <View style={styles.body}>
        {/* <ItemViewParents title={dataList[0].title} data={dataList[0].data} /> */}
        <BaseFlatList
          data={dataList}
          ItemViewRender={ItemViewParents}
          onRefresh={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    padding: 10,
  },
});
