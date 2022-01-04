/* eslint-disable prettier/prettier */
import React from 'react';
import BaseFlatList from '../components/components/BaseFlatList';
import {View, StyleSheet} from 'react-native';
import {ButtonSort, data} from '../components/store/indexItem';
import FirstItem from '../components/BaseFlatList/FirstItem';
import {useHandleNotification} from '../components/hook/useHandleNotification';
const ListFirst = () => {
  const [list, updateList] = useHandleNotification(data);
  const handlePressButton = () => {};
  function handleOnPress(item: any) {
    updateList(item);
  }

  return (
    <View>
      <View style={styles.buttonSort}>
        <ButtonSort onPressButton={handlePressButton} />
      </View>
      <BaseFlatList
        data={list}
        onPress={handleOnPress}
        itemViewRender={FirstItem}
        // itemViewRender={FirstItem}
        onRefresh={() => {}}
      />
    </View>
  );
};
export default ListFirst;

const styles = StyleSheet.create({
  sortView: {
    flexDirection: 'row',
  },
  buttonSort: {
    alignItems: 'flex-end',
    marginRight: 15,
    marginTop: 10,
  },
});
